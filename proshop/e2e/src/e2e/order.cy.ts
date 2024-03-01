import { getH1 } from "../support/app.po";

describe("orders e2e", () => {
  beforeEach(() => cy.visit("/orders"));

  it("should display the orders list", () => {
    cy.login("my-email@something.com", "myPassword");
    getH1().should("have.text", "Welcome to OrderList!");
  });
});
