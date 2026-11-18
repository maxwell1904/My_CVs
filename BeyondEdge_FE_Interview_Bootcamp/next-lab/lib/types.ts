export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

// TypeScript alone does not validate JSON received over HTTP.
export function isProductArray(value: unknown): value is Product[] {
  return (
    Array.isArray(value) &&
    value.every((item: unknown) => {
      if (typeof item !== "object" || item === null) return false;
      const row = item as Record<string, unknown>;
      return (
        typeof row.id === "string" &&
        typeof row.name === "string" &&
        typeof row.category === "string" &&
        typeof row.price === "number" &&
        Number.isFinite(row.price) &&
        row.price >= 0
      );
    })
  );
}
