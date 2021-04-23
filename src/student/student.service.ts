import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {createStudentInput} from "./student.input"
import { Model } from 'mongoose';
import { studentDocument, Student } from "./Student.entity"

@Injectable()
export class StudentService {
    constructor(@InjectModel("student") private StudentModel: Model<studentDocument>) { }
    
    async createStudent(createStudentInput:createStudentInput): Promise<Student> {
        const Student =new this.StudentModel(createStudentInput);

        return Student.save();
    }



    async getAllStudent():Promise<any>{
        return this.StudentModel.find()
    }


    async getByStudent(id:string):Promise<any>{
        return this.StudentModel.findOne({id})
    }

    
}
