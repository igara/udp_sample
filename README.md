# udp_sample

> An electron-vue project

### How to use

NodeJS: v8.11.3

``` bash
# install dependencies
npm install [or yarn]
```

#### Start Sample UDP Echo Server

``` bash
npm run serve [or yarn serve]
```

#### Software Build

``` bash
# install dependencies
npm install [or yarn]

# re-build OS Modules
# もしかするとOSごとにビルドし直す必要がありそう?
./node_modules/.bin/electron-rebuild -f iohook

mkdir -p node_modules/iohook/builds/electron-v57-darwin-x64/build/Release
cp iohook.node node_modules/iohook/builds/electron-v57-darwin-x64/build/Release/iohook.node

# serve with hot reload at localhost:9080
npm run dev [or yarn dev]

# build electron application for production
npm run build [or yarn build]


# lint all JS/Vue component files in `src/`
npm run lint [or yarn lint]

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[4c6ee7b](https://github.com/SimulatedGREG/electron-vue/tree/4c6ee7bf4f9b4aa647a22ec1c1ca29c2e59c3645) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
