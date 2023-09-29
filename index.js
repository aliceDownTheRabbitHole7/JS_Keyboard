const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: '',
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

        // Display main elements
        this.elements.main.classList.add('keyboard', '1keyboard--hidden');
        this.elements.keysContainer.classList.add('keyboard--keys');
        this.elements.keysContainer.appendChild(this._createKeys());

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();

        // Key bank
        const keyLayout = [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
            'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
            'caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'enter',
            'done', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?',
            'spacebar'
        ];
        
        // Create HTML for the icons
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        // Create buttons for each key
        keyLayout.forEach(key => {            
            const keyElement = document.createElement('button');

            // Create line break
            const insertLineBreak = ['backspace', 'P', 'enter', '?'].indexOf(key) !== -1;

            // Add attributes
            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('keyboard--key');

            // Creating 5 special keys and their functionality
            switch(key) {
                case 'backspace':
                    keyElement.classList.add('keyboard--key--wide');
                    keyElement.innerHTML = createIconHTML('backspace');
                    keyElement.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent('oninput');
                    });
                    break;
                case 'caps':
                    keyElement.classList.add('keyboard--key--wide', 'keyboard--key--activatable');
                    keyElement.innerHTML = createIconHTML('keyboard_capslock');
                    keyElement.addEventListener('click', () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle('keyboard--key--active', this.properties.capsLock);
                    });
                    break;
                case 'enter':
                    keyElement.classList.add('keyboard--key--wide');
                    keyElement.innerHTML = createIconHTML('keyboard_return');
                    keyElement.addEventListener('click', () => {
                        this.properties.value += '\n';
                        this._triggerEvent('oninput');
                    });                        
                    break;
                case 'spacebar':
                    keyElement.classList.add('keyboard--key--x-wide');
                    keyElement.innerHTML = createIconHTML('keyboard_spacebar');
                    keyElement.addEventListener('click', () => {
                        this.properties.value += ' ';
                        this._triggerEvent('oninput');
                    });                        
                    break;
                case 'done':
                    keyElement.classList.add('keyboard--key--wide', 'keyboard--key--dark');
                    keyElement.innerHTML = createIconHTML('check_circle');
                    keyElement.addEventListener('click', () => {
                        this.close();
                        this._triggerEvent('onclose');
                    });                        
                    break;

                // Making standard keys
                default:
                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener('click', () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent('oninput');
                    });                        
                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement('br'));
            };
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        console.log(handlerName)
    },

    _toggleCapsLock() {
        console.log("Caps")
    },

    open(initialValue, oninput, onclose) {

    },

    close() {

    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});