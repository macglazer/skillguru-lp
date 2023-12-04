import React from 'react';
// import image from '../assets/images/x.webp';

interface SEOProps {
	title: string;
	description: string;
	ogTitle?: string;
	ogDescription?: string;
	ogUrl?: string;
}

const SEO = (props: SEOProps) => {
	const {title, description, ogTitle, ogDescription, ogUrl} = props;

	const mediaTitle = ogTitle ?? title;
	const mediaDescription = ogDescription ?? description;

	return (
		<>
			<title>{title}</title>
			<meta
				name='keywords'
				content='mentorzy'
			/>
			<meta name='description' content={description} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={mediaTitle} />
			<meta name='og:description' content={mediaDescription} />
			{ogUrl &&<meta name='og:url' content={ogUrl} />}
			{/* {image && <meta name='og:image' content={image} />} */}
		</>
	);
};

export default SEO;
