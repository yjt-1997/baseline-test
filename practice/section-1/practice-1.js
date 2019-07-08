'use strict';
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
    for(var j=0;j<collectionB.length;j++){
      if(collectionA[i]==collectionB[j]){
        myarray.push(collectionA[i]);
        break;
      }
    }
  }
  return myarray;
}
