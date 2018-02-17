Crush.js
=================

A MVC web application Node framework OO Based using Babel


## Router system

```javascript
this.resources('photos')
this.resources('books')
this.resources('videos')

this.resources('magazines', () => {
  this.resources('ads')
})
```

## Friendly controller syntax

```javascript
import { Controller } from 'crush'

class Photos extends Controller {
  index() {
    this.render('show')
  }
}

export default Photos
```

## Create APIs easily

```javascript
export default jbuilder.encode(function(json) {
  json.set('product', function(json) {
    json.extract(product, 'price', 'name', 'weight');
  })
})
// Result
// {"product":{"price":12.99,"name":"Foo","weight":"1kg"}}
```
