'use client';
import { useRouter } from 'next/navigation';

type ProductButtonProps = {
	id: number;
};
export default function ProductButton({ id }: ProductButtonProps) {
	const router = useRouter();
	function handleClick() {
		router.push(`/products/${id}`);
	}
	return (
		<>
			<button className="bg-slate-300 p-2 w-[150px]" onClick={handleClick}>
				Product details
			</button>
		</>
	);
}
