#

## Recreate this app

``` sh
app="mern-t00-03"
npx create-react-app mern-t00-03
cd ${app}

CODE .
yarn
yarn start
yarn add redux react-redux redux-thunk
yarn add axios 

```

## Tips

* FeriadosList : replace componentDidMount -> (useState , useEffect) from React Hooks 

## TODO

### api.js

> Port setup for environment/start up

``` js
// FIXME: move to constants or environment
```

> Server API + version

``` js
const UrlBase = "http://192.168.1.53:57016/" // NOTE: /api/v1
```

## Tuto from

https://www.youtube.com/watch?v=NemyDIUcC64
