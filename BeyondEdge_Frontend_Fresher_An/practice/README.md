# React + Redux reference exercise

Node 22+ recommended. From this folder:

```sh
npm ci
npm test
npm run dev
```

Open the local URL Vite prints. `npm run build` checks production bundling. No real API or customer data. Error mode stays in error on Retry until you select another mode; retry repeats the request rather than silently changing its outcome.

## Learn by changing it
1. Read EXERCISES.md before reference code.
2. Run 12 reference logic/reducer tests; explain each behavior.
3. Add a category field and combined category/search filtering yourself.
4. Split ProductCard and CartSummary into components and explain props/local state vs global Redux state.
5. Add a component test using React Testing Library (not supplied as already-completed work).
6. Explain loading, empty, error, cleanup and the cart reducer in English.

Reference UI is a learning fixture, not a production shop. Passing logic tests does not verify browser UI, accessibility or performance. No React component tests are claimed in the user's work experience. UI calls are mocked; race/cancellation on a real fetch remains an exercise in the guide.
