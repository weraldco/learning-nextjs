import ProductsDetails, { ProductsDetailsProps } from '../components/Products';

async function getProducts() {
	const res = await fetch(
		'https://dummyjson.com/products?limit=5&select=title,price'
	);
	const data = await res.json();
	return data.products;
}

export default async function Products() {
	const products: ProductsDetailsProps[] = await getProducts();
	return (
		<>
			<div className="grid gap-5 m-5">
				{products.length > 0 &&
					products.map(({ id, title, price }) => (
						<ProductsDetails key={id} id={id} title={title} price={price} />
					))}
			</div>
		</>
	);
}
