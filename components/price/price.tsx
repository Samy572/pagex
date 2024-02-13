'use client';
import { CardPrices } from './cards';
import { motion } from 'framer-motion';

const Price = () => {
	return (
		<section
			id="price"
			className="min-h-[100vh] px-4  w-full flex items-center flex-col relative"
		>
			<div className="absolute z-20 top-1 left-0 h-64 w-60 violet-gradient blur-[150px]"></div>
			<div className=" absolute z-20 bottom-16  md:top-96 right-0 h-64 w-40 cyan-gradient blur-[150px]"></div>
			<motion.h3
				initial={{ opacity: 0, y: 150 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="px-4 font-semibold mt-14 mb-24 lg:text-6xl text-4xl "
				transition={{ duration: 0.3 }}
			>
				Des offres adaptés à vos besoins
			</motion.h3>

			<div className="w-full flex  max-w-7xl mx-auto items-center ">
				<CardPrices />
			</div>
		</section>
	);
};
export default Price;
