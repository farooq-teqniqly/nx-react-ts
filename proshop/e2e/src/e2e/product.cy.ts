import { getH1 } from "../support/app.po";

describe("products e2e", () => {
  beforeEach(() => cy.visit("/products"));

  it("should display the product list", () => {
    cy.login("my-email@something.com", "myPassword");
    getH1().should("have.text", "Welcome to ProductList!");
  });
});
