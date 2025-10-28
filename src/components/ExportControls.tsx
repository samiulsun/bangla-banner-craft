/**
 * Export controls for format selection, resolution scaling, and download
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Loader2 } from 'lucide-react';
import { ExportFormat, ExportScale } from '@/types/banner';
import { toast } from 'sonner';

interface ExportControlsProps {
  onExport: (format: ExportFormat, scale: ExportScale) => Promise<void>;
}

const ExportControls = ({ onExport }: ExportControlsProps) => {
  const [format, setFormat] = useState<ExportFormat>('png');
  const [scale, setScale] = useState<ExportScale>(2);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await onExport(format, scale);
      toast.success('ব্যানার সফলভাবে ডাউনলোড হয়েছে!', {
        description: `Format: ${format.toUpperCase()}, Scale: ${scale}x`,
      });
    } catch (error) {
      toast.error('রপ্তানি ব্যর্থ', {
        description: error instanceof Error ? error.message : 'অজানা ত্রুটি ঘটেছে',
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border">
      <h3 className="text-sm font-semibold">ডাউনলোড করুন (Export)</h3>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="export-format" className="text-xs">Format</Label>
          <Select
            value={format}
            onValueChange={(value) => setFormat(value as ExportFormat)}
          >
            <SelectTrigger id="export-format" className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="svg">SVG</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="export-scale" className="text-xs">Resolution</Label>
          <Select
            value={String(scale)}
            onValueChange={(value) => setScale(Number(value) as ExportScale)}
          >
            <SelectTrigger id="export-scale" className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1x (Standard)</SelectItem>
              <SelectItem value="2">2x (Retina)</SelectItem>
              <SelectItem value="4">4x (Ultra HD)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        onClick={handleExport}
        disabled={isExporting}
        className="w-full"
        size="lg"
      >
        {isExporting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            রপ্তানি হচ্ছে...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            ব্যানার ডাউনলোড করুন
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        {format === 'svg' ? 'Vector format (scalable)' : `Pixel ratio: ${scale}x`}
      </p>
    </div>
  );
};

export default ExportControls;
