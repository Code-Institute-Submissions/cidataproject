describe("Calculator", function() {
    describe("addition function", function() {
        it("should fail", function() {
            expect(addition()).toBe(30);
        });
    });
});

describe("Calculator", function() {
    describe("Subtraction function", function() {
        it("should pass", function() {
            expect(subtraction()).toBe(90);
        });
    });
});

describe("Votegraph", function() {
    describe("vote function", function() {
        it("should pass", function() {
            expect(show_vote()).toBe(dc.pluck('vote'));
        });
    });
});

