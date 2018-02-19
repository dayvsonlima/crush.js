import { expect } from 'chai'
import Dispatcher from '@/crush/dispatcher'

describe('Dispatcher', () => {
  const request = {
    url: '/users/',
    method: 'GET'
  }

  const response = {}

  const routes = {
    'GET /users': 'home#index'
  }

  const dispatcher = new Dispatcher(request, response, routes)

  describe('#currentRouter', () => {
    const subject = dispatcher.currentRouter()

    it('should return the current router', () => {
      expect(subject).to.eq('GET /users')
    })
  })

  describe('#routerMethod', () => {
    const subject = dispatcher.routerMethod()

    it('should return method equivalent to current route', () => {
      expect(subject).to.eq('home#index')
    })
  })
})
