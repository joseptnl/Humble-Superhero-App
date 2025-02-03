import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { App } from 'supertest/types'
import { SuperheroModule } from '../src/superhero/superhero.module'

describe('AppController (e2e)', () => {
  let app: INestApplication<App>

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SuperheroModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/superheroes (GET)', () => {
    return request(app.getHttpServer()).get('/superheroes').expect(200).expect([])
  })
})
