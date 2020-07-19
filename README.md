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

## Failures

### FeriadosList

As of tutos, "componentDidMount" can be replaced by "useEffect" with no "input" ...
But:

* if empty tuple, does not execute effect, so no api call, and no data
* if no observed param it fires api call forever (seems that "any change" means "forever")

``` js
useEffect(() => {
        // return () => {effect};
        props.doListFeriados()
        // }, [x])
    }, [] // componentDidMount
)
```

## Tips

* FeriadosList : replace componentDidMount -> (useState , useEffect) from React Hooks 

## TODO

### Redux-DevTools-extension" for PRODUCTION

store.js

        // FIXME: "remove Redux-DevTools-extension" for PRODUCTION

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

## Redux debug on Browser

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=es

Info + Setup:

> https://github.com/zalmoxisus/redux-devtools-extension

Others:

> https://github.com/zalmoxisus/redux-devtools-extension
> ?? https://github.com/ChromeDevTools/awesome-chrome-devtools
