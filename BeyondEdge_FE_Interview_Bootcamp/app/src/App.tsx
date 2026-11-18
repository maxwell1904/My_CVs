import { useEffect, useRef, useState, type FormEvent } from "react";
import { loadProducts, submitPracticeOrder } from "./api";
import {
  filterProducts,
  formatMoney,
  type CatalogState,
  type Product,
  type Scenario,
} from "./domain";
import {
  addItem,
  changeQuantity,
  clearCart,
  removeItem,
  selectCount,
  selectTotal,
  useAppDispatch,
  useAppSelector,
} from "./store";

function ProductRow({
  product,
  disabled,
}: {
  product: Product;
  disabled: boolean;
}) {
  const dispatch = useAppDispatch();
  return (
    <li className="product-row">
      <div>
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
      </div>
      <span className="price">{formatMoney(product.price)}</span>
      <button
        className="add"
        disabled={disabled}
        aria-label={`Add ${product.name}`}
        onClick={() => dispatch(addItem(product))}
      >
        Add +
      </button>
    </li>
  );
}

function Cart({
  onOrderingChange,
}: {
  onOrderingChange: (value: boolean) => void;
}) {
  const items = useAppSelector((state) => state.cart.items);
  const total = useAppSelector(selectTotal);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const busy = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    if (
      items.length === 0 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      setStatus("error");
      setMessage("Add an item and enter a valid email.");
      return;
    }
    busy.current = true;
    onOrderingChange(true);
    setStatus("submitting");
    try {
      const result = await submitPracticeOrder();
      dispatch(clearCart());
      setStatus("success");
      setMessage(`Practice order ${result.id} created. No payment was taken.`);
    } catch {
      setStatus("error");
      setMessage("The order could not be created. Try again.");
    } finally {
      busy.current = false;
      onOrderingChange(false);
    }
  }

  const submitting = status === "submitting";
  return (
    <aside className="cart" aria-label="Cart">
      <div className="section-title">
        <h2>Your selection</h2>
        <span>{count} items</span>
      </div>
      <fieldset disabled={submitting}>
        <legend className="sr-only">Cart items</legend>
        {items.length === 0 ? (
          <p className="empty">Your cart is empty. Add a set to begin.</p>
        ) : (
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <div className="cart-controls">
                  <label>
                    Quantity for {item.name}
                    <select
                      aria-label={`Quantity for ${item.name}`}
                      value={item.quantity}
                      onChange={(event) =>
                        dispatch(
                          changeQuantity({
                            id: item.id,
                            quantity: Number(event.target.value),
                          }),
                        )
                      }
                    >
                      {Array.from({ length: 10 }, (_, index) => (
                        <option key={index + 1}>{index + 1}</option>
                      ))}
                    </select>
                  </label>
                  <button
                    className="text-button"
                    onClick={() => dispatch(removeItem(item.id))}
                    aria-label={`Remove ${item.name}`}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </fieldset>
      <div className="total" aria-live="polite">
        <span>Total</span>
        <strong>{formatMoney(total)}</strong>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="checkout-email">Email for practice order</label>
        <input
          id="checkout-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          disabled={submitting}
        />
        <button
          className="primary"
          disabled={submitting || items.length === 0}
          type="submit"
        >
          {submitting ? "Creating order..." : "Create practice order"}
        </button>
      </form>
      {status === "error" && (
        <p role="alert" className="feedback">
          {message}
        </p>
      )}
      {status === "success" && (
        <p role="status" className="feedback">
          {message}
        </p>
      )}
      <p className="footnote">
        Local simulation. Refreshing resets your cart. Data stays in this
        browser session.
      </p>
    </aside>
  );
}

export default function App() {
  const [isOrdering, setIsOrdering] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [scenario, setScenario] = useState<Scenario>("success");
  const [attempt, setAttempt] = useState(0);
  const [catalog, setCatalog] = useState<CatalogState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setCatalog({ status: "loading" });
    loadProducts(query, scenario, controller.signal)
      .then((products) => {
        if (active) setCatalog({ status: "success", products });
      })
      .catch((error: unknown) => {
        if (!active || controller.signal.aborted) return;
        setCatalog({
          status: "error",
          message:
            error instanceof Error ? error.message : "Unable to load catalog.",
        });
      });
    return () => {
      active = false;
      controller.abort();
    };
  }, [query, scenario, attempt]);

  return (
    <main>
      <header>
        <a className="wordmark" href="#catalog">
          BRICK DESK<span>Frontend practice lab</span>
        </a>
        <span className="header-note">React · TypeScript · Redux Toolkit</span>
      </header>
      <div className="workspace">
        <section id="catalog" className="catalog" aria-label="Catalog">
          <div className="intro">
            <p className="eyebrow">Build your next idea</p>
            <h1>
              A small collection.
              <br />
              Every piece counts.
            </h1>
            <p>Browse the collection and build a practice order.</p>
          </div>
          <div className="filters">
            <label htmlFor="search">
              Search sets
              <input
                id="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try orbital or garden"
              />
            </label>
            <label htmlFor="category">
              Category
              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {["All", "City", "Space", "Nature"].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="section-title">
            <h2>Collection</h2>
            <span>Prices in VND</span>
          </div>
          {catalog.status === "loading" && (
            <p role="status" className="empty">
              Loading collection...
            </p>
          )}
          {catalog.status === "error" && (
            <div className="empty">
              <p role="alert">{catalog.message}</p>
              <button onClick={() => setAttempt((value) => value + 1)}>
                Retry catalog
              </button>
            </div>
          )}
          {catalog.status === "success" &&
            (filterProducts(catalog.products, "", category).length === 0 ? (
              <p className="empty">No sets match your filters.</p>
            ) : (
              <ul className="product-list">
                {filterProducts(catalog.products, "", category).map(
                  (product) => (
                    <ProductRow
                      key={product.id}
                      product={product}
                      disabled={isOrdering}
                    />
                  ),
                )}
              </ul>
            ))}
          <details className="lab-controls">
            <summary>Practice controls</summary>
            <label htmlFor="scenario">
              Catalog response
              <select
                id="scenario"
                value={scenario}
                onChange={(event) =>
                  setScenario(event.target.value as Scenario)
                }
              >
                <option value="success">Success</option>
                <option value="empty">Empty</option>
                <option value="error">Error</option>
                <option value="slow">Slow / race drill</option>
              </select>
            </label>
            <button onClick={() => setAttempt((value) => value + 1)}>
              Reload catalog
            </button>
            <p>
              Slow mode makes short queries finish later. Try “o”, then
              “orbital”.
            </p>
          </details>
        </section>
        <Cart onOrderingChange={setIsOrdering} />
      </div>
      <footer>
        Independent learning project · Nguyễn Phúc An{" "}
        <span>Interview preparation / November 2026</span>
      </footer>
    </main>
  );
}
