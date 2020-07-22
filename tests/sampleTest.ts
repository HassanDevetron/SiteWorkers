import { expect } from 'chai';
import {parseWorker} from '../app/Schedulers/ParseWorkerAndUpdate';
import ApolloClient, { gql } from "apollo-boost";
import fetch from 'cross-fetch';
import {WorkerInput} from '../app/resolvers/types/worker-input';
const client = new ApolloClient({
    fetch,
    uri: "http://localhost:3333/graphql"
});
beforeEach(async ()=>{
});
describe('Options tests', () => { 
    it('test parseWorker and update', async () => {
        let  coordinates =  {
            "coordinates" : {
                "coordinates" : [ 
                    55.1404609680176, 
                    25.0615882873535
                ],
                "_id" : "5daddacc03feb33cb822ac23",
                "type" : "Point"
            },
            "is_active": true,
            "duration" : 180,
            "worker_id" : "1"
        };
        await parseWorker(coordinates);
        // expect(false).to.be.false;
    });

    xit('test create mutation', async () => {
        let data = {
            workerId: 1,
            siteId: 2,
            totalActiveHours: 0,
            totalInActiveHours: 0,
            isAbsent: false,
            isLate: false
        } as WorkerInput;
        
        await client.mutate({
            mutation: gql`mutation CreateWorker($data: WorkerInput!) {
                createWorker(data: $data) {
                    workerId
                    siteId
                    totalActiveHours
                    totalInActiveHours
                    isAbsent
                    isLate
                }
              }
            `,
            variables: {
              data: data
            }
        })
         .then(worker => {
            expect(worker.data.createWorker.workerId).to.equal(1);             
            expect(worker.data.createWorker.siteId).to.equal(2);             
            expect(worker.data.createWorker.totalActiveHours).to.equal(0);             
            expect(worker.data.createWorker.totalInActiveHours).to.equal(0);             
            expect(worker.data.createWorker.isAbsent).to.be.false;             
            expect(worker.data.createWorker.isLate).to.be.false;             
         });
    });
});

