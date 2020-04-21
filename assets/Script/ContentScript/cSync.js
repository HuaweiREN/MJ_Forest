
cc.Class({
    extends: cc.Component,

    properties: {
        updateStart: null,
        timeClock: null,
        _petIcon: null,
        _petLevel: null,
        _userGoldRes: cc.Label,
        _userFoodRes: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    setNodeDefault(){
        this.timeClock = this.node.getChildByName("syncLayout").getChildByName("timeSync").getChildByName("timeBox").getChildByName("timeClock").getChildByName("timeClockCounting").getComponent(cc.ProgressBar);
        this.timeNoti = this.node.getChildByName("syncLayout").getChildByName("timeSync").getChildByName("timeBox").getChildByName("timeNoti").getChildByName("timeBroadcast").getComponent(cc.Label);
        this._petIcon = this.node.getChildByName("syncLayout").getChildByName("restartAll").getChildByName("restartInfo").getChildByName("petSelfie").getComponent(cc.Sprite);
        GlobalFuncVar.SetPetSelfieIconUpdate(GlobalFuncVar.userPetInfo.petType,this._petIcon,this);
        this._petLevel = this.node.getChildByName("syncLayout").getChildByName("restartAll").getChildByName("restartInfo").getChildByName("petLevelBg").getChildByName("levelValue").getComponent(cc.Label);
        this._petLevel.string = "Lv. " + GlobalFuncVar.userPetInfo.petLevel;
        this._userGoldRes = this.node.getChildByName("syncLayout").getChildByName("restartAll").getChildByName("restartInfo").getChildByName("Res").getChildByName("goldHoldVolume").getComponent(cc.Label);
        this._userFoodRes = this.node.getChildByName("syncLayout").getChildByName("restartAll").getChildByName("restartInfo").getChildByName("Res").getChildByName("foodHoldVolume").getComponent(cc.Label);
        this._userGoldRes.string = GlobalFuncVar.userInfo.goldHoldVolume;
        this._userFoodRes.string = GlobalFuncVar.userInfo.foodHoldVolume;
    },

    onShow(){
        this.updateStart = true;
        this.setNodeDefault();
        this.node.active = true;
    },

    start () {

    },

    onClickSyncBtn(){
        var emitDataPack = {
            emitID: [44,45],
            emitData: [GlobalFuncVar.sysDate.Minu, GlobalFuncVar.sysDate.Secon],
        };
        //GlobalFuncVar.emitData(33, emitDataPack).then(this.eventAfterSync_SyncBtn.bind(this)).catch(err => {console.log(err)});
        GlobalFuncVar.emitData(33, emitDataPack, this.eventAfterSync_SyncBtn.bind(this));

    },

    eventAfterSync_SyncBtn(rcvDataPack){
        if (rcvDataPack == true){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["时钟同步成功啦~","好的"]);
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
    },

    onClickRestartBtn(){
        GlobalFuncVar.ShowDemoText(this, "Demo小贴士：在Demo项目中不会重置萌鸡等级与玩家资源，请放心选用~", 0);
        GlobalFuncVar.CallPopUpRestart(this.node, "PopUpType7", ["确定要重启训练师之路嘛？\n萌鸡种类与活动将被重置哦~"]);
    },

    updateProgressBar: function(progressBar, noti, dt){
        var progress = progressBar.progress;
        progress = (GlobalFuncVar.sysDate.Minu*60+GlobalFuncVar.sysDate.Secon)/3600;
        noti.string = "距离明天还有："+[59-GlobalFuncVar.sysDate.Minu]+"'"+[59-GlobalFuncVar.sysDate.Secon]+"\"！";
        progressBar.progress = progress;
    },

    update (dt) {
        if (this.updateStart == true){
            this.updateProgressBar(this.timeClock, this.timeNoti, dt);
        };
    },
});
