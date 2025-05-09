import { getProduct } from "@/app/lib/api";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const product = await getProduct(params.id);

    return (
      <main className="p-6 max-w-2xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain mx-auto"
        />
        <h1 className="text-xl font-bold mt-4">{product.title}</h1>
        <p className="text-lg text-gray-700 mt-2">${product.price}</p>
        <p className="mt-4">{product.description}</p>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
