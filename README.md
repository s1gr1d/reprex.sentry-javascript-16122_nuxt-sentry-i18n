# Build Error Reproduction (Sentry and i18n)

Reproducing https://github.com/getsentry/sentry-javascript/issues/16122

Error while building:

```
 ERROR  The argument 'path' must be a string, Uint8Array, or URL without null bytes. Received '_reprex/16122-nuxt-sentry-i18n/i18n/\x00sentry-release-injection-file'    
    at lstatSync (node:fs:1711:10)
    at resolveModuleURL (node_modules/.pnpm/exsolve@1.0.5/node_modules/exsolve/dist/index.mjs:1247:20)
    at resolveModulePath (node_modules/.pnpm/exsolve@1.0.5/node_modules/exsolve/dist/index.mjs:1311:20)
    at _resolvePathGranularly (node_modules/.pnpm/@nuxt+kit@3.17.3_magicast@0.3.5/node_modules/@nuxt/kit/dist/index.mjs:2443:30)
    at async resolvePath (node_modules/.pnpm/@nuxt+kit@3.17.3_magicast@0.3.5/node_modules/@nuxt/kit/dist/index.mjs:2334:15)
    at async Object.handler (node_modules/.pnpm/@nuxtjs+i18n@10.0.0-beta.4_@vue+compiler-dom@3.5.13_db0@0.3.2_eslint@9.26.0_jiti@2.4.2__iored_2ygf5uw6vfbm32cmpprgfdx3uq/node_modules/@nuxtjs/i18n/dist/module.mjs:961:27)
    at async transform (node_modules/.pnpm/rollup@4.40.2/node_modules/rollup/dist/es/shared/node-entry.js:20928:16)
    at async ModuleLoader.addModuleSource (node_modules/.pnpm/rollup@4.40.2/node_modules/rollup/dist/es/shared/node-entry.js:21141:36)
```

If `i18n/i18n.config.ts` is removed, the error goes away. It only happens after `"@nuxtjs/i18n": "10.0.0-beta.4"`.

## Setup

To fully enable Sentry (but not needed for this reproduction), add a valid DSN to `sentry.client.config.ts` and `sentry.server.config.ts`.

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
