import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { lessenType } from "./lessen.type";
import { LessenService } from "./lessen.service"
import {createLessionInput} from "./lesson.input"
@Resolver(of => lessenType)
export class lessenResolver {
    constructor(
        private lessenService: LessenService
    ) { }
    @Query(returns => lessenType)
    getLessionById(@Args('id') id: string) {
        return (this.lessenService.getLessionById(id))

    }

    @Mutation(returns => lessenType)
    createLession(@Args('createLessionInput') createLessionInput: createLessionInput,
       
    ) {

        return (this.lessenService.createLession(createLessionInput))
    }
}