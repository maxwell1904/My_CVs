export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
};
export type CartItem = Product & { quantity: number };
export type Scenario = "success" | "empty" | "error" | "slow";
export type CatalogState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; products: Product[] };

export const products: Product[] = [
  { id: "city", name: "City workshop", category: "City", price: 420000 },
  { id: "space", name: "Orbital station", category: "Space", price: 890000 },
  { id: "garden", name: "Botanical garden", category: "Nature", price: 650000 },
  { id: "tram", name: "Downtown tram", category: "City", price: 720000 },
  { id: "rover", name: "Lunar rover", category: "Space", price: 380000 },
  { id: "bonsai", name: "Bonsai studio", category: "Nature", price: 310000 },
];

export function filterProducts(
  items: Product[],
  query: string,
  category = "All",
) {
  const normalized = query.trim().toLowerCase();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(normalized) &&
      (category === "All" || item.category === category),
  );
}

export function calculateTotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function isQuantity(value: number) {
  return Number.isInteger(value) && value >= 1 && value <= 10;
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);
}
