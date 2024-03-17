'use client';
import clsx from 'clsx';
import { orbitron } from './font';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
	GetFooterAccueil,
	GetProduitFooter,
	GetSocialMedia,
} from '@/lib/getlink';
const Footer = () => {
	const linkHomeFooter = GetFooterAccueil;
	const linkProductFooter = GetProduitFooter;
	const linkSocialMedia = GetSocialMedia;
	const variants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.footer
			variants={variants}
			initial={variants.hidden}
			whileInView={variants.visible}
			transition={{ duration: 0.3, delay: 0.1 }}
			className=" w-full bg-blue-500"
		>
			<div className="">
				<div className=" max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 grid-cols-1  py-7 border-b-2 border-white">
					<div className="lg:w-1/2 flex items-center">
						<motion.h4
							initial={{ y: -50, opacity: 0 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.5 }}
							className={clsx(orbitron.className, 'md:text-5xl text-3xl pb-5')}
						>
							Page X
						</motion.h4>
					</div>
					<ul className="leading-8 relative">
						<motion.h5
							variants={variants}
							initial={variants.hidden}
							whileInView={variants.visible}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="text-xl pb-4 underline"
						>
							Accueil
						</motion.h5>
						{linkHomeFooter.map((el) => {
							return (
								<motion.li
									initial={variants.hidden}
									variants={variants}
									whileInView={variants.visible}
									transition={{ duration: 0.5, delay: 0.5 + el.id * 0.1 }}
									key={el.id}
									className="w-fit hoverEffect "
								>
									<Link href={el.href}>{el.name}</Link>
								</motion.li>
							);
						})}
					</ul>
					<ul className="leading-8 relative">
						<motion.h5
							variants={variants}
							initial={variants.hidden}
							whileInView={variants.visible}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="text-xl pb-4 underline"
						>
							Produits
						</motion.h5>
						{linkProductFooter.map((el) => {
							return (
								<motion.li
									key={el.id}
									variants={variants}
									initial={variants.hidden}
									whileInView={variants.visible}
									transition={{ duration: 0.5, delay: 0.5 + el.id * 0.1 }}
									className="w-fit hoverEffect "
								>
									<Link href={el.href}>{el.name}</Link>
								</motion.li>
							);
						})}
					</ul>
				</div>
				<div className=" max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8  py-7 flex flex-col">
					<motion.h5
						variants={variants}
						initial={variants.hidden}
						whileInView={variants.visible}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-xl pb-4 underline"
					>
						Nos réseaux
					</motion.h5>
					<div className="flex md:justify-between flex-col md:flex-row ">
						<ul className="leading-8 flex gap-x-7 relative">
							{linkSocialMedia.map((el) => {
								return (
									<motion.li
										key={el.id}
										initial={variants.hidden}
										variants={variants}
										whileInView={variants.visible}
										transition={{ duration: 0.5, delay: 0.5 + el.id * 0.1 }}
									>
										<Link target="_blank" href={el.href}>
											<Image src={el.img} alt="logo" width={20} height={20} />
										</Link>
									</motion.li>
								);
							})}
						</ul>
						<motion.p
							variants={variants}
							initial={variants.hidden}
							whileInView={variants.visible}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="text-lg mt-5 md:m-0"
						>
							© 2024 <span className={orbitron.className}>Page X</span>. Tous
							les droits sont réservés.
						</motion.p>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};
export default Footer;
