<?php get_header(); ?>
    <div class="homepage">
        <?php get_template_part('template-parts/home/content', 'slide') ?>
        <?php get_template_part('template-parts/home/content', 'description') ?>
        <?php get_template_part('template-parts/home/content', 'policy') ?>
        <?php get_template_part('template-parts/home/content', 'job') ?>
        <?php get_template_part('template-parts/home/content', 'process') ?>
        <?php get_template_part('template-parts/home/content', 'object') ?>
        <?php get_template_part('template-parts/home/content', 'comment') ?>
        <?php get_template_part('template-parts/home/content', 'brand') ?>
    </div>
<?php
get_footer();
