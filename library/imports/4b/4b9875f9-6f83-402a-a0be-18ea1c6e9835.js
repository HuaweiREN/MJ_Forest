"use strict";
cc._RF.push(module, '4b987X5b4NAKqC+GOocbpg1', 'cSoundEffect');
// Script/cSoundEffect.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        btnGo: {
            type: cc.AudioClip,
            default: null
        },

        switchGo: {
            type: cc.AudioClip,
            default: null
        },

        getGo: {
            type: cc.AudioClip,
            default: null
        },

        shakeGo: {
            type: cc.AudioClip,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    //// 20200306
    onClickBtn: function onClickBtn(target, data) {
        //if (GlobalFuncVar.gameFlag.soundStatus == true){
        if (data == "btnGo") {
            cc.audioEngine.play(this.btnGo, false, 1);
        } else if (data == "switchGo") {
            cc.audioEngine.play(this.switchGo, false, 1);
        } else if (data == "getGo") {
            cc.audioEngine.play(this.getGo, false, 1);
        } else if (data == "shakeGo") {
            cc.audioEngine.play(this.shakeGo, false, 1);
        }
        //}
    }

    // update (dt) {},
});

cc._RF.pop();