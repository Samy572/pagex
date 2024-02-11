import { Parralax } from '@/components/project/project';
import TeamWork from '@/components/ui/teamwork';
import { Spotlight } from '@/components/ui/spotlight';
import Vision from '@/components/vision/vision';
import Price from '@/components/price/price';

export default function Home() {
	return (
		<main className="w-full dark:mix-blend-screen  ">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<Vision />

			<Parralax />
			<TeamWork />
			<Price />
		</main>
	);
}
