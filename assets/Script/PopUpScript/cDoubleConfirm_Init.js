cc.Class({
    extends: cc.Component,

    properties: {
        _actionConfirm: cc.Label,
        _petName: cc.Label,
        _petIcon: cc.Sprite,
        _yesBtn: cc.Node,
        _noBtn: cc.Node,
        _dataPack: null,
        _hint: null,
        _callFunc: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    
    setNodeDefault(){
        this._actionConfirm = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionConfirm").getComponent(cc.Label);
        this._petName = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionValue").getComponent(cc.Label);
        this._petIcon = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionType").getComponent(cc.Sprite);
        this._yesBtn = this.node.getChildByName("root").getChildByName("confirm");
        this._noBtn = this.node.getChildByName("root").getChildByName("deny");
    },

    setDataDefault(){
        this._actionConfirm.string = this._hint[0];
        this._yesBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = this._hint[2];
        this._noBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = this._hint[1];
        this._petIcon.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame(this._dataPack.petSelected+"SelfiePS");
        this._petName.string = GlobalFuncVar.sysPetIntro[this._dataPack.petSelected];
    },

    onShow(PrtName, FabInfo, Hint, DataPack, CallFunc){
        this._dataPack = DataPack;
        this._hint = Hint;
        this._callFunc = CallFunc;
        this.setNodeDefault();
        this.setDataDefault();
        this.node.active = true;
    },

    onHide(){
        this.node.active = false;
        this.node.removeFromParent(true); //while closing the alert window, remove the content node
    },

    //// 20200301
    onYesBtnClick(){
        // 与服务器通信，请求确定宠物类型
        var emitDataPack = {
            emitID: [43, 70],
            emitData: [this._dataPack.petSelected, GlobalFuncVar.userInfo.INIT],
        };
        //GlobalFuncVar.emitData(32, emitDataPack).then(this.eventAfterSync.bind(this)).catch(err => {console.log(err)});
        GlobalFuncVar.emitData(32, emitDataPack, this.eventAfterSync.bind(this));        
    },
    
    //// 20200301
    eventAfterSync(rcvDataPack){
        if (rcvDataPack){
            // 跳转至教程第二个页面，树立内部flag引导教程
            GlobalFuncVar.userPetInfo.petType = rcvDataPack.rcvData[0];
            //GlobalFuncVar.timeStamp.relative = rcvDataPack.rcvData[1];
            GlobalFuncVar.userInfo.INIT = rcvDataPack.rcvData[1];
            GlobalFuncVar.gameFlag.TutorialStep = 0;

            if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == 0){
                GlobalFuncVar.TierOnePrefab("MainView", this._dataPack.prtName); //渲染首页
            }
            this._callFunc.onHide();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
        
    },

    //// 20200304
    onNoBtnClick(){
        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    

    // update (dt) {},
});
