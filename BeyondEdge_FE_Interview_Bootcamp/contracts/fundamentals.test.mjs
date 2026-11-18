import { test } from 'node:test';
import assert from 'node:assert/strict';
const target = process.env.TARGET === 'reference' ? 'reference' : 'work';
const { filterProducts, changeQuantity, calculateTotal, createLatestGuard } =
  await import(`../${target}/fundamentals.mjs`);
const products = [{ id: 'a', name: 'Orbital', price: 100, quantity: 1 }, { id: 'b', name: 'Garden', price: 50, quantity: 2 }];
test('search trims and ignores case', () => assert.deepEqual(filterProducts(products, ' ORB '), [products[0]]));
test('search miss returns empty', () => assert.deepEqual(filterProducts(products, 'missing'), []));
test('empty query preserves all products', () => assert.deepEqual(filterProducts(products, ''), products));
test('quantity creates new changed row without mutating earlier objects', () => {
  const updated = changeQuantity(products, 'a', 3);
  assert.equal(updated[0].quantity, 3);
  assert.equal(products[0].quantity, 1);
  assert.notEqual(updated[0], products[0]);
  assert.equal(updated[1], products[1]);
});
test('missing ID leaves values intact', () => assert.deepEqual(changeQuantity(products, 'x', 2), products));
for (const quantity of [0, 11, -1, 1.5, NaN]) {
  test(`reject invalid quantity ${quantity}`, () => assert.throws(() => changeQuantity(products, 'a', quantity), RangeError));
}
test('total handles empty', () => assert.equal(calculateTotal([]), 0));
test('total multiplies each row', () => assert.equal(calculateTotal(products), 200));
test('latest guard invalidates older requests', () => {
  const guard = createLatestGuard();
  const first = guard.begin();
  assert.equal(guard.isCurrent(first), true);
  const second = guard.begin();
  assert.notEqual(first, second);
  assert.equal(guard.isCurrent(first), false);
  assert.equal(guard.isCurrent(second), true);
});
