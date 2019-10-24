/// <reference types="Cypress" />

describe ("Opening URL",function()
{
    it('Open Rahul Academy', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  })
})

describe('My Third Test', function() {
  it("Checks Someting",function()
  {
      var searchbox = cy.get('.search-keyword')
      searchbox.type("tomato")
      //cy.wait(2000)
      //var prod_list = cy.get(".product:visible")
      var products = cy.get(".products").find(".product")
      products.each(($el, index, $list) => {
        const prod_name = $el.find("h4.product-name").text()
        if(prod_name.includes("Tomato"))
        {
          $el.find("button").click()
        }

      })

      cy.get(".brand").then(function(logoelement)
      {
        cy.log(logoelement.text())
      })
      
    })
  })

