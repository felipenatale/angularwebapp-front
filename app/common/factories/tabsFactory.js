(function(){
    angular.module('primeiraApp').factory('tabs',[TabsFactory])

    function TabsFactory(){

        function show(owner, {
            tabList = false,
            tabCreate = false,
            tabDelete = false,
            tabUpdate = false
        }){
            owner.tabList = tabList
            owner.tabCreate = tabCreate
            owner.tabDelete = tabDelete
            owner.tabUpdate = tabUpdate
        }

        return { show }
    }
})()