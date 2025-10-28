/**
 * Export utilities for converting banner DOM to image files
 */

import { toPng, toJpeg, toSvg } from 'html-to-image';
import { ExportFormat, ExportScale } from '@/types/banner';

export interface ExportOptions {
	format: ExportFormat;
	scale: ExportScale;
	filename: string;
}

/**
 * Export a DOM element to an image file
 */
export const exportBanner = async (
	element: HTMLElement,
	options: ExportOptions
): Promise<void> => {
	try {
		const { format, scale, filename } = options;

		// Configure export options
		const exportConfig = {
			quality: 0.95,
			pixelRatio: scale,
			cacheBust: true,
			style: {
				transform: 'scale(1)',
				transformOrigin: 'top left',
			},
		};

		let dataUrl: string;

		// Choose export function based on format
		switch (format) {
			case 'png':
				dataUrl = await toPng(element, exportConfig);
				break;
			case 'jpeg':
				dataUrl = await toJpeg(element, exportConfig);
				break;
			case 'svg':
				dataUrl = await toSvg(element, exportConfig);
				break;
			default:
				throw new Error(`Unsupported format: ${format}`);
		}

		// Trigger download
		const link = document.createElement('a');
		link.download = `${filename}.${format}`;
		link.href = dataUrl;
		link.click();
	} catch (error) {
		console.error('Export failed:', error);
		throw new Error('Failed to export banner. Please try again.');
	}
};

/**
 * Validate export requirements before attempting export
 */
export const validateExportRequirements = (
	element: HTMLElement | null
): boolean => {
	if (!element) {
		throw new Error('Banner element not found');
	}

	// Check if element has content
	const hasContent =
		element.textContent && element.textContent.trim().length > 0;
	if (!hasContent) {
		throw new Error('No text in banner');
	}

	return true;
};
