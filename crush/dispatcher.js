class Dispatcher {
  constructor(request, response) {
    this.request = request
    this.response = response
  }

  resolve(headers={}) {
    this.respond('Crush.js', {headers: headers})
  }

  respond(content, { status=200, headers={} }) {
    this.response.writeHead(status, headers)
    this.response.end(`${content}\n`)
  }
}

export default Dispatcher
