/**
 * Font family and custom font upload controls
 */

import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
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
		<div className='space-y-4'>
			<div className='space-y-2'>
				<Label htmlFor='font-family ' className='text-emerald-200'>
					Font Family
				</Label>
				<Select value={selectedFont} onValueChange={onFontChange}>
					<SelectTrigger
						id='font-family'
						className='bg-slate-800/50 border-emerald-700/30 text-emerald-100 hover:bg-slate-700/50 focus:ring-emerald-500/30 focus:border-emerald-500/50'
					>
						<SelectValue />
					</SelectTrigger>
					<SelectContent className='bg-slate-900/95 backdrop-blur-xl border-emerald-700/30 text-emerald-100'>
						{DEFAULT_FONTS.map((font) => (
							<SelectItem
								key={font.family}
								value={font.family}
								className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
							>
								<span style={{ fontFamily: font.family }}>
									{font.displayName}
								</span>
							</SelectItem>
						))}
						{customFonts.length > 0 && (
							<>
								<div className='px-2 py-1.5 text-xs font-semibold text-emerald-300/80'>
									Custom Fonts
								</div>
								{customFonts.map((font) => (
									<SelectItem
										key={font.family}
										value={font.family}
										className='text-emerald-100 hover:bg-emerald-600/20 focus:bg-emerald-600/20 cursor-pointer'
									>
										<span style={{ fontFamily: font.family }}>
											{font.displayName}
										</span>
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
					type='file'
					accept='.ttf,.woff,.woff2,.otf'
					onChange={handleFileSelect}
					className='hidden'
					id='font-upload'
				/>
				<Button
					variant='outline'
					size='sm'
					onClick={() => fileInputRef.current?.click()}
					className='w-full bg-slate-800/50 border-emerald-700/30 text-emerald-200 hover:bg-emerald-600/20 hover:text-emerald-100 hover:border-emerald-500/50 transition-colors'
				>
					<Upload className='mr-2 h-4 w-4' />
					Upload Font
				</Button>
				<p className='mt-1 text-xs text-emerald-300/60'>
					TTF, WOFF, WOFF2, OTF supported
				</p>
			</div>
		</div>
	);
};

export default FontControls;
