<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age : {{ ageEdit }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        props: {
            userAge : {
                type : Number
            }
        },
        data () {
            return{
                ageEdit : this.userAge
            }
        },
        methods: {
            editAge(){
                this.ageEdit = 30;
                // this.$emit('ageWasEdited', this.ageEdit);
                //eventBus.$emit('ageWasEdited', this.ageEdit);
                eventBus.changeAge(30);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
