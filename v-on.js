var app = new Vue({
    el:'#app',
    data:{ },
    methods: {
        onClick: function () {
            console.log('点击成功！！');
        },
        onEnter: function () {
            console.log('移动进来了！');
        },
        onOut: function () {
            console.log('我出来了！！');
        },
        onSubmit: function () {
            console.log('提交成功');
        },
        onKeyEnter: function () {
            console.log('点击回车成功');
        },
    },
    get methods() {
        return this.methods;
    },
    set methods(value) {
        this.methods = value;
    },
})