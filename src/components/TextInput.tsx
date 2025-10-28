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
    <div className="space-y-2">
      <Label htmlFor="banner-text" className="text-sm font-medium">
        ব্যানার টেক্সট (Banner Text)
      </Label>
      <Textarea
        id="banner-text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="আপনার বাংলা টেক্সট এখানে লিখুন..."
        className="min-h-[120px] resize-none font-medium text-base transition-all focus:ring-2 focus:ring-primary"
        dir="auto"
      />
      <p className="text-xs text-muted-foreground">
        সরাসরি বাংলা ইউনিকোড টাইপ করুন • {value.length} অক্ষর
      </p>
    </div>
  );
};

export default TextInput;
