import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ColorPicker,
    TabPanel,
    Dashicon,
    TextControl,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

const Inspector = (props) => {
    //get attributes
    const { attributes, setAttributes } = props;
    const { color } = attributes;

    return (
        <>
                <InspectorControls>
                <PanelBody
                    className="dynamic-blcok_panel-body-wrapper"
                    initialOpen={true}
                >
                    <TabPanel
                        activeClass="active-tab"
                        className="db_tab-panel"
                        tabs={[
                            {
                                name: 'settings',
                                title: 'Settings',
                                className: 'db_tabl-panel-item',
                                icon: <Dashicon icon="admin-generic" />,
                            },
                            {
                                name: 'style',
                                title: 'Style',
                                className: 'db_tabl-panel-item',
                                icon: <Dashicon icon="art" />,
                            },
                        ]}
                    >
                        {(tab) => {
                            return (
                                <div>
                                    {tab.name === 'settings' && (
                                        <div>
                                            <PanelBody initialOpen={true}>
                                                <TextControl
                                                    label="Posts Per Page"
                                                    value={
                                                        attributes.postsPerPage
                                                    }
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            postsPerPage: value,
                                                        })
                                                    }
                                                />
                                            </PanelBody>
                                        </div>
                                    )}
                                    {tab.name === 'style' && (
                                        <div>
                                            <PanelBody className="habib-panel-body">
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
