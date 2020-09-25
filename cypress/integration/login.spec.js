it("can log in", () => {
  const user = {
    email: "anthony+clientsandbox@usedecode.com",
    password: "Ejq&f2Q3wL@8siCw%@",
  };

  // register w/out UI
  cy.login(user);

  cy.visit("/production");
  cy.get("#email").type(user.email);
  cy.get("#password").type(user.password);
  cy.contains("Log in").click();

  // ensure the login page sends you home after login
  cy.url().should("contain", "/production");
});
