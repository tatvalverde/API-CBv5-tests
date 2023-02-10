import {expect} from 'chai'
import * as clientHelper from '../helpers/client-helper'


describe('Clients tests', () => {
  describe('Create a client', () => {
    let res

    before(async () => {
      res = await clientHelper.createClient()
    })

    it('check the response status', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('check the response message', () => {
      expect(res.body.message).to.eq('Client created')
    })
    it('check the response has client id', () => {
      expect(res.body.payload).not.to.be.empty
    })
    it('check the client id is a string', () => {
      expect(res.body.payload).to.be.a('string')
    })
  })

  describe('Get all clients', () => {
    let res

    before(async () => {
      await clientHelper.createClient()
      res = await clientHelper.getAll()
    })

    it('check the response status', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('check the response contains array', () => {
      expect(res.body.payload.items).to.be.a('array')
    })
    it('check the array elements has id', () => {
      let clientsList = res.body.payload.items
      for (let i = 0; i < clientsList.length; i++) {
        expect(clientsList[i]).has.property('_id')
      }
    })
  })
