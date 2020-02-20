import { Dynamo } from './Dynamo';

export class Role extends Dynamo {
  getRolesList = async (): Promise<string[]> => {
    let params = {
      TableName: 'dd-leader'
    };

    let rolesList = [];
    let result = await this.dynamo.scan(params).promise();

    result['Items'].forEach(item => {
      rolesList.push(item['ChefRole']['S']);
    });

    return rolesList.sort();
  }
}
