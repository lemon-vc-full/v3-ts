import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import windiCSS from 'vite-plugin-windicss'
import { join } from 'path'

function resolve(dir: string) {
    return join(__dirname, dir)
}

export default defineConfig({
    plugins: [
        vue(),
        windiCSS(),
        AutoImport({
            imports: ['vue'],
            resolvers: [
                ElementPlusResolver(),
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon',
                }),
            ],
            dts: resolve('src/auto-imports.d.ts'),
        }),
        Components({
            extensions: ['vue', 'md'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
            ],
            dts: resolve('src/components.d.ts'),
        }),
        Icons({
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('src'),
            },
        ],
    },
})
