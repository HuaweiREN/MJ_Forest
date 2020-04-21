cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onShow(){
        this.node.active = true;
        setTimeout(function () {
            GlobalFuncVar.ShowDemoText(this,"Demo小贴士：私人市场功能还正在开发中哦~敬请期待吧~", 170);
        // 20200224 改动，4000 --> 3000
        }.bind(this), 2000);
    },

    onClickBtn(){
        GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["该功能正在开发中...\n敬请期待!~", "确定"]);
    },

    // update (dt) {},
});
