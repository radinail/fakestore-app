import { getProducts } from "@/app/lib/api";
import ProductCard from "./components/ProductCard";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
