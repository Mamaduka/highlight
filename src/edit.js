/**
 * WordPress dependencies
 */
import { BlockFormatControls } from '@wordpress/block-editor';
import { toggleFormat } from '@wordpress/rich-text';
import {
	ColorPalette,
	Dropdown,
	IconButton,
	Toolbar,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import icon from './icon';
import './editor.scss';

const COLORS = [
	{ name: 'Yellow', color: '#fbf3db' },
	{ name: 'Orange', color: '#faebdd' },
	{ name: 'Green', color: '#ddedea' },
	{ name: 'Blue', color: '#ddebf1' },
	{ name: 'Purple', color: '#eae4f2' },
	{ name: 'Pink', color: '#f4dfeb' },
	{ name: 'Red', color: '#fbe4e4' },
];

const name = 'mamaduka/highlight';

export default function HighlightEdit( { activeAttributes, value, onChange } ) {
	const { dataColor: currentColor } = activeAttributes;

	function toggleHighlight( color ) {
		onChange(
			toggleFormat( value, {
				type: name,
				attributes: {
					dataColor: color,
					style: `background: ${ color };`,
				},
			} )
		);
	}

	return (
		<BlockFormatControls>
			<Toolbar>
				<Dropdown
					className="highlight-color"
					contentClassName="highlight-color__popover"
					position="bottom right"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<IconButton
							icon={ icon }
							label="Highlight color"
							aria-haspopup="true"
							aria-expanded={ isOpen }
							onClick={ onToggle }
						/>
					) }
					renderContent={ () => (
						<ColorPalette
							colors={ COLORS }
							value={ currentColor }
							clearable={ true }
							onChange={ toggleHighlight }
						/>
					) }
				/>
			</Toolbar>
		</BlockFormatControls>
	);
}
