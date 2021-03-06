import { OnInit } from '@angular/core';
import { NgModel, ControlValueAccessor } from '@angular/forms';
import { IDropdownItem, IMultiselectConfig } from '../interfaces';
import { MultiselectConfig } from '../models';
export declare class DropdownMultiselectComponent implements ControlValueAccessor, OnInit {
    dropdownConfig: IMultiselectConfig;
    cd: NgModel;
    onChange: any;
    onTouched: any;
    private dropdownItems;
    config: MultiselectConfig;
    constructor(cd: NgModel);
    ngOnInit(): void;
    readonly selectedLength: number;
    readonly buttonLabel: string;
    toggleRow: (row: IDropdownItem) => void;
    uncheckAll: () => void;
    checkAll: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: (_: any) => {}): void;
    private _processOptions;
    private _setSelectedTo;
}
