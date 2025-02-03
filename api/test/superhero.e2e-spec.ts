import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import * as request from 'supertest'
import { App } from 'supertest/types'
import { SuperheroModule } from '../src/superhero/superhero.module'
import { Superhero } from '../src/superhero/entities/superhero.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { v4 } from 'uuid'

describe('Superhero (e2e)', () => {
  let app: INestApplication<App>
  let dataSource: DataSource

  const superheroes: Superhero[] = [
    { id: v4(), name: 'Deadpool', power: 'inmortality', humility: 2 },
    { id: v4(), name: 'Superman', power: 'strength', humility: 9.9 },
    { id: v4(), name: 'Batman', power: 'money', humility: 7 },
  ]

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Superhero],
          synchronize: true,
        }),
        SuperheroModule,
      ],
    }).compile()

    app = moduleFixture.createNestApplication()

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      })
    )

    await app.init()

    dataSource = moduleFixture.get<DataSource>(DataSource)

    const repo = dataSource.getRepository(Superhero)
    repo.insert(superheroes)
  })

  afterAll(async () => {
    await dataSource.destroy()
    await app.close()
  })

  describe('GET', () => {
    it('Returns as many superheroes as there are.', async () => {
      const response = await request(app.getHttpServer()).get('/superheroes').expect(200)

      expect(response.body).toBeInstanceOf(Array)
      expect(response.body).toHaveLength(superheroes.length)
    })
  })

  describe('POST', () => {
    it('Returns the created superhero.', async () => {
      const superhero: Partial<Superhero> = { name: 'Thor', power: 'Thunder', humility: 5 }

      const response = await request(app.getHttpServer()).post('/superheroes').send(superhero).expect(201)

      expect({ ...response.body, id: undefined }).toEqual(superhero)
    })

    it('Returns 400 code when try to create superhero with humility out of range [1..10]', async () => {
      const superhero: Partial<Superhero> = { name: 'Joker', power: 'Crazyness', humility: -5 }

      const response = await request(app.getHttpServer()).post('/superheroes').send(superhero).expect(400)

      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toEqual(['humility must not be less than 1'])
    })
  })
})
