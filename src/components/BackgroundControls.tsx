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
	{
		name: 'Purple Dream',
		value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	},
	{ name: 'Ocean', value: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)' },
	{
		name: 'Sunset',
		value: 'linear-gradient(135deg, #F4C430 0%, #FF6B6B 100%)',
	},
	{
		name: 'Forest',
		value: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)',
	},
	{
		name: 'Pink Bliss',
		value: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
	},
	{
		name: 'Cool Sky',
		value: 'linear-gradient(135deg, #5B247A 0%, #1BCEDF 100%)',
	},
];

const PATTERN_PRESETS = [
	{
		name: 'Dotted Squares Dark',
		value: 'dotted-squares-dark',
		css: `
      background-color: #1a1a1a;
      background-image: 
        radial-gradient(circle, #333 1px, transparent 1px);
      background-size: 20px 20px;
    `,
	},
	{
		name: 'Grid Lines',
		value: 'grid-lines',
		css: `
      background-color: #2a2a2a;
      background-image: 
        linear-gradient(#444 1px, transparent 1px),
        linear-gradient(90deg, #444 1px, transparent 1px);
      background-size: 25px 25px;
    `,
	},
];

const BackgroundControls = ({
	style,
	onStyleChange,
}: BackgroundControlsProps) => {
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
		<div className='space-y-3'>
			<Label className='text-emerald-200'>Background</Label>

			<Tabs defaultValue='gradient' className='w-full'>
				<TabsList className='grid w-full grid-cols-4 bg-slate-800/50 border border-emerald-700/20 rounded-lg p-1'>
					<TabsTrigger
						value='gradient'
						className='text-xs text-emerald-100 data-[state=active]:bg-emerald-600/90 data-[state=active]:text-white rounded-md transition-all duration-200'
					>
						Gradient
					</TabsTrigger>
					<TabsTrigger
						value='pattern'
						className='text-xs text-emerald-100 data-[state=active]:bg-emerald-600/90 data-[state=active]:text-white rounded-md transition-all duration-200'
					>
						Pattern
					</TabsTrigger>
					<TabsTrigger
						value='solid'
						className='text-xs text-emerald-100 data-[state=active]:bg-emerald-600/90 data-[state=active]:text-white rounded-md transition-all duration-200'
					>
						Solid
					</TabsTrigger>
					<TabsTrigger
						value='custom'
						className='text-xs text-emerald-100 data-[state=active]:bg-emerald-600/90 data-[state=active]:text-white rounded-md transition-all duration-200'
					>
						Custom
					</TabsTrigger>
				</TabsList>

				<TabsContent value='gradient' className='space-y-2 mt-4'>
					<div className='grid grid-cols-2 gap-2'>
						{GRADIENT_PRESETS.map((preset) => (
							<button
								key={preset.name}
								onClick={() =>
									onStyleChange({
										backgroundType: 'gradient',
										backgroundValue: preset.value,
									})
								}
								className='h-12 rounded-lg border-2 border-emerald-700/30 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 relative overflow-hidden'
								style={{ background: preset.value }}
								title={preset.name}
							>
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200' />
							</button>
						))}
					</div>
				</TabsContent>

				<TabsContent value='pattern' className='space-y-2 mt-4'>
					<div className='grid grid-cols-2 gap-2'>
						{PATTERN_PRESETS.map((preset) => (
							<button
								key={preset.name}
								onClick={() =>
									onStyleChange({
										backgroundType: 'pattern',
										backgroundValue: preset.value,
									})
								}
								className='h-12 rounded-lg border-2 border-emerald-700/30 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 relative overflow-hidden'
								title={preset.name}
								style={{
									backgroundColor:
										preset.value === 'dotted-squares-dark'
											? '#1a1a1a'
											: '#2a2a2a',
									backgroundImage:
										preset.value === 'dotted-squares-dark'
											? 'radial-gradient(circle, #333 1px, transparent 1px)'
											: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
									backgroundSize:
										preset.value === 'dotted-squares-dark'
											? '20px 20px'
											: '25px 25px',
								}}
							>
								<div className='absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200' />
							</button>
						))}
					</div>
					<p className='text-xs text-emerald-300/60'>
						Select a pattern background for your banner
					</p>
				</TabsContent>

				<TabsContent value='solid' className='space-y-2 mt-4'>
					<div className='flex gap-2'>
						<Input
							type='color'
							value={style.backgroundColor}
							onChange={(e) =>
								onStyleChange({
									backgroundType: 'solid',
									backgroundColor: e.target.value,
									backgroundValue: e.target.value,
								})
							}
							className='h-10 w-20 cursor-pointer bg-slate-800/50 border-emerald-700/30 rounded-lg'
						/>
						<Input
							type='text'
							value={style.backgroundColor}
							onChange={(e) =>
								onStyleChange({
									backgroundType: 'solid',
									backgroundColor: e.target.value,
									backgroundValue: e.target.value,
								})
							}
							className='flex-1 font-mono text-sm bg-slate-800/50 border-emerald-700/30 text-emerald-100 focus:ring-emerald-500/30 focus:border-emerald-500/50 rounded-lg'
							placeholder='#000000'
						/>
					</div>
				</TabsContent>

				<TabsContent value='custom' className='space-y-2 mt-4'>
					<input
						ref={fileInputRef}
						type='file'
						accept='image/*'
						onChange={handleImageUpload}
						className='hidden'
						id='bg-upload'
					/>
					<Button
						variant='outline'
						size='sm'
						onClick={() => fileInputRef.current?.click()}
						className='w-full bg-slate-800/50 border-emerald-700/30 text-emerald-200 hover:bg-emerald-600/20 hover:text-emerald-100 hover:border-emerald-500/50 transition-colors'
					>
						<Upload className='mr-2 h-4 w-4' />
						Upload Image
					</Button>
					{style.backgroundType === 'custom' && (
						<p className='text-xs text-emerald-300/80'>
							✓ Custom background applied
						</p>
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default BackgroundControls;
