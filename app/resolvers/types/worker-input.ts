import {Field, InputType} from 'type-graphql';
import { Worker } from '../../entities/Worker';

@InputType()
export class WorkerInput implements Partial<Worker>{
    
    @Field()
    workerId: Number;
  
    @Field()
    siteId: Number;
   
    @Field()
    totalActiveHours: Number = 0;

    @Field()
    totalInActiveHours: Number = 0;

    @Field()
    isAbsent: Boolean = true;
    
    @Field()
    isLate: Boolean = false;
}