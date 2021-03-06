const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
    let adoption;
    let expectedAdopter;

    before(async () => {
        adoption = await Adoption.deployed();
    });

    describe("adopting a pet and retrieving account addresses", async () => {
        before("adopt a pet using accounts[0]", async () => {
            await adoption.adopt(2, { from: accounts[3] });
            expectedAdopter = accounts[3];
        });

        it("can fetch the address of an owner by pet id", async () => {
            const adopter = await adoption.adopters(2);
            assert.equal(adopter, expectedAdopter, "The owner of the adopted pet should be the first account.");
        });

        it("can fetch the collection of all pet owners' addresses", async () => {
            const adopters = await adoption.getAdopters();
            assert.equal(adopters[2], expectedAdopter, "The owner of the adopted pet should be in the collection.");
        });
    });
});