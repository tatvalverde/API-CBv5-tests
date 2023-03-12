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
  })
})
