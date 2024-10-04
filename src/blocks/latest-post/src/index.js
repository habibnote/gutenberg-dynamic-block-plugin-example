import { registerBlockType } from '@wordpress/blocks';
import '../assets/style.scss';
import Edit from './edit';
import metadata from '../block.json';
import attributes from './attributes';

registerBlockType(metadata.name, {
    /**
     * @see ./edit.js
     */
    edit: Edit,
    attributes: attributes,
});
