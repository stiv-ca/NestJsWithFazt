import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
   
    getTasks() {
        return ['task1', 'task2', 'task3'];
    }

    testing() {
        return 'testing'
    }
}