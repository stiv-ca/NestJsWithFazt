/**Para indicar que esta clase viene de nestJs vamos a importar desde el paquete: */
import { Module } from "@nestjs/common"; //Se puede para indicar que es un decorador
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
/** Esto tendra una clase que va a ser la siguinte: */

@Module({
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule {
    
}