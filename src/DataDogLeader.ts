import { Dynamo } from './Dynamo';

export class DataDogLeader extends Dynamo {
  getLeader = async (service: string): Promise<string> => {
    let params = {
      TableName: 'dd-leader',
      Key: {
        "ChefRole": { "S": service }
      }
    };

    let leader = '';
    let result = await this.dynamo.getItem(params).promise();

    leader = result['Item']['Leader']['S'];

    return leader;
  }
}
