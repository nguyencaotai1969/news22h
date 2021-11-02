<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jnew' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<GB>U+C90#qN7D5Sxf6-H&d`5q8;UrAI55A!$.&#gQmld`{w6d/{en}_ct6_sZ%F' );
define( 'SECURE_AUTH_KEY',  'KN`uD?ABkD0etIek/OY~p{d/<6vpEqQk6xqJga(<PC~-v@n9].=~_Ee(boB&%fR*' );
define( 'LOGGED_IN_KEY',    '8ri`U~|*?z-yCwH:B8xuHcAA1`.7Dm,aI&Ql01}p,w;6r|{8x<t=)rgkdU@=FAJ%' );
define( 'NONCE_KEY',        '1)?ajN[2h]ypm *B.p<f#EM80Q7kK03GGe!K@hyuS8/ME++!=aVa&v/lidb_+FY/' );
define( 'AUTH_SALT',        '?cWbWE`=jA<]W]<,rfjsu/{s.Vy49*D/-r=JcMj_JEO4Y4IQcP[u$E-^ j%K$QM>' );
define( 'SECURE_AUTH_SALT', 'jsPLkb05O+MNNbV8[1:2:/><I#^XN$T@2&w<]3Bsa&AQZMdC+zSsUzd-hcDi7dG0' );
define( 'LOGGED_IN_SALT',   'LGvb)*,eA_VCPWfx:z:Rn.27m+}h?oqCuHT894VZOafX?+QA:CMUH!Jj@ztFkh*b' );
define( 'NONCE_SALT',       '@BHGs1ueJzj>|Q7KG[gLzV,GO*APt5&,JV>PlD{E7hetILzP_%2WF)arQhy}/2nz' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
