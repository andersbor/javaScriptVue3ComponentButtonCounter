const appComp = Vue.createApp({})

// Define a new global component called button-counter
// https://v3.vuejs.org/guide/component-basics.html#base-example
appComp.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    props: ['title', 'more'], // "parameters" to the component
    template: `
    {{ title }} and {{ more }}
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})

appComp.mount("#components-demo")