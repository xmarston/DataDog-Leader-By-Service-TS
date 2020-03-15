import { mock, instance, when, verify } from 'ts-mockito';
import { expect } from 'chai';
import 'mocha';

import { EC2 } from '../src/EC2';

describe('EC2', () => {
  let mockEC2: EC2;

  beforeEach(() => {
    mockEC2 = mock(EC2);
  });

  it('should return the status of the instance', async () => {
    let mockPromise = new Promise<string>((resolve, reject) => {
      resolve('ok');
    });
    when(mockEC2.getStatusOfInstance('i-123456789')).thenReturn(mockPromise);

    const mockInstance = instance(mockEC2);
    const result = await mockInstance.getStatusOfInstance('i-123456789')

    expect(result).to.equal('ok');
  });
});
