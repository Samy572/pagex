'use client';
import { getInput } from '@/lib/getInput';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const ContactForm = () => {
	const inputs = getInput;

	return (
		<div className="md:h-[100vh] h-[70vh] w-full mt-16 ">
			<form className=" h-fit">
				<div className="flex w-full gap-x-3">
					<div className=" flex-1 h-fit ">
						<Input
							className="my-2 dark:bg-secondary/20 bg-primary/10"
							type="text"
							name="surname"
							id="surname"
							placeholder="Prénom"
						/>
					</div>
					<div className="flex-1">
						<div>
							<Input
								type="text"
								className="my-2 dark:bg-secondary/20  bg-primary/10"
								name="name"
								id="name"
								placeholder="Nom"
							/>
						</div>
					</div>
				</div>
				{inputs.map(({ placeholder, type, name, id }) => {
					return (
						<div key={id} className="mt-3">
							<div className="w-full dark:bg-secondary/20  bg-primary/10">
								<Input type={type} placeholder={placeholder} name={name} />
							</div>
						</div>
					);
				})}
				<div className="mt-3">
					<div className="w-full  dark:bg-secondary/20 bg-primary/10">
						<Textarea
							className="resize-none"
							cols={20}
							rows={5}
							name="message"
							id="message"
							placeholder="Votre message..."
						/>
					</div>
				</div>
				<Button variant={'call'} className="w-full mt-3">
					Envoyer
				</Button>
			</form>
		</div>
	);
};
export default ContactForm;
