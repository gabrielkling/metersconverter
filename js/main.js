//Esperar Submissão

document.getElementById('form').addEventListener('submit', pegarDados);

limparCampos();

function pegarDados(e){

  var valor1 = document.getElementById('valor1').value;

  var from = document.getElementById('from').value;

  var para = document.getElementById('para').value;

  var valorConvertido = document.getElementById('valor2');

  if (from == para){
    valorConvertido.value = valor1;
  }

  else if (from == "miliMetro"){
    if (para == "centiMetro"){
      valorConvertido.value = valor1/10;
    }
    if (para == "deciMetro"){
      valorConvertido.value = valor1/100;
    }
    if (para == "metro"){
      valorConvertido.value = valor1/1000;
    }
    if (para == "decaMetro"){
      valorConvertido.value = valor1/10000;
    }
    if (para == "hectMetro"){
      valorConvertido.value = valor1/100000;
    }
    if (para == "kiloMetro"){
      valorConvertido.value = valor1/1000000;
    }
  }
  else if (from == "centiMetro"){
    if (para == "miliMetro"){
      valorConvertido.value = valor1*10;
    }
    if (para == "deciMetro"){
      valorConvertido.value = valor1/10;
    }
    if (para == "metro"){
      valorConvertido.value = valor1/100;
    }
    if (para == "decaMetro"){
      valorConvertido.value = valor1/1000;
    }
    if (para == "hectMetro"){
      valorConvertido.value = valor1/10000;
    }
    if (para == "kiloMetro"){
      valorConvertido.value = valor1/100000;
    }
  }
  else if (from == "deciMetro"){
    if (para == "miliMetro"){
      valorConvertido.value = valor1*100;
    }
    if (para == "centiMetro"){
      valorConvertido.value = valor1*10;
    }
    if (para == "metro"){
      valorConvertido.value = valor1/10;
    }
    if (para == "decaMetro"){
      valorConvertido.value = valor1/100;
    }
    if (para == "hectMetro"){
      valorConvertido.value = valor1/1000;
    }
    if (para == "kiloMetro"){
      valorConvertido.value = valor1/10000;
    }
  }
  else if (from == "metro"){
    if (para == "miliMetro"){
      valorConvertido.value = valor1*1000;
    }
    if (para == "centiMetro"){
      valorConvertido.value = valor1*100;
    }
    if (para == "deciMetro"){
      valorConvertido.value = valor1*10;
    }
    if (para == "decaMetro"){
      valorConvertido.value = valor1/10;
    }
    if (para == "hectMetro"){
      valorConvertido.value = valor1/100;
    }
    if (para == "kiloMetro"){
      valorConvertido.value = valor1/1000;
    }
  }
  else if (from == "decaMetro"){
    if (para == "miliMetro"){
      valorConvertido.value = valor1*10000;
    }
    if (para == "centiMetro"){
      valorConvertido.value = valor1*1000;
    }
    if (para == "deciMetro"){
      valorConvertido.value = valor1*100;
    }
    if (para == "metro"){
      valorConvertido.value = valor1*10;
    }
    if (para == "hectMetro"){
      valorConvertido.value = valor1/10;
    }
    if (para == "kiloMetro"){
      valorConvertido.value = valor1/100;
    }
  }
  else if (from == "hectMetro"){
    if (para == "miliMetro"){
      valorConvertido.value = valor1*100000;
    }
    if (para == "centiMetro"){
      valorConvertido.value = valor1*10000;
    }
    if (para == "deciMetro"){
      valorConvertido.value = valor1*1000;
    }
    if (para == "metro"){
      valorConvertido.value = valor1*100;
    }
    if (para == "decaMetro"){
      valorConvertido.value = valor1*10;
    }
    if (para == "kiloMetro"){
      valorConvertido.value = valor1/10;
    }
  }
  else if (from == "kiloMetro"){
    if (para == "miliMetro"){
      valorConvertido.value = valor1*1000000;
    }
    if (para == "centiMetro"){
      valorConvertido.value = valor1*100000;
    }
    if (para == "deciMetro"){
      valorConvertido.value = valor1*10000;
    }
    if (para == "metro"){
      valorConvertido.value = valor1*1000;
    }
    if (para == "decaMetro"){
      valorConvertido.value = valor1*100;
    }
    if (para == "hectMetro"){
      valorConvertido.value = valor1*10;
    }
  }

  e.preventDefault();
  
}

function limparCampos(){
  document.getElementById('valor1').value = "";
  document.getElementById('valor2').value = "";
}
