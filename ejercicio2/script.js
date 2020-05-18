const Rom =(num) => {
  var b = "";
  var unidades = num%10;
  num= Math.trunc(num=num/10);
  var decenas = num%10;
  num= Math.trunc(num=num/10);
  var centenas = num%10;
  num= Math.trunc(num=num/10);
  var millares = num%10;
  num= Math.trunc(num=num/10);
  if (millares===1){
    b += "M"
  }else if (millares ===2){
    b += "MM"
  }else if (millares ===3){
    b += "MMM"
  }
  if (centenas===1){
    b += "C"
  }else if (centenas ===2){
    b += "CC"
  }else if (centenas ===3){
    b += "CCC"
  }else if (centenas ===4){
    b += "CD"
  }else if (centenas ===5){
    b += "D"
  }else if (centenas ===6){
    b += "DC"
  }else if (centenas ===7){
    b += "DCC"
  }else if (centenas ===8){
    b += "DCCC"
  }else if (centenas ===9){
    b += "CM"
  }
 if (decenas===1){
    b += "X"
  }else if (decenas ===2){
    b += "XX"
  }else if (decenas ===3){
    b += "XXX"
  }else if (decenas ===4){
    b += "XL"
  }else if (decenas ===5){
    b += "L"
  }else if (decenas ===6){
    b += "LX"
  }else if (decenas ===7){
    b += "LXX"
  }else if (decenas ===8){
    b += "LXXX"
  }else if (decenas ===9){
    b += "XC"
  }
  if (unidades===1){
    b += "I"
  }else if (unidades ===2){
    b += "II"
  }else if (unidades ===3){
    b += "III"
  }else if (unidades ===4){
    b += "IV"
  }else if (unidades ===5){
    b += "V"
  }else if (unidades ===6){
    b += "VI"
  }else if (unidades ===7){
    b += "VII"
  }else if (unidades ===8){
    b += "VIII"
  }else if (unidades ===9){
    b += "IX"
  }
  return b
}

console.log (Rom(3999));