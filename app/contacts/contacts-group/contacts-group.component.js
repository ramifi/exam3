(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myApp.contacts')
        .component('contactsGroup', {
            // template: 'htmlTemplate',
            templateUrl: 'contacts/contacts-group/contacts-group.template.html',

            controller: contactsController,
            controllerAs: 'contactsGroupVM',
            bindings: {
                list: '<'
            }
        });

    function contactsController() {

        var ctrl = this;
        ctrl.itemClicked = function (item) {
            ctrl.showContacts[item.id] = item.contacts && item.contacts.length == 0 ? false : !ctrl.showContacts[item.id];
        }

        ctrl.$onInit = function () {
            ctrl.showContacts = [];
        };
        ctrl.onChanges = function (changesObj) {};
        ctrl.onDestory = function () {};
    }
})();