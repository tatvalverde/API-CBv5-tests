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
  })

  describe('Creation a user with invalid credentials', () => {
    describe('Create a user without password', () => {
      let res
      before(async () => {
        res = await register(chance.first(), chance.last(), randomEmail(), '')
      })

      it('check response status code', () => {
        expect(res.statusCode).to.eq(400)
      })

      it('check response message', () => {
        expect(res.body.message).to.eq('Wrong password format')
      })
    })
    describe('Create a user with existing email', () => {
      let res
      before(async () => {
        res = await register(chance.first(), chance.last(), process.env.EMAIL, process.env.PASSWORD)
      })

      it('check response status code', () => {
        expect(res.statusCode).to.eq(409)
      })

      it('check response message', () => {
        expect(res.body.message).to.eq('User with this e-mail exists')
      })
    })
  })
})