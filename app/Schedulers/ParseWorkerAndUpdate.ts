
import {WorkerModel} from '../entities/Worker';

export const parseWorker = async (coordinates: any) => {
    const points = coordinates.coordinates.coordinates;
    console.log("worker id is : ", coordinates.worker_id);
    console.log("points are : ", points);
    console.log("duration : ", coordinates.duration);
    console.log("is_active : ", coordinates.is_active);

    await WorkerModel.find((workers)=>{
        console.log("workers are : ", workers);
    })
    
}