let n: number = 100;
function fizzBuzz(n: number): string {
    let numberSet: string = "";
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            numberSet += "FizzBuzz" + " ";
        } else if(i % 3 === 0){
            numberSet += "Fizz" + " ";
        } else if(i % 5 === 0){
            numberSet += "Buzz" + " "; 
        } else {
            numberSet += i + " ";
        }
    }
    return numberSet.trim();
}
console.log(fizzBuzz(n));