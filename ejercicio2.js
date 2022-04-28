function conbinaciones(texto){
 
 
 if (texto.length<=2){
     return texto.length === 2 ? [texto, texto[1] + texto[0]] : [texto];
 }
 return texto.split("")
    .reduce((a, c, i) =>
        a.concat(conbinaciones(texto.slice(0, i)+ texto.slice(i + 1))
        .map(v => c + v))
    ,[]);
}
 console.log(conbinaciones("abc"));

console.log();