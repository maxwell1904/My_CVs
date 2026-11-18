import type { Product } from "./types";

const products: Product[] = [
  {
    id: "city",
    name: "City Workshop",
    price: 420000,
    category: "Architecture",
  },
  { id: "garden", name: "Pocket Garden", price: 280000, category: "Nature" },
  { id: "rover", name: "Lunar Rover", price: 560000, category: "Space" },
];

// Called only by the Server Component and route handler in this lab.
// Replace this boundary with a database call in a separate advanced exercise.
export async function readCatalog(): Promise<Product[]> {
  return products.map((product) => ({ ...product }));
}
