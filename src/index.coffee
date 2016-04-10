{ createElement, DOM, isValidElement } = require 'react'
{ render } = require 'react-dom'
{ h1 } = DOM

{ Observable } = require 'rx'
{ run } = require '@cycle/core'
#{ h1, makeDOMDriver } = require '@cycle/dom'
{ just } = Observable

isChildElement = (child) ->
  isChildObject = typeof child is 'object'
  isReactElement = isValidElement child
  child and isChildObject and isReactElement

isStringOrNumber = (node) ->
  isString = typeof vtree is 'string'
  isNumber = typeof vtree is 'number'

makeReactDriver = (query) ->
  (vtree$) ->
    vtree$.subscribe((vtree) ->
      render(vtree, document.querySelector(query)))

main = ({ react }) ->
  react: just(h1(null, 'test'))

run(main, react: makeReactDriver('#app'))