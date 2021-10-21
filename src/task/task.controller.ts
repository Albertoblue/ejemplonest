import { Controller, Get,Post,Put,Delete,Body,Param} from '@nestjs/common';
import {CreateTaskDto} from "./dto/create-task.dto";
import {TaskService} from "./task.service";
import {Task} from './interfaces/Task';
import { parse } from 'path';
import {HttpService} from '@nestjs/axios'
@Controller('task')
export class TaskController {

    constructor(private taskService:TaskService,
                private httpService:HttpService){}

    @Get('/prueba')
    async prueba(){

     const data=this.httpService.get('https://reqres.in/api/users?page=2').subscribe(
         res=>{
             console.log(res.data);
         }
     );
    }


    @Get('/test')
    getTasks(): Promise<Task[]>{//{hello:string}{
        return this.taskService.getTasks();
    //return {"hello":"world"};
    }
    @Get(':taskId')
    getTask(@Param('taskId') taskId:string){
        
        return this.taskService.getTask(taskId);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto):Promise<Task>{

        console.log(task.title);

        return this.taskService.createTask(task);

        //return 'Creando tareas';
    }

    @Put(':id')

    updateTask(@Body() task:CreateTaskDto, @Param('id') id):string{
        console.log(task);
        console.log(id);

        return 'Actualizando una tarea';
    }

    @Delete(':id')
    deleteTask(@Param('id') id):string{

        return `Se ha borrado la tarea con el id ${id}`;
    }





}
