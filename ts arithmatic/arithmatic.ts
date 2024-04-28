class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    }
  }
  
  const calculator = new Calculator();
  
  console.log('Addition:', calculator.add(5, 3));
  console.log('Subtraction:', calculator.subtract(5, 3));
  console.log('Multiplication:', calculator.multiply(5, 3));
  console.log('Division:', calculator.divide(6, 3));
  
  //npm -v
  //node -v
  //npm install -g typescript
  //tsc -v

  //tsc arithmatics.ts
  //node arithmatics.js