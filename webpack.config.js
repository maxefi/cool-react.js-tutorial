// using bluebird promises as default
global.Promise = require('bluebird');

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var publicPath = '/public/assets';
//adding hash for production build for both css and js
var cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
var jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

var plugins = [
    //defining global build variables
    new webpack.DefinePlugin(
        {
            'process.env': {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }
    ),
    new ExtractTextPlugin(cssName)
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        //clean-webpack-plugin will clean up 'dist' directory before each new build
        new CleanWebpackPlugin(
            ['public/assets/'], {
                root: __dirname,
                verbose: true,
                dry: false
            }
        )
    );
    //optimization plugins
    // #todo read documentation about these
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}

module.exports = {
    //entry point for the application on client
    entry: ['babel-polyfill', './src/client.js'],
    debug: process.env.NODE_ENV !== 'production',
    //where to find and what files to use for imports
    resolve: {
        root: path.join(__dirname, 'src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins,
    output: {
        path: `${__dirname}/public/assets`,
        filename: jsName,
        publicPath
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            { test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/, /public/] },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    },
    // #todo read documentation about these
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
    //solbind CORS couse of a different ports on dev-server and the app
    devServer: {
        headers: { 'Access-Controll-Allow-Origin': '*' }
    }
};
