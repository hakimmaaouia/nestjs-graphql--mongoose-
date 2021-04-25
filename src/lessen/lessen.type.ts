import { Field, ID, ObjectType } from "@nestjs/graphql";
import { studentType } from "src/student/student.typer";

@ObjectType('Lessen')
export class lessenType {
@Field(type => ID)
id : string ; 
@Field()
name : string ; 
@Field()
startDate: string ; 
@Field()
endDate : string;
@Field(type=>[studentType] )
students: [string]
}