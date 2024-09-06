function checkString(text) {
    let count = 0;
  
    // Percorre cada caractere da string diretamente com for...of
    for (const letterAa of text) {
      // Verifica se o caractere atual é 'a' ou 'A'
      if (letterAa === 'a' || letterAa === 'A') {
        count++;
      }
    }
  
    if (count > 0) {
      console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    } else {
      console.log("A letra 'a' não aparece na string.");
    }
  }
  
  // Testando a função
  const text = "Aqui está um exemplo com várias letras A e a.";
  checkString(text);