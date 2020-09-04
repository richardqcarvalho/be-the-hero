const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Gerar ID', () => {
  it('Deve gerar uma ID com 8 caracteres', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  })
});