import { Module } from '@nestjs/common';
import {lessenResolver} from './lessen.resolver'
import { LessenService } from './lessen.service';
import { MongooseModule } from '@nestjs/mongoose';
import {lessonSchema} from './lesson.entity'
@Module({
    imports: [MongooseModule.forFeature([{name:"lesson",schema:lessonSchema}])],
    providers :[lessenResolver, LessenService]
})
export class LessenModule {}
