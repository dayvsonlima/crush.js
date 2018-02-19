import { expect } from 'chai'
import Router from '@/crush/router'

describe('#router', () => {
  const { routes } = new Router

  context('root', () => {
    it('has a root path', () => {
      expect(routes['GET /']).to.eq('home#index')
    })
  })

  context('when receive a resources', () => {
    it('has a new route GET', () => {
      expect(routes['GET /users/new']).to.eq('users#new')
    })

    it('has a index route GET', () => {
      expect(routes['GET /users']).to.eq('users#index')
    })

    it('has a show route GET', () => {
      expect(routes['GET /users/:id']).to.eq('users#show')
    })

    it('has a route PATCH', () => {
      expect(routes['PATCH /users/:id']).to.eq('users#update')
    })

    it('has a route PUT', () => {
      expect(routes['PUT /users/:id']).to.eq('users#update')
    })

    it('has a route DELETE', () => {
      expect(routes['DELETE /users/:id']).to.eq('users#destroy')
    })

    it('has a route POST', () => {
      expect(routes['POST /users']).to.eq('users#create')
    })
  })

  context('when receive a nested resources', () => {
    console.log(routes)
    
    it('has a new nested route GET', () => {
      expect(routes['GET /users/:id/plans/new']).to.eq('plans#new')
    })

    it('has a index nested route GET', () => {
      expect(routes['GET /users/:id/plans']).to.eq('plans#index')
    })

    it('has a show nested route GET', () => {
      expect(routes['GET /users/:id/plans/:id']).to.eq('plans#show')
    })

    it('has a update nested route PATCH', () => {
      expect(routes['PATCH /users/:id/plans/:id']).to.eq('plans#update')
    })

    it('has a update nested route PUT', () => {
      expect(routes['PUT /users/:id/plans/:id']).to.eq('plans#update')
    })

    it('has a update nested route DELETE', () => {
      expect(routes['DELETE /users/:id/plans/:id']).to.eq('plans#destroy')
    })

    it('has a create nested route POST', () => {
      expect(routes['POST /users/:id/plans']).to.eq('plans#create')
    })
  })
})
