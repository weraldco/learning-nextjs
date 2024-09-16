import { ProductsDetailsProps } from '@/app/components/Products';

export async function generateStaticParams() {
	const res = await fetch(
		'https://dummyjson.com/products?limit=5&select=title,price'
	);
	const data = await res.json();

	return data.products.map((product: ProductsDetailsProps) => ({
		id: product.id.toString(),
	}));
}

async function getProducts(id) {
	const res = await fetch(`https://dummyjson.com/products/${id}`);
	const data = res.json();
	return data;
}

export default async function ProductItems({ params }) {
	const product = await getProducts(params.id);
	console.log(product);
	return (
		<>
			<h1>{product.title}</h1>
			<span>{product.description}</span>
		</>
	);
}
