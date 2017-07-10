const assert = require("assert");

describe("A string", function () {
  it("can be uppercased", function () {
    assert.equal("Hello".toUpperCase(), "HELLO");
  });

  it("can be lowercased", function () {
    assert.equal("Hello".toLowerCase(), "hello");
  })

});
