import TerserPlugin from 'terser-webpack-plugin';

export function buildOptimization() {
    return [
        new TerserPlugin({
            extractComments: false,
        }),
    ];
}
