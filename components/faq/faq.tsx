import { Container } from '../layout/container';
import { FaqAccordion } from './faqaccordion';

const Faq = () => {
	return (
		<section className="h-[100vh]">
			<Container>
				<h4 className="my-16 font-semibold md:text-5xl text-2xl w-fit md:border-b-8 border-b-4 border-b-blue-500">
					Questions fréquentes{' '}
				</h4>
				<FaqAccordion />
			</Container>
		</section>
	);
};
export default Faq;
