import { defineStore } from "pinia";


const myStorageFunction = defineStore("myStorage", {
    state: () => ({
        username: "Andrew Karrison",
        age: 30,
    }),
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