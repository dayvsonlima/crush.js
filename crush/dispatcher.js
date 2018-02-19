class Dispatcher {
  constructor(request, response, routes) {
    this.request = request
    this.response = response
    this.routes = routes
  }

  resolve() {
    this.getController()
    this.respond('Crush.js', {'Content-Type': 'application/json'})
  }

  respond(content, { status=200, headers={} }) {
    this.response.writeHead(status, headers)
    this.response.end(`${content}\n`)
  }

  getController() {
    return this.routerMethod()
  }

  currentRouter() {
    let url = this.request.url
                .replace(/\/\/\//g, '/')
                .replace(/\/\//g, '/')
                .replace(/\/$/, '')

    const requestMethod = this.request.method
    const routerPath = `${requestMethod} ${url}`

    return routerPath;
  }

  routerMethod() {
    const currentRouter = this.currentRouter()
    return this.routes[currentRouter]
  }
}

export default Dispatcher
