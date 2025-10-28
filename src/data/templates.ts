/**
 * Default banner templates with pre-configured styles
 */

import { Template } from '@/types/banner';

export const DEFAULT_TEMPLATES: Template[] = [
  {
    id: 'template-1',
    name: 'Sunset Gradient',
    nameInBangla: 'সূর্যাস্ত',
    thumbnailUrl: '/placeholder.svg',
    backgroundUrl: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    suggestedStyle: {
      fontSize: 72,
      color: '#ffffff',
      textAlign: 'center',
      shadowEnabled: true,
      shadowX: 2,
      shadowY: 2,
      shadowBlur: 8,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
    },
  },
  {
    id: 'template-2',
    name: 'Ocean Blue',
    nameInBangla: 'সমুদ্র নীল',
    thumbnailUrl: '/placeholder.svg',
    backgroundUrl: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
    suggestedStyle: {
      fontSize: 68,
      color: '#ffffff',
      textAlign: 'center',
      shadowEnabled: true,
      shadowX: 3,
      shadowY: 3,
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0.4)',
    },
  },
  {
    id: 'template-3',
    name: 'Forest Green',
    nameInBangla: 'বন সবুজ',
    thumbnailUrl: '/placeholder.svg',
    backgroundUrl: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)',
    suggestedStyle: {
      fontSize: 70,
      color: '#ffffff',
      textAlign: 'center',
      shadowEnabled: true,
      shadowX: 2,
      shadowY: 2,
      shadowBlur: 6,
      shadowColor: 'rgba(0, 0, 0, 0.35)',
    },
  },
  {
    id: 'template-4',
    name: 'Warm Sunrise',
    nameInBangla: 'উষ্ণ সূর্যোদয়',
    thumbnailUrl: '/placeholder.svg',
    backgroundUrl: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
    suggestedStyle: {
      fontSize: 74,
      color: '#ffffff',
      textAlign: 'center',
      shadowEnabled: true,
      shadowX: 3,
      shadowY: 3,
      shadowBlur: 12,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
    },
  },
  {
    id: 'template-5',
    name: 'Royal Purple',
    nameInBangla: 'রাজকীয় বেগুনি',
    thumbnailUrl: '/placeholder.svg',
    backgroundUrl: 'linear-gradient(135deg, #5B247A 0%, #1BCEDF 100%)',
    suggestedStyle: {
      fontSize: 66,
      color: '#ffffff',
      textAlign: 'center',
      shadowEnabled: true,
      shadowX: 2,
      shadowY: 2,
      shadowBlur: 8,
      shadowColor: 'rgba(0, 0, 0, 0.4)',
    },
  },
  {
    id: 'template-6',
    name: 'Golden Hour',
    nameInBangla: 'সোনালি সময়',
    thumbnailUrl: '/placeholder.svg',
    backgroundUrl: 'linear-gradient(135deg, #F4C430 0%, #FF6B6B 100%)',
    suggestedStyle: {
      fontSize: 76,
      color: '#1a1a1a',
      textAlign: 'center',
      shadowEnabled: true,
      shadowX: 2,
      shadowY: 2,
      shadowBlur: 4,
      shadowColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
];

// Default bundled Bangla fonts (using Google Fonts)
export const DEFAULT_FONTS = [
  { family: 'Hind Siliguri', displayName: 'হিন্দ সিলিগুড়ি (Hind Siliguri)' },
  { family: 'Noto Sans Bengali', displayName: 'নোটো সান্স বাংলা (Noto Sans Bengali)' },
  { family: 'Tiro Bangla', displayName: 'টিরো বাংলা (Tiro Bangla)' },
];
