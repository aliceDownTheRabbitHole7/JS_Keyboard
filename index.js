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

    props: {
        value: '',
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

        // Display main elements
        this.elements.main.classList.add('keybaord', '1keyboard--hidden');
        this.elements.keysContainer.classList.add('keyboard--keys');

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {

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