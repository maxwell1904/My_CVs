// Write your prediction before running. Run `node worked/predict.mjs <id>`.
const drills = {
  reference() {
    const first = { nested: { count: 1 } };
    const second = { ...first };
    second.nested.count += 1;
    console.log(first.nested.count, first === second, first.nested === second.nested);
  },
  snapshot() {
    const count = 0;
    const replacements = [count + 1, count + 1];
    const updates = [value => value + 1, value => value + 1];
    console.log(replacements.reduce((_, next) => next, count));
    console.log(updates.reduce((previous, update) => update(previous), count));
  },
  closure() {
    function createHandler(count) { return () => console.log(count); }
    const oldHandler = createHandler(0);
    const newHandler = createHandler(1);
    oldHandler();
    newHandler();
  },
  async() {
    console.log('A');
    setTimeout(() => console.log('timer'), 0);
    Promise.resolve().then(() => console.log('promise'));
    console.log('B');
  },
  derived() {
    const items = [{ price: 10, quantity: 2 }];
    const cachedTotal = 20;
    const changed = items.map(item => ({ ...item, quantity: 3 }));
    console.log(cachedTotal, changed.reduce((sum, item) => sum + item.price * item.quantity, 0));
  },
};
// Deliberately small model of stale data, independent from React.
drills.race = async function () {
  let displayed = '';
  const request = (value, delay) => new Promise(resolve => setTimeout(() => resolve(value), delay));
  const first = request('old', 40).then(value => { displayed = value; });
  const second = request('new', 5).then(value => { displayed = value; });
  await Promise.all([first, second]);
  console.log(displayed);
};
const id = process.argv[2];
if (!Object.hasOwn(drills, id)) {
  console.log('Choose reference, snapshot, closure, async, derived, race');
  process.exitCode = 1;
} else {
  await drills[id]();
}
