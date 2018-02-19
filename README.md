Crush.js
=================

A MVC web application Node framework OO Based using Babel


## Router system

```javascript
// app/routes.js
export default function Routes() {
  this.root('photos#index')

  this.resources('photos')
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
// app/views/photos/show.json
export default jbuilder.encode(function(json) {
  json.set('photo', function(json) {
    json.extract(photo, 'id', 'name', 'url')
  })
})
// output: {"photo":{"id":1,"name":"my photo","url":"localhost:9000/photos/media/my_photo.png"}}
```
