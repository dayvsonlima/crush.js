import { expect } from 'chai'
import Router from '@/crush/router'

describe('#router', () => {
  context('receive a resources', () => {
    const { routes } = new Router

    it('has a route GET', () => {
      expect(routes['GET /users']).to.eq('users#index')
    })

    it('has a route PATCH', () => {
      expect(routes['PATCH /users']).to.eq('users#update')
    })

    it('has a route PUT', () => {
      expect(routes['PUT /users']).to.eq('users#update')
    })

    it('has a route DELETE', () => {
      expect(routes['DELETE /users']).to.eq('users#destroy')
    })

    it('has a route POST', () => {
      expect(routes['POST /users']).to.eq('users#create')
    })
  })
})
