import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class NumeralRoman {
    correspondance(value: number): string {
        if (value === 1) return "I"
        if (value === 2) return "II"

        return ""
    }
}

const Roman = new NumeralRoman()

it("Should return as much I as the value", function () {
    expect(Roman.correspondance(1)).toBe("I");
    expect(Roman.correspondance(2)).toBe("II");
});