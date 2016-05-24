angular
  .module('ListlyApp')
  .controller('ListsController', ListsController);

ListsController.$inject = ['$location'];
function ListsController(   $location  ) {
  var vm = this;
  console.log('ListsController is live');
  vm.lists = [{ id: 1, name: 'homework list'}, { id: 300, name: 'shopping'}];
  vm.sampleData = 'hello world';
}
