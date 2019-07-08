'use strict';
const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = {value: ['a', 'd', 'e', 'f']};
function collectSameElements(collectionA, objectB) {
  var myarray = new Array();
    for(var i=0;i<collectionA.length;i++){
      var flag = true;
      for(var j=0;j<myarray.length;j++){
        if(myarray[j]==collectionA[i]){
          flag = false;
          break;
        }
      }
      if(!flag)
        continue;
      var testValue = collectionB['value'];
      for(var j=0;j<testValue.length;j++){
        if(collectionA[i]==testValue[j]){
          myarray.push(collectionA[i]);
          break;
        }
      }
    }
    return myarray;
}
console.log(collectSameElements(collectionA,collectionB));
