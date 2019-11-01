import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column({ type: 'date' })
    date: string
}
