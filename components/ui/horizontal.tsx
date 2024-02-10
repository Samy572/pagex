'use client';
import { getTest } from '@/lib/gettest';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const HorizontalScroll = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', 'end start'],
	});
	const test = getTest;

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

	return (
		<section
			ref={targetRef}
			className=" relative h-[200vh] mt-20 bg-secondary/10 scro "
		>
			<div className="sticky top-0 h-screen flex items-center overflow-hidden">
				<motion.div style={{ x }} className="h-full flex items-center gap-x-5">
					{test.map((el) => {
						return (
							<div key={el.id} className="h-48 w-64">
								<Image src={el.img} width={350} height={350} alt={el.name} />
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};
export default HorizontalScroll;
