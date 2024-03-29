import type { MetadataRoute } from 'next';
import { SiteConfig } from '../components/layout/site-config';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SiteConfig.title,
		short_name: SiteConfig.title,
		description: SiteConfig.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: SiteConfig.brand.primary,
		icons: [
			{
				src: '/images/vercel.svg',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
