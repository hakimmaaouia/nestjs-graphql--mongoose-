
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

export type studentDocument = Student & Document;

@Schema()
export class Student {
    @Prop()
    id: string;
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
}

export const studentSchema = SchemaFactory.createForClass(Student);
