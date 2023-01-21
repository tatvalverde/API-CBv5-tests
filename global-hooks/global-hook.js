import supertest from 'supertest' // file will be executed
import 'dotenv/config'

before(async ()=> {
  let res = await supertest(process.env.BASE_URL)
    .post('/v5/user/login')
    .send({ email: process.env.EMAIL, password: process.env.PASSWORD })
  process.env['TOKEN'] = res.body.payload.token
})