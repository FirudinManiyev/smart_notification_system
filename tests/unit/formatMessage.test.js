const { expect } = require("chai");
const formatMessage = require("../../src/utils/formatMessage");

describe("formatMessage()", () => {
    it("should return correctly formatted message", () => {
        const result = formatMessage("Elvin", "Salam");

        expect(result).to.equal("Sending message to Elvin: Salam");
    });

    it("should return a string", () => {
        const result = formatMessage("Elvin", "Salam");

        expect(result).to.be.a("string");
    });

    it("should work when user is empty", () => {
        const result = formatMessage("", "Salam");

        expect(result).to.equal("Sending message to : Salam");
    });

    it("should work when message is empty", () => {
        const result = formatMessage("Elvin", "");

        expect(result).to.equal("Sending message to Elvin: ");
    });
});