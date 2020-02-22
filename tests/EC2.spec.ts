import { mock, instance, when, verify } from 'ts-mockito';
import { expect } from 'chai';
import 'mocha';

import { EC2 } from '../src/EC2';

describe('EC2', () => {
  let instance: EC2;

  beforeEach(() => {
    instance = mock(EC2);
  });

  it('should return the status of the instance', async () => {
    let mockPromise = new Promise<string>((resolve, reject) => {
      resolve('ok');
    });
    when(instance.getStatusOfInstance('i-123456789')).thenReturn(mockPromise);

    async () => {
      expect(await instance.getStatusOfInstance('i-123456789')).to.equal('ok');
    }
  });
});
