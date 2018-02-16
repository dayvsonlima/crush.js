export default function Routes() {
  this.resources('users', () => {
    this.resources('plans', () => {
      this.resources('toys', () => {
        this.resources('eitas')
      })
    })
  })
}
