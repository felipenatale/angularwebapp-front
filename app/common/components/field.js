(function(){
    angular.module('primeiraApp').component('field',{
        bindings:{
            id: '@',
            label: '@',
            grid: '@',
            placeholder:'@',
            type:'@',
            model: '=',
        },
        controller: [
            'gridSystem',
            function (gridSystem){
                this.$onInit = () => {
                    this.gridClasses = gridSystem.toCssClasses(this.grid)
                }
            }
        ],
        template: `
        <div class="{{ $ctrl.gridClasses }}">
            <div class="form-group">
                <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                <input type="{{ $ctrl.type }}" ng-model="$ctrl.model" class="form-control" id="{{ $ctrl.id }}" placeholder="{{ $ctrl.placeholder}}">
            </div>
        </div>
        ` 
    })
})()