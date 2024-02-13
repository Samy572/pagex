'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
	initialTop: number;
	initialRight: number;
	top: number;
	right: any;
	delay: number;
	className?: string;
	duration: number;
};

const SvgAnimate = ({ ...props }: Props) => {
	return (
		<motion.img
			src={`images/svg/question.svg`}
			alt="svg"
			style={{ width: '80px', height: '80px' }}
			className={` ${props.className}`}
			initial={{ y: props.initialTop, x: props.initialRight }}
			animate={{ y: props.top, x: props.right }}
			transition={{
				duration: props.duration,
				repeat: Infinity,
				repeatType: 'reverse',
				easings: 'linear',
			}}
		/>
	);
};
export default SvgAnimate;
