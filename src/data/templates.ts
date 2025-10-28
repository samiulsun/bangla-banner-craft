/**
 * Default banner templates with pre-configured styles
 */

import { Template } from '@/types/banner';

export const DEFAULT_TEMPLATES: Template[] = [
	{
		id: 'template-1',
		name: 'Sunset Gradient',
		thumbnailUrl: '/placeholder.svg',
		backgroundUrl: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		suggestedStyle: {
			fontSize: 72,
			color: '#ffffff',
			textAlign: 'center',
		},
	},
	{
		id: 'template-2',
		name: 'Ocean Blue',
		thumbnailUrl: '/placeholder.svg',
		backgroundUrl: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
		suggestedStyle: {
			fontSize: 68,
			color: '#ffffff',
			textAlign: 'center',
		},
	},
	{
		id: 'template-3',
		name: 'Forest Green',
		thumbnailUrl: '/placeholder.svg',
		backgroundUrl: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)',
		suggestedStyle: {
			fontSize: 70,
			color: '#ffffff',
			textAlign: 'center',
		},
	},
	{
		id: 'template-4',
		name: 'Warm Sunrise',
		thumbnailUrl: '/placeholder.svg',
		backgroundUrl: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
		suggestedStyle: {
			fontSize: 74,
			color: '#ffffff',
			textAlign: 'center',
		},
	},
	{
		id: 'template-5',
		name: 'Royal Purple',
		thumbnailUrl: '/placeholder.svg',
		backgroundUrl: 'linear-gradient(135deg, #5B247A 0%, #1BCEDF 100%)',
		suggestedStyle: {
			fontSize: 66,
			color: '#ffffff',
			textAlign: 'center',
		},
	},
	{
		id: 'template-6',
		name: 'Golden Hour',
		thumbnailUrl: '/placeholder.svg',
		backgroundUrl: 'linear-gradient(135deg, #F4C430 0%, #FF6B6B 100%)',
		suggestedStyle: {
			fontSize: 76,
			color: '#1a1a1a',
			textAlign: 'center',
		},
	},
];

// Default fonts (using Google Fonts)
export const DEFAULT_FONTS = [
	{ family: 'Hind Siliguri', displayName: 'Hind Siliguri' },
	{ family: 'Noto Sans Bengali', displayName: 'Noto Sans Bengali' },
	{ family: 'Tiro Bangla', displayName: 'Tiro Bangla' },
];
