/**
 * WordPress dependencies
 */
import { BlockFormatControls } from '@wordpress/block-editor';
import {
	ColorPalette,
	Dropdown,
	IconButton,
	Toolbar,
	Popover,
} from '@wordpress/components';

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
							aria-expanded={ isOpen }
							onClick={ onToggle }
						/>
					) }
					renderContent={ () => <div>Select colors</div> }
				/>
			</Toolbar>
		</BlockFormatControls>
	);
}
