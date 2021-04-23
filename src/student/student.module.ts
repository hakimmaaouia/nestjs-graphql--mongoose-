import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import {studentSchema} from './student.entity'
import { MongooseModule } from '@nestjs/mongoose';
import  {StudentResolver} from './student.resolver'
@Module({
  imports: [MongooseModule.forFeature([{name:"student",schema:studentSchema}])],
  providers: [StudentService,StudentResolver]
})
export class StudentModule {}
