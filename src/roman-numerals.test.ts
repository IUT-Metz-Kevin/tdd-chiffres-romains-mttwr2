import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class RomanNumeral {
    correspondance(value: string): number {
        if (value === "I") return 1

        return 0
    }
}

let chiffre = new RomanNumeral()

it("Should return '1' when value is I", function () {
    expect(chiffre.correspondance("I")).toBe(1);
});
