var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
        'app_02_webpack': './app/02_webpack/app.js',
        'app_03_noRootScope': './app/03_noRootScope/app.js',
		'app_04_controller': './app/04_controller/app.js'
    },
	output: {
		path: './app/wpk',
		filename: '[name].js'
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
    ],
	module: {
		loaders: [
			{test: /\.css$/, loader: ExtractTextPlugin.extract(['css?sourceMap'])},

			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},

			{test: /\.html$/, loader: 'ngtemplate?relativeTo=app!html'}

		]
    },
	devtool: 'source-map',
	setupProd: function() {
		// console.log('setupProd', this);
		this.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        }));
	}
};

