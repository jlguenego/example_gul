var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
        app_02_webpack: './app/02_webpack/app.js',
        app_03_compile: './app/03_compile/app.js',
    },
	output: {
		path: './app/wpk',
		filename: '[name].js'
	},
	plugins: [
// uglify decrease the performance when building...
// so when developping comment it...
/*        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),*/
		new ExtractTextPlugin('[name].css')
    ],
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract(['css?sourceMap']) },
			
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			
			{test: /\.html$/, loader: 'ngtemplate?relativeTo=app!html'}
			
		]
    },
	devtool: 'source-map'
};

// ['style', 'css?sourceMap']
 