import { mock, instance, when, verify } from 'ts-mockito';
import { expect } from 'chai';
import 'mocha';

import { DataDogLeader } from '../src/DataDogLeader';

describe('DataDogLeader', () => {
  let mockDataDog: DataDogLeader;

  beforeEach(() => {
    mockDataDog = mock(DataDogLeader);
  });

  it('should return id of the instance that has DataDog Agent installed', async () => {
    const mockPromise = new Promise<string>((resolve, reject) => {
      resolve('i-123456789');
    });
    when(mockDataDog.getLeader('tryclyde')).thenReturn(mockPromise);

    const mockInstance = instance(mockDataDog);
    const result = await mockInstance.getLeader('tryclyde');

    expect(result).to.equal('i-123456789');
  });
});
