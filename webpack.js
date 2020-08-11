const SriPlugin = require("webpack-subresource-integrity");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
	mode: "development",
	output: {
		path: require("path").resolve("out"),
		filename: "[name].js",
		chunkFilename: "[name].chunk.js",
		crossOriginLoading: "anonymous"
	},
	serve: {
		content: "static",
		clipboard: false,
		open: true,
		hot: false,
	},
	entry: {
		index: ["./script.js"]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					ExtractCssChunks.loader,
					"css-loader"
				]
			}
		]
	},

	plugins: [
		new ExtractCssChunks(),
		new SriPlugin({
			enabled: true,
			hashFuncNames: ["sha256"]
		})
	]
}
