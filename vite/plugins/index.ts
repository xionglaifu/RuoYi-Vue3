/*
 * @Description:
 * @Author: Panda
 * @Date: 2024-02-27 15:19:26
 * @LastEditors: Panda
 * @LastEditTime: 2024-02-29 15:59:39
 * @FilePath: \shop-admind:\vueworkspace\RuoYi-Vue3\vite\plugins\index.ts
 */
import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createComponents from './components'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
import { PluginOption } from 'vite'
// import createOptimizationPersist from './optimizationPersist'
// import createPkgConfig from './pkgConfig'

export default function createVitePlugins(viteEnv: Record<string, string>, isBuild = false) {
  const vitePlugins: PluginOption[] = [vue()]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createSetupExtend())
  //   vitePlugins.push(createOptimizationPersist())
  //   vitePlugins.push(createPkgConfig())
  vitePlugins.push(createSvgIcon(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
