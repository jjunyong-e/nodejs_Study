var hello= function(input){
  console.log(input + ' hello');
}

// with nextTick
  process.nextTick(hello('with nextTick'));
  
// without nextTick
  hello('without nextTick');