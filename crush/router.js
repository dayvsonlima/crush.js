import router from '@/app/routes'

class Router {

  init() {
    if(this.routes) { return }

    this.currentResources = []
    this.routes = {}
  }

  root(method_path) {
    this.init()

    this.routes['GET /'] = method_path
  }

  resources(resource_name, args={ child: null, only: [] }) {
    this.init()
    this.buildRoutes(resource_name)
    this.addCurrentResource(`${resource_name}/:id`)
    this.buildNestedResources(arguments)
    this.removeCurrentResource(`${resource_name}/:id`)
  }

  buildRoutes(resource_name) {
    let parent_route = this.currentResources.join('/')
    let current_route = `${parent_route}/${resource_name}`

    if (current_route[0] != '/') { current_route = `/${current_route}` }

    this.routes[`GET ${current_route}`] = `${resource_name}#index`
    this.routes[`GET ${current_route}/new`] = `${resource_name}#new`
    this.routes[`POST ${current_route}`] = `${resource_name}#create`
    this.routes[`GET ${current_route}/:id`] = `${resource_name}#show`
    this.routes[`PUT ${current_route}/:id`] = `${resource_name}#update`
    this.routes[`PATCH ${current_route}/:id`] = `${resource_name}#update`
    this.routes[`DELETE ${current_route}/:id`] = `${resource_name}#destroy`
  }

  addCurrentResource(resource_name) {
    this.currentResources.push(resource_name)
  }

  buildNestedResources(args) {
    Array.from(args).forEach((argument) => {
      if(typeof argument == 'function') { argument() }
    })
  }

  removeCurrentResource(resource_name) {
    const resourceIndex = this.currentResources.indexOf(resource_name)

    this.currentResources.splice(resourceIndex, 1)
  }
}

router.prototype = Router.prototype

export default router
