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

# Almost not used
yarn add @material-ui/core @material-ui/icons
```

## Styling

In order to avoid specific styling,
I worked this demo as bare html/css (no Bootstrap, Material, etc)

Just to include an icon, used materias EditIcon


## Failures

### FeriadosList

As of tutos, "componentDidMount" can be replaced by "useEffect" with no "input" ...
But, NOTE ...

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

## Tips

### Form handling: common operations

``` js 
// inside: src/components/FeriadoForm.js

import {useForm} ...

const {

        values,
        set_values,
        doChange,
        errors,
        set_errors,
    };

``` 
``` js 
// useForm.js

    // NOTE: can extract this for other forms

import React, { Component, useState } from 'react'; 

export const useForm = (initState) => {

    const [values, set_values] = useState(initState);

    // NOTE: can extract this for other forms

    const doChange = ev => {
        console.log("doChange ev:", ev); 
        console.log("doChange PRE values:", values); 
        const {name, value}=ev.target
        console.log("doChange {name, value}:", {name, value}); 
        set_values({
            ...values, [name]: value
        });

        console.log("doChange POS values:", values);
    }
    return {
        values,
        set_values,
        doChange,
        errors,
        set_errors,
    }

}
```
