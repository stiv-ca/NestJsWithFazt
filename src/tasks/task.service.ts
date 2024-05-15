import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface User {
    name: string;
    phone: string;
}

@Injectable()
export class TaskService {

    private tasks = []
   
    getTasks() {
        return this.tasks
    }

    getTask(id:number) {
        const taskFound = this.tasks.find(task => task.id === id)

        if (!taskFound) {
            throw new NotFoundException(`Task ${id} not found`)
        }

        return taskFound
    }

    createTask(task : CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        
        return task
        /*Aqui lo que hace es lo siguiente:
        1. Crear la función y de parametro debe recibir una variable
        llamada task de tipo any
        2. Luego hace un console.log de task
        3. Selecciona el arreglo tasks y agrega task que es lo que va a
        recibir la función pero hace como una copia y esa copia es la 
        que se queda en el arreglo para poder posteriormente hacer mas y 
        que esa copia se quede en el arreglo, luego le ponemos un adición 
        a la tarea, esa adición es un id que basicamente le dice que le 
        muestre en que posición esta la tarea y como sabemos que las
        posiciones de los arrays empiezan en 0 pues le añadimos +1 para
        indicarle que esa es la tarea 1 y asi sucesivamente con las demas*/
    }

    updateTask(updateTask : UpdateTaskDto) {
        console.log(updateTask);
        
        return 'updateTask'
    }

    updateTaskStatus() {
        return 'updateTaskStatus'
    }

    deleteTask() {
        return 'deleteTask'
    }
    
    // testing() {
    //     return 'testing'
    // }
}