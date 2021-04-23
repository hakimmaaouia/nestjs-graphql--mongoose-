import { Field, ID, ObjectType } from "@nestjs/graphql";

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
}