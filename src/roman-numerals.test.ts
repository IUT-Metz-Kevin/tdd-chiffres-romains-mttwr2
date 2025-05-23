import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class RomanNumeral {
    correspondance(value: string): number {
        if (value === "I") return 1
        if (value === "II") return 2
        if (value === "III") return 3
        if (value === "IIII") return 4
        return 0
    }
}

let chiffre = new RomanNumeral()

it("Should return as much as there are 'I' ", function () {
    expect(chiffre.correspondance("I")).toBe(1);
    expect(chiffre.correspondance("II")).toBe(2);
    expect(chiffre.correspondance("III")).toBe(3);
    expect(chiffre.correspondance("IV")).toBe(4);
});
