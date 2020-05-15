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
	tagName: 'span',
	className: 'has-highlight-color',
	attributes: {
		style: 'style',
	},
	edit,
} );
