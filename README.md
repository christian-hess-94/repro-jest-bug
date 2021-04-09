##REPRO REPO FOR @REACT-NAVIGATION/STACK BUG WHEN USING JEST

### How to repro:
- Clone
- Install dependencies with yarn or npm
- execute test script (yarn test or npm test)

### Possible outcomes:
1. If tested as is, the test will pass (expected)
2. Uncomment line 10 in App.tsx and the test will fail ´with error:
```
/Users/christian.hess/Desktop/Repositorios/repro-jest-bug/node_modules/react-native-iphone-x-helper/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { Dimensions, Platform, StatusBar } from 'react-native';
                                                                                             ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)

```
3. Add below code to to package.json/jest 
```json  
"transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-picker-select|@react-native-picker|@expo/vector-icons/.*)"
    ]
```
and the test will fail with  error:
```
/Users/christian.hess/Desktop/Repositorios/repro-jest-bug/node_modules/@react-native/polyfills/error-guard.js:14
    type ErrorHandler = (error: mixed, isFatal: boolean) => void;
         ^^^^^^^^^^^^

    SyntaxError: Unexpected identifier

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)

```

