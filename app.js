import http from 'http'
import Dispatcher from '@/crush/dispatcher'
import Router from '@/crush/router'

http.createServer((request, response) => {
  const router = new Router
  const dispatcher = new Dispatcher(request, response, router.routes)

  dispatcher.resolve()

}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')
