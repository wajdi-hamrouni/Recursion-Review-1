
var isObject = function (object) {
    return Object.prototype.toString.call(object) === '[object Object]';
};

var mutArray = function (object) {
    return object.reduce(function (acc, element, i) {
        acc[i] = mutate(element);
        return acc;
    }, {});
};

var mutObject = function (obj) {
    return Object.keys(obj).map((key) =>
        Number(key) == key ? [Number(key), mutate(obj[key])] : [key, mutate(obj[key])]
    );
};

var mutate = function (obj) {
    if (Array.isArray(obj)) {
        return mutArray(obj);
    }
    else if (isObject(obj)) {
        return mutObject(obj);
    }
    else {
        return obj
    }
};
