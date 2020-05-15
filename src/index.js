/**
 * WordPress dependencies
 */
import { registerFormatType } from '@wordpress/rich-text';

/**
 * Internal dependencies
 */
import edit from './edit';

registerFormatType( 'mamaduka/highlight', {
	title: 'Highlight',
	tagName: 'mark',
	className: null,
	attributes: {
		style: 'style',
	},
	edit,
} );
