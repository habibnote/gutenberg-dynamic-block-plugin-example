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
