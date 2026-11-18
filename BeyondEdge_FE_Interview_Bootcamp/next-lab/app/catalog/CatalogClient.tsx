"use client";

import { useRef, useState } from "react";
import { isProductArray, type Product } from "../../lib/types";

type Scenario = "success" | "empty" | "error";
type Status = "idle" | "loading" | "success" | "error";

export default function CatalogClient({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [products, setProducts] = useState(initialProducts);
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [scenario, setScenario] = useState<Scenario>("success");
  const [status, setStatus] = useState<Status>("idle");
  const busy = useRef(false);
  const visible = products.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function toggle(id: string) {
    setSelectedIds((ids) =>
      ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id],
    );
  }

  async function reload() {
    if (busy.current) return;
    busy.current = true;
    setStatus("loading");
    try {
      const response = await fetch(`/api/catalog?scenario=${scenario}`, {
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: unknown = await response.json();
      if (!isProductArray(data)) throw new Error("Unexpected catalog data");
      setProducts(data);
      setStatus("success");
    } catch {
      // Keep the last successful list; an error is not an empty success.
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }

  return (
    <>
      <div className="toolbar">
        <label className="search">
          Search sets
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try garden"
            type="search"
          />
        </label>
        <label>
          Response mode
          <select
            value={scenario}
            disabled={status === "loading"}
            onChange={(event) => setScenario(event.target.value as Scenario)}
          >
            <option value="success">Success</option>
            <option value="empty">Empty</option>
            <option value="error">Error (503)</option>
          </select>
        </label>
        <button
          className="primary"
          disabled={status === "loading"}
          onClick={reload}
        >
          {status === "loading" ? "Loading…" : "Reload over HTTP"}
        </button>
      </div>
      <div className="summary">
        <span>{visible.length} sets shown</span>
        <strong>{selectedIds.length} selected</strong>
      </div>
      {status === "error" && (
        <p role="alert" className="error">
          Reload failed. The last successful list is kept. Choose Success and
          retry.
        </p>
      )}
      {status === "success" && (
        <p role="status" className="notice">
          Catalog reloaded over HTTP.
        </p>
      )}
      {visible.length === 0 && (
        <p className="empty">No sets match. Clear search or reload Success.</p>
      )}
      <ul className="catalog">
        {visible.map((item, index) => (
          <li key={item.id}>
            <span className="number">0{index + 1}</span>
            <div>
              <p className="category">{item.category}</p>
              <h2>{item.name}</h2>
            </div>
            <span className="price">
              {new Intl.NumberFormat("en-US").format(item.price)} VND
            </span>
            <button
              aria-pressed={selectedIds.includes(item.id)}
              aria-label={`Select ${item.name}`}
              onClick={() => toggle(item.id)}
            >
              {selectedIds.includes(item.id) ? "Selected ✓" : "Select +"}
            </button>
          </li>
        ))}
      </ul>
      <p className="footnote">
        Selection stays in this page session. A full reload starts over.
      </p>
    </>
  );
}
