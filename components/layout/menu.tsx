import { Button } from '@/components/ui/button';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { GetLink } from '@/lib/getlink';
import { AlignRight } from 'lucide-react';
import Link from 'next/link';

export function Menu() {
	const getLink = GetLink;
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={'link'} className="fixed  right-3 z-10">
					<AlignRight className="md:hidden" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<ul className="flex flex-col justify-start mt-16 gap-y-9   h-full">
					{getLink.map((link) => {
						return (
							<li className="text-2xl" key={link.name}>
								<Link href={link.href}>
									<SheetClose>{link.name}</SheetClose>
								</Link>
							</li>
						);
					})}
				</ul>
				<SheetFooter>
					<SheetClose asChild></SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
