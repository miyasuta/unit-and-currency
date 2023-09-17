const project = __dirname+'/..' // The project's root folder
const cds = require('@sap/cds')

describe('my test suite', ()=>{
  const { GET, expect } = cds.test(project)
  it ('should test', async ()=>{ // Jest & Mocha style
    const { data } = await GET ('/odata/v4/catalog/Books', {
      params: { $filter: 'ID eq 1' }
    })
    expect(data.value.length).to.eql(1)
  })
})