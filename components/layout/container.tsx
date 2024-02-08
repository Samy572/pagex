export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="mx-auto md:max-w-7xl max-w-5xl px-4 sm:px-6 lg:px-8 h-full ">
			{children}
		</div>
	);
};
