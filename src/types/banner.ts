/**
 * Banner configuration types
 */

export interface BannerStyle {
	text: string;
	fontFamily: string;
	fontSize: number;
	color: string;
	textAlign: 'left' | 'center' | 'right';
	letterSpacing: number;
	lineHeight: number;

	// Background
	backgroundType: 'gradient' | 'custom' | 'solid' | 'pattern';
	backgroundValue: string; // gradient CSS, custom image URL, solid color, or pattern name
	backgroundColor: string; // fallback solid color
}

export interface CustomFont {
	family: string;
	url: string;
	displayName: string;
}

export interface Template {
	id: string;
	name: string;
	thumbnailUrl: string;
	backgroundUrl: string;
	suggestedStyle: {
		fontSize: number;
		color: string;
		textAlign: 'left' | 'center' | 'right';
	};
}

export type ExportFormat = 'png' | 'jpeg' | 'svg';
export type ExportScale = 1 | 2 | 4;
