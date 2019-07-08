'use strict';
 const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
 const collectionB = [['a', 'd', 'e', 'f']];
function collectSameElements(collectionA, collectionB) {
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
      var innerArray = new Array();
      for(var i=0;i<collectionB[0].length;i++)
        innerArray.push(collectionB[0][i]);
      for(var j=0;j<innerArray.length;j++){
        if(collectionA[i]==innerArray[j]){
          myarray.push(collectionA[i]);
          break;
        }
      }
    }
    return myarray;
}
console.log(collectSameElements(collectionA,collectionB));
