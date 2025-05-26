import { it, expect, test } from "vitest"; //importe les méthodes de tests nécessaires.

class RomanNumeral {
    correspondance(value: string): number {

        const map: Record<string, number> = {
        I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0; //variable qui sera incrémentée 

    for (let i = 0; i < value.length; i++) {
      const current = map[value[i]];
      const next = map[value[i + 1]]; 

      if (next > current) {
        total += next - current; // principe numéral romain : si le chiffre suivant est + grand, on soustrait
        i++; 
      } else {
        total += current; // sinon, on additionne
      }
    }

    return total;

    }
}

// commentaire
const chiffre = new RomanNumeral()

// it("Should return as much as there are 'I' ", function () {
//     expect(chiffre.correspondance("I")).toBe(1);
//     expect(chiffre.correspondance("II")).toBe(2);
//     expect(chiffre.correspondance("III")).toBe(3);
// });

// it("Should return 4", function () {
//     expect(chiffre.correspondance("IV")).toBe(4);
// });

// it("Should return 5", function () {
//     expect(chiffre.correspondance("V")).toBe(5);
// });

// it("Should return 9 for 'IX'", function () {
//   expect(chiffre.correspondance("IX")).toBe(9);
// });

// it("Should return 19 for 'XIX'", function () {
//   expect(chiffre.correspondance("XIX")).toBe(19);
// });

// it("Should return 40 for 'XL'", function () {
//   expect(chiffre.correspondance("XL")).toBe(40);
// });

// it("Should return 90 for 'XC'", function () {
//   expect(chiffre.correspondance("XC")).toBe(90);
// });

// it("Should return 400 for 'CD'", function () {
//   expect(chiffre.correspondance("CD")).toBe(400);
// });

// it("Should return 900 for 'CM'", function () {
//   expect(chiffre.correspondance("CM")).toBe(900);
// });

