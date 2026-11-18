export function filterProducts(products, query) {
  const normalized = query.trim().toLowerCase();
  return products.filter(product => product.name.toLowerCase().includes(normalized));
}
export function changeQuantity(items, id, quantity) {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    throw new RangeError('Quantity must be an integer from 1 to 10');
  }
  return items.map(item => item.id === id ? { ...item, quantity } : item);
}
export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
export function createLatestGuard() {
  let current = 0;
  return {
    begin() { current += 1; return current; },
    isCurrent(id) { return id === current; },
  };
}
