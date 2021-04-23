import { Module } from '@nestjs/common';
import { LessenModule } from './lessen/lessen.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { StudentModule } from './student/student.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hakim:azertyuiop123@cluster0.ez7ju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  GraphQLModule.forRoot({
    autoSchemaFile:true,
  }),
  LessenModule,
  StudentModule],
})
export class AppModule { }
