import { Container } from '../layout/container';
import ContactForm from './form';

const Contact = () => {
	return (
		<section id="contact">
			<Container>
				{' '}
				<h4 className="text-5xl">Contactez nous</h4>
				<ContactForm />
			</Container>
		</section>
	);
};
export default Contact;
