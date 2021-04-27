const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	resolve: {
		modules: [path.resolve('./src'), path.resolve('./node_modules')]
	},
	entry: ['./src/renderers/dom.js'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'react']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	plugins: [new ExtractTextPlugin('css/styles.css')]
};
