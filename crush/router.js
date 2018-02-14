import router from '@/app/routes'

const resources = function(resource_name, { child=null, only=[] }) {
  this.routes = this.routes || {}

  this.routes[`GET /${resource_name}`] = `${resource_name}#index`
  this.routes[`PATCH /${resource_name}`] = `${resource_name}#update`
  this.routes[`PUT /${resource_name}`] = `${resource_name}#update`
  this.routes[`DELETE /${resource_name}`] = `${resource_name}#destroy`
  this.routes[`POST /${resource_name}`] = `${resource_name}#create`

  Array.from(arguments).forEach((argument) => {
    if(typeof argument == 'function') {
      argument()
    }
  })
}

router.prototype.resources = resources

export default router
