import ProductButton from './ProductButton';

export type ProductsDetailsProps = {
	id: number;
	title: string;
	price: number;
};

export default function ProductsDetails({
	id,
	title,
	price,
}: ProductsDetailsProps) {
	return (
		<>
			<div className="grid place-content-start text-red p-3 w-full bg-gray-700 text-white text-sm">
				<span>{title}</span>
				<span> ${price}</span>
				<ProductButton id={id} />
			</div>
		</>
	);
}
