'use strict';
const collectionA = [
    {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
  ];
const collectionB = {value: ['a', 'd', 'e', 'f']};
function collectSameElements(collectionA, objectB) {
  var myarray = new Array();
  var mykey = new Array();
  for(var i=0;i<collectionA.length;i++){
    mykey.push(collectionA[i]['key']);
  }
  var myvalue = collectionB['value'];
  for(var i=0;i<mykey.length;i++){
      var flag = true;
      for(var j=0;j<mykey.length;j++){
        if(myarray[j]==mykey[i]){
          flag = false;
          break;
        }
      }
      if(!flag)
        continue;
      for(var j=0;j<myvalue.length;j++){
        if(mykey[i]==myvalue[j]){
          mykey.push(mykey[i]);
          break;
        }
      }
    }
    return myarray;
}
console.log(collectSameElements(collectionA,collectionB));
