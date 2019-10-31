import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const env = (val: string) => process.env[val]

export const databaseOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: env('DB_HOST'),
    port: Number(env('PG_PORT')),
    username: env('POSTGRES_USER'),
    password: env('POSTGRES_PASSWORD'),
    database: env('POSTGRES_DB'),
    synchronize: true,
    entities: ['/backend-nest/dist/' + '/**/*.entity{.ts,.js}']
}
