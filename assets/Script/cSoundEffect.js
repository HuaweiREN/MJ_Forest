

cc.Class({
    extends: cc.Component,

    properties: {
        btnGo: {
            type: cc.AudioClip,
            default: null,
        },

        switchGo: {
            type: cc.AudioClip,
            default: null,
        },

        getGo: {
            type: cc.AudioClip,
            default: null,
        },

        shakeGo: {
            type: cc.AudioClip,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    //// 20200306
    onClickBtn: function(target, data){
        //if (GlobalFuncVar.gameFlag.soundStatus == true){
            if (data == "btnGo"){
                cc.audioEngine.play(this.btnGo, false, 1);
            } else if (data == "switchGo"){
                cc.audioEngine.play(this.switchGo, false, 1);
            } else if (data == "getGo"){
                cc.audioEngine.play(this.getGo, false, 1);
            } else if (data == "shakeGo"){
                cc.audioEngine.play(this.shakeGo, false, 1);
            }
        //}
    }

    // update (dt) {},
});
