describe("mutate", () => {
    it("Transform an object to an array", () => {
        expect(mutate({ 1: 11 })).deep.equal([[1, 11]]);
    })
    it("Transform the type of stringified integers keys to number", () => {
        var expected = [[1, 11]];
        var result = mutate({ 1: 11 })
        expect(result).deep.equal(expected);
    })
    it("Put each couple : key and value in a nested array", () => {
        var expected = [[1, 11], [2, 22]]
        var result = mutate({ 1: 11, 2: 22 })
        expect(result).deep.equal(expected);
    })
    it("Transform an array to an object", () => {
        var result = typeof (mutate(["first"])) === 'object' && !Array.isArray(mutate(["first"]))
        expect(result).to.equal(true);
    })
    it("Give each element its index as a key", () => {
        let expected = [mutate(["first", "second"])].reduce(function (acc, elem, i) {
            return acc && Number(Object.keys(elem)[0]) === i
        }, true)
        expect(expected).deep.equal(true)
    })

})
