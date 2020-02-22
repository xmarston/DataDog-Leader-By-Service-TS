import { mock, instance, when, verify } from 'ts-mockito';
import { expect } from 'chai';
import 'mocha';

import { DataDogLeader } from '../src/DataDogLeader';

describe('DataDogLeader', () => {
  let instance: DataDogLeader;

  beforeEach(() => {
    instance = mock(DataDogLeader);
  });

  it('should return id of the instance that has DataDog Agent installed', async () => {
    let mockPromise = new Promise<string>((resolve, reject) => {
      resolve('i-123456789');
    });
    when(instance.getLeader('tryclyde')).thenReturn(mockPromise);

    async () => {
      expect(await instance.getLeader('tryclyde')).to.equal('i-123456789');
    }
  });
});
