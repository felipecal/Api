export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing parameters: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
