const HashTable = require('./entity/HashTable');

(() => {

  let ht = new HashTable();

  console.log(ht);

  ht.put('Vvvv');
  ht.put('EEEE');
  ht.put('fgfgfg');
  ht.put('90');
  ht.put('zxc');
  ht.put('zasxcd');
  ht.put('p1');
  ht.put('p2');
  ht.put('p3');
  ht.put('p4');
  ht.put('p5');
  ht.put('p6');
  ht.put('p7');
  ht.put('p8');
  ht.put('p9');
  ht.put('p10');
  ht.put('p11');
  ht.put('p12');
  ht.put('p13');
  ht.put('p14');
  ht.put('p15');
  ht.put('p16');
  ht.put('p17');


  console.log(ht);

  console.log(ht.getHashFunction('p'));

  console.log(ht.find('EEEE'));
  console.log(ht.find('EEEE----'));



})();