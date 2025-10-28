/**
 * Text input component for Bangla text
 */

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface TextInputProps {
	value: string;
	onChange: (value: string) => void;
}

const TextInput = ({ value, onChange }: TextInputProps) => {
	return (
		<div className='space-y-3'>
			<Label
				htmlFor='banner-text'
				className='text-sm font-medium text-emerald-200'
			>
				Banner Text
			</Label>
			<Textarea
				id='banner-text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder='Enter your text here...'
				className='min-h-[120px] resize-none font-medium text-base bg-slate-800/50 border-emerald-700/30 text-emerald-100 placeholder:text-emerald-300/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200'
				dir='auto'
			/>
			<p className='text-xs text-emerald-300/80'>
				Type your text directly • {value.length} characters
			</p>
		</div>
	);
};

export default TextInput;
