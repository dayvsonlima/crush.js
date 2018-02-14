import http from 'http'
import Dispatcher from '@/crush/dispatcher'

http.createServer((request, response) => {
  const dispatcher = new Dispatcher(request, response)
  dispatcher.resolve({'Content-Type': 'application/json'})

}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')
