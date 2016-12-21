var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// very slow
//var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
	entry: {
        'app_02_webpack': './app/02_webpack/app.js',
        'app_03_noRootScope': './app/03_noRootScope/app.js',
		'app_04_controller': './app/04_controller/app.js',
		'app_05_karma': './app/05_karma/app.js'
    },
	output: {
		path: './app/wpk',
		filename: '[name].js'
	},
	plugins: [
		new ExtractTextPlugin('[name].css'),

		//new ngAnnotatePlugin({
       //     add: true,
            // other ng-annotate options here
        //})
    ],
	module: {
		loaders: [
			// ng-annotate loader ! That is the solution for a quick devtest loop!
			{test: /\.js$/, loaders: ['ng-annotate']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract(['css?sourceMap'])},
			// css-loader use file-loader and url-loader to require the fonts.
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			// managing angular templates into javascript file.
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

		this.plugins.push(new webpack.DefinePlugin({
			PROD: JSON.stringify(true)
		}));
	}
};

