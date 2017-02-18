<h1><img src="https://raw.githubusercontent.com/duboviy/inspector-freimut.js/master/logo.png" height=65 alt="logo" title="logo"> inspector-freimut.js</h1>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2aca58b87ba549e3aad741e798ab9f63)](https://www.codacy.com/app/dubovoy/inspector-freimut-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=duboviy/inspector-freimut.js&amp;utm_campaign=Badge_Grade) [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/duboviy/inspector-freimut.js/) [![PRs & Issues Welcome](https://img.shields.io/badge/PRs%20&%20Issues-welcome-brightgreen.svg)](https://github.com/duboviy/inspector-freimut.js/pulls) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/duboviy/inspector-freimut.js/)

## Summary
Utilities made to extend introspection in js


## Basic usage examples

### isFunction(func), isArray(arr), isObject(obj), isString(str)

Predicate functions (returns true if a given variable matches):

```js
$u.isFunction(function(){});
//true
$u.isFunction('');
//false

$u.isArray([]);
//true
$u.isArray('');
//false

$u.isObject({});
//true
$u.isObject('');
//false

$u.isString('');
//true
$u.isString({});
//false
```

### keys(obj)
return keys of given object:

```js
var obj = {name: '1',value: '2', some: '3'};
$u.keys(obj);
//["name", "value", "some"]
```

### values(obj)
return values of given object:

```js
var obj = {name: '1',value: '2', some: '3'};
$u.values(obj);
//["1", "2", "3"]
```

## Tests

### To run tests use tests/index.html

You should see following *test results* in your browser:
<img src="https://raw.githubusercontent.com/duboviy/inspector-freimut.js/master/tests/test_results.png" alt="test_results" title="test_results">


## License

**MIT** licensed library. See [LICENSE](LICENSE) for details.


## Contributing

If you have suggestions for improving the inspector-freimut.js, please [open an issue or
pull request on GitHub](https://github.com/duboviy/inspector-freimut.js/).

### She looks at you like ... like your code need to be inspected ASAP :smile:

<img src="https://raw.githubusercontent.com/duboviy/inspector-freimut.js/master/logo.png">


## Badges

[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://github.com/duboviy/inspector-freimut.js/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/duboviy/inspector-freimut.js/) [![forthebadge](http://forthebadge.com/images/badges/built-by-hipsters.svg)](https://github.com/duboviy/inspector-freimut.js/) [![forthebadge](http://forthebadge.com/images/badges/built-with-swag.svg)](https://github.com/duboviy/inspector-freimut.js/)

[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](https://github.com/duboviy/inspector-freimut.js/) [![forthebadge](http://forthebadge.com/images/badges/powered-by-oxygen.svg)](https://github.com/duboviy/inspector-freimut.js/) [![forthebadge](http://forthebadge.com/images/badges/powered-by-water.svg)](https://github.com/duboviy/inspector-freimut.js/) [![forthebadge](http://forthebadge.com/images/badges/powered-by-responsibility.svg)](https://github.com/duboviy/inspector-freimut.js/)

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](https://github.com/duboviy/inspector-freimut.js/)
