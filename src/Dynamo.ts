import AWS from 'aws-sdk';

export class Dynamo {
  protected dynamo: AWS.DynamoDB

  constructor(profile: string) {
    AWS.config.update(
      {
        credentials: new AWS.SharedIniFileCredentials({ profile: profile })
      }
    );

    this.dynamo = new AWS.DynamoDB({ region: 'eu-west-1', apiVersion: '2012-08-10' });
  }
}
