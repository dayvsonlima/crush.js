Crush.js
=================

A MVC web application Node framework OO Based using Babel


## Router system

```javascript
// app/routes.js
export default function Routes() {
  this.root('photos#index')

  this.resources('photos')
  this.resources('books')
  this.resources('videos')

  this.resources('magazines', () => {
    this.resources('ads')
  })
}
```

## Friendly controller syntax

```javascript
// app/controllers/photos.js
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
// app/views/products/show.json
export default jbuilder.encode(function(json) {
  json.set('product', function(json) {
    json.extract(product, 'price', 'name', 'weight')
  })
})
// output: {"product":{"price":12.99,"name":"Foo","weight":"1kg"}}
```
