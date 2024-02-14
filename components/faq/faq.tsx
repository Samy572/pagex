import { Container } from '../layout/container';
import { FaqAccordion } from './faqaccordion';
import SvgAnimate from './question';

const Faq = () => {
	return (
		<section className="md:h-[80vh] h-[70vh] relative">
			<Container>
				<h4 className="my-16 font-semibold md:text-5xl text-2xl w-fit md:border-b-8 border-b-4 border-b-blue-500">
					Questions fréquentes{' '}
				</h4>
				<div className=" md:flex  justify-between ">
					<FaqAccordion />
					<div className="hidden md:flex">
						<SvgAnimate
							className="absolute"
							initialTop={50}
							initialRight={-120}
							top={-190}
							right={-250}
							delay={0.5}
							duration={28}
						/>
						<SvgAnimate
							initialRight={0}
							initialTop={350}
							className="absolute"
							top={-100}
							right={-90}
							delay={2}
							duration={31}
						/>
						<SvgAnimate
							initialRight={-80}
							initialTop={-100}
							top={-50}
							right={200}
							delay={2}
							duration={23}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
export default Faq;
