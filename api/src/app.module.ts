import { Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superhero } from './superhero/entities/superhero.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: ':memory:',
            entities: [Superhero],
            synchronize: true,
        }),
        SuperheroModule
    ],
})
export class AppModule { }
