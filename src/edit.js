/**
 * WordPress dependencies
 */
import { BlockFormatControls } from '@wordpress/block-editor';
import {
	applyFormat,
	getActiveFormat,
	removeFormat,
} from '@wordpress/rich-text';
import {
	ColorPalette,
	Dropdown,
	IconButton,
	Toolbar,
} from '@wordpress/components';

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

export default function HighlightEdit( { value, onChange } ) {
	const { attributes } = getActiveFormat( value, name ) || {};
	const currentColor = attributes ? attributes.dataColor : undefined;

	function toggleHighlight( color ) {
		if ( ! color ) {
			onChange( removeFormat( value, name ) );
			return;
		}

		onChange(
			applyFormat( value, {
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
							icon="editor-textcolor"
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
