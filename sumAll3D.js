let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]
let sumtab = 0
for (let i = 0; i < tab.length; i++) {
  for (let j = 0; j < tab[i].length; j++) {
    for (let k = 0; k < tab[i][j].length; k++) {
      sumtab += tab[i][j][k]
    }
  }
}
console.log(`la somme des valeurs du tableau est : ${sumtab}`)