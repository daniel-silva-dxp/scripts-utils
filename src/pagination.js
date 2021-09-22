const maxItems = 10; // número de itens por página

// Dados vindo do servidor
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
];

let currentItems = approvals.slice(0, maxItems);
let currentPage = 1;
let numberOfPages = Math.ceil(approvals.length / maxItems);
let start = 0;
let end =
  start + maxItems < approvals.length ? start + maxItems : approvals.length - 1;

const setCurrentPage = function (pageNumber) {
  if (pageNumber < 1 || pageNumber > numberOfPages) return;
  start = (pageNumber - 1) * maxItems;
  end = start + 5 < approvals.length - 1 ? start + maxItems : approvals.length;
  currentItems = approvals.slice(start, end);
  currentPage = pageNumber;
};

/**
 * HTML - o exemplo foi usado com Angularjs
 */

{
  /* <div class="panel-footer" ng-if="approvals.length > maxItems">
  <div class="btn-toolbar m-r pull-left">
    <div class="btn-group">
      <a href="javascript:void(0)" class="btn btn-default" aria-label="Previous" ng-disabled="currentPage == 1" ng-click="setCurrentPage(currentPage -1)"><i class="fa fa-chevron-left"></i></a>
    </div>

    <div class="btn-group">
      <a href="javascript:void(0)" class="btn btn-default" aria-label="Next" id="prev-tab-next" ng-disabled="currentPage == numberOfPages" ng-click="setCurrentPage(currentPage + 1)"><i class="fa fa-chevron-right"></i></a>
    </div>
  </div>
  <div class="m-t-xs panel-title">${Linhas {{start + 1}} - {{end}} de {{approvals.length}}}</div>
</div> */
}
