import {useState, useEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {IGatsbyImageData, getImage} from 'gatsby-plugin-image';

interface IImageNode {
	gatsbyImageData: IGatsbyImageData;
	resize: {
		originalName: string;
	};
}

interface IImageData {
	[key: string]: IGatsbyImageData;
}

const useImage = (): IImageData => {
	const [images, setImages] = useState<IImageData>({});

	const {
		allImageSharp: {edges},
	} = useStaticQuery(graphql`
		query {
			allImageSharp {
				edges {
					node {
						gatsbyImageData(placeholder: BLURRED, formats: WEBP, quality: 100)
						resize {
							originalName
						}
					}
				}
			}
		}
	`);

	useEffect(() => {
		let images = {};
		edges.forEach(({node}: {node: IImageNode}) => {
			images = {
				...images,
				[node.resize.originalName.replace(/\.[^/.]+$/, "")]: getImage(node.gatsbyImageData),
			};
		});

		setImages(images);
	}, [edges]);

	return images;
};

export default useImage;
