const Manager = require('../lib/Manager')

describe("Manager class", () => {
    describe("getRole method", () => {
        it("gets a role", () => {
            const manager = new Manager("jake", 12, "jake.com")
            expect("Manager")
        })
    })
    describe("createHtml method", () => {
        it("Creates a html object", () => {
            const manager = new Manager("jake", 12, "jake.com")
            expect(["jake", 12, "jake.com", "Manager"])
        })
    })
})