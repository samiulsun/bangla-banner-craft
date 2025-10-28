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

// Default fonts (using Google Fonts and custom fonts)
export const DEFAULT_FONTS = [
	{ family: 'Hind Siliguri', displayName: 'Hind Siliguri' },
	{ family: 'Tiro Bangla', displayName: 'Tiro Bangla' },
	{
		family: 'Abu Sayed',
		displayName: 'Abu Sayed',
		url: '/fonts/AbuSayed.ttf',
	},
	{
		family: 'Kopotakkho',
		displayName: 'Kopotakkho',
		url: '/fonts/Kopotakkho Unicode Regular.ttf',
	},
	{
		family: 'Teesta',
		displayName: 'Teesta',
		url: '/fonts/Li Chayana Teesta Unicode.ttf',
	},
	{
		family: 'Mitra Mono',
		displayName: 'Mitra',
		url: '/fonts/mitra.ttf',
	},
	{
		family: 'Dhaleshwari',
		displayName: 'Dhaleshwari',
		url: '/fonts/Dhaleshwari Normal.ttf',
	},
	{
		family: 'Dhaka Nagari',
		displayName: 'Dhaka Nagari',
		url: '/fonts/FN Mahin Dhaka Nagari PM Regular.ttf',
	},
	{
		family: 'FN Mahin Dui Dashok Regular',
		displayName: 'Dui Dashok',
		url: '/fonts/FN Mahin Dui Dashok Regular.ttf',
	},
];
