<html>
<body>
<div id="app">
    <button v-on:click="counter++">Increase</button>
    <button v-on:click="counter--">Decrease</button>
    <button v-on:click="secondCounter++">Increase second</button>
    <p>Counter : {{ counter }} | {{ secondCounter }}</p>
    <p>Result : {{ result() }} | {{ output }}</p>
</div>
</body>


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
        new Vue({
            el: '#app',
            data: {
                counter: 0,
                secondCounter: 0
            },
            computed : {
                output: function(){
                    console.log('computed');
                    return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
                }
            },
            watch: {
                counter: function(value){
                    var vm = this;
                    setTimeout(function(){
                        vm.counter = 0;
                    }, 2000)
                }
            },
            methods: {
                result: function(){
                    console.log('Method');
                    return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
                }
            }
        });

</script>
</html>


