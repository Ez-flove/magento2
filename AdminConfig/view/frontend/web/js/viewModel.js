/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define(['uiComponent', 'ko', 'jquery', 'jquery/ui', 'Magento_Ui/js/modal/alert'],
    function (Component, ko, $, ui, alert) {
    'use strict';
    return Component.extend({
        initialize: function () {
            this._super();
            this.studentList = ko.observableArray([]);
            this.ID = ko.observable('');
            this.Name = ko.observable('');
            this.Class = ko.observable('');
        },
        addList: function () {
            if (!this.ID() || !this.Name() || !this.Class()) {
                alert({
                    content: 'Please fill in all required fields.'
                });
                return;
            }
            this.studentList.push({
                ID: this.ID(),
                Name: this.Name(),
                Class: this.Class(),
                removeStudent: function (student) {
                    this.studentList.remove(student);
                }.bind(this)
            });
            this.ID('');
            this.Name('');
            this.Class('');
        },
        resetList: function () {
            this.studentList.removeAll();
        }
    });
});