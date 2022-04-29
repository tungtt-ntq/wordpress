<?php
/**
 * Enqueue scripts and styles.
 *
 * @since Reco 1.0
 *
 * @return void
 */
function reco_scripts() {
    // bootstrap styles.
    wp_enqueue_style( 'reco-bootstrap-style', get_stylesheet_directory_uri() . '/assets/css/bootstrap.min.css', array(), time() );

    //fas style
    wp_enqueue_style( 'reco-fas-style', get_stylesheet_directory_uri() . '/assets/css/fas-6.min.css', array(), time() );

    // carousel styles.
    wp_enqueue_style( 'reco-carousel-style', get_stylesheet_directory_uri() . '/assets/css/owl.carousel.min.css', array(), time() );

    // slider-pro styles.
    wp_enqueue_style( 'reco-slider-pro-style', get_stylesheet_directory_uri() . '/assets/css/slider-pro.min.css', array(), time() );

    //main style
    wp_enqueue_style( 'reco-style', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), time() );

    //jquery
    wp_enqueue_script(
        'reco-jquery',
        get_theme_file_uri( '/assets/js/jquery-3.3.1.slim.min.js' ),
        array(),
        time(),
        true
    );

    //carousel
    wp_enqueue_script(
        'carousel',
        get_theme_file_uri( '/assets/js/owl.carousel.min.js' ),
        array(),
        time(),
        true
    );

    //bootstrap
    wp_enqueue_script(
        'reco-bootstrap',
        get_theme_file_uri( '/assets/js/bootstrap.min.js' ),
        array(),
        time(),
        true
    );

    // bootstrap bundle
    wp_enqueue_script(
        'reco-bootstrap-bundle',
        get_theme_file_uri( '/assets/js/bootstrap.bundle.min.js' ),
        array(),
        time(),
        true
    );

    //popper js
    wp_enqueue_script(
        'reco-popper',
        get_theme_file_uri( '/assets/js/popper.min.js' ),
        array(),
        time(),
        true
    );

    // slider pro
    wp_enqueue_script(
        'reco-slider-pro',
        get_theme_file_uri( '/assets/js/jquery.sliderPro.min.js' ),
        array(),
        time(),
        true
    );

    //main js
    wp_enqueue_script(
        'reco-main',
        get_theme_file_uri( '/assets/js/main.js' ),
        array(),
        time(),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'reco_scripts' );

//remore parent css
function remove_twenty_twenty_one_scripts() {
    remove_action( 'wp_enqueue_scripts', 'twenty_twenty_one_scripts' );
}

add_action( 'after_setup_theme', 'remove_twenty_twenty_one_scripts' );

/**
 * Font Awesome Kit Setup
 *
 * This will add your Font Awesome Kit to the front-end, the admin back-end,
 * and the login screen area.
 */
if (! function_exists('fa_custom_setup_kit') ) {
    /**
     * @param string $kit_url
     */
    function fa_custom_setup_kit($kit_url = '') {
        foreach ( [ 'wp_enqueue_scripts', 'admin_enqueue_scripts', 'login_enqueue_scripts' ] as $action ) {
            add_action(
                $action,
                function () use ( $kit_url ) {
                    wp_enqueue_script( 'font-awesome-kit', $kit_url, [], null );
                }
            );
        }
    }
}

fa_custom_setup_kit('https://kit.fontawesome.com/83a06dfda7.js');

//get list primary menu object
if (! function_exists('get_list_primary_menu') ) {
    /**
     * @return string
     */
    function get_list_primary_menu() {
        global $post;
        $content = '';
        $menu = wp_get_nav_menu_object( '' );
        $locations = get_nav_menu_locations();
        if ( ! $menu && $locations['primary'] ) {
            $menu = wp_get_nav_menu_object( $locations[ 'primary' ] );
        }

        // If the menu exists, get its items.
        if ( $menu && ! is_wp_error( $menu ) && ! isset( $menu_items ) ) {
            $menu_items = wp_get_nav_menu_items( $menu->term_id, array( 'update_post_term_cache' => false ) );
        }

        if( $menu_items ) {
            foreach ( $menu_items as $menu_item ) {
                $active_class = '';
                if( $post && isset($post->ID) && $menu_item->object_id == $post->ID ) {
                    $active_class = 'page-active';
                }
                $content .= sprintf("<li class='nav-item'>
                                <a class='nav-link active navigate-link %s' aria-current='page' href='%s'>%s</a> 
                            </li>", $active_class, $menu_item->url, $menu_item->title );
            }
        }

        return $content;
    }
}
