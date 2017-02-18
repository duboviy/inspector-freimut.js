(function() {
    var base = this;
	
    var nativeKeys       = Object.keys;
    var objProto         = Object.prototype;
    var toString         = objProto.toString,
        hasOwnProperty   = objProto.hasOwnProperty;

    var $isFunction = function (fn) {
        return toString.call(fn) === '[object Function]';
    };

    var $isArray = function (arr) {
        return toString.call(arr) === '[object Array]';
    };

    var $isObject = function (obj) {
        return toString.call(obj) === '[object Object]';
    };

    var $isString = function (str) {
        return toString.call(str) == '[object String]';
    };

    var $trim = ''.trim
        ? function(s) { return s.trim(); }
        : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

    var $has = function(obj, key) {
        if (!$isObject(obj)) throw new TypeError('Invalid object');
        if (!key) throw new TypeError('Invalid key');
        return hasOwnProperty.call(obj, key);
    };

    var $keys = nativeKeys || function(obj) {
        if (!$isObject(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj) {
            if ($has(obj, key)) keys[keys.length] = key;
        }
        return keys;
    };

    var $values = function(obj) {
        if (!$isObject(obj)) throw new TypeError('Invalid object');
        var values = [];
        for (var key in obj) {
            if ($has(obj, key)) values.push(obj[key]);
        }
        return values;
    };

    var $functions = function(obj) {
        var names = [];
        for (var key in obj) {
            if ($isFunction(obj[key])) names.push(key);
        }
        return names;
    };

    var $isEmpty = function(obj) {
        if (obj == null) return true;
        if ($isArray(obj) || $isString(obj)) return obj.length === 0;
        for (var key in obj) {
            if ($has(obj, key)) return false;
        }
        return true;
    };

    var $u = {
        isFunction : $isFunction,
        isArray    : $isArray,
        isObject   : $isObject,
        isString   : $isString,
        isEmpty    : $isEmpty,
        trim       : $trim,
        keys       : $keys,
        values     : $values,
        functions  : $functions,
        has        : $has,
    };

    this.$u = this.$u || $u;


}).call(this);