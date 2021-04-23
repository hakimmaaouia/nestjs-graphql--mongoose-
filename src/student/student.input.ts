import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createStudentInput {
    @Field()
    id: string;
    @Field()
    firstName: string;
    @Field()
    lastName: string
}