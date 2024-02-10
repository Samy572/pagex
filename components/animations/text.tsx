import { motion } from 'framer-motion';

type Props = {
	text: string;
	className?: string;
	delay: number;
};

const MotionSpan = ({ ...props }: Props) => {
	return (
		<>
			{props.text.split('').map((char, index) => (
				<motion.span
					className={props.className}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: props.delay + index * 0.02 }}
					key={index}
				>
					{char}
				</motion.span>
			))}
		</>
	);
};
export default MotionSpan;
