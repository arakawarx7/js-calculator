/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(){


  let memory = 0;
  let total = 0;
  // var foo ={};
  // foo.test = function function_name(argument) {

  // };
   let  calculator = {};



  //function validation(x){

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  calculator.load = function(x){
    if(typeof x !== 'number'){
      throw new Error('wrong') ;
    }
    this.total  = x;
    console.log(this.total);
    return  this.total;
    };

  /**
   * Return the value of `total`
   * @return { Number }
   */
   calculator.getTotal = function(){
    if(this.total === undefined){
      this.total = 0;
    }return this.total;
   };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   calculator.add = function(x){
    if(typeof x !== 'number'){
      throw new Error('wrong') ;
    }
    this.total += x;
    console.log(this.total);
    return this.total;
   };
  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   calculator.subtract = function(x){
    if(typeof x !== 'number'){
      throw new Error('wrong') ;
    }
    this.total -= x;
    return this.total;
   };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   calculator.multiply = function(x){
    if(typeof x !== 'number'){
      throw new Error('wrong') ;
    }
    this.total *= x;
    return this.total;
   };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   calculator.divide = function(x){
    if(typeof x !== 'number'){
      throw new Error('wrong') ;
    }
    this.total /= x;
    return this.total;
   };


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   calculator.recallMemory = function(x){
    return memory;
   };

  /**
   * Stores the value of `total` to `memory`
   */
   calculator.saveMemory = function(x){
    memory = this.total;
    return this.memory;
   };

  /**
   * Clear the value stored at `memory`
   */
  calculator.clearMemory = function(x){
  memory = 0;
  return memory;
  };
  /**
   * Validation
   */


return calculator;
}

