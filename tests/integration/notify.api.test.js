const request = require("supertest");
const { expect } = require("chai");

const app = require("../../src/server");

describe("POST /notify", () => {
    it("should return queued status with valid data", async () => {
        const response = await request(app)
            .post("/notify")
            .send({
                user: "Elvin",
                email: "elvin@example.com",
                message: "Salam",
            });

        expect(response.status).to.equal(200);

        expect(response.body).to.deep.equal({
            status: "queued",
        });
    });

    it("should return 400 if fields are missing", async () => {
        const response = await request(app)
            .post("/notify")
            .send({});

        expect(response.status).to.equal(400);

        expect(response.body).to.have.property("error");
    });
});