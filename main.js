// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//
const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      while (newBase === this.dna[randIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
    },
    compareDNA(pAequor) {},
  };
};

console.log(returnRandBase());
console.log(mockUpStrand());
