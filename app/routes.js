export default function Routes() {
  this.resources('users', { only: ['get', 'post'] }, () => {
    this.resources('plans', { only: 'get' })
  })

  this.resources('users', {
    only: ['get', 'update', 'create']
  })
}
