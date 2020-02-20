import AWS from 'aws-sdk';

export class EC2 {
  protected EC2Manger: AWS.EC2;

  constructor(profile: string) {
    AWS.config.update(
      {
        credentials: new AWS.SharedIniFileCredentials({ profile: profile })
      }
    );

    this.EC2Manger = new AWS.EC2({ region: 'eu-west-1', apiVersion: '2016-11-15' });
  }

  getStatusOfInstance = async (instanceId: string): Promise<string> => {
    let params = {
      InstanceIds: [instanceId]
    };

    let status = '';
    let result = await this.EC2Manger.describeInstanceStatus(params).promise();

    status = result['InstanceStatuses'][0]['InstanceStatus']['Status'];

    return status;
  }
}
