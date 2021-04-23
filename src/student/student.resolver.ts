import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentService } from "./student.service"
import { studentType } from "./student.typer"
@Resolver(of => studentType)
export class StudentResolver {

    constructor(
        private studentService: StudentService
    ) { }

    @Mutation(returns => studentType)
    async createStudent(
        @Args('id') id: string,
        @Args('firstName') firstName: string,
        @Args('lastName') lastName: string
    ) {

        return (this.studentService.createStudent({ id, firstName, lastName }))
    }

    @Query(returns =>[studentType])
    getAllstudent(){
        return (this.studentService.getAllStudent())
    }



    @Query(returns =>studentType)
    getByStudent( 
    @Args('id') id: string)
    {
        return (this.studentService.getByStudent(id))
    }
}
