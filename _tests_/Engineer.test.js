const Engineer = require('../lib/Engineer')

describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("gets a gitub link", () => {
            const engineer = new Engineer("jake", 12, "jake.com", "jake.git")
            expect("jake.git")
        })
    })
    describe("createHtml method", () => {
        it("Creates a html object", () => {
            const engineer = new Engineer("jake", 12, "jake.com", "jake.git")
            expect(["jake", 12, "jake.com", "jake.git"])
        })
    })
})