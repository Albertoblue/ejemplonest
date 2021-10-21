import { Injectable } from '@nestjs/common';
import {Task} from "./interfaces/Task";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectModel('task') private taskModel:Model<Task>){}
    async getTasks(){

        return await this.taskModel.find();
    }

    async getTask(id: string){
        return await this.taskModel.findById(id);

    }

    async createTask(task:CreateTaskDto){

        const newTask=new this.taskModel(task);
        
        return await newTask.save();
    }



    /*

    tasks: Task[]=[
        {
            id:1,
            title:"Testing",
            description:"Estamos haciendo pruebas",
            done:true

        },

        {
            id:2,
            title:"Testing2",
            description:"Estamos haciendo pruebas2",
            done:true

        },

        {
            id:3,
            title:"Testing3",
            description:"Estamos haciendo pruebas3",
            done:true

        }

      
    ];


    getTasks(): Task[]{

        return this.tasks;

    }

    getTask(id): Task{
        return this.tasks.find(task => task.id ===id);


    }*/

    




    
}
