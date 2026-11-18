// Reference learning code, not a claim of project experience.
export function filterProducts(products, query) {
 const q = query.trim().toLowerCase();
 return products.filter(p => p.name.toLowerCase().includes(q));
}
export function updateQuantity(items, id, quantity) {
 if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) throw new RangeError('Quantity must be integer 1..10');
 return items.map(item => item.id === id ? {...item, quantity} : item);
}
export function calculateTotal(items) {
 return items.reduce((total,item) => total + item.price * item.quantity, 0);
}
