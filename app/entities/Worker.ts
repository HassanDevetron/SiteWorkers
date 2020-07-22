import {Field, ObjectType, ID} from 'type-graphql';
import {prop as Property, getModelForClass} from '@typegoose/typegoose';

@ObjectType({description: 'model for worker'})
export class Worker {
    
    @Field(() => ID)
    id: String;

    @Field()
    @Property()
    workerId: Number;
   
    @Field()
    @Property()
    siteId: Number;

    @Field()
    @Property()
    totalActiveHours: Number;
   
    @Field()
    @Property()
    totalInActiveHours: Number;

    @Field()
    @Property()
    isAbsent: Boolean;

    @Field()
    @Property()
    isLate: Boolean;

}



export const WorkerModel = getModelForClass(Worker);        