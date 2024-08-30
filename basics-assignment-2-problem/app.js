const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hi');
        },
        textKeyDown(event) {
            // alert(event.target.value);
            this.userInput = event.target.value;
        },
        confirmInput() {
            // alert(event.target.value);
            this.confirmedInput = this.userInput;
        }
    }
});

app.mount("#assignment");