import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cartReducer, addItem, removeItem, changeQuantity, selectTotal } from './src/cart.mjs';
const product={id:1,name:'Lego City',price:100};
test('first add and duplicate add',()=>{const initial={items:[]};const first=cartReducer(initial,addItem(product));const second=cartReducer(first,addItem(product));assert.equal(second.items.length,1);assert.equal(second.items[0].quantity,2);assert.deepEqual(initial,{items:[]});assert.equal(first.items[0].quantity,1);});
test('quantity boundaries, total and invalid updates',()=>{let state=cartReducer(undefined,addItem(product));state=cartReducer(state,changeQuantity({id:1,quantity:10}));assert.equal(selectTotal({cart:state}),1000);for(const quantity of [0,11,1.5]){const next=cartReducer(state,changeQuantity({id:1,quantity}));assert.equal(next.items[0].quantity,10);}});
test('remove item',()=>{const s=cartReducer(undefined,addItem(product));assert.equal(cartReducer(s,removeItem(1)).items.length,0);});
test('add is capped at ten',()=>{let s=cartReducer(undefined,{type:'init'});for(let i=0;i<12;i++)s=cartReducer(s,addItem(product));assert.equal(s.items[0].quantity,10);});
