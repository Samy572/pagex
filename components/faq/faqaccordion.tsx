import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { getFaq } from '@/lib/getfaq';

export function FaqAccordion() {
	const questions = getFaq;

	return (
		<Accordion type="single" collapsible className="w-full lg:w-2/3">
			{questions.map((question, index) => {
				return (
					<AccordionItem
						className={'text-xl'}
						value={question.question}
						key={index}
					>
						<AccordionTrigger>{question.question}</AccordionTrigger>
						<AccordionContent>{question.answer}</AccordionContent>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}
