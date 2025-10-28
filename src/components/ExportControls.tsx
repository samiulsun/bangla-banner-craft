/**
 * Export controls for format selection, resolution scaling, and download
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
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
				description:
					error instanceof Error ? error.message : 'অজানা ত্রুটি ঘটেছে',
			});
		} finally {
			setIsExporting(false);
		}
	};

	return (
		<div className='space-y-5'>
			<div className='flex items-center gap-2'>
				<div className='w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center'>
					<Download className='w-4 h-4 text-white' />
				</div>
				<h3 className='text-base font-semibold text-emerald-200'>
					ডাউনলোড করুন (Export)
				</h3>
			</div>

			<div className='grid grid-cols-2 gap-4'>
				<div className='space-y-2'>
					<Label htmlFor='export-format' className='text-sm text-emerald-200'>
						Format
					</Label>
					<Select
						value={format}
						onValueChange={(value) => setFormat(value as ExportFormat)}
					>
						<SelectTrigger
							id='export-format'
							className='h-10 bg-slate-800/50 border-emerald-700/30 text-emerald-100 focus:border-emerald-500'
						>
							<SelectValue />
						</SelectTrigger>
						<SelectContent className='bg-slate-800 border-emerald-700/30'>
							<SelectItem
								value='png'
								className='text-emerald-100 focus:bg-emerald-600/20'
							>
								PNG
							</SelectItem>
							<SelectItem
								value='jpeg'
								className='text-emerald-100 focus:bg-emerald-600/20'
							>
								JPEG
							</SelectItem>
							<SelectItem
								value='svg'
								className='text-emerald-100 focus:bg-emerald-600/20'
							>
								SVG
							</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className='space-y-2'>
					<Label htmlFor='export-scale' className='text-sm text-emerald-200'>
						Resolution
					</Label>
					<Select
						value={String(scale)}
						onValueChange={(value) => setScale(Number(value) as ExportScale)}
					>
						<SelectTrigger
							id='export-scale'
							className='h-10 bg-slate-800/50 border-emerald-700/30 text-emerald-100 focus:border-emerald-500'
						>
							<SelectValue />
						</SelectTrigger>
						<SelectContent className='bg-slate-800 border-emerald-700/30'>
							<SelectItem
								value='1'
								className='text-emerald-100 focus:bg-emerald-600/20'
							>
								1x (Standard)
							</SelectItem>
							<SelectItem
								value='2'
								className='text-emerald-100 focus:bg-emerald-600/20'
							>
								2x (Retina)
							</SelectItem>
							<SelectItem
								value='4'
								className='text-emerald-100 focus:bg-emerald-600/20'
							>
								4x (Ultra HD)
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<Button
				onClick={handleExport}
				disabled={isExporting}
				className='w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium shadow-lg shadow-emerald-500/25 transition-all duration-200'
				size='lg'
			>
				{isExporting ? (
					<>
						<Loader2 className='mr-2 h-5 w-5 animate-spin' />
						রপ্তানি হচ্ছে...
					</>
				) : (
					<>
						<Download className='mr-2 h-5 w-5' />
						ব্যানার ডাউনলোড করুন
					</>
				)}
			</Button>

			<p className='text-sm text-emerald-300/80 text-center bg-slate-800/30 px-3 py-2 rounded-lg'>
				{format === 'svg'
					? '🎯 Vector format (scalable)'
					: `📐 Pixel ratio: ${scale}x`}
			</p>
		</div>
	);
};

export default ExportControls;
