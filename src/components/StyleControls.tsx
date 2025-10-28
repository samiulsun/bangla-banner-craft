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

      {/* Text Shadow */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="shadow-toggle">টেক্সট ছায়া (Text Shadow)</Label>
          <Switch
            id="shadow-toggle"
            checked={style.shadowEnabled}
            onCheckedChange={(checked) => onStyleChange({ shadowEnabled: checked })}
          />
        </div>

        {style.shadowEnabled && (
          <div className="space-y-3 pl-4 border-l-2 border-border">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs">X অফসেট</Label>
                <span className="text-xs text-muted-foreground">{style.shadowX}px</span>
              </div>
              <Slider
                value={[style.shadowX]}
                onValueChange={([value]) => onStyleChange({ shadowX: value })}
                min={-20}
                max={20}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs">Y অফসেট</Label>
                <span className="text-xs text-muted-foreground">{style.shadowY}px</span>
              </div>
              <Slider
                value={[style.shadowY]}
                onValueChange={([value]) => onStyleChange({ shadowY: value })}
                min={-20}
                max={20}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs">ব্লার (Blur)</Label>
                <span className="text-xs text-muted-foreground">{style.shadowBlur}px</span>
              </div>
              <Slider
                value={[style.shadowBlur]}
                onValueChange={([value]) => onStyleChange({ shadowBlur: value })}
                min={0}
                max={30}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="shadow-color" className="text-xs">ছায়া রং (Shadow Color)</Label>
              <div className="flex gap-2">
                <Input
                  id="shadow-color"
                  type="color"
                  value={style.shadowColor.startsWith('rgba') ? '#000000' : style.shadowColor}
                  onChange={(e) => onStyleChange({ shadowColor: e.target.value })}
                  className="h-8 w-16 cursor-pointer"
                />
                <Input
                  type="text"
                  value={style.shadowColor}
                  onChange={(e) => onStyleChange({ shadowColor: e.target.value })}
                  className="flex-1 font-mono text-xs"
                  placeholder="rgba(0,0,0,0.3)"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleControls;
