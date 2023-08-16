## Instalación

```shell
npm init -y
```

## Dependencias necesarias para configurar Vite

```
npm install -D @vitejs/plugin-react vite
```

## vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```