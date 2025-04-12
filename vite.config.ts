import { defineConfig } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';

import TransformPages from 'uni-read-pages-vite';
import eslintPlugin from 'vite-plugin-eslint';
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite';

export default defineConfig(async () => {
    const { default: tailwindcss } = await import('@tailwindcss/vite');
    return {
        server: {
            //跨域配置
            host: '0.0.0.0',
            port: 5174,
            open: true,
        },
        build: {
            sourcemap: true,
            lib: {
                entry: resolve(__dirname, './src/index.ts'),
                name: 'ComponentLibrary',
            },
            reportCompressedSize: false,
        },
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, 'src'),
                },
            ],
        },
        plugins: [
            tailwindcss(),
            UnifiedViteWeappTailwindcssPlugin({
                rem2rpx: true,
            }),
            eslintPlugin({
                include: [
                    'src/**/*.ts',
                    'src/**/*.vue',
                    'src/*.ts',
                    'src/*.vue',
                ],
            }),
            Components({
                resolvers: [WotResolver()],
            }),
            uni(),
        ],
        define: {
            ROUTES: new TransformPages().routes,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ['legacy-js-api'],
                },
            },
        },
    };
});
