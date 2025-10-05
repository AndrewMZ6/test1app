import { defineStore } from "pinia";


const myStorageFunction = defineStore("myStorage", {
    state: () => ({
        username: "Andrew Karrison",
        age: 30,
    }),
    getters: {
        fullName: state => `${ state.username } Hello Worldingson is ${ state.age } years old`,
    },
    actions: {
        changeName(){
            this.username = "Changed Name";
        },
        changeAge(){
            this.age = 19;
        }
    }
})

export default myStorageFunction;