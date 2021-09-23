var globalvalue;

exports.setGlobal = function(val){
  globalvalue = val;
}
exports.returnGlobal = function(){
  console.log(globalvalue);
  return globalvalue;
}