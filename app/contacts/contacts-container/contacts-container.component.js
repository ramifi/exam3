(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myApp.contacts')
        .component('contactsContainer', {
           // template: 'htmlTemplate',
            templateUrl: 'contacts/contacts-container/contacts-container.template.html',
                          
            controller: contactsController,
              controllerAs: 'contactsContainerVM',
            bindings: {
                Binding: '=',
            },
        });

    contactsController.inject = ['contactsService'];

    function contactsController(contactsService) {

        var ctrl = this;


        ////////////////

        ctrl.$onInit = function () {
            ctrl.data = contactsService.getContacts();
        };
        ctrl.onChanges = function (changesObj) {};
        ctrl.onDestory = function () {};
    }
})();