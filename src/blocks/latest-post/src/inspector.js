import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ToggleControl,
    ColorPalette,
    ColorPicker,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const Inspector = (props) => {
    //get attributes
    const { attributes, setAttributes } = props;
    const { color } = attributes;

    const colors = [
        { name: 'Body', color: '#272435' },
        { name: 'Primary', color: '#7351FD' },
        { name: 'Body Light', color: '#737791' },
        { name: 'Title', color: '#120350' },
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Styles', 'easycommerce')}>
                    <ColorPicker
                        value={color}
                        onChange={(newColor) =>
                            setAttributes({
                                color: newColor,
                            })
                        }
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
