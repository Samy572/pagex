import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CardPrice } from '@/types/types';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getPrice } from '@/lib/getprice';
import { CheckCircle2 } from 'lucide-react';

const prices: CardPrice = getPrice;

type Cards = React.ComponentProps<typeof Card>;

export function CardPrices({ className, ...props }: Cards) {
	return (
		<>
			<div className="h-full w-full  flex md:justify-around gap-y-4  md:flex-row flex-col ">
				{prices.map((price, index) => (
					<Card
						style={{ border: `solid 1px ${price.color}` }}
						key={index}
						className={cn(
							`md:w-[380px] h-[450px] hover:bg-secondary/40 grid  `,
							className
						)}
						{...props}
					>
						<CardHeader>
							<CardTitle
								className="text-3xl font-bold text-center mb-2"
								style={{ color: price.color }}
							>
								{price.title}
							</CardTitle>
							<CardDescription className="text-2xl font-semibold">
								{price.price}
							</CardDescription>
							<CardDescription className="text-xl">
								{price.optimal}
							</CardDescription>
							<CardDescription className="underline text-lg">
								{price.plus}
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col   gap-4">
							{price.list.map((el, index) => {
								return (
									<div className="w-full flex gap-x-2 " key={index}>
										<CheckCircle2 color="rgb(59 130 246)" />
										<span>{el}</span>
									</div>
								);
							})}
						</CardContent>
						<CardFooter>
							<Button
								variant={'outline'}
								style={{ backgroundColor: price.color }}
								className={`w-full  `}
							>
								{price.start}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</>
	);
}
