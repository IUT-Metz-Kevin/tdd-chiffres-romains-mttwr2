import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class NumeralRoman {
    correspondance(value: number): string {
        if (value === 1) return "I"
        if (value === 2) return "II"
        if (value === 3) return "III"
        if (value === 4) return "IV"
        if (value === 5) return "V"
        return ""
    }
}

const Roman = new NumeralRoman()

it("Should return as much I as the value", function () {
    expect(Roman.correspondance(1)).toBe("I");
    expect(Roman.correspondance(2)).toBe("II");
    expect(Roman.correspondance(3)).toBe("III");
    expect(Roman.correspondance(4)).toBe("IV");
    expect(Roman.correspondance(5)).toBe("V");
});