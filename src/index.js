import createElement from 'dom-create-element-query-selector';

export default (...params) => {
    return new IsLoading(params);
};

const formElements = ['form', 'input', 'textarea', 'label', 'fieldset', 'select', 'button'];

const optionsDefault = {
    'type': 'switch',        // switch | replace | full-overlay | overlay
    'text': 'loading',       // Text to display in the loader
    'disableSource': true,   // true | false
    'disableList': []
};

class IsLoading {
    constructor (params) {
        let options = {};
        if (params.length === 0 || (params.length === 1 && !params[0].nodeType)) {
            this._target = null;
            options = {...params[0], type: 'full-overlay'};
        } else {
            this._target = params[0];
            options = params[1];
        }
        this._options = {...optionsDefault, ...options};
        this._fullOverlayId = 'is-loading-full-overlay';
    }

    loading () {
        switch (this._options.type) {
        case 'replace': this._onReplaceType(); break;
        case 'full-overlay': this._onFullOverlayType(); break;
        case 'overlay': this._onElementOverlayType(); break;
        default: this._onSwitchType(); break;
        }
    }

    get targetContent () {
        if (this.isTargetValue) {
            return this._target.value;
        } else {
            return this._target.textContent;
        }
    }

    set targetContent (val) {
        if (this.isTargetValue) {
            this._target.value = val;
        } else {
            this._target.textContent = val;
        }
    }

    get isTargetValue () {
        const node = this._target.nodeName.toLowerCase();
        const type = this._target.attributes.type;

        return (node === 'input' && type && (type.value.toLowerCase() === 'button' || type.value.toLowerCase() === 'submit'));
    }

    restoreContent () {
        const content = this._target.getAttribute('data-is-loading-content');
        if (this.isTargetValue) {
            this._target.value = content;
        } else {
            this._target.textContent = content;
        }
    }

    _onSwitchType () {
        this._toggleElements(false);
        this._target.setAttribute('data-is-loading-content', this.targetContent);
        this.targetContent = this._options.text;
    }

    _onReplaceType () {
        this._toggleElements(false);
        this._target.setAttribute('data-is-loading-content', this.targetContent);
        this._target.innerHTML = '';
        this._target.appendChild(createElement('span.is-loading.is-loading-target', this._options.text));
    }

    _onElementOverlayType () {
        this._toggleElements(false);
        const overlayWrapperClass = '.is-loading-element-overlay';

        if (this._prop('position') === 'static') {
            this._target.setAttribute('data-is-loading-position', 'static');
            this._target.classList.add('is-loading-element-overlay-target');
        }

        if (!this._target.querySelector(overlayWrapperClass)) {
            const overlay = createElement(overlayWrapperClass,
                createElement('.is-loading-text-wrapper', this._options.text)
            );
            overlay.style.borderRadius = this._prop('border-radius');
            this._target.appendChild(overlay);
        }
    }

    _onFullOverlayType () {
        this._toggleElements(false);
        this._showFullOverlay();
    }

    _showFullOverlay () {
        let overlay = document.querySelector(this._fullOverlayId);

        if (!overlay) {
            overlay = createElement(`#${this._fullOverlayId}`,
                createElement('.is-loading-text-wrapper', this._options.text)
            );
            document.querySelector('body').appendChild(overlay);
        }
    }

    _prop (prop) {
        return window.getComputedStyle(this._target).getPropertyValue(prop);
    }

    _toggleElements (status = true) {
        let list = [...this._options.disableList];
        if (this._target && this._options.disableSource === true) {
            list.unshift(this._target);
        }
        list.forEach(item => {
            if (formElements.includes(item.tagName.toLowerCase())) {
                if (status === true) {
                    item.removeAttribute('disabled');
                } else {
                    item.setAttribute('disabled', 'disabled');
                }
            }
            if (status === true) {
                item.classList.remove('disabled');
            } else {
                item.classList.add('disabled');
            }
        });
    }

    remove () {
        this._toggleElements(true);
        if (this._options.type === 'switch') {
            this.restoreContent();
        }
        if (this._target) {
            this._target.removeAttribute('data-is-loading-content');
        }
        if (this._options.type === 'full-overlay') {
            let overlay = document.getElementById(this._fullOverlayId);
            if (overlay) {
                document.querySelector('body').removeChild(overlay);
            }
        }
        if (this._target && this._target.getAttribute('data-is-loading-position')) {
            this._target.classList.remove('is-loading-element-overlay-target');
        }
    }
}