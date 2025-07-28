describe("WebSocket product messages", () => {
  it("exibe produto recebido via WebSocket", () => {
    cy.visit("http://localhost:5173");

    cy.get('[data-testid="product-message-0"]', { timeout: 15000 }).should(
      "contain.text",
      "Produto"
    );
  });
});
