const appComp = Vue.createApp({})

appComp.component('hello', {
    props: ['name'],
    template: `hello {{name}}`
})

// Define a new global component called button-counter
// https://v3.vuejs.org/guide/component-basics.html#base-example
appComp.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    props: ['from'],
    created() {
        console.log("from " + this.from)
        if (this.from) this.count = this.from
    },
    template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})

appComp.component('say-hello', {
    data() {
        return {
            name: null,
            message: null
        }
    },
    methods: {
        sayHello() {
            this.message = "Hello " + this.name
        }
    },
    template: `
      say hello   
    <input type="text" v-model="name">
       <button v-on:click="sayHello()">Say hello</button>
       <div>{{message}}</div>`
})

appComp.component('calculator', {
    data() {
        return {
            number1: null,
            number2: null,
            result: null
        }
    },
    methods: {
        calculate() {
            this.result = this.number1 + this.number2
        }
    },
    template: `
    <input type="number" v-model.number=number1>
    +
    <input type="number" v-model.number=number2>
    <button v-on:click="calculate()">=</button>
    {{result}}`
})

appComp.component('collect-words', {
    data() {
        return {
            words: [],
            word: null,
            message: null
        }
    },
    methods: {
        add() {
            this.words.push(this.word)
        },
        clear() {
            this.words = []
            this.message = null
        },
        show() {
            if (this.words.length > 0) {
                this.message = this.words.toString()
            }
            else {
                this.message = "empty"
            }
        }
    },
    template: `
    <input type="text" v-model="word">
    <button v-on:click="add()">Add</button>
    <button v-on:click="clear()">Clear</button>
    <button v-on:click="show()">Show</button>
    <div>{{message}}</div>`
})

appComp.mount("#components-demo")