import { readCatalog } from "../../lib/catalog";
import CatalogClient from "./CatalogClient";

// An explicit per-request choice for this teaching example.
// A Server Component is not automatically a per-request SSR route.
export const dynamic = "force-dynamic";

export default async function CatalogPage() {
  const products = await readCatalog();
  console.info("[server] CatalogPage read", products.length, "products");
  return (
    <section>
      <p className="eyebrow">Catalog / Server → Client</p>
      <div className="heading">
        <h1>Build something small.</h1>
        <p>
          Three sample sets. Search locally, or reload a response from the
          server.
        </p>
      </div>
      <CatalogClient initialProducts={products} />
    </section>
  );
}
