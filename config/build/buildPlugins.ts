import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions, BuildPath} from "./types/BuildOptions";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins (config:BuildOptions): webpack.WebpackPluginInstance[] {
    const {path,isDev} = config
    return  [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.html,
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__:JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
