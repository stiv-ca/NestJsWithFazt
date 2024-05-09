import { Controller, Get } from '@nestjs/common';

@Controller('hello') /**Los argumentos harian parte del endpoint
y luego vendria la parte donde esta el argumento del decorador */
export class HelloController {
    @Get('/')
    index() {
        return `Home Page` 
    }
}
