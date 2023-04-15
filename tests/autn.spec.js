import { expect } from 'chai'
import {login} from '../helpers/general-helpers';

describe('Authentication positive', () => {
  describe('Login with valid credentials', () => {
    let res
    before(async () => {
      res = await login(process.env.EMAIL, process.env.PASSWORD)
    })

    it('Login with valid credentials', async () => {
      expect(res.statusCode).to.eq(200)
    })

    it('Response has a correct message', async () => {
      expect(res.body.message).to.eq('Auth success')
    })

    it('Response has a token', async () => {
      expect(res.body.payload.token).to.be.a('string')
    })

    it('Response has token', async () => {
      expect(res.body.payload.token).to.not.be.undefined
    })

    it('Response body contains user id', async () => {
      expect(res.body.payload.userId).to.be.a('string')
    })

    it('Response does not contain password', async () => {
      expect(res).to.not.have.property('password')
    })
  })

  describe('Authentication negative', () => {
    describe('login with invalid credentials', () => {
      let res


      it('Login with invalid email', async () => {
        res = await login('invalid@gmail.com', process.env.PASSWORD)
        expect(res.statusCode).to.eq(400)
      })
    })
  })
})

