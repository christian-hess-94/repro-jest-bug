##REPRO REPO FOR @REACT-NAVIGATION/STACK BUG WHEN USING JEST

### How to repro:
- Clone
- Install dependencies with yarn or npm
- execute test script (yarn test or npm test)

### Possible outcomes:
1. If tested as is, the test will pass (expected)
2. Uncomment line 10 in App.tsx and the test will fail
3. Add below code to to package.json/jest and the test will fail with a different error
```  
"transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-picker-select|@react-native-picker|@expo/vector-icons/.*)"
    ]
```

