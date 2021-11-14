const Employee = require('../lib/Employee')

describe("Employee class", () => {
    describe("getName method", () => {
        it("gets a name", () => {
            const employee = new Employee("jake", 12, "jake.com")
            expect("jake")
        })
    })
    describe("getId method", () => {
        it("gets an id", () => {
            const employee = new Employee("jake", 12, "jake.com")
            expect(12)
        })
    })
    describe("getEmail method", () => {
        it("gets an email", () => {
            const employee = new Employee("jake", 12, "jake.com")
            expect("jake.com")
        })
    })
    describe("getRole method", () => {
        it("gets role", () => {
            const employee = new Employee("jake", 12, "jake.com")
            expect("Employee")
        })
    })
})