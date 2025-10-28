/**
 * Template picker component with thumbnail previews
 */

import { Card } from '@/components/ui/card';
import { Template } from '@/types/banner';
import { DEFAULT_TEMPLATES } from '@/data/templates';
import { Check } from 'lucide-react';

interface TemplatePickerProps {
  selectedTemplateId: string | null;
  onTemplateSelect: (template: Template) => void;
}

const TemplatePicker = ({ selectedTemplateId, onTemplateSelect }: TemplatePickerProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">টেমপ্লেট (Templates)</h3>
      <div className="grid grid-cols-2 gap-3">
        {DEFAULT_TEMPLATES.map((template) => {
          const isSelected = selectedTemplateId === template.id;
          
          return (
            <Card
              key={template.id}
              className={`relative overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                isSelected ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => onTemplateSelect(template)}
            >
              <div
                className="h-24 w-full"
                style={{ background: template.backgroundUrl }}
              />
              <div className="p-2 bg-card">
                <p className="text-xs font-medium truncate">{template.nameInBangla}</p>
                <p className="text-[10px] text-muted-foreground truncate">{template.name}</p>
              </div>
              {isSelected && (
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TemplatePicker;
