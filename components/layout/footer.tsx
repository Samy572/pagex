import clsx from 'clsx';
import { orbitron } from './font';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className=" w-full bg-blue-500">
			<div className="">
				<div className=" max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 grid-cols-1  py-7 border-b-2 border-white">
					<div className="lg:w-1/2 flex items-center">
						<h4
							className={clsx(orbitron.className, 'md:text-5xl text-3xl pb-5')}
						>
							Page X
						</h4>
					</div>
					<ul className="leading-8">
						<h5 className="text-xl pb-4 underline">Accueil</h5>
						<li>
							<Link href={'/'}>Accueil</Link>
						</li>
						<li>
							<Link href={'#price'}> Prix</Link>
						</li>
						<li>
							<Link href={'#faq'}>Faq</Link>
						</li>
						<li>
							<Link href={'#contact'}>Contact</Link>
						</li>
					</ul>
					<ul className="leading-8">
						<h5 className="text-xl pb-4 underline">Produits</h5>
						<li>
							{' '}
							<Link href={'#price'}> Essentiel</Link>
						</li>
						<li>
							{' '}
							<Link href={'#price'}> Pro</Link>
						</li>
						<li>
							{' '}
							<Link href={'#price'}> Premium</Link>
						</li>
					</ul>
				</div>
				<div className=" max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8  py-7 flex flex-col">
					<h5 className="text-xl pb-4 underline">Nos réseaux</h5>
					<div className="flex md:justify-between flex-col md:flex-row ">
						<ul className="leading-8 flex gap-x-7 ">
							<li>
								<Image
									src="/images/svg/twitter.svg"
									alt="logo"
									width={20}
									height={20}
								/>
							</li>
							<li>
								{' '}
								<Image
									src="/images/svg/fb.svg"
									alt="logo"
									width={20}
									height={20}
								/>
							</li>
							<li>
								<Image
									src="/images/svg/insta.svg"
									alt="logo"
									width={20}
									height={20}
								/>{' '}
							</li>
						</ul>
						<p className="text-lg mt-5 md:m-0">
							© 2024 <span className={orbitron.className}>Page X</span>. Tous
							les droits sont réservés.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
