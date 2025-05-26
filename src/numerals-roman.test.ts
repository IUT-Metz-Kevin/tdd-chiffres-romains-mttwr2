import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class NumeralRoman {
    correspondance(value: number): string {
        if (value === 1) return "I"

        return ""
    }
}

const Roman = new NumeralRoman()

it("Should return 1 for 'I'", function () {
    expect(Roman.correspondance(1)).toBe("I");
});