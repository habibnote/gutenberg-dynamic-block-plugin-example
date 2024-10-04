import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ColorPicker,
    TabPanel,
    Dashicon,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

const Inspector = (props) => {
    //get attributes
    const { attributes, setAttributes } = props;
    const { color } = attributes;

    // const [activeTab, setActiveTab] = useState();

    return (
        <>
            <InspectorControls>
                <PanelBody title="Settings" initialOpen={true}>
                    <TabPanel
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: 'tab1',
                                title: 'Hi',
                                className: 'tab1',
                                icon: <Dashicon icon="art" />,
                            },
                            {
                                name: 'tab2',
                                title: 'Tab 2',
                                className: 'tab2',
                            },
                        ]}
                    >
                        {(tab) => {
                            return (
                                <div>
                                    {tab.name === 'tab1' && (
                                        <div>
                                            <PanelBody title={__('Styles')}>
                                                <ColorPicker
                                                    value={color}
                                                    onChange={(newColor) =>
                                                        setAttributes({
                                                            color: newColor,
                                                        })
                                                    }
                                                />
                                            </PanelBody>
                                        </div>
                                    )}
                                    {tab.name === 'tab2' && (
                                        <div>
                                            <h2>Content for Tab 2</h2>
                                            {/* Add controls for Tab 2 here */}
                                        </div>
                                    )}
                                </div>
                            );
                        }}
                    </TabPanel>
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
