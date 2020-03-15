import { mock, instance, when, verify } from 'ts-mockito';
import { expect } from 'chai';
import 'mocha';

import { Role } from '../src/Role';

describe('Role', () => {
  let mockRole: Role;

  beforeEach(() => {
    mockRole = mock(Role);
  });

  it('should return all the services available for DataDog Agent', async () => {
    let mockPromise = new Promise<string[]>((resolve, reject) => {
      resolve([
        'albatoss',
        'tryclyde'
      ]);
    });
    when(mockRole.getRolesList()).thenReturn(mockPromise);

    const mockInstance = instance(mockRole);
    const result = await mockInstance.getRolesList();

    expect(result).to.eql([
      'albatoss',
      'tryclyde'
    ]);
  });
});
