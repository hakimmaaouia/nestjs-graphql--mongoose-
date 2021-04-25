import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type lessonDocument = Lesson & Document;

@Schema()
export class  Lesson {
@Prop()
id : string ; 
@Prop()
name : string ; 
@Prop()
startDate: string ; 
@Prop()
endDate : string;

@Prop()
students: [string]
}



export const lessonSchema = SchemaFactory.createForClass(Lesson);
