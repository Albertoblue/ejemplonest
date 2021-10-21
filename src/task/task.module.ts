import { Module } from '@nestjs/common';
import {TaskService} from "./task.service";
import {TaskController} from "./task.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {TaskSchema} from "./schemas/task.schema";
import {HttpModule} from '@nestjs/axios';

@Module({
    imports:[HttpModule,MongooseModule.forFeature([
        {
            name:'task',
            schema:TaskSchema
        }
    ])],
    controllers:[TaskController],
    providers:[TaskService]
})
export class TaskModule {}
