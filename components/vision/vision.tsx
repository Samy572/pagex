'use client';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../layout/container';
import { motion } from 'framer-motion';
import { Card } from './card';
import Link from 'next/link';

const Vision = () => {
	const txt = ['attractif', 'moderne', 'interractif'];
	const [currentIdx, setCurrentIdx] = useState(0);
	const refView = useRef(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIdx((prevIdx) => (prevIdx + 1) % txt.length);
		}, 2500);
		return () => clearInterval(intervalId);
	}, [txt.length]);

	return (
		<section id="vision" className="md:h-[100vh] h-full  w-full">
			<Container>
				<div className="flex h-full mt-10 md:m-0  lg:justify-between items-center w-full flex-wrap ">
					<motion.div
						ref={refView}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="h-fit relative lg:max-w-[50%]  "
					>
						<h1 className="text-4xl tracking-tight font-bold leading-[40px] md:leading-[52px]    ">
							Notre objectif ? rendre votre site <br className="" /> web plus
							<motion.span
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									duration: 0.5,

									repeat: Infinity,
									repeatDelay: 2,
								}}
								className=" text-blue-500 ml-5 absolute"
							>
								{txt[currentIdx]}
							</motion.span>
						</h1>
						<p className="mt-5 text-lg">
							<em>
								Une esthétique visuelle captivante peut susciter un fort intérêt
								initial chez les visiteurs, les incitant ainsi à explorer
								davantage votre contenu et à rester engagés.{' '}
							</em>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<Link
								href="#price"
								className="mt-7 border border-input bg-blue-500/90 shadow-sm hover:bg-blue-500 text-white inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-8"
							>{`Commencer`}</Link>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<Card img={'/images/card.jpg'} />
					</motion.div>
				</div>
			</Container>
		</section>
	);
};
export default Vision;
