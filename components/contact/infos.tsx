const Infos = () => {
	return (
		<div className="hidden w-full h-[100vh] mt-16 lg:flex flex-col gap-7 items-center ">
			<div className="flex flex-col gap-3 w-fit pl-14 py-3 border-l-2 border-secondary">
				<h4 className="text-2xl">{`Heures d'ouvertures`}</h4>
				<ul>
					<li>Lundi au Vendredi</li>
					<li>9:00 - 18:00</li>
					<li>Fermé le week-end</li>
				</ul>
				<h4 className="text-2xl">Adresse</h4>
				<p>
					{' '}
					8424, route de Lyon <br /> Issy les Moulineaux <br />
					92130 Paris
				</p>
				<h4 className="text-2xl">Support</h4>
				<ul>
					<li>contact@pagex.fr</li>
					<li>+33 6 08 15 58 09</li>
				</ul>
			</div>
		</div>
	);
};
export default Infos;
