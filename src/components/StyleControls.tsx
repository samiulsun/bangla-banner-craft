/**
 * Style controls for font size, color, spacing, alignment, shadow
 */

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { BannerStyle } from '@/types/banner';

interface StyleControlsProps {
  style: BannerStyle;
  onStyleChange: (updates: Partial<BannerStyle>) => void;
}

const StyleControls = ({ style, onStyleChange }: StyleControlsProps) => {
  return (
    <div className="space-y-6">
      {/* Font Size */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>ফন্ট সাইজ (Font Size)</Label>
          <span className="text-sm text-muted-foreground">{style.fontSize}px</span>
        </div>
        <Slider
          value={[style.fontSize]}
          onValueChange={([value]) => onStyleChange({ fontSize: value })}
          min={24}
          max={120}
          step={2}
        />
      </div>

      {/* Text Color */}
      <div className="space-y-2">
        <Label htmlFor="text-color">টেক্সট রং (Text Color)</Label>
        <div className="flex gap-2">
          <Input
            id="text-color"
            type="color"
            value={style.color}
            onChange={(e) => onStyleChange({ color: e.target.value })}
            className="h-10 w-20 cursor-pointer"
          />
          <Input
            type="text"
            value={style.color}
            onChange={(e) => onStyleChange({ color: e.target.value })}
            className="flex-1 font-mono text-sm"
            placeholder="#000000"
          />
        </div>
      </div>

      {/* Text Alignment */}
      <div className="space-y-2">
        <Label>টেক্সট অ্যালাইনমেন্ট (Text Alignment)</Label>
        <div className="flex gap-2">
          <Button
            variant={style.textAlign === 'left' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onStyleChange({ textAlign: 'left' })}
            className="flex-1"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            variant={style.textAlign === 'center' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onStyleChange({ textAlign: 'center' })}
            className="flex-1"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            variant={style.textAlign === 'right' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onStyleChange({ textAlign: 'right' })}
            className="flex-1"
          >
            <AlignRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Letter Spacing */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>অক্ষর দূরত্ব (Letter Spacing)</Label>
          <span className="text-sm text-muted-foreground">{style.letterSpacing}px</span>
        </div>
        <Slider
          value={[style.letterSpacing]}
          onValueChange={([value]) => onStyleChange({ letterSpacing: value })}
          min={-5}
          max={20}
          step={0.5}
        />
      </div>

      {/* Line Height */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>লাইন উচ্চতা (Line Height)</Label>
          <span className="text-sm text-muted-foreground">{style.lineHeight}</span>
        </div>
        <Slider
          value={[style.lineHeight]}
          onValueChange={([value]) => onStyleChange({ lineHeight: value })}
          min={0.8}
          max={2.5}
          step={0.1}
        />
      </div>
    </div>
  );
};

export default StyleControls;
