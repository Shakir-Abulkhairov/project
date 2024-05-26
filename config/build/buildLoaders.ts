import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/BuildOptions";

export function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[] {

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader ,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName:isDev
                               ? "[local]--[hash:base64:8]"
                                : "[hash:base64:8]"
                        },
                    },
                },
                "sass-loader",
            ],
    }

    const tsLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        tsLoader,
        cssLoader
    ]
}