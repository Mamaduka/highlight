const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	...defaultConfig,

	entry: {
		...defaultConfig.entry,

		editor: path.resolve( process.cwd(), 'src', 'editor.scss' ),
	},

	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { url: false, sourceMap: ! isProduction },
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! isProduction,
						},
					},
				],
			},
		],
	},

	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin( { filename: '[name].css' } ),
		new OptimizeCssAssetsPlugin(),
		new IgnoreEmitPlugin( [ 'editor.js', 'editor.asset.php' ] ),
	],
};
