import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { OverlayOptions } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';

interface Option {
    Name: string;
    Code: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './dropdown-basic-demo.html'
})
export class DropdownBasicDemo implements OnInit {
    options: Option[] | undefined;

    public overlayOptions: OverlayOptions = {
        baseZIndex: 10000,
    }

    @Input()
    selectedOption: string

    @ViewChild('dd') dd: Dropdown;

    ngOnInit() {
        this.options = this.generateOptions();
        this.selectedOption = "option_2800"
    }

    generateOptions() {
        // generate options
        const options: Option[] = [];
        for (let i = 0; i < 3000; i++) {
            options.push({
                Name: `Option ${i}`,
                Code: `option_${i}`
            });
        }
        return options;
    }
}
