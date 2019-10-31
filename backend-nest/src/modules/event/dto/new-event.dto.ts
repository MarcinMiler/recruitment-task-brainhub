import { IsNotEmpty, IsString, IsEmail, IsDateString } from 'class-validator'

export class NewEventDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsDateString()
    @IsNotEmpty()
    date: string
}
