"use strict";
/**
 * Configuration class for DropdownMultiselect
 *
 * @export
 * @class MultiselectConfig
 * @implements {IMultiselectConfig}
 */
var MultiselectConfig = (function () {
    /**
     * Creates an instance of MultiselectConfig.
     *
     */
    function MultiselectConfig() {
        this.buttonLabel = 'Selected';
        this.allSelected = false;
        this.maxInline = 3;
        this.showCheckAll = false;
        this.showUncheckAll = false;
        this.buttonClasses = ['btn', 'btn-default'];
        this.checkClasses = [];
        this.uncheckClasses = [];
        this.scrollingHeight = 200;
    }
    return MultiselectConfig;
}());
exports.MultiselectConfig = MultiselectConfig;
