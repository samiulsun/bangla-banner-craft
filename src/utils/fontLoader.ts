/**
 * Utility functions for dynamic font loading
 */

import { CustomFont } from '@/types/banner';

/**
 * Load a custom font file and register it dynamically
 */
export const loadCustomFont = async (
	file: File,
	fontFamily: string
): Promise<CustomFont> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (e) => {
			const fontUrl = e.target?.result as string;

			// Create a new style element to inject @font-face
			const style = document.createElement('style');
			style.textContent = `
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
        }
      `;
			document.head.appendChild(style);

			// Trigger font load by creating a temporary element
			const testElement = document.createElement('div');
			testElement.style.fontFamily = fontFamily;
			testElement.style.position = 'absolute';
			testElement.style.visibility = 'hidden';
			testElement.textContent = 'বাংলা';
			document.body.appendChild(testElement);

			// Wait for font to load
			setTimeout(() => {
				document.body.removeChild(testElement);
				resolve({
					family: fontFamily,
					url: fontUrl,
					displayName: file.name.replace(/\.(ttf|woff|woff2|otf)$/i, ''),
				});
			}, 100);
		};

		reader.onerror = () => {
			reject(new Error('Failed to read font file'));
		};

		reader.readAsDataURL(file);
	});
};

/**
 * Generate a unique font family name from filename
 */
export const generateFontFamilyName = (filename: string): string => {
	const baseName = filename.replace(/\.(ttf|woff|woff2|otf)$/i, '');
	return `CustomFont_${baseName.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}`;
};

/**
 * Validate font file type
 */
export const isValidFontFile = (file: File): boolean => {
	const validExtensions = ['.ttf', '.woff', '.woff2', '.otf'];
	const fileName = file.name.toLowerCase();
	return validExtensions.some((ext) => fileName.endsWith(ext));
};

/**
 * Load external font from URL and inject CSS
 */
export const loadExternalFont = (fontFamily: string, fontUrl: string): void => {
	// Check if font CSS is already loaded
	const existingStyle = document.querySelector(
		`style[data-font="${fontFamily}"]`
	);
	if (existingStyle) {
		return; // Font already loaded
	}

	// Create and inject @font-face CSS
	const style = document.createElement('style');
	style.setAttribute('data-font', fontFamily);
	style.textContent = `
    @font-face {
      font-family: '${fontFamily}';
      src: url('${fontUrl}') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `;
	document.head.appendChild(style);

	console.log(`Loading external font: ${fontFamily} from ${fontUrl}`);
};
