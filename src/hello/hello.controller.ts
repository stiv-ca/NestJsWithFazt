import { Controller, Get, HttpCode, Req, Res,Param, ParseIntPipe, ParseBoolPipe,Query, UseGuards } from '@nestjs/common';
import { Request,Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller() /**Los argumentos harian parte del endpoint
y luego vendria la parte donde esta el argumento del decorador */
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({
            messange: 'Hello'
        }) 
    }
    @Get('/new')
    @HttpCode(201)
    something() {
        return'new something'
    }

    @Get('/error')
    @HttpCode(500)
    notFound() {
        return 'Not Found'
    }
    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num : number) {
        console.log(typeof num);
        
        return num + 14;
    }
    @Get('/active/:status')
    activeStatus(@Param('status',ParseBoolPipe) status : boolean) {
        console.log(typeof status);
        
        return status;
    }

    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: {name: string,age: number}) {
        console.log(typeof query.name);
        console.log(typeof query.age);
        
        return `Hello ${query.name} your age is ${query.age}`;
    }
}
