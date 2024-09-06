function fibonacci(number) {
    let numberA = 0;
    let numberB = 1;
    
    // Verifica se o número informado é 0 ou 1, pois ambos pertencem à sequência
    if (number === 0 || number === 1) {
      return `O número ${number} pertence à sequência de Fibonacci.`;
    }
  
    // Gera a sequência de Fibonacci até encontrar o número ou passar dele
    while (numberB <= number) {
      const next = numberA + numberB;
      numberA = numberB;
      numberB = next;
  
      if (numberB === number) {
        return `O número ${number} pertence à sequência de Fibonacci.`;
      }
    }
  
    return `O número ${number} não pertence à sequência de Fibonacci.`;
  }
  
  // Teste a função, passar direto no log
 
  console.log(fibonacci(20));