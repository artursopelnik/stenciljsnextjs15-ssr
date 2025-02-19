import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      outDir: '../react-library/lib/components/stencil-generated/'
    }),
    reactOutputTarget({
      outDir: '../react-library-ssr/lib/components/stencil-generated/',
      hydrateModule: '@demo/stencil-library/hydrate',
      esModules: true
    })
  ],
  testing: {
    browserHeadless: "shell",
  },
};
