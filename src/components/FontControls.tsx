/**
 * Font family and custom font upload controls
 */

import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { DEFAULT_FONTS } from '@/data/templates';
import { CustomFont } from '@/types/banner';
import { useRef } from 'react';

interface FontControlsProps {
  selectedFont: string;
  onFontChange: (font: string) => void;
  customFonts: CustomFont[];
  onCustomFontUpload: (font: CustomFont) => void;
}

const FontControls = ({
  selectedFont,
  onFontChange,
  customFonts,
  onCustomFontUpload,
}: FontControlsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Font loading handled by parent component
      const event = new CustomEvent('fontUpload', { detail: file });
      window.dispatchEvent(event);
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="font-family">ফন্ট (Font Family)</Label>
        <Select value={selectedFont} onValueChange={onFontChange}>
          <SelectTrigger id="font-family">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {DEFAULT_FONTS.map((font) => (
              <SelectItem key={font.family} value={font.family}>
                <span style={{ fontFamily: font.family }}>{font.displayName}</span>
              </SelectItem>
            ))}
            {customFonts.length > 0 && (
              <>
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  কাস্টম ফন্ট (Custom Fonts)
                </div>
                {customFonts.map((font) => (
                  <SelectItem key={font.family} value={font.family}>
                    <span style={{ fontFamily: font.family }}>{font.displayName}</span>
                  </SelectItem>
                ))}
              </>
            )}
          </SelectContent>
        </Select>
      </div>

      <div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".ttf,.woff,.woff2,.otf"
          onChange={handleFileSelect}
          className="hidden"
          id="font-upload"
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          className="w-full"
        >
          <Upload className="mr-2 h-4 w-4" />
          কাস্টম ফন্ট আপলোড করুন (Upload Font)
        </Button>
        <p className="mt-1 text-xs text-muted-foreground">
          TTF, WOFF, WOFF2, OTF supported
        </p>
      </div>
    </div>
  );
};

export default FontControls;
