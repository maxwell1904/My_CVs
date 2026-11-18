import { products, type Product, type Scenario } from "./domain";

// Deterministic local service. No data is sent to an external server.
// Switch the call to fetch(...) when practicing real HTTP integration.
export function loadProducts(
  query: string,
  scenario: Scenario,
  signal: AbortSignal,
): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("Request cancelled", "AbortError"));
      return;
    }
    // A short query deliberately finishes late to expose races in broken code.
    const delay = scenario === "slow" ? (query.length < 2 ? 1300 : 200) : 350;
    const onAbort = () => {
      clearTimeout(timer);
      reject(new DOMException("Request cancelled", "AbortError"));
    };
    const timer = setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      if (scenario === "error") {
        reject(
          new Error(
            "The catalog service is unavailable. Choose Success and retry.",
          ),
        );
        return;
      }
      const matching = products.filter((product) =>
        product.name.toLowerCase().includes(query.trim().toLowerCase()),
      );
      resolve(scenario === "empty" ? [] : matching);
    }, delay);
    signal.addEventListener("abort", onAbort, { once: true });
  });
}

export function submitPracticeOrder(): Promise<{ id: string }> {
  // This is a local simulation, without payments, auth or durable storage.
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: "LAB-1042" }), 500);
  });
}
