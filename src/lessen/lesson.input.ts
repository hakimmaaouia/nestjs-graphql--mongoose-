import { Field, InputType } from "@nestjs/graphql";
import {MinLength,IsDateString} from "class-validator"
@InputType()
export class createLessionInput {
   
    @Field()
    id : string ; 
    
    @Field()
    name : string ;
    
    @Field()
    startDate: string ; 
    
    @Field()
    endDate : string;
    }
