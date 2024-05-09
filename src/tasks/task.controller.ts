/**Este archvo va a definir rutas de URL del back-end que pueden ser
 * visitadas
 */

import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller({})
export class TaskController {

    taskService: TaskService;


    constructor( taskService : TaskService ) {
        /** Es una función que se ejecuta apenas la
         * clase sea instanciada
        */
        this.taskService = taskService;
    }


    

    @Get('/tasks') // Decorador
    getAllTasks() {
        
        return this.taskService.getTasks();
        
        
        // /** Funciones que puede hacer:
        //  * Buscar en una Base de datos
        //  * Petición a otro back-end o api
        //  * etc...
        //  */
        // return `Obteniendo todas las tareas`
    }
}
