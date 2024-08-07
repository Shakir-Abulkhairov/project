import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {BuildOptions} from "./types/BuildOptions";


export function buildDevServer({port}:BuildOptions): DevServerConfiguration{
    return{
        port,
        open:true,
        historyApiFallback:true,
        hot: true,
    }
}