// Independent examples. Predict before running: node worked/rescue.mjs <id>
const drills = {
  object() {
    const product = { name: 'Keyboard', price: 200 };
    product.price = 300;
    console.log(product.name, product.price);
  },
  alias() {
    const a = { qty: 1 };
    const b = a;
    b.qty = 2;
    console.log(a.qty, a === b);
  },
  spread() {
    const a = { qty: 1, name: 'Keyboard' };
    const b = { ...a, qty: 3 };
    console.log(a.qty, b.qty, a === b);
  },
  nested() {
    const a = { item: { qty: 1 } };
    const b = { ...a };
    b.item.qty = 2;
    console.log(a.item.qty, a === b, a.item === b.item);
    b.item = { qty: 9 };
    console.log(a.item.qty, b.item.qty);
  },
  array() {
    const rows = [{ price: 10, qty: 2 }, { price: 5, qty: 1 }];
    console.log(rows.filter(row => row.qty > 1).length);
    console.log(rows.map(row => row.price * row.qty));
    console.log(rows.reduce((sum, row) => sum + row.price * row.qty, 0));
  },
  callback() {
    function calculate(a, b, operation) { return operation(a, b); }
    console.log(calculate(2, 3, (x, y) => x + y));
    console.log('done');
  },
  'callback-hell'() {
    // A callback API with an explicit error-first contract; no network.
    function getUser(done) { setTimeout(() => done(null, { id: 7 }), 5); }
    function getOrders(userId, done) {
      setTimeout(() => done(null, [{ id: 10, userId }]), 5);
    }
    function getDetail(orderId, done) {
      setTimeout(() => done(null, { orderId, total: 25 }), 5);
    }
    getUser((error, user) => {
      if (error) { console.log('user error'); return; }
      getOrders(user.id, (error, orders) => {
        if (error) { console.log('orders error'); return; }
        if (orders.length === 0) { console.log('empty orders'); return; }
        getDetail(orders[0].id, (error, detail) => {
          if (error) { console.log('detail error'); return; }
          console.log(detail.total);
        });
      });
    });
  },
  async() {
    console.log('A');
    setTimeout(() => console.log('timer'), 0);
    Promise.resolve().then(() => console.log('promise'));
    console.log('B');
  },
  async promise() {
    const getUser = async () => ({ id: 7 });
    const getOrders = async userId => [{ id: 10, userId }];
    const getDetail = async orderId => ({ orderId, total: 25 });
    try {
      const user = await getUser();
      const orders = await getOrders(user.id);
      if (orders.length === 0) { console.log('empty orders'); return; }
      const detail = await getDetail(orders[0].id);
      console.log(detail.total);
    } catch (error) { console.log('failed:', error.message); }
  },
  async parallel() {
    const products = async () => ['Keyboard'];
    const profile = async () => ({ name: 'An' });
    const [items, user] = await Promise.all([products(), profile()]);
    console.log(items[0], user.name);
  },
  closure() {
    function createCounter() {
      let count = 0;
      return () => ++count;
    }
    const a = createCounter();
    const b = createCounter();
    console.log(a(), a(), b());
  },
  async race() {
    let current = 0;
    let displayed = '';
    const later = (value, delay) => new Promise(resolve => setTimeout(() => resolve(value), delay));
    async function search(value, delay) {
      const id = ++current;
      const result = await later(value, delay);
      if (id === current) displayed = result;
    }
    await Promise.all([search('old', 20), search('new', 1)]);
    console.log(displayed);
  },
};
const id = process.argv[2];
if (!Object.hasOwn(drills, id)) {
  console.log('Choose:', Object.keys(drills).join(', '));
  process.exitCode = 1;
} else await drills[id]();
