/**
 * Main page - Bangla Banner Maker
 * Single-page app for creating and exporting beautiful Bangla text banners
 */

import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import BannerPreview from '@/components/BannerPreview';
import TextInput from '@/components/TextInput';
import FontControls from '@/components/FontControls';
import StyleControls from '@/components/StyleControls';
import BackgroundControls from '@/components/BackgroundControls';
import TemplatePicker from '@/components/TemplatePicker';
import ExportControls from '@/components/ExportControls';
import { BannerStyle, CustomFont, Template, ExportFormat, ExportScale } from '@/types/banner';
import { DEFAULT_FONTS } from '@/data/templates';
import { loadCustomFont, generateFontFamilyName, isValidFontFile } from '@/utils/fontLoader';
import { exportBanner, validateExportRequirements } from '@/utils/exportBanner';
import { toast } from 'sonner';

const Index = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [customFonts, setCustomFonts] = useState<CustomFont[]>([]);

  // Banner style state
  const [style, setStyle] = useState<BannerStyle>({
    text: 'আপনার বাংলা টেক্সট এখানে লিখুন',
    fontFamily: DEFAULT_FONTS[0].family,
    fontSize: 64,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 1.4,
    backgroundType: 'gradient',
    backgroundValue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundColor: '#667eea',
  });

  // Update style helper
  const updateStyle = (updates: Partial<BannerStyle>) => {
    setStyle((prev) => ({ ...prev, ...updates }));
  };

  // Handle template selection
  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplateId(template.id);
    updateStyle({
      backgroundType: 'template',
      backgroundValue: template.backgroundUrl,
      ...template.suggestedStyle,
    });
    toast.success('টেমপ্লেট প্রয়োগ করা হয়েছে', {
      description: template.nameInBangla,
    });
  };

  // Handle custom font upload
  const handleFontUpload = async (file: File) => {
    if (!isValidFontFile(file)) {
      toast.error('অবৈধ ফন্ট ফাইল', {
        description: 'শুধুমাত্র TTF, WOFF, WOFF2, OTF সমর্থিত',
      });
      return;
    }

    try {
      const fontFamily = generateFontFamilyName(file.name);
      const customFont = await loadCustomFont(file, fontFamily);
      
      setCustomFonts((prev) => [...prev, customFont]);
      updateStyle({ fontFamily: customFont.family });
      
      toast.success('ফন্ট আপলোড সফল!', {
        description: customFont.displayName,
      });
    } catch (error) {
      toast.error('ফন্ট আপলোড ব্যর্থ', {
        description: error instanceof Error ? error.message : 'অজানা ত্রুটি',
      });
    }
  };

  // Listen for font upload events
  useEffect(() => {
    const handleFontUploadEvent = (e: Event) => {
      const file = (e as CustomEvent).detail as File;
      handleFontUpload(file);
    };

    window.addEventListener('fontUpload', handleFontUploadEvent);
    return () => {
      window.removeEventListener('fontUpload', handleFontUploadEvent);
    };
  }, []);

  // Handle export
  const handleExport = async (format: ExportFormat, scale: ExportScale) => {
    if (!bannerRef.current) return;

    try {
      validateExportRequirements(bannerRef.current);
      
      const filename = `bangla-banner-${Date.now()}`;
      await exportBanner(bannerRef.current, { format, scale, filename });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm shrink-0">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            বাংলা ব্যানার মেকার
          </h1>
          <p className="text-xs lg:text-sm text-muted-foreground mt-1">
            Create stunning Bangla text banners • Client-side • No signup required
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 py-4 lg:py-6 h-full">
          <div className="grid lg:grid-cols-[380px_1fr] gap-4 lg:gap-6 h-full">
          {/* Controls Panel */}
          <aside className="flex flex-col h-full max-h-[calc(100vh-180px)] lg:max-h-[calc(100vh-140px)]">
            <ScrollArea className="flex-1">
              <div className="space-y-4 pr-2">
                <div className="bg-card rounded-lg border shadow-lg p-4 lg:p-6">
                  <Tabs defaultValue="text" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="text" className="text-xs lg:text-sm">Text</TabsTrigger>
                      <TabsTrigger value="style" className="text-xs lg:text-sm">Style</TabsTrigger>
                      <TabsTrigger value="background" className="text-xs lg:text-sm">BG</TabsTrigger>
                    </TabsList>

                    <TabsContent value="text" className="space-y-4 mt-4">
                      <TextInput value={style.text} onChange={(text) => updateStyle({ text })} />
                      <Separator />
                      <FontControls
                        selectedFont={style.fontFamily}
                        onFontChange={(font) => updateStyle({ fontFamily: font })}
                        customFonts={customFonts}
                        onCustomFontUpload={() => {}}
                      />
                    </TabsContent>

                    <TabsContent value="style" className="mt-4">
                      <StyleControls style={style} onStyleChange={updateStyle} />
                    </TabsContent>

                    <TabsContent value="background" className="space-y-4 mt-4">
                      <BackgroundControls style={style} onStyleChange={updateStyle} />
                      <Separator />
                      <div className="max-h-[300px] overflow-y-auto pr-2">
                        <TemplatePicker
                          selectedTemplateId={selectedTemplateId}
                          onTemplateSelect={handleTemplateSelect}
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <ExportControls onExport={handleExport} />
              </div>
            </ScrollArea>
          </aside>

          {/* Preview Panel */}
          <section className="flex flex-col h-full max-h-[calc(100vh-180px)] lg:max-h-[calc(100vh-140px)]">
            <div className="bg-card rounded-lg border shadow-lg p-4 lg:p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-3 lg:mb-4 shrink-0">
                <h2 className="text-base lg:text-lg font-semibold">লাইভ প্রিভিউ (Live Preview)</h2>
                <span className="text-xs text-muted-foreground">1200 × 600 px</span>
              </div>
              <div className="flex-1 overflow-auto">
                <BannerPreview ref={bannerRef} style={style} />
              </div>
            </div>
          </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
