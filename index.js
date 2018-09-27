const HashTable = require('./entity/HashTable');

(() => {

  let ht = new HashTable();

  console.log(ht);

  ht.put('Vvvv');
  ht.put('EEEEппппыпыыпы');
  ht.put('fgfgfg');
  ht.put('90');
  ht.put('zxc');
  ht.put('zxd');
  ht.put('zasxcdллл');
  ht.put('Звезда по имени солнце');
  ht.put('2');


  console.log(ht);

  console.log(ht.find('2'));
  console.log(ht.find('zxd'));
  console.log(ht.find('EEEE----'));



})();