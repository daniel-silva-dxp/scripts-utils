/**
 * Input HTML
 * HTML => <input aria-label="${Filter}" ng-model="search" ng-model-options="{debounce: 300}" sn-focus="c.showFilter" placeholder="{{::data.filterMsg}}" ng-change="c.filter()" class="form-control">
 */

/**
 * Função search()
 * IF => verifica se o valor do input é vazio
 * se sim, atribui o retorno do filter do array de dados do backend para o currentPageItems
 *  - dentro do filter verifica se te os campos para fazer o filtro de acordo com cada um
 * Else => se o input estiver vazio, o currentPageItems recebe o valor dos dados do backend
 */

const approvals = [
  {
    number: "ITM0072",
    number_solic: "SCOM0072",
    number_order: "OCOM0072",
    short_description: "Lorem ref.:325",
  },
  {
    number: "ITM0073",
    number_solic: "SCOM0073",
    number_order: "OCOM0073",
    short_description: "Lorem ref.:383",
  },
  {
    number: "ITM0074",
    number_solic: "SCOM0074",
    number_order: "OCOM0074",
    short_description: "Lorem ref.:398",
  },
  {
    number: "ITM0075",
    number_solic: "SCOM0075",
    number_order: "OCOM0075",
    short_description: "Lorem ref.:430",
  },
  {
    number: "ITM0076",
    number_solic: "SCOM0076",
    number_order: "OCOM0076",
    short_description: "Lorem ref.:461",
  },
  {
    number: "ITM0077",
    number_solic: "SCOM0077",
    number_order: "OCOM0077",
    short_description: "Lorem ref.:410",
  },
  {
    number: "ITM0078",
    number_solic: "SCOM0078",
    number_order: "OCOM0078",
    short_description: "Lorem ref.:453",
  },
  {
    number: "ITM0079",
    number_solic: "SCOM0079",
    number_order: "OCOM0079",
    short_description: "Lorem ref.:421",
  },
  {
    number: "ITM0080",
    number_solic: "SCOM0080",
    number_order: "OCOM0080",
    short_description: "Lorem ref.:400",
  },
  {
    number: "ITM0081",
    number_solic: "SCOM0081",
    number_order: "OCOM0081",
    short_description: "Lorem ref.:488",
  },
  {
    number: "ITM0082",
    number_solic: "SCOM0082",
    number_order: "OCOM0082",
    short_description: "Lorem ref.:346",
  },
  {
    number: "ITM0083",
    number_solic: "SCOM0083",
    number_order: "OCOM0083",
    short_description: "Lorem ref.:330",
  },
  {
    number: "ITM0084",
    number_solic: "SCOM0084",
    number_order: "OCOM0084",
    short_description: "Lorem ref.:484",
  },
  {
    number: "ITM0085",
    number_solic: "SCOM0085",
    number_order: "OCOM0085",
    short_description: "Lorem ref.:383",
  },
  {
    number: "ITM0086",
    number_solic: "SCOM0086",
    number_order: "OCOM0086",
    short_description: "Lorem ref.:319",
  },
  {
    number: "ITM0087",
    number_solic: "SCOM0087",
    number_order: "OCOM0087",
    short_description: "Lorem ref.:437",
  },
  {
    number: "ITM0088",
    number_solic: "SCOM0088",
    number_order: "OCOM0088",
    short_description: "Lorem ref.:431",
  },
  {
    number: "ITM0089",
    number_solic: "SCOM0089",
    number_order: "OCOM0089",
    short_description: "Lorem ref.:360",
  },
  {
    number: "ITM0090",
    number_solic: "SCOM0090",
    number_order: "OCOM0090",
    short_description: "Lorem ref.:468",
  },
  {
    number: "ITM0091",
    number_solic: "SCOM0091",
    number_order: "OCOM0091",
    short_description: "Lorem ref.:320",
  },
  {
    number: "ITM0092",
    number_solic: "SCOM0092",
    number_order: "OCOM0092",
    short_description: "Lorem ref.:313",
  },
  {
    number: "ITM0093",
    number_solic: "SCOM0093",
    number_order: "OCOM0093",
    short_description: "Lorem ref.:313",
  },
  {
    number: "ITM0094",
    number_solic: "SCOM0094",
    number_order: "OCOM0094",
    short_description: "Lorem ref.:403",
  },
  {
    number: "ITM0095",
    number_solic: "SCOM0095",
    number_order: "OCOM0095",
    short_description: "Lorem ref.:325",
  },
  {
    number: "ITM0096",
    number_solic: "SCOM0096",
    number_order: "OCOM0096",
    short_description: "Lorem ref.:353",
  },
  {
    number: "ITM0097",
    number_solic: "SCOM0097",
    number_order: "OCOM0097",
    short_description: "Lorem ref.:388",
  },
  {
    number: "ITM0098",
    number_solic: "SCOM0098",
    number_order: "OCOM0098",
    short_description: "Lorem ref.:332",
  },
  {
    number: "ITM0099",
    number_solic: "SCOM0099",
    number_order: "OCOM0099",
    short_description: "Lorem ref.:453",
  },
  {
    number: "ITM00100",
    number_solic: "SCOM00100",
    number_order: "OCOM00100",
    short_description: "Lorem ref.:349",
  },
];
const max_items = 10;

let currentPageItems = approvals.slice(0, max_items);

const filter = function (search) {
  if (search) {
    return approvals.filter(function (item) {
      return (
        item.number === search ||
        item.number_solic === search ||
        item.number_order === search ||
        item.short_description.includes(search)
      );
    });
  } else {
    return approvals;
  }
};

console.log(filter("453"));
