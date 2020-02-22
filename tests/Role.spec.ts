import { mock, instance, when, verify } from 'ts-mockito';
import { expect } from 'chai';
import 'mocha';

import { Role } from '../src/Role';

describe('Role', () => {
  let instance: Role;

  beforeEach(() => {
    instance = mock(Role);
  });

  it('should return all the services available for DataDog Agent', async () => {
    let mockPromise = new Promise<string[]>((resolve, reject) => {
      resolve([
        'albatoss',
        'tryclyde'
      ]);
    });
    when(instance.getRolesList()).thenReturn(mockPromise);

    async () => {
      expect(await instance.getRolesList()).to.equal([
        'albatoss',
        'tryclyde'
      ]);
    }
  });
});
