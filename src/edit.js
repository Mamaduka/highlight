/**
 * WordPress dependencies
 */
import { BlockFormatControls } from '@wordpress/block-editor';
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

export default function HighlightEdit( props ) {
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
							value="#fbf3db"
							clearable={ true }
							onChange={ ( color ) => console.log( { color } ) }
						/>
					) }
				/>
			</Toolbar>
		</BlockFormatControls>
	);
}
