# Shared Launchpad

Shared Launchpad is a lightweight component library that serves as a navigation bridge between internal apps (e.g. UMS, DC Internal). It allows users to seamlessly switch between applications while maintaining their login session, enabling automatic sign-in without re-entering credentials.

---

## Table of Contents

- [Local development (quick guide)](#local-development-quick-guide)
  - [1. Build the library](#1-build-the-library)
  - [2. Test in a consumer app](#2-test-in-a-consumer-app-ums-dc-internal-etc)
  - [3. Update workflow — when you change the library](#3-update-workflow--when-you-change-the-library)
- [Notes & troubleshooting](#notes--troubleshooting)
- [Cleanup / Production](#cleanup--production)

---

## Local development (quick guide)

### 1. Build the library

After editing code in the component library, run from the library root:

```bash
pnpm build
```

This produces the `dist` (or configured) build output used by consumer apps.

---

### 2. Test in a consumer app (UMS, DC Internal, etc)

1. In the consumer app's `package.json`, add the local file dependency (path is relative to the consumer app root):

```json
"dependencies": {
  "shared-launchpad": "file:../shared-launchpad",
  ...
}
```

2. From the consumer app folder, install dependencies:

```bash
yarn install
```

3. Run the consumer app (usual dev command):

```bash
yarn dev
```

---

### 3. Update workflow — when you change the library

Whenever you make changes to the component library, follow these steps in order to ensure the consumer app picks up the new build:

1. Rebuild the library (from the library directory):

```bash
pnpm build
```

2. In the consumer app, **remove the **`** entry from **`.

- Open `yarn.lock`, search for the block starting with `shared-launchpad@file:../shared-launchpad` and delete that entire block.

3. Reinstall dependencies in the consumer app:

```bash
yarn install
```

4. Clear Next.js build cache (so styles and compiled pages update):

```bash
rm -rf .next
```

(Windows PowerShell alternative: `Remove-Item -Recurse -Force .next`)

5. Start the consumer app:

```bash
yarn dev
```

> This sequence (delete yarn.lock block → `yarn install` → remove `.next`) ensures the local `file:` package is re-resolved and Next.js rebuilds with the updated component code.

---

## Notes & troubleshooting

- Always run `pnpm build` in the library before reinstalling into the consumer app.
- If styles or code don't appear updated:
  - Confirm you rebuilt the library.
  - Remove the `shared-launchpad` block from `yarn.lock` then run `yarn install`.
  - Clear `.next` (and optionally browser cache) and restart the dev server.
- Alternative local workflows (optional):
  - `yarn link` / `pnpm link` can be used for faster iteration, but behavior may vary compared to the `file:` approach.

---

## Cleanup / production

- Remove the `file:` entry from `package.json` in consumer apps before publishing or deploying.
- Publish the library to your package registry and install the released version for production usage.

---

If you want, I can also generate a short troubleshooting checklist or add Windows-specific command examples. Let me know!
