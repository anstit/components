var template = document.currentScript.ownerDocument.querySelector('template');

class WSDatePicker extends HTMLInputElement {

    createdCallback() {
        let clone = document.importNode(template.content, true);
        // This element uses Shadow DOM.
        this.createShadowRoot().appendChild(clone);
        let wsDatePicker = this.shadowRoot.querySelector('.ws-date-picker');
        wsDatePicker.setAttribute('placeholder', this.getAttribute('placeholder'));
        // All logic in flatpickr.js file
        // API and guide how to use: https://chmln.github.io/flatpickr/
        this.pickr = flatpickr(this.shadowRoot, wsDatePicker, {
            onChange: (date, value) => {
                this.dispatchEvent(new CustomEvent('change', {detail: {date, value}}));
            }
        });
    }

    get value() {
        return this.pickr && this.pickr.selectedDateObj || null;
    }

    set value(val) {
        val = typeof val === 'string' ? new Date(val) : val;
        this.pickr.setDate(val, false);
    }

    get type() {
        return this._type || 'text';
    }

    set type(value) {
        this._type = value;
    }
}

document.registerElement('ws-date-picker', WSDatePicker);