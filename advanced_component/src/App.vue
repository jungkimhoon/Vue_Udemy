<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
				<button @click="selectedComponent = 'addQuote'">Quote</button>
				<button @click="selectedComponent = 'appAuthor'">Author</button>
				<button @click="selectedComponent = 'appNew'">New</button>
				<hr>
				<p>{{ selectedComponent }}</p>
				<keep-alive>
					<component :is="selectedComponent">
						<p>default slot</p>
					</component>
				</keep-alive>
				
             	<!--<add-quote>
					<h2 slot="title">{{ quoteTitle }}</h2>
					<p>A wonderful Quote</p>
				</add-quote>-->
				<hr>
            </div>
        </div>
    </div>
</template>

<script>

import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';


    export default {
    	data: function(){
    		return{
    			quoteTitle: 'The Quote',
				selectedComponent: 'addQuote'
			}
		},
        components : {
        	addQuote : Quote,
			appAuthor : Author,
			appNew : New
		}
    }
</script>

<style>

</style>
