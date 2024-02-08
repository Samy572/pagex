'use client';
import { useEffect, useState } from 'react';
import { Container } from '../layout/container';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card } from './card';

const Vision = () => {
	const txt = ['attractif', 'moderne', 'interractif'];
	const [currentIdx, setCurrentIdx] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIdx((prevIdx) => (prevIdx + 1) % txt.length);
		}, 2500);
		return () => clearInterval(intervalId);
	}, [txt.length]);

	return (
		<section id="vision" className="min-h-[calc(100vh-4.45rem)]  w-full">
			<Container>
				<div className="flex h-full  lg:justify-between items-center w-full flex-wrap ">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
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
							<Button
								size={'lg'}
								variant={'call'}
								className="mt-7 "
							>{`Commencer`}</Button>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Card img={'/images/card.jpg'} />
					</motion.div>
				</div>
			</Container>
		</section>
	);
};
export default Vision;
