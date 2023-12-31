const path = require('path');
exports.onCreateWebpackConfig = ({actions}) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src/components'),
				'@typography': path.resolve(__dirname, 'src/components/typography'),
				'@customTypes': path.resolve(__dirname, 'src/types'),
				'@styles': path.resolve(__dirname, 'src/styles'),
				'@fonts': path.resolve(__dirname, 'src/fonts'),
				'@hooks': path.resolve(__dirname, 'src/utils/hooks'),
				'@icons': path.resolve(__dirname, 'src/assets/icons'),
				'@sections': path.resolve(__dirname, 'src/sections'),
				'@images': path.resolve(__dirname, 'src/assets/images'),
			},
		},
	});
};
