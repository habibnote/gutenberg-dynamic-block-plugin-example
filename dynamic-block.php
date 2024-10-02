<?php

/**
 * Plugin Name:       Dynamic Block
 * Description:       Dynamic Block 
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Md. Habib
 * License:           GPL-2.0-or-later
 * License URI:       
 * Text Domain:       dynamic block
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

function dynamic_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'dynamic_block_init');
