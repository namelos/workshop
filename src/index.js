// Generated by CoffeeScript 1.9.3
var DOM, Observable, createElement, h1, isChildElement, isStringOrNumber, isValidElement, just, main, makeReactDriver, ref, render, run;

ref = require('react'), createElement = ref.createElement, DOM = ref.DOM, isValidElement = ref.isValidElement;

render = require('react-dom').render;

h1 = DOM.h1;

Observable = require('rx').Observable;

run = require('@cycle/core').run;

just = Observable.just;

isChildElement = function(child) {
  var isChildObject, isReactElement;
  isChildObject = typeof child === 'object';
  isReactElement = isValidElement(child);
  return child && isChildObject && isReactElement;
};

isStringOrNumber = function(node) {
  var isNumber, isString;
  isString = typeof vtree === 'string';
  return isNumber = typeof vtree === 'number';
};

makeReactDriver = function(query) {
  return function(vtree$) {
    return vtree$.subscribe(function(vtree) {
      return render(vtree, document.querySelector(query));
    });
  };
};

main = function(arg) {
  var react;
  react = arg.react;
  return {
    react: just(h1(null, 'test'))
  };
};

run(main, {
  react: makeReactDriver('#app')
});

//# sourceMappingURL=index.js.map
