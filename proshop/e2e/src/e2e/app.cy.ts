import { getH1 } from "../support/app.po";

describe("e2e", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    cy.login("my-email@something.com", "myPassword");
    getH1().contains(/Welcome to HelloWorld!/);
  });
});
