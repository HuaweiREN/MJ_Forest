

cc.Class({
    extends: cc.Component,

    properties: {
        PrtName: null,
        Hint: null,
        _callback: null,
        _tip: cc.Label,
        _actiType: cc.Sprite,
        _actiExp: cc.Label,
        _actiExpType: cc.Sprite,
        _actiDura: cc.Label,
        _actiLiveConsume: cc.Label,
        _actiYesBtnText: cc.Label,
        _actiNoBtnText: cc.Label,
        _touchStartX: null,
        _touchEndX: null,
        _goBackFlag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    setNodeDefault(){
        this._tip = this.node.getChildByName("root").getChildByName("tip").getComponent(cc.Label);
        this._actiType = this.node.getChildByName("root").getChildByName("actiInfo").getChildByName("actiType").getChildByName("actiTypeBox").getChildByName("actiTypeIcon").getComponent(cc.Sprite);
        this._actiExp = this.node.getChildByName("root").getChildByName("actiInfo").getChildByName("actiExp").getChildByName("actExpBox").getChildByName("actExpValue").getComponent(cc.Label);
        this._actiExpType = this.node.getChildByName("root").getChildByName("actiInfo").getChildByName("actiExp").getChildByName("actExpBox").getChildByName("actExpType").getComponent(cc.Sprite);
        this._actiDura = this.node.getChildByName("root").getChildByName("actiInfo").getChildByName("actDura").getChildByName("actiDuraBox").getChildByName("actiDuraValue").getComponent(cc.Label);
        this._actiLiveConsume = this.node.getChildByName("root").getChildByName("actiInfo").getChildByName("actiLiveConsume").getChildByName("liveConsumeBox").getChildByName("liveConsumeValue").getComponent(cc.Label);
        this._actiYesBtnText = this.node.getChildByName("root").getChildByName("confirm").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        this._actiNoBtnText = this.node.getChildByName("root").getChildByName("deny").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
    
    },

    onShow: function(PrtName, FabInfo, Hint, actiCallback){
        this._callback = actiCallback;
        this.PrtName = PrtName;
        this.Hint = Hint;
        this.setNodeDefault();
        this.listenToSwitch();
        this.setHint();
        this.node.active = true;
        
    },

    //// 20200304
    listenToSwitch(){
        this.node.getChildByName("maskLayer").on(cc.Node.EventType.TOUCH_END, function (event){
            this._goBackFlag = true;
        }.bind(this), this);
    },
    
    onHide: function(){
        this.node.active = false;
        this.node.removeFromParent(true); //while closing the alert window, remove the content node
    },

    //// 20200304
    onConfirmBtnClick: function(){
        if (this.Hint[3] == "activity"){
            var actiTypeNextTemp = 0;
            if (this.Hint[4] == "activityType1"){
                actiTypeNextTemp = 1;
            } else if (this.Hint[4] == "activityType2"){
                actiTypeNextTemp = 2;
            } else if (this.Hint[4] == "activityType3"){
                actiTypeNextTemp = 3;
            } else if (this.Hint[4] == "activityType4"){
                actiTypeNextTemp = 4;
            };
            var emitDataPack = {
                emitID: [18,19,10,17],
                emitData: [1,actiTypeNextTemp, GlobalFuncVar.userPetInfo.petLive, GlobalFuncVar.userPetInfo.actiLeftDays],
            };
            //GlobalFuncVar.emitData(19, emitDataPack).then(this.eventAfterSync_activity.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(19, emitDataPack, this.eventAfterSync_activity.bind(this));

        } else if (this.Hint[3] == "recall"){
            var emitDataPack = {
                emitID: [16,17],
                emitData: [0,GlobalFuncVar.sysActivityFeedback.activityType0[0]],
            };
            //GlobalFuncVar.emitData(18, emitDataPack).then(this.eventAfterSync_recall.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(18, emitDataPack, this.eventAfterSync_recall.bind(this));
        };
        
        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    eventAfterSync_recall(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.userPetInfo.actiTypeCurrent = rcvDataPack.rcvData[0];
            GlobalFuncVar.userPetInfo.actiLeftDays = rcvDataPack.rcvData[1];
            GlobalFuncVar.CallPopUp(this.PrtName, "PopUpType1", ["对不起，我什么都没带回来...","好的"]);
            this._callback.setActi();
            this._callback.setActiBtnText();
            this._callback.setLive();
            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            GlobalFuncVar.gameFlag.petAnimiUpdate = true;
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
        
    },

    eventAfterSync_activity(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.userPetInfo.actiAssigned = rcvDataPack.rcvData[0];
            GlobalFuncVar.userPetInfo.actiTypeCurrent = rcvDataPack.rcvData[1];
            GlobalFuncVar.userPetInfo.petLive = rcvDataPack.rcvData[2];
            GlobalFuncVar.userPetInfo.actiLeftDays = rcvDataPack.rcvData[3];
            if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 1){
                GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["打工活动布置成功！\n我出发啦~\n(活力值-"+GlobalFuncVar.sysActivityFeedback.activityType1[3]+")","好的"]);
            } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 2){
                GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["务农活动布置成功！\n我出发啦~\n(活力值-"+GlobalFuncVar.sysActivityFeedback.activityType2[3]+")","好的"]);
            } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 3){
                GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["采访活动布置成功！\n我出发啦~\n(活力值-"+GlobalFuncVar.sysActivityFeedback.activityType3[3]+")","好的"]);
            } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 4){
                GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["睡觉活动布置成功！\n我出发啦~\n(活力值-"+GlobalFuncVar.sysActivityFeedback.activityType4[3]+")","好的"]);
            }
            this._callback.setActi();
            this._callback.setActiBtnText();
            this._callback.setLive();
            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            GlobalFuncVar.gameFlag.petAnimiUpdate = true;
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
        
    },

    eventAfterSync_activityCancel(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.userPetInfo.actiAssigned = rcvDataPack.rcvData[0];
            GlobalFuncVar.userPetInfo.actiTypeNext = rcvDataPack.rcvData[1];
            GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["取消成功！","确定"]);
            this._callback.setActiBtnText();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
    },

    //// 20200304
    onDenyBtnClick: function(){
        if(this.Hint[4] == "activityNext") {
            var actiTypeNextTemp = 0;
            var emitDataPack = {
                emitID: [18,19],
                emitData: [0,actiTypeNextTemp],
            };
            //GlobalFuncVar.emitData(21, emitDataPack).then(this.eventAfterSync_activityCancel.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(21, emitDataPack, this.eventAfterSync_activityCancel.bind(this));
        };

        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    setHint(){
        if (this.Hint == null){
            this.Hint = ["出错啦！收集BUG中", "忘记确定按钮啦！","忘记返回按钮啦！"];
        };

        this._tip.string = this.Hint[0];
    
        if (this.Hint[4] == "activityType1"){
            GlobalFuncVar.SetActiTypeIconUpdate(1, this._actiType, this);
            GlobalFuncVar.SetActiExpIconUpdate(1, this._actiExpType, this);
            this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType1[0];
            this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType1[1];
            this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType1[3];
        } else if (this.Hint[4] == "activityType2"){
            GlobalFuncVar.SetActiTypeIconUpdate(2, this._actiType, this);
            GlobalFuncVar.SetActiExpIconUpdate(2, this._actiExpType, this);
            this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType2[0];
            this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType2[1];
            this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType2[3];
        } else if (this.Hint[4] == "activityType3"){
            GlobalFuncVar.SetActiTypeIconUpdate(3, this._actiType, this);
            GlobalFuncVar.SetActiExpIconUpdate(3, this._actiExpType, this);
            this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType3[0];
            this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType3[1];
            this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType3[3];
        } else if (this.Hint[4] == "activityType4"){
            GlobalFuncVar.SetActiTypeIconUpdate(4, this._actiType, this);
            GlobalFuncVar.SetActiExpIconUpdate(4, this._actiExpType, this);
            this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType4[0];
            this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType4[1];
            this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType4[3];
        } else if (this.Hint[4] == "activityNext"){
            if (GlobalFuncVar.userPetInfo.actiTypeNext == 1){
                GlobalFuncVar.SetActiTypeIconUpdate(1, this._actiType, this);
                GlobalFuncVar.SetActiExpIconUpdate(1, this._actiExpType, this);
                this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType1[0];
                this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType1[1];
                this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType1[3];
            } else if (GlobalFuncVar.userPetInfo.actiTypeNext == 2){
                GlobalFuncVar.SetActiTypeIconUpdate(2, this._actiType, this);
                GlobalFuncVar.SetActiExpIconUpdate(2, this._actiExpType, this);
                this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType2[0];
                this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType2[1];
                this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType2[3];
            } else if (GlobalFuncVar.userPetInfo.actiTypeNext == 3){
                GlobalFuncVar.SetActiTypeIconUpdate(3, this._actiType, this);
                GlobalFuncVar.SetActiExpIconUpdate(3, this._actiExpType, this);
                this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType3[0];
                this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType3[1];
                this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType3[3];
            } else if (GlobalFuncVar.userPetInfo.actiTypeNext == 4){
                GlobalFuncVar.SetActiTypeIconUpdate(4, this._actiType, this);
                GlobalFuncVar.SetActiExpIconUpdate(4, this._actiExpType, this);
                this._actiDura.string = GlobalFuncVar.sysActivityFeedback.activityType4[0];
                this._actiExp.string = GlobalFuncVar.sysActivityFeedback.activityType4[1];
                this._actiLiveConsume.string = GlobalFuncVar.sysActivityFeedback.activityType4[3];
            };
            
        };

        this._actiYesBtnText.string = this.Hint[1];
        this._actiNoBtnText.string = this.Hint[2];
    },

    start () {

    },

    //// 20200304
    update (dt) {
        if (this._goBackFlag == true && this.Hint[4] == "activityNext"){
            this.onConfirmBtnClick();
            this.node.getChildByName("maskLayer").off(cc.Node.EventType.TOUCH_END);
            this._goBackFlag = false;
        } else if (this._goBackFlag == true && this.Hint[4] != "activityNext"){
            this.onDenyBtnClick();
            this.node.getChildByName("maskLayer").off(cc.Node.EventType.TOUCH_END);
            this._goBackFlag = false;
        };
    },
});
