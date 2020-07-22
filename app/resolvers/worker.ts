import {Resolver, Mutation, Query, Arg} from 'type-graphql';
import {Worker, WorkerModel} from '../entities/Worker'
import { WorkerInput } from './types/worker-input';

@Resolver()
export class WorkerResolver {

    @Query(_returns => Worker, {nullable: false})
    async returnSingleWorker(@Arg("id") id:String){
        return await WorkerModel.findById({_id: id});
    };

    @Query(() => [Worker])
    async returnAllWorkers(){
        return await WorkerModel.find();
    }

    @Mutation(() => Worker)
    async createWorker(@Arg("data") {workerId, siteId, totalActiveHours, totalInActiveHours, isAbsent, isLate} : WorkerInput) : Promise<Worker>{
        const worker = (await WorkerModel.create({
            workerId: workerId,
            siteId: siteId,
            totalActiveHours: totalActiveHours,
            totalInActiveHours: totalInActiveHours,
            isAbsent: isAbsent,
            isLate: isLate
        })).save();
        console.log("worker inserted is : ", worker);
        return worker;
    };
    
    @Mutation(() => Boolean)
    async deleteOneWorker(@Arg("id") id: String){
        await WorkerModel.deleteOne({id});
        return true;
    };

    @Mutation(() => Boolean)
    async deleteAllWorkers(){
        await WorkerModel.deleteMany({});
        return true;
    };
}