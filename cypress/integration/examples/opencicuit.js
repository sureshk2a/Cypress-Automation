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
        var firstName = cy.get("#id_guestLoginViewFirstName")
        firstName.type("Suresh")
        var secondName = cy.get("#id_guestLoginViewLastName")
        secondName.type("Kumar")
        var checkbox =  cy.get(".item-text").click()
        cy.get(".button").click()
    })
})
