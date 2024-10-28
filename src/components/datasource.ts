// import { DataSourceApi, DataSourceInstanceSettings, DataQueryRequest, DataQueryResponse, DataSourceOptions, TestDataSourceResponse } from '@grafana/data';


// export class MyDataSource extends DataSourceApi{

//     testDatasource(): Promise<TestDataSourceResponse> {
//         throw new Error('Method not implemented.');
//     }

//     constructor(private instanceSettings: DataSourceInstanceSettings<DataSourceOptions>){
//         super(instanceSettings);
//     }

//     async query(options: DataQueryRequest): Promise<DataQueryResponse>{
//         const { range } = options;
//         const from  = range!.from.valueOf();
//         const to = range!.to.valueOf();
//         const data = options.targets.map(target =>{
//             console.log(target);
//         });
//         return { data };
//     }


// }
