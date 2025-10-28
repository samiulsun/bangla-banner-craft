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
		<div className='space-y-6'>
			{/* Font Size */}
			<div className='space-y-2'>
				<div className='flex items-center justify-between'>
					<Label className='text-emerald-200'>Font Size</Label>
					<span className='text-sm text-emerald-300/80'>
						{style.fontSize}px
					</span>
				</div>
				<Slider
					value={[style.fontSize]}
					onValueChange={([value]) => onStyleChange({ fontSize: value })}
					min={24}
					max={120}
					step={2}
					className='[&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-400 [&>.bg-primary]:bg-emerald-500 [&_[role=slider]]:hover:bg-emerald-600'
				/>
			</div>

			{/* Text Color */}
			<div className='space-y-2'>
				<Label htmlFor='text-color' className='text-emerald-200'>
					Text Color
				</Label>
				<div className='flex gap-2'>
					<Input
						id='text-color'
						type='color'
						value={style.color}
						onChange={(e) => onStyleChange({ color: e.target.value })}
						className='h-10 w-20 cursor-pointer bg-slate-800/50 border-emerald-700/30'
					/>
					<Input
						type='text'
						value={style.color}
						onChange={(e) => onStyleChange({ color: e.target.value })}
						className='flex-1 font-mono text-sm bg-slate-800/50 border-emerald-700/30 text-emerald-100 focus:ring-emerald-500/30 focus:border-emerald-500/50'
						placeholder='#000000'
					/>
				</div>
			</div>

			{/* Text Alignment */}
			<div className='space-y-2'>
				<Label className='text-emerald-200'>Text Alignment</Label>
				<div className='flex gap-2'>
					<Button
						variant={style.textAlign === 'left' ? 'default' : 'outline'}
						size='sm'
						onClick={() => onStyleChange({ textAlign: 'left' })}
						className={`flex-1 ${
							style.textAlign === 'left'
								? 'bg-emerald-600/90 text-white hover:bg-emerald-700/90'
								: 'bg-slate-800/50 border-emerald-700/30 text-emerald-200 hover:bg-emerald-600/20 hover:text-emerald-100'
						}`}
					>
						<AlignLeft className='h-4 w-4' />
					</Button>
					<Button
						variant={style.textAlign === 'center' ? 'default' : 'outline'}
						size='sm'
						onClick={() => onStyleChange({ textAlign: 'center' })}
						className={`flex-1 ${
							style.textAlign === 'center'
								? 'bg-emerald-600/90 text-white hover:bg-emerald-700/90'
								: 'bg-slate-800/50 border-emerald-700/30 text-emerald-200 hover:bg-emerald-600/20 hover:text-emerald-100'
						}`}
					>
						<AlignCenter className='h-4 w-4' />
					</Button>
					<Button
						variant={style.textAlign === 'right' ? 'default' : 'outline'}
						size='sm'
						onClick={() => onStyleChange({ textAlign: 'right' })}
						className={`flex-1 ${
							style.textAlign === 'right'
								? 'bg-emerald-600/90 text-white hover:bg-emerald-700/90'
								: 'bg-slate-800/50 border-emerald-700/30 text-emerald-200 hover:bg-emerald-600/20 hover:text-emerald-100'
						}`}
					>
						<AlignRight className='h-4 w-4' />
					</Button>
				</div>
			</div>

			{/* Letter Spacing */}
			<div className='space-y-2'>
				<div className='flex items-center justify-between'>
					<Label className='text-emerald-200'>Letter Spacing</Label>
					<span className='text-sm text-emerald-300/80'>
						{style.letterSpacing}px
					</span>
				</div>
				<Slider
					value={[style.letterSpacing]}
					onValueChange={([value]) => onStyleChange({ letterSpacing: value })}
					min={-5}
					max={20}
					step={0.5}
					className='[&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-400 [&>.bg-primary]:bg-emerald-500 [&_[role=slider]]:hover:bg-emerald-600'
				/>
			</div>

			{/* Line Height */}
			<div className='space-y-2'>
				<div className='flex items-center justify-between'>
					<Label className='text-emerald-200'>Line Height</Label>
					<span className='text-sm text-emerald-300/80'>
						{style.lineHeight}
					</span>
				</div>
				<Slider
					value={[style.lineHeight]}
					onValueChange={([value]) => onStyleChange({ lineHeight: value })}
					min={0.8}
					max={2.5}
					step={0.1}
					className='[&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-400 [&>.bg-primary]:bg-emerald-500 [&_[role=slider]]:hover:bg-emerald-600'
				/>
			</div>
		</div>
	);
};

export default StyleControls;
