import path from 'path';
import webpack from 'webpack';
import {buildOptions} from "./config/build/buildOptions";
import {BuildEnv, BuildPath} from "./config/build/types/BuildOptions";


export default (env:BuildEnv) =>{
    const paths:BuildPath = {
        entry:path.resolve(__dirname,'src','index.tsx'),
        build:path.resolve(__dirname, 'dist'),
        html:path.resolve(__dirname, 'public','index.html')
    }
    const Port:number = env.port || 3000

    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const config: webpack.Configuration = buildOptions({
        mode,
        path:paths,
        port:Port,
        isDev,
    })

    return config
}

