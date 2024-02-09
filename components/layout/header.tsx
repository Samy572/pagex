'use client';
import Link from 'next/link';
import { ModeToggle } from '../ui/toggle-mode';
import { AlignRight } from 'lucide-react';
import { orbitron } from './font';
import { motion } from 'framer-motion';
import { GetLink } from '@/lib/getlink';
import { useState } from 'react';
import { Menu } from './menu';
const Header = () => {
	const [activeLinkId, setActiveLinkId] = useState<number | null>(null);

	const handleClick = (linkId: number) => {
		setActiveLinkId(linkId === activeLinkId ? null : linkId);
	};
	const getlink = GetLink;

	return (
		<header className="max-w-7xl py-4 px-4 mx-auto h-fit w-full items-center  justify-between sm:px-6 lg:px-8 flex relative ">
			<h2
				className={`${orbitron.className} text-xl  md:text-4xl tracking-wide		 `}
			>
				Page X
			</h2>
			<motion.ul
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="md:flex items-center hidden gap-x-3 "
			>
				{getlink.map((link) => (
					<li
						key={link.name}
						onClick={() => handleClick(link.id)}
						className={`${
							activeLinkId === link.id ? 'activelink ' : ''
						}  transition-all duration-300 ease-in-out p-1 hover:bg-secondary dark:hover:text-white rounded-md`}
					>
						<Link href={link.href}>{link.name}</Link>
					</li>
				))}
				<li>
					<ModeToggle />
				</li>
			</motion.ul>
			<Menu />
		</header>
	);
};
export default Header;
