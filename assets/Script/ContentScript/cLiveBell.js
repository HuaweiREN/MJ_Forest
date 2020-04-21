
cc.Class({
    extends: cc.Component,

    properties: {
        noti: cc.Node,
        _seq: null,
        nodeList: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var _v1 = cc.fadeIn(0.2);
        var _v2 = cc.fadeOut(0.2);
        var _v4 = cc.moveBy(0.6, cc.v2(0, 100));
        this._seq = cc.spawn(cc.sequence([_v1, _v2]), _v4);
        this._nodeList = [];
    },

    notiAnimi(){
        var node = new cc.instantiate(this.noti);
        node.active = true;
        node.y = 50;
        node.parent = this.node;
        node.runAction(this._seq.clone());
        setTimeout(function(){
            node.destroy();
        }.bind(this), 1200);
    },

    onLiveBellBtnClick(target, delta){
        if (!GlobalFuncVar.sysResInfo.shakeMax){
            GlobalFuncVar.sysResInfo.shakeMax = 10;
        }
        if (GlobalFuncVar.userInfo.shakeShakeReady == 1){
            this.node.getComponent("cSoundEffect").onClickBtn(null, "shakeGo");
        } else {
            this.node.getComponent("cSoundEffect").onClickBtn(null, "btnGo");
        }

        if (GlobalFuncVar.userInfo.shakeShakeReady == 1 && GlobalFuncVar.userPetInfo.petLive < 100){
            GlobalFuncVar.userInfo.shakeNum += 1;
            if (GlobalFuncVar.userInfo.shakeNum >= Number(GlobalFuncVar.sysResInfo.shakeMax)){
                GlobalFuncVar.userInfo.shakeShakeReady = -1;
            }

            GlobalFuncVar.userPetInfo.petLive += Number(delta);
            if (GlobalFuncVar.userPetInfo.petLive > 100){
                GlobalFuncVar.userPetInfo.petLive = 100;
            }

            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            this.noti.getComponent(cc.Label).string = "活力值+"+delta;

            var emitDataPack = {
                emitID: [11,10,64],
                emitData: [Number(delta), GlobalFuncVar.userPetInfo.petLive, GlobalFuncVar.userInfo.shakeShakeReady, GlobalFuncVar.userInfo.shakeNum],
            };
            GlobalFuncVar.emitData(15, emitDataPack, this.eventAfterSync.bind(this));

        } else if (GlobalFuncVar.userInfo.shakeShakeReady == 1 && GlobalFuncVar.userPetInfo.petLive == 100) {
            this.noti.getComponent(cc.Label).string = "活力值已满";
        } else {
            this.noti.getComponent(cc.Label).string = "歇一歇再摇吧~";
        }
        this.notiAnimi();
    },

    eventAfterSync(rcvDataPack){
        if (!rcvDataPack){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
    },

    //update (dt) {},
});
