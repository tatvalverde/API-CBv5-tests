import {expect} from 'chai';
import {register,  randomEmail} from '../helpers/general-helpers'
import "dotenv/config";
const chance = require('chance').Chance();


describe('Create a user with valid credentials', ()=> {
  describe('Create a user with valid data', () => {
    let res

    before(async () => {
      res = await register(chance.first(), chance.last(), randomEmail(), process.env.PASSWORD)
    })
    it('Create user with valid data', async () => {
      expect(res.body.message).contain('User created successfully.')
    })

    it('Status code is 201', async () => {
      expect(res.statusCode).to.eq(201)
    })

    it('Response success property is true', async () => {
      expect(res.body.success).to.eq(true)
    })
  })
})