import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-32 object-contain mx-auto"
      />
      <h2 className="mt-2 text-sm font-medium">{product.title}</h2>
      <p className="font-bold mt-1">${product.price}</p>
      <Link
        href={`/product/${product.id}`}
        className="mt-2 inline-block text-blue-600 underline"
      >
        Voir
      </Link>
    </div>
  );
}
