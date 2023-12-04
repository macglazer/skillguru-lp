import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `skillguru`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'pl',
			},
		},
		'gatsby-plugin-robots-txt',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-htaccess-redirects',
			options: {
				prefix:
					'<IfModule mod_rewrite.c>\n \
				RewriteEngine On\n \
				\n \
				RewriteCond %{HTTPS} off\n \
				RewriteCond %{HTTP:X-Forwarded-Proto} !https\n \
				RewriteCond %{HTTP_HOST} !^www. [NC]\n \
				RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]\n \
				ErrorDocument 404 /404.html\n \
				RewriteCond %{REQUEST_FILENAME} !-f\n\
				RewriteCond %{REQUEST_FILENAME} !-d\n\
				\n\
				RewriteCond %{REQUEST_URI} ^/404/$\n \
				RewriteRule ^(.*)$ /404/$ [L]\n \
				</IfModule>\n \
				\n \
				<ifModule mod_headers.c>\n \
				ExpiresActive On\n \
				ExpiresDefault A259200\n \
				\n \
				<filesMatch ".(gif|png|jpg|jpeg|ico|pdf|js|txt|webm|webp|woff2|js)$">\n \
						Header set Cache-Control "max-age=31536000"\n \
				</filesMatch>\n \
				\n \
				<filesMatch ".(css)$">\n \
						Header set Cache-Control "max-age=86400"\n \
				</filesMatch>\n \
			',
				suffix: '</IfModule>',
			},
		},
		{
			resolve: 'gatsby-plugin-zopfli',
			options: {
				extensions: ['css', 'html', 'js', 'svg'],
			},
		},
		{
			resolve: 'gatsby-plugin-brotli',
			options: {
				extensions: ['css', 'html', 'js', 'svg'],
			},
		},
	],
};

export default config;
