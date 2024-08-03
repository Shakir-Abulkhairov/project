import webpack from "webpack";
import {BuildPath} from "./types/BuildOptions";

export function buildResolvers(options:BuildPath): webpack.ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        mainFiles: ['index'],
        modules:[options.src, 'node_modules'],
    }
}