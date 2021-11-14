const Intern = require('../lib/Intern')

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("gets a school", () => {
            const intern = new Intern("jake", 12, "jake.com", "school")
            expect("school")
        })
    })
    describe("createHtml method", () => {
        it("Creates a html object", () => {
            const intern = new Intern("jake", 12, "jake.com", "school")
            expect(["jake", 12, "jake.com", "school"])
        })
    })
})