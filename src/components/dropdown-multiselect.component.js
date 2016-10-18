"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var models_1 = require('../models');
/**
 * Dropdown Multiselect component to be used by components.
 *
 * Input: dropdown-config - configuration.
 * Input: dropdown-model - dropdown options model.
 *
 * @export
 * @class DropdownMultiselectComponent
 * @implements {ControlValueAccessor, OnInit}
 */
var DropdownMultiselectComponent = (function () {
    // -------------------------------------------------------------------------------------------------
    /**
     * Creates an instance of DropdownMultiselectComponent.
     *
     */
    function DropdownMultiselectComponent(cd) {
        var _this = this;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        // -------------------------------------------------------------------------------------------------
        /**
         * Select / deselect dropdown option.
         */
        this.toggleRow = function (row) {
            row.selected = !row.selected;
        };
        /**
         * Deselect all dropdown options.
         */
        this.uncheckAll = function () {
            _this._setSelectedTo(false);
        };
        /**
         * Select all dropdown options.
         */
        this.checkAll = function () {
            _this._setSelectedTo(true);
        };
        // -------------------------------------------------------------------------------------------------
        /**
         * Determine how the dropdown should be configured.
         *
         * @private
         */
        this._processOptions = function () {
            var opts = _this.dropdownConfig;
            // defaultButtonText
            if (opts.defaultButtonText) {
                _this.config.buttonLabel = opts.defaultButtonText;
            }
            // allSelected
            if (typeof (opts.allSelected) === 'boolean') {
                _this.config.allSelected = opts.allSelected;
                _this.checkAll();
            }
            // showCheckAll
            if (typeof (opts.showCheckAll) === 'boolean') {
                _this.config.showCheckAll = opts.showCheckAll;
            }
            // showUncheckAll
            if (typeof (opts.showUncheckAll) === 'boolean') {
                _this.config.showUncheckAll = opts.showUncheckAll;
            }
            // maxInline
            if (opts.maxInline) {
                _this.config.maxInline = opts.maxInline;
            }
            // buttonClasses
            if (opts.buttonClasses) {
                _this.config.buttonClasses = opts.buttonClasses;
            }
            // checkClasses
            if (opts.checkClasses) {
                _this.config.checkClasses = opts.checkClasses;
            }
            // uncheckClasses
            if (opts.uncheckClasses) {
                _this.config.uncheckClasses = opts.uncheckClasses;
            }
            // scrollingHeight
            if (opts.scrollingHeight) {
                _this.config.scrollingHeight = opts.scrollingHeight;
            }
        };
        /**
         * Update all options in the model to either:
         * - selected (provide val = true)
         * - deselected (provide val = false)
         *
         * @private
         */
        this._setSelectedTo = function (val) {
            for (var i = 0; i < _this.cd.viewModel.length; i++) {
                //this.cd.viewModel[i].selected = val;
                _this.cd.viewModel[i].selected = !_this.cd.viewModel.selected;
            }
            ;
        };
        this.cd = cd;
        cd.valueAccessor = this;
        this.cd.viewModel = [];
        this.config = new models_1.MultiselectConfig();
    }
    // -------------------------------------------------------------------------------------------------
    /**
     * Angular lifecycle hook, executed after constructor
     */
    DropdownMultiselectComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.cd.viewModel.length; i++) {
            if (this.cd.viewModel[i].selected == null) {
                this.cd.viewModel[i].selected = false;
            }
        }
        ;
        this._processOptions();
    };
    Object.defineProperty(DropdownMultiselectComponent.prototype, "selectedLength", {
        get: function () {
            return this.cd.viewModel.filter(function (o) { return o.selected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMultiselectComponent.prototype, "buttonLabel", {
        get: function () {
            var len = this.selectedLength;
            if (len <= this.config.maxInline && len > 0) {
                var value_1 = '';
                this.cd.viewModel.forEach(function (row) {
                    if (row.selected) {
                        value_1 += row.label + ', ';
                    }
                });
                return value_1.slice(0, value_1.length - 2); // Remove trailing ', '
            }
            else {
                return this.config.buttonLabel;
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownMultiselectComponent.prototype.writeValue = function (value) {
    };
    DropdownMultiselectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DropdownMultiselectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.Input()
    ], DropdownMultiselectComponent.prototype, "dropdownConfig");
    DropdownMultiselectComponent = __decorate([
        core_1.Component({
            selector: 'dropdown-multiselect[ngModel]',
            template: "<h1>Testing</h1>",
            styles: [".multiselect-container {\n                display: inline-block; }",
                ".top-section.with-border {\n                border-bottom: 1px solid #ccc; }",
                ".with-border > .dropdown-item {\n                margin-bottom: 4px; }",
                ".with-border {\n               margin-bottom: 4px; }",
                ".row-color {\n                width: 15px;\n                height: 15px;\n                display: inline-block;\n                position: relative;\n                top: 3px;\n                margin-right: 5px;\n                border-radius: 3px; }",
                ".scrollable-menu {\n                height: auto;\n                overflow-x: hidden; }",
                ".check-area {\n                width: 18px;\n                display: inline-block; }",
                ".dropdown-multiselect-clickable {\n               cursor: pointer; }"]
        }),
        __param(0, core_1.Self())
    ], DropdownMultiselectComponent);
    return DropdownMultiselectComponent;
}());
exports.DropdownMultiselectComponent = DropdownMultiselectComponent;
