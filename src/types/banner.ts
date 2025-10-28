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
  
  // Text shadow
  shadowEnabled: boolean;
  shadowX: number;
  shadowY: number;
  shadowBlur: number;
  shadowColor: string;
  
  // Background
  backgroundType: 'template' | 'gradient' | 'custom' | 'solid';
  backgroundValue: string; // template ID, gradient CSS, custom image URL, or solid color
  backgroundColor: string; // fallback solid color
}

export interface Template {
  id: string;
  name: string;
  nameInBangla: string;
  thumbnailUrl: string;
  backgroundUrl: string;
  suggestedStyle: Partial<BannerStyle>;
}

export interface CustomFont {
  family: string;
  url: string;
  displayName: string;
}

export type ExportFormat = 'png' | 'jpeg' | 'svg';
export type ExportScale = 1 | 2 | 4;
