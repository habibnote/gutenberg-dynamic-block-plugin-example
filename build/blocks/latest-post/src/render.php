<div class="latest-posts-wrapper">
    <?php
    $query = new WP_Query([
        'post_type'         => 'post',
        'posts_per_page'    => 3,
        'order'             => 'DESC',
        'orderby'           => 'date'
    ]);
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
    ?>
            <article class="single-post">
                <?php the_post_thumbnail(); ?>
                <h2><?php the_title(); ?></h2>
                <div class="meta-data">
                    <span><?php get_the_date(); ?></span>|
                    <span>
                        By <a href="#">Md. Habib</a>
                    </span>
                </div>
                <?php the_excerpt(); ?>
                <div>
                    <a href="<?php the_permalink(); ?>"><?php esc_html_e('Read More', 'textdomain'); ?></a>
                </div>
            </article>
    <?php

        }
    }
    ?>

</div>