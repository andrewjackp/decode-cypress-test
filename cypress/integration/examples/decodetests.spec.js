describe("Production", () => {
  it("can log in", () => {
    const user = {
      email: "anthony+clientsandbox@usedecode.com",
      password: "Ejq&f2Q3wL@8siCw%@",
    };

    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("/production");
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.contains("Log in").click();
    cy.contains("Environment: production").should("exist");

    cy.contains("Logout").click();
    cy.visit("/production");

    cy.contains("Environment: production").should("not.exist");
    cy.contains("Log in").should("exist");
  });
});

describe("Staging", () => {
  it("goes to staging", () => {
    const user = {
      email: "anthony+clientsandbox@usedecode.com",
      password: "Ejq&f2Q3wL@8siCw%@",
    };
    cy.visit("/staging");
    cy.visit("/production");
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.contains("Log in").click();
    cy.contains("Environment: staging").should("exist");
    cy.contains("Logout").click();
    cy.visit("/production");
    cy.contains("Environment: staging").should("not.exist");

    cy.contains("Log in").should("exist");
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
