export default function Routes() {
  this.root('home#index')

  this.resources('users', () => {
    this.resources('plans', () => {
      this.resources('toys', () => {
        this.resources('eitas')
      })
    })
  })
}
