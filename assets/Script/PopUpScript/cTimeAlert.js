
cc.Class({
    extends: cc.Component,

    properties: {
        _hint : null,
        _prtName : null,
        _fabInfo : null,
        _count : null,
        _actionInfo: cc.Node,
        _actionConfirm : cc.Label,
        _actionType1: cc.Sprite,
        _actionValue1: cc.Label,
        _actionType2: cc.Sprite,
        _actionValue2: cc.Label,
        _notiInfo: cc.Node,
        _notiConfirm: cc.Label,
        _confirmBtn: cc.Node,
        _countInfo: cc.Node,
        _countConfirm: cc.Label,
        _countValue: cc.Label,
        //_goBackFlag: false,
        _countFlag: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    //// 20200304
    setNodeDefault(){
        this._actionInfo = this.node.getChildByName("root").getChildByName("actionInfo");
        this._actionConfirm = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionConfirm").getComponent(cc.Label);
        this._actionType1 = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionType").getComponent(cc.Sprite);
        this._actionValue1 = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionValue").getComponent(cc.Label);
        this._actionType2 = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume2").getChildByName("actionType").getComponent(cc.Sprite);
        this._actionValue2 = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume2").getChildByName("actionValue").getComponent(cc.Label);
        this._notiInfo = this.node.getChildByName("root").getChildByName("notiInfo");
        this._notiConfirm = this.node.getChildByName("root").getChildByName("notiInfo").getChildByName("notiConfirm").getComponent(cc.Label);
        this._countInfo = this.node.getChildByName("root").getChildByName("countInfo");
        this._countConfirm = this.node.getChildByName("root").getChildByName("countInfo").getChildByName("countConfirm").getComponent(cc.Label);
        this._countValue = this.node.getChildByName("root").getChildByName("countInfo").getChildByName("countValue").getComponent(cc.Label);
        this._confirmBtn = this.node.getChildByName("root").getChildByName("confirm");
        this._confirmBtnText = this._confirmBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);

        this._confirmBtn.active = true;
        this._actionInfo.active = false;
        this._notiInfo.active = false;
        this._countInfo.active = false;
    },

    setDataUpdate(){
        if (this._count == "60"){
            this._actionInfo.active = true;
            this._notiInfo.active = false;
            this._countInfo.active = false;
            this._actionConfirm.string = this._hint[0];
            this._actionValue1.string = GlobalFuncVar.userInfo.goldTradeFeedback;
            this._actionValue2.string = GlobalFuncVar.userInfo.foodTradeFeedback;
            GlobalFuncVar.SetActiExpIconUpdate(1, this._actionType1, this);
            GlobalFuncVar.SetActiExpIconUpdate(2, this._actionType2, this);
            this._confirmBtnText.string = this._hint[1];
        } else if (this._count == "30" || this._count == "5" || this._count == "1"){
            this._actionInfo.active = false;
            this._notiInfo.active = true;
            this._countInfo.active = false;
            this._notiConfirm.string = this._hint[0];
            this._confirmBtnText.string = this._hint[1];
        } else if (this._count == "0.5"){
            this._actionInfo.active = false;
            this._notiInfo.active = false;
            this._countInfo.active = true;
            this._confirmBtn.active = false;
            this._countConfirm.string = this._hint[0];
            this._countValue.string = "森林开放倒计时：" + [59-GlobalFuncVar.sysDate.Secon]+"\"！";
            this._confirmBtnText.string = this._hint[1];
        }else if (this._count == "dailyAward" || this._count == "dailyAwardMax"){
            this._actionInfo.active = true;
            this._notiInfo.active = false;
            this._countInfo.active = false;
            this._actionConfirm.string = this._hint[0];
            this._actionValue1.string = GlobalFuncVar.userInfo.dailyLogon[0];
            this._actionValue2.string = GlobalFuncVar.userInfo.dailyLogon[1];
            GlobalFuncVar.SetActiExpIconUpdate(1, this._actionType1, this);
            GlobalFuncVar.SetActiExpIconUpdate(2, this._actionType2, this);
        } else if (this._count == "tradeAward"){
            this._actionInfo.active = true;
            this._notiInfo.active = false;
            this._countInfo.active = false;
            this._actionConfirm.string = this._hint[0];
            this._actionValue1.string = GlobalFuncVar.userInfo.goldTradeFeedback;
            this._actionValue2.string = GlobalFuncVar.userInfo.foodTradeFeedback;
            GlobalFuncVar.SetActiExpIconUpdate(1, this._actionType1, this);
            GlobalFuncVar.SetActiExpIconUpdate(2, this._actionType2, this);
        }; 
    },

    //// 20200306
    onShow(PrtName, FabInfo, Hint, CallFunc){
        this._prtName = PrtName;
        this._fabInfo = FabInfo;
        this._hint = Hint;
        this._count = CallFunc;
        this.setNodeDefault();
        this.setDataUpdate();
        // this.listenToSwitch();
        this._countFlag = true;
        this.node.active = true;
    },

    //// 20200304
    /*
    listenToSwitch(){
        this.node.getChildByName("maskLayer").on(cc.Node.EventType.TOUCH_END, function (event){
            this._goBackFlag = true;
        }.bind(this), this);
    },
    */

    onHide(){
        this._actionInfo.active = false;
        this._notiInfo.active = false;
        this._countInfo.active = false;
        this._confirmBtn.active = true;
        this.node.active = false;
        this.node.removeFromParent(true); //while closing the alert window, remove the content node
    },

    onConfirmBtnClick(){
        if (this._count == "dailyAward" || this._count == "dailyAwardMax"){
            // 禁用按钮
            //this._confirmBtn.getComponent(cc.Button).interactable = false;

            var emitDataPack = {
                emitID: [1,2,5,6,46,61],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume,GlobalFuncVar.userInfo.foodHoldVolume,
                            GlobalFuncVar.userInfo.dailyLogon[0],GlobalFuncVar.userInfo.dailyLogon[1], GlobalFuncVar.userInfo.timeLastAwardClick, GlobalFuncVar.userInfo.dailyAwardReady],
            };
            // GlobalFuncVar.emitData(11, emitDataPack).then(this.eventAfterSync_dailyAward.bind(this)).catch(err => {console.log(err)});  
            GlobalFuncVar.emitData(11, emitDataPack, this.eventAfterSync_dailyAward.bind(this));
        } else if (this._count == "tradeAward"){
            // 禁用按钮
            this._confirmBtn.getComponent(cc.Button).interactable = false;

            var emitDataPack = {
                emitID: [1,2,3,4,62],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.foodHoldVolume,
                    GlobalFuncVar.userInfo.goldTradeFeedback,GlobalFuncVar.userInfo.foodTradeFeedback,
                    GlobalFuncVar.userInfo.tradeAwardReady],
            };
            //GlobalFuncVar.emitData(12, emitDataPack).then(this.eventAfterSync_tradeAward.bind(this)).catch(err => {console.log(err)});   
            GlobalFuncVar.emitData(12, emitDataPack, this.eventAfterSync_tradeAward.bind(this));
        } else {
            GlobalFuncVar.gameFlag.popTime = true;
        };

        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    //// 20200304
    eventAfterSync_dailyAward(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[1];
            GlobalFuncVar.userInfo.timeLastAwardClick = rcvDataPack.rcvData[4];
            GlobalFuncVar.userInfo.dailyAwardReady = rcvDataPack.rcvData[5];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            GlobalFuncVar.gameFlag.popTime = true;
            var node = this.node.getComponent("cFadeInFadeOut");
            node.onFadeOut();
            // 启用按钮
            //this._confirmBtn.getComponent(cc.Button).interactable = true;
            //this.onHide();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            // 启用按钮
            //this._confirmBtn.getComponent(cc.Button).interactable = true;
        }
    },

    //// 20200304
    eventAfterSync_tradeAward(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[1];
            GlobalFuncVar.userInfo.tradeAwardReady = rcvDataPack.rcvData[4];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            GlobalFuncVar.gameFlag.popTime = true;
            this._prtName.getComponent("cTradeMarket").setDataDefault();
            this._prtName.getComponent("cTradeMarket").updateDataValue();
            var node = this.node.getComponent("cFadeInFadeOut");
            node.onFadeOut();
            // 启用按钮
            //this._confirmBtn.getComponent(cc.Button).interactable = true;
            //this.onHide();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            // 启用按钮
            //this._confirmBtn.getComponent(cc.Button).interactable = true;
        }
    },

    update (dt) {
        if (this._countInfo.active == true){
            this._countValue.string = "森林开放倒计时：" + [59-GlobalFuncVar.sysDate.Secon]+"\"！";
            //if (GlobalFuncVar.sysDate.Secon == 59 && this._countFlag == true){
               // this._countFlag = false;
                //this.onConfirmBtnClick();
                //WeChat.onRoundUpdate().then(msg => {
                //    console.log(msg);   
                //})
            //};
        };
    },
});
