'use client';
import Link from 'next/link';
import { ModeToggle } from '../ui/toggle-mode';
import { orbitron } from './font';
import { motion } from 'framer-motion';
import { GetLink } from '@/lib/getlink';
import { useRef } from 'react';
import { Menu } from './menu';
import { TypeLink } from '@/types/types';
const Header = () => {
	const hoverBar = useRef<HTMLDivElement>(null);
	const handleHover = (e: React.MouseEvent<HTMLLIElement>) => {
		const target = e.currentTarget;
		if (hoverBar.current) {
			hoverBar.current.style.transform = `translateX(${target.offsetLeft}px)`;
			hoverBar.current.style.width = `${target.scrollWidth}px`;
			hoverBar.current.style.height = `${target.offsetHeight}px`;
		}
	};
	const getlink: TypeLink = GetLink;

	return (
		<header className="max-w-7xl py-4 px-4 mx-auto h-fit w-full items-center  justify-between sm:px-6 lg:px-8 flex relative ">
			<h2 className={`${orbitron.className} text-4xl  tracking-wide		 `}>
				Page X
			</h2>
			<motion.ul
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="md:flex items-center hidden gap-x-3 relative"
			>
				{getlink.map((link) => (
					<li
						key={link.name}
						onMouseOver={(e) => handleHover(e)}
						className=" py-1.5 px-2.5   rounded-md"
					>
						<Link href={link.href}>{link.name}</Link>
					</li>
				))}
				<div ref={hoverBar} className="hover-bar"></div>
				<li>
					<ModeToggle />
				</li>
			</motion.ul>
			<Menu />
		</header>
	);
};
export default Header;
