(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myApp.contacts')
        .component('contactsContainer', {
            templateUrl: 'contacts/contacts-container/contacts-container.template.html',
            controller: contactsContainerController,
              controllerAs: 'contactsContainerVM',
            bindings: {
                Binding: '=',
            },
        });

    contactsContainerController.inject = ['contactsService'];

    function contactsContainerController(contactsService) {

        var ctrl = this;


        ////////////////

        ctrl.$onInit = function () {
            ctrl.data = contactsService.getContacts();
        };
        ctrl.onChanges = function (changesObj) {};
        ctrl.onDestory = function () {};
    }
})();