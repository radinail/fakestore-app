import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Échec du chargement");
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Produit non trouvé");
  return res.json();
}
