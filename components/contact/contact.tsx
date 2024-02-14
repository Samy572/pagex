import { Container } from '../layout/container';
import ContactForm from './form';
import Infos from './infos';

const Contact = () => {
	return (
		<section id="contact" className="md:h-fit">
			<Container>
				{' '}
				<h4 className="text-5xl">Contactez nous</h4>
				<div className="w-full flex justify-between">
					<ContactForm />
					<Infos />
				</div>
			</Container>
		</section>
	);
};
export default Contact;
