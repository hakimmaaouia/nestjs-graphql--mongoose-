import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { lessonDocument, Lesson } from "./lesson.entity"
import {createLessionInput} from "./lesson.input"

import { Model } from 'mongoose';


@Injectable()
export class LessenService {
    constructor(@InjectModel("lesson") private lessonModel: Model<lessonDocument>) { }

async getLessionById (id): Promise<Lesson>{
    return  this.lessonModel.findOne({id})
}


    async createLession(createLessionInput:createLessionInput): Promise<Lesson> {
        const {id, name,startDate,endDate}=createLessionInput
        const Lession = new this.lessonModel({ id, name, startDate, endDate });
        return Lession.save();
    }
}
