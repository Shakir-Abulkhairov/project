import {BuildOptions} from "./types/BuildOptions";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import { Configuration } from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildOptimization} from "./buildOptimization";


export function buildOptions(config:BuildOptions):Configuration {
    const {mode,path,isDev} = config
    return {
        mode,
        entry:path.entry,
        output:{
            path:path.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(config),
        module: {
            rules: buildLoaders(config),
        },
        resolve: buildResolvers(path),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(config) : undefined,
        optimization: {
            minimizer: buildOptimization(),
        },
    }
}