/**
 * Input HTML
 * HTML => <input aria-label="${Filter}" ng-model="c.data.filterText" ng-model-options="{debounce: 300}" sn-focus="c.showFilter" placeholder="{{::data.filterMsg}}" ng-change="c.filter()" class="form-control">
 */

/**
 * Função search()
 * IF => verifica se o valor do input é vazio
 * se sim, atribui o retorno do filter do array de dados do backend para o currentPageItems
 *  - dentro do filter verifica se te os campos para fazer o filtro de acordo com cada um
 * Else => se o input estiver vazio, o currentPageItems recebe o valor dos dados do backend
 */

c.filter = function () {
  if (c.data.filterText) {
    c.currentPageItems = c.data.approvals.filter(function (item) {
      if (item.task.number_solic) {
        return (
          item.task.number_solic === c.data.filterText ||
          item.task.number === c.data.filterText
        );
      } else if (item.task.number_order) {
        return (
          item.task.number_order === c.data.filterText ||
          item.task.number === c.data.filterText
        );
      } else {
        return (
          item.task.number === c.data.filterText ||
          item.task.short_description.includes(c.data.filterText)
        );
      }
    });
  } else {
    c.currentPageItems = c.data.approvals;
  }
};
