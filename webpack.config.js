var webpack = require('webpack');

var config = {
	entry: './App.jsx',
	output:{
		path:'/',
		filename:'index.js'
	},
	devServer:{
		inline:true,
		port:9999
	},
	devtool: 'source-map',
	module: {		
		rules:[	
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{
					presets:['es2015', 'react', 'stage-0']
				}
			}
		]
	}
};

module.exports = config;