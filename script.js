describe("TestingSorting", () => {
  beforeEach(() => {
    cy.visit("/index.html");
    cy.get("#bands")
      .then($ul => {
        // create a div element and set its id attribute to 'fixture'
        const div = document.createElement("div");
        div.setAttribute("id", "fixture");
        // append the div element to the body element
        document.body.appendChild(div);
        // append the ul element to the div element
        div.appendChild($ul[0]);
      })
      .as("ul");
  });

  it("TestingSorting - Sorted bands are displayed correctly", () => {
    cy.get("@ul").within(() => {
      const bandList = Cypress.$("li").toArray();
      const bandNames = bandList.map(band => band.textContent);
      const sortedBandNames = bandNames.sort(function(a, b) {
        return strip(a) > strip(b) ? 1 : -1;
      });
      expect(bandNames).to.deep.equal(sortedBandNames);
    });
  });
});

function strip(bandName) {
  return bandName.replace(/^(a|the|an) /i, "").trim();
}
