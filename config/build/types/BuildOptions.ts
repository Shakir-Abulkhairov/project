export type BuildPath = {
    entry:string
    html:string
    build:string
}

export type BuildMode = 'production' | 'development'

export interface BuildEnv {
    mode:BuildMode
    port:number
}

export type BuildOptions = {
    mode:BuildMode,
    path: BuildPath
    port:number
    isDev:boolean
}