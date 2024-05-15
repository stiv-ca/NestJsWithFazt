import { IsString,MinLength } from "class-validator";

export class CreateTaskDto {

    @MinLength(1)
    @IsString()
    tittle: string;

    @MinLength(1)
    @IsString()
    description: string;
}