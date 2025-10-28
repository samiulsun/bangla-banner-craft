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
import {
	BannerStyle,
	CustomFont,
	ExportFormat,
	ExportScale,
} from '@/types/banner';
import { DEFAULT_FONTS } from '@/data/templates';
import {
	loadCustomFont,
	generateFontFamilyName,
	isValidFontFile,
} from '@/utils/fontLoader';
import { exportBanner, validateExportRequirements } from '@/utils/exportBanner';
import { toast } from 'sonner';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCallback } from 'react';
import CircularText from '@/components/mvpblocks/circular-text';

const Index = () => {
	const bannerRef = useRef<HTMLDivElement>(null);
	const [customFonts, setCustomFonts] = useState<CustomFont[]>([]);
	const [exportFormat, setExportFormat] = useState<ExportFormat>('png');
	const [exportScale, setExportScale] = useState<ExportScale>(2);

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

	// Handle custom font upload
	const handleFontUpload = useCallback(async (file: File) => {
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
	}, []);

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
	}, [handleFontUpload]);

	// Handle export
	const handleExport = async (format?: ExportFormat, scale?: ExportScale) => {
		if (!bannerRef.current) return;

		try {
			validateExportRequirements(bannerRef.current);
			const filename = `bangla-banner-${Date.now()}`;
			await exportBanner(bannerRef.current, {
				format: format || exportFormat,
				scale: scale || exportScale,
				filename,
			});
			toast.success('ব্যানার সফলভাবে ডাউনলোড হয়েছে!');
		} catch (error) {
			toast.error('রপ্তানি ব্যর্থ', {
				description: error instanceof Error ? error.message : 'অজানা ত্রুটি',
			});
		}
	};

	// Export functionality is now handled through the dropdown menu

	return (
		<div
			className='flex flex-col h-screen relative'
			style={{
				backgroundImage: `url('/vecteezy_seamless-dark-mystery-green-leaves-vine-plant-in-layers.jpg')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Dark overlay for better readability */}
			<div className='absolute inset-0 bg-black/40 backdrop-blur-[0.5px]'></div>

			{/* Centered Gradient Title */}
			<div className='relative z-10 flex items-center justify-center py-3 sm:py-4 md:py-5'>
				<div className='text-center px-4'>
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent drop-shadow-xl'>
						বাংলা ব্যানার মেকার
					</h1>
				</div>
			</div>

			{/* Main Content */}
			<main className='relative z-10 flex-1 overflow-hidden'>
				<div className='container mx-auto px-3 sm:px-4 py-3 sm:py-4 lg:py-6 h-full'>
					<div className='grid lg:grid-cols-[400px_1fr] gap-4 lg:gap-6 h-full'>
						{/* Controls Panel */}
						<aside className='flex flex-col h-full max-h-[calc(100vh-140px)] sm:max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-160px)]'>
							<ScrollArea className='flex-1'>
								<div className='space-y-3 lg:space-y-4 pr-2'>
									<div className='bg-slate-900/85 backdrop-blur-2xl rounded-xl lg:rounded-2xl border border-emerald-700/20 shadow-2xl shadow-black/30 p-4 sm:p-5 lg:p-6'>
										<Tabs defaultValue='text' className='w-full'>
											<TabsList className='grid w-full grid-cols-3 bg-slate-800/50 border border-emerald-700/20 rounded-lg lg:rounded-xl p-1'>
												<TabsTrigger
													value='text'
													className='text-xs lg:text-sm text-emerald-100 data-[state=active]:bg-emerald-600/90 data-[state=active]:text-white rounded-lg transition-all duration-200'
												>
													Text
												</TabsTrigger>
												<TabsTrigger
													value='style'
													className='text-xs lg:text-sm text-emerald-100 data-[state=active]:bg-emerald-600/90 data-[state=active]:text-white rounded-lg transition-all duration-200'
												>
													Style
												</TabsTrigger>
												<TabsTrigger
													value='background'
													className='text-xs lg:text-sm text-emerald-100 data-[state=active]:bg-emerald-600/90 data-[state=active]:text-white rounded-lg transition-all duration-200'
												>
													BG
												</TabsTrigger>
											</TabsList>

											<TabsContent
												value='text'
												className='space-y-4 lg:space-y-6 mt-4 lg:mt-6'
											>
												<TextInput
													value={style.text}
													onChange={(text) => updateStyle({ text })}
												/>
												<Separator className='bg-emerald-800/30' />
												<FontControls
													selectedFont={style.fontFamily}
													onFontChange={(font) =>
														updateStyle({ fontFamily: font })
													}
													customFonts={customFonts}
													onCustomFontUpload={() => {}}
												/>
											</TabsContent>

											<TabsContent value='style' className='mt-4 lg:mt-6'>
												<StyleControls
													style={style}
													onStyleChange={updateStyle}
												/>
											</TabsContent>

											<TabsContent
												value='background'
												className='space-y-4 lg:space-y-6 mt-4 lg:mt-6'
											>
												<BackgroundControls
													style={style}
													onStyleChange={updateStyle}
												/>
											</TabsContent>
										</Tabs>
									</div>
								</div>
							</ScrollArea>
						</aside>

						{/* Preview Panel */}
						<section className='flex flex-col h-full max-h-[calc(100vh-140px)] sm:max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-160px)]'>
							<div className='bg-slate-900/85 backdrop-blur-2xl rounded-2xl border border-emerald-700/20 shadow-2xl shadow-black/30 p-4 sm:p-5 lg:p-6 h-full flex flex-col'>
								<div className='flex items-center justify-between mb-4 shrink-0'>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></div>
										<h2 className='text-lg font-semibold text-emerald-100'>
											লাইভ প্রিভিউ (Live Preview)
										</h2>
									</div>
									<div className='flex items-center gap-2'>
										<span className='text-sm text-emerald-200/80 font-mono bg-slate-800/50 px-3 py-1 rounded-lg'>
											1200 × 600 px
										</span>

										{/* Download Options */}
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													size='sm'
													variant='ghost'
													className='text-emerald-200 hover:text-white hover:bg-emerald-600/20 rounded-lg transition-colors gap-2 px-3 py-2'
												>
													<Download className='w-4 h-4' />
													Download
													<ChevronDown className='w-3 h-3' />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent
												align='end'
												className='w-56 bg-slate-900/95 backdrop-blur-xl border-emerald-700/30'
											>
												<DropdownMenuLabel className='text-emerald-200'>
													Export Format
												</DropdownMenuLabel>
												<DropdownMenuSeparator className='bg-emerald-700/30' />
												<DropdownMenuItem
													onClick={() => handleExport('png', 1)}
													className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
												>
													PNG - Standard (1x)
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => handleExport('png', 2)}
													className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
												>
													PNG - High Quality (2x)
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => handleExport('png', 4)}
													className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
												>
													PNG - Ultra Quality (4x)
												</DropdownMenuItem>
												<DropdownMenuSeparator className='bg-emerald-700/30' />
												<DropdownMenuItem
													onClick={() => handleExport('jpeg', 1)}
													className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
												>
													JPEG - Standard (1x)
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => handleExport('jpeg', 2)}
													className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
												>
													JPEG - High Quality (2x)
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => handleExport('jpeg', 4)}
													className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
												>
													JPEG - Ultra Quality (4x)
												</DropdownMenuItem>
												<DropdownMenuSeparator className='bg-emerald-700/30' />
												<DropdownMenuItem
													onClick={() => handleExport('svg', 1)}
													className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
												>
													SVG - Vector Format
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
								</div>
								<div className='flex-1 overflow-auto rounded-xl bg-slate-800/30 p-4'>
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
