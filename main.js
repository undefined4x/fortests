"use strict"

Vue.component('vCircle', {
    template : `<div class="circle" :style = "{background : $refs.colorController.color}"></div>
                `,
});

Vue.component('vColorController', {
    template : `<div class="color_controller">
                    <input type="text" v-model = "$parent.color">
                </div>
                `,
    data () {
        return {
            color: '',
        }
    },
});

let test = new Vue({
    el: '#vmApp',
});
