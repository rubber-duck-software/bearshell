<p style="font-size: 100pt; margin-bottom: 0px; text-align: center">🐻</p>

_Bearshell_ is a minimal package to help shell scripting in Node.js.

### Install

```
npm install bearshell
```

```
yarn add bearshell
```

```
pnpm add bearshell
```

### Why Bearshell?

Bearshell is inspired by the excellent [zx](https://github.com/google/zx). If you want a broad set of features, Bearshell isn't right for you. Fundamentally, Bearshell is a lightweight wrapper around [child_process](https://nodejs.org/api/child_process.html) which enables syntax like

```js
// Bearshell
$`echo hello world`;
// child_process
execSync("echo hello world");

// Bearshell
await $.async`echo hello world`;
// child_process
await new Promise((resolve, reject) =>
  exec("echo hello world", (error, stdout, stderr) => {
    if (error) {
      throw error;
    } else if (stderr) {
      reject(stderr);
    } else {
      resolve(stdout);
    }
  })
);
```

## License

Licensed under [MIT](./LICENSE).
