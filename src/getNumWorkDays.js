/**
 * Conta a próxima data util à partir de uma data inicial
 * passando a quantidade de dias uteis.
 *
 * EX: 11/08/2021 passando 20 dias uteis = 08/09/2021
 */

const newDate = new Date(); // Recebe a data inicial;
const sumDays = 20; // Quantidades de dias uteis;
const isSaturdayUseful = false; // O sábado contará como dia útil?;
const direction = sumDays > 0 ? 1 : -1; // Direção da contagem
const diasUteisRemanescente = Math.abs(sumDays);

function calculaNovaData(data, dias, direction) {
  if (dias == 0) {
    return data;
  }

  let eFimDeSemana;

  // adiciona/subtrai um dia
  data.setDate(data.getDate() + direction);
  //Verifica se o dia é util
  if (isSaturdayUseful) {
    eFimDeSemana = data.getDay() in { 0: "Sunday" };
  } else {
    eFimDeSemana = data.getDay() in { 0: "Sunday", 6: "Saturday" };
  }
  //Se for util remove um dia
  if (!eFimDeSemana) {
    dias--;
  }

  return calculaNovaData(data, dias, direction);
}

const result = calculaNovaData(newDate, sumDays, direction);

/**
 * Conta a quantidade de dias uteis
 * entre dias datas
 *
 * EX: 11/08/2021 à 08/09/2021 = 21 dias
 */

function getNumWorkDays(startDate, endDate) {
  let numWorkDays = 0;
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      numWorkDays++;
    }
    currentDate = currentDate.addDays(1);
  }
  return numWorkDays;
}

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const currentDate = new Date("2021-08-11");
const endDate = new Date("2021-09-08");

const date = getNumWorkDays(currentDate, endDate);
