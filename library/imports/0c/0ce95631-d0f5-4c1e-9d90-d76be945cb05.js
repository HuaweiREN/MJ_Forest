"use strict";
cc._RF.push(module, '0ce95Yx0PVMHp2Q12vpRcsF', 'cPopUpRestart');
// Script/PopUpScript/cPopUpRestart.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _goBackFlag: false,
        _prtName: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onShow: function onShow(PrtName, FabInfo, Hint) {
        this._prtName = PrtName;
        this.setHint(Hint);
        this.listenToSwitch();
        this.node.active = true;
    },

    //// 20200304
    listenToSwitch: function listenToSwitch() {
        this.node.getChildByName("maskLayer").on(cc.Node.EventType.TOUCH_END, function (event) {
            this._goBackFlag = true;
        }.bind(this), this);
    },


    onHide: function onHide() {
        this.node.active = false;
        this.node.removeFromParent(true); //while closing the alert window, remove the content node
    },

    //// 20200304
    onConfirmClick: function onConfirmClick() {
        var emitDataPack = {
            emitID: [71],
            emitData: [GlobalFuncVar.gameFlag.restartAllGame]
        };
        //GlobalFuncVar.emitData(34, emitDataPack).then(this.eventAfterSync_Restart.bind(this)).catch(err => {console.log(err)});
        GlobalFuncVar.emitData(34, emitDataPack, this.eventAfterSync_Restart.bind(this));

        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    //// 20200302
    eventAfterSync_Restart: function eventAfterSync_Restart(rcvDataPack) {
        if (rcvDataPack) {
            this._prtName.removeFromParent(true);
            GlobalFuncVar.gameFlag.restartAllGame = rcvDataPack.rcvData[0];
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~", "好的"]);
        }
    },


    //// 20200304
    onCancelClick: function onCancelClick() {
        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    //// 20200304
    setHint: function setHint(Hint) {
        if (Hint == null) {
            Hint = ["出错啦！收集BUG中", "再给我一次机会"];
        };
        this.node.getChildByName("root").getChildByName("tip").getComponent(cc.Label).string = Hint[0];
    },
    start: function start() {},


    //// 20200304
    update: function update(dt) {
        if (this._goBackFlag == true) {
            this.onCancelClick();
            this.node.getChildByName("maskLayer").off(cc.Node.EventType.TOUCH_END);
            this._goBackFlag = false;
        };
    }
});

cc._RF.pop();