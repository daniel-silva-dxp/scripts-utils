const separar = (itens, maximo) => {
  return itens.reduce((acumulador, item, indice) => {
    const grupo = Math.floor(indice / maximo);
    acumulador[grupo] = [...(acumulador[grupo] || []), item];
    return acumulador;
  }, []);
};

const itens = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(JSON.stringify(separar(itens, 5)));
