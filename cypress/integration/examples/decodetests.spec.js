describe("Production", () => {
  it("can log in", () => {
    const user = {
      email: "anthony+clientsandbox@usedecode.com",
      password: "Ejq&f2Q3wL@8siCw%@",
    };

    cy.login(user);
    cy.visit("/production");
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.contains("Log in").click();

    cy.url().should("contain", "/production");
    cy.wait(2000);
  });
});

describe("Staging", () => {
  it("goes to staging", () => {
    const user = {
      email: "anthony+clientsandbox@usedecode.com",
      password: "Ejq&f2Q3wL@8siCw%@",
    };
    cy.stagingLogin(user);
    cy.url().should("contain", "/staging");
    cy.wait(2000);
  });
});

describe("NoEnv", () => {
  it("has noEnv", () => {
    const user = {
      email: "anthony+clientsandbox@usedecode.com",
      password: "Ejq&f2Q3wL@8siCw%@",
    };
    cy.visit("/noEnv");
    cy.noEnvLogin(user);
    cy.contains("Decode encountered an error").should("exist");
    cy.visit("/cached");
    cy.wait(3000);
  });
});

describe("Cached", () => {
  it("redirects right to cached", () => {
    const user = {
      email: "anthony+clientsandbox@usedecode.com",
      password: "Ejq&f2Q3wL@8siCw%@",
    };
    cy.visit("/cached");
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.contains("Log in").click();
    cy.wait(3000);
    cy.reload();
  });
});

describe("useLogout", () => {
  it("logs out", () => {
    const user = {
      email: "anthony+clientsandbox@usedecode.com",
      password: "Ejq&f2Q3wL@8siCw%@",
    };
    cy.visit("/production");
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.contains("Log in").click();
    cy.contains("Logout").click();
    cy.wait(3000);
  });
  it("back to log in page", () => {
    cy.visit("/production");
  });
});
