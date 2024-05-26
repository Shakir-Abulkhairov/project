import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPath} from "./types/BuildOptions";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins ({html}:BuildPath): webpack.WebpackPluginInstance[] {
    return  [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: html,
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        })
    ]
}
