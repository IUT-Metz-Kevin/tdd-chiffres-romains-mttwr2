import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class RomanNumeral {
    correspondance(value: string): number {

        const map: Record<string, number> = {
      I: 1,
      V: 5,
    };
    let total = 0;

    for (let i = 0; i < value.length; i++) {
      const current = map[value[i]];
      const next = map[value[i + 1]];

      if (next > current) {
        total += next - current;
        i++; // Skip next character since it's been processed
      } else {
        total += current;
      }
    }

    return total;

    }
}

// commentaire
const chiffre = new RomanNumeral()

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
