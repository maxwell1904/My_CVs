// Learning reference, not a representation of any employer's application.
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { cartReducer, addItem, removeItem, changeQuantity, selectTotal } from './cart.mjs';
import { filterProducts } from '../core.mjs';
import './style.css';
const store = configureStore({reducer:{cart:cartReducer}});
const products=[{id:1,name:'Lego City',price:100},{id:2,name:'Book',price:20},{id:3,name:'Lego Space',price:150}];
function App(){
  const [query,setQuery]=useState('');
  const [mode,setMode]=useState('success');
  const [attempt,setAttempt]=useState(0);
  const [result,setResult]=useState({status:'loading',data:[]});
  const items=useSelector(state=>state.cart.items);
  const total=useSelector(selectTotal);
  const dispatch=useDispatch();
  useEffect(()=>{
    let ignore=false;
    setResult({status:'loading',data:[]});
    const timer=setTimeout(()=>{
      if(ignore)return;
      setResult(mode==='error'?{status:'error',data:[]}:{status:'success',data:mode==='empty'?[]:products});
    },500);
    return ()=>{ignore=true;clearTimeout(timer);};
  },[mode,attempt]);
  const visible=filterProducts(result.data,query);
  return <main>
    <h1>Product browser + Redux cart</h1>
    <p>Local reference exercise. Credits are fictional. Cart is not persisted.</p>
    <label>API mode <select value={mode} onChange={e=>setMode(e.target.value)}><option value="success">Success</option><option value="empty">Empty</option><option value="error">Error</option></select></label>
    <label>Search <input value={query} onChange={e=>setQuery(e.target.value)}/></label>
    {result.status==='loading'&&<p role="status">Loading...</p>}
    {result.status==='error'&&<div role="alert">Could not load products. <button onClick={()=>setAttempt(a=>a+1)}>Retry</button></div>}
    {result.status==='success'&&<section aria-label="Products" className="products">
      {visible.length===0?<p>No products found.</p>:visible.map(p=><article key={p.id}><h2>{p.name}</h2><p>{p.price} credits</p><button onClick={()=>dispatch(addItem(p))}>Add {p.name}</button></article>)}
    </section>}
    <section aria-label="Cart"><h2>Cart</h2>
      {items.length===0?<p>Cart is empty.</p>:items.map(item=><div key={item.id}>
        <span>{item.name} </span><label>Quantity for {item.name} <input type="number" min="1" max="10" value={item.quantity} onChange={e=>dispatch(changeQuantity({id:item.id,quantity:Number(e.target.value)}))}/></label>
        <button onClick={()=>dispatch(removeItem(item.id))}>Remove {item.name}</button>
      </div>)}
      <p aria-live="polite">Total: {total} credits</p>
    </section>
  </main>;
}
createRoot(document.getElementById('root')).render(<Provider store={store}><App/></Provider>);
