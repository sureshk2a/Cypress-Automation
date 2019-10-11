/// <reference types="Cypress" />

describe ("Opening URL",function()
{
    it('Open Circuit Call', function() {
    cy.visit("https://circuit.siemens.com/guest?token=45c6cbf2-3c5e-4034-9d4a-744b7d8a15f9")
  })
})


describe("Login",function()
{
    it("Login to call",function()
    {
        var firstName = cy.get("")
        firstName.type("Suresh")
        var secondName = cy.get("")
        secondName.type("Kumar")
        
    })
})
