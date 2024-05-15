/**Este archvo va a definir rutas de URL del back-end que pueden ser
 * visitadas
 */

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {

    taskService: TaskService;


    constructor( taskService : TaskService ) {
        /** Es una función que se ejecuta apenas la
         * clase sea instanciada
        */
        this.taskService = taskService;
    }


    
    
    @Get() // Decorador
    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status: 200, description: 'Return all tasks'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    getAllTasks(@Query() query : any) {
        console.log(query);
        
        
        return this.taskService.getTasks();
        
        
        // /** Funciones que puede hacer:
        //  * Buscar en una Base de datos
        //  * Petición a otro back-end o api
        //  * etc...
        //  */
        // return `Obteniendo todas las tareas`
    }
    
    @Get('/:id') // Decorador
    getTask(@Param('id') id: string) {
        console.log(id);
        
        return this.taskService.getTask(parseInt(id));
        /**1. En el parametro del decorador le pasamos un enpoint de id para seleccionar una 
         * unica tarea que en este caso lo vamos a buscar en la URL con el id de que cada 
         * tarea tiene pero no le pasamos un id en especifico por que no sabemos cual se 
         * necesita entonces por eso se le pasa de esta manera (':id) por que así espera 
         * un id en especifico que el usuario indique.
         * 2. En el metodo getTask tiene como parametro un '@Params' que como parametro recibe
         * un id que es un string y luego le pasamos una variable que se llame id que es tipo 
         * string
         * 3. Mostramos el id por consola
         * Retornamos el metodo getTask de task.service.ts pero como alla esta como number 
         * aqui la debemos transformar por que aca recibe un string entonces utilizamos el
         * metodo parseInt y le pasamos la variable que vamos a transformar  
        */

    }
    
    @Post() // Decorador
    @ApiOperation({summary: 'Create a task'})
    createTasks(@Body() task: CreateTaskDto ) {
        
        return this.taskService.createTask(task)
    }
    
    @Put() // Decorador
    updateTask(@Body() taskUpdate: UpdateTaskDto) {
        
        return this.taskService.updateTask(taskUpdate)
    }
    
    @Patch() // Decorador
    updateTaskStatus() {
        
        return this.taskService.updateTaskStatus()
    }
    
    @Delete() // Decorador
    deleteTask() {
        
        return this.taskService.deleteTask()
    }
}
