
import { Field, ID, ObjectType } from "@nestjs/graphql";
@ObjectType('student')
export class studentType{
    @Field(type => ID)
    id : string ; 
    @Field()
    firstName : string ; 
    @Field()
    lastName: string ; 
}