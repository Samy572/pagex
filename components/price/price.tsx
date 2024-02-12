import { CardPrices } from './cards';

const Price = () => {
	return (
		<section
			id="price"
			className="h-[100vh]  w-full flex items-center flex-col"
		>
			<h3 className="font-semibold my-12 text-3xl ">
				Des offres adaptés à vos besoins
			</h3>

			<div className="w-full flex  max-w-7xl mx-auto items-center ">
				<CardPrices />
			</div>
		</section>
	);
};
export default Price;
