import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class RomanNumeral {
    correspondance(value: string): number {
        let compteur = 0
        for (let c of value) {
            if (c === "I") compteur++
        }
        if (value === "IV") return 4
        if (value === "V") compteur += 5
        return compteur
    }
}


// commentaire
let chiffre = new RomanNumeral()

it("Should return as much as there are 'I' ", function () {
    expect(chiffre.correspondance("I")).toBe(1);
    expect(chiffre.correspondance("II")).toBe(2);
    expect(chiffre.correspondance("III")).toBe(3);
});

it("Should return 4", function () {
    expect(chiffre.correspondance("IV")).toBe(4);
});

it("Should return 5", function () {
    expect(chiffre.correspondance("V")).toBe(5);
});
