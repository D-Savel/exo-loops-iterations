let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
]
let sumtab = 0
for (let i = 0; i < tab.length; i++) {
  for (let j = 0; j < tab[i].length; j++) {
    sumtab += tab[i][j]
  }
}
console.log(`la somme des valeurs du tableau est : ${sumtab}`)