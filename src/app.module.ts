import { Module } from '@nestjs/common';
import { LessenModule } from './lessen/lessen.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { StudentModule } from './student/student.module';
import * as config from 'config'

const dbconfig =config.get('db')
@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${dbconfig.user}:${dbconfig.password}@cluster0.ez7ju.mongodb.net/${dbconfig.databasename}?retryWrites=true&w=majority`),
  GraphQLModule.forRoot({
    autoSchemaFile:true,
  }),
  LessenModule,
  StudentModule],
})
export class AppModule { }
