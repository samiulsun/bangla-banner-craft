/**
 * Background selection controls - templates, gradients, solid colors, custom upload
 */

import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { BannerStyle } from '@/types/banner';
import { useRef } from 'react';

interface BackgroundControlsProps {
  style: BannerStyle;
  onStyleChange: (updates: Partial<BannerStyle>) => void;
}

const GRADIENT_PRESETS = [
  { name: 'Purple Dream', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { name: 'Ocean', value: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)' },
  { name: 'Sunset', value: 'linear-gradient(135deg, #F4C430 0%, #FF6B6B 100%)' },
  { name: 'Forest', value: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)' },
  { name: 'Pink Bliss', value: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)' },
  { name: 'Cool Sky', value: 'linear-gradient(135deg, #5B247A 0%, #1BCEDF 100%)' },
];

const BackgroundControls = ({ style, onStyleChange }: BackgroundControlsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        onStyleChange({
          backgroundType: 'custom',
          backgroundValue: dataUrl,
        });
      };
      reader.readAsDataURL(file);
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <Label>ব্যাকগ্রাউন্ড (Background)</Label>
      
      <Tabs defaultValue="gradient" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="gradient">Gradient</TabsTrigger>
          <TabsTrigger value="solid">Solid</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>

        <TabsContent value="gradient" className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {GRADIENT_PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() =>
                  onStyleChange({
                    backgroundType: 'gradient',
                    backgroundValue: preset.value,
                  })
                }
                className="h-12 rounded-md border-2 border-border hover:border-primary transition-colors"
                style={{ background: preset.value }}
                title={preset.name}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="solid" className="space-y-2">
          <div className="flex gap-2">
            <Input
              type="color"
              value={style.backgroundColor}
              onChange={(e) =>
                onStyleChange({
                  backgroundType: 'solid',
                  backgroundColor: e.target.value,
                  backgroundValue: e.target.value,
                })
              }
              className="h-10 w-20 cursor-pointer"
            />
            <Input
              type="text"
              value={style.backgroundColor}
              onChange={(e) =>
                onStyleChange({
                  backgroundType: 'solid',
                  backgroundColor: e.target.value,
                  backgroundValue: e.target.value,
                })
              }
              className="flex-1 font-mono text-sm"
              placeholder="#000000"
            />
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="bg-upload"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="w-full"
          >
            <Upload className="mr-2 h-4 w-4" />
            ছবি আপলোড করুন (Upload Image)
          </Button>
          {style.backgroundType === 'custom' && (
            <p className="text-xs text-muted-foreground">✓ Custom background applied</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BackgroundControls;
