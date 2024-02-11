'use client';
import { motion } from 'framer-motion';
import MotionSpan from '../animations/text';
import { Container } from '../layout/container';

const TeamWork = () => {
	return (
		<section className="h-[100vh] w-full flex justify-center items-center flex-col  ">
			<Container>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.4,
							delay: 0.3,
						},
					}}
					transition={{ duration: 0.5 }}
					style={{ lineHeight: '1.3' }}
					className=" mt-32 leading-9 md:text-7xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-600"
				>
					<strong>Propulsé votre activité</strong> à un autre niveau.
				</motion.h2>
				<div>
					<h3
						style={{ lineHeight: '1.5' }}
						className="    mt-20  md:text-6xl text-3xl text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-blue-100  "
					>
						<MotionSpan
							delay={0.4}
							className="inline "
							text={`Notre équipe d'experts et à votre écoute. Nous accompagnons les clients à tous les niveaux. Contactez-nous dès aujourd'hui pour en savoir plus.`}
						/>
					</h3>
				</div>
			</Container>
		</section>
	);
};
export default TeamWork;
