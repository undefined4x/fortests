"use strict"

Vue.component('vColorController', {
    template : `<div class="color_controller">
                    <input type="text" v-model.lazy = "color">
                    <button @click = "$emit('lol', color)">push me</button>
                </div>
                `,
    data () {
        return {
            color: '',
        }
    },
});

Vue.component('vCircle', {
    template : `<div class="circle" :style = "{background : col}"></div>
                `,
    props : {
        col : {default : '#ccc', type : String }
    },
});


let test = new Vue({
    el: '#vmApp',
    data : {
        color: '',
    },
    methods: {
        getColor(val) {
            this.color = '#' + val;
        }
    }
});
