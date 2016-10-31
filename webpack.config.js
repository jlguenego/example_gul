var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/02_webpack/app.js',
	output: {
		path: './app/02_webpack',
		filename: 'app.bundle.js'
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
		new ExtractTextPlugin('styles.css')
    ],
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract(['css?sourceMap']) },
			
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			
			{test: /\.html$/, loader: 'ngtemplate?relativeTo=02_webpack!html'}
			
		]
    },
	devtool: 'source-map'
};

// ['style', 'css?sourceMap']
 