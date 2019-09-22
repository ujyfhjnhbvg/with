var app = new Vue({
    el:'#app',
    data:{
        math:80,
        physics:70,
        english:60,
    },
    computed:{
        sum:function(){
            return this.math + this.physics + this.english;
        },
        average:function(){
            return Math.round(this.sum/3)
        }
    }
})