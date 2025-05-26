import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class NumeralRoman {
    correspondance(value: number): string {
    const map: [string, number][] = [
      ['I', 1],
      ['IV', 4],
      ['V', 5],
    ];

  let resultat = '';

  for (const [roman, num] of map) {
    while (value >= num) {
      resultat += roman;
      value -= num;
    }
  }

  return resultat;
}

    }


const Roman = new NumeralRoman()

it("Should return as much I as the value", function () {
    expect(Roman.correspondance(1)).toBe("I");
    expect(Roman.correspondance(2)).toBe("II");
    expect(Roman.correspondance(3)).toBe("III");
});

it("should return IV when given 4", function () {
    expect(Roman.correspondance(4)).toBe("IV");
});