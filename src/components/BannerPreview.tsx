/**
 * Banner preview component - renders the actual banner with applied styles
 */

import { BannerStyle } from '@/types/banner';
import { forwardRef } from 'react';

interface BannerPreviewProps {
  style: BannerStyle;
}

const BannerPreview = forwardRef<HTMLDivElement, BannerPreviewProps>(
  ({ style }, ref) => {
    // Build background CSS based on type
    const getBackgroundStyle = () => {
      switch (style.backgroundType) {
        case 'gradient':
        case 'template':
          return { background: style.backgroundValue };
        case 'custom':
          return {
            backgroundImage: `url(${style.backgroundValue})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          };
        case 'solid':
        default:
          return { backgroundColor: style.backgroundColor };
      }
    };

    return (
      <div
        ref={ref}
        className="relative w-full overflow-hidden shadow-2xl"
        style={{ 
          width: '1920px', 
          height: '1080px',
          ...getBackgroundStyle() 
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div
            className="max-w-4xl w-full transition-all duration-300"
            style={{
              fontFamily: style.fontFamily,
              fontSize: `${style.fontSize}px`,
              color: style.color,
              textAlign: style.textAlign,
              letterSpacing: `${style.letterSpacing}px`,
              lineHeight: style.lineHeight,
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {style.text || 'আপনার টেক্সট এখানে লিখুন...'}
          </div>
        </div>
      </div>
    );
  }
);

BannerPreview.displayName = 'BannerPreview';

export default BannerPreview;
