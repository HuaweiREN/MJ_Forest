

cc.Class({
    extends: cc.Component,

    properties: {
        PrtName: null,
        Hint: null,
        dataPack: null,
        _goBackFlag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // this.node,"PopUpType3","确定要存入"+dataPack.dataDepositValue+"?",dataPack
    onShow: function(PrtName, FabInfo, Hint, dataPack){
        this.PrtName = PrtName;
        this.Hint = Hint;
        this.dataPack = dataPack;
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
        if (this.dataPack.dataType == "deposit"){

            var emitDataPack = {
                emitID: [1,30,28],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.goldDeposit, this.dataPack.dataDepositValueDelta],
            };
            //GlobalFuncVar.emitData(24, emitDataPack).then(this.eventAfterSync_deposit.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(24, emitDataPack, this.eventAfterSync_deposit.bind(this));

        } else if (this.dataPack.dataType == "withdraw"){

            var emitDataPack = {
                emitID: [1,30,29],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.goldDeposit, this.dataPack.dataWithdrawValueDelta],
            };
            //GlobalFuncVar.emitData(25, emitDataPack).then(this.eventAfterSync_withdraw.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(25, emitDataPack, this.eventAfterSync_withdraw.bind(this));
        }

        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    eventAfterSync_deposit(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["存币成功！","好的"]);
            GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.goldDeposit = rcvDataPack.rcvData[1];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.PrtName.getChildByName("upperBox").getChildByName("goldActionBar").getChildByName("Handle").x = 0;
            this.dataPack.setBtnStatus();
            this.dataPack.setDataDefault();
            this.dataPack.updateDataValue();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
        
    },

    eventAfterSync_withdraw(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["取币成功！","确定"]);
            GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.goldDeposit = rcvDataPack.rcvData[1];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.PrtName.getChildByName("upperBox").getChildByName("goldActionBar").getChildByName("Handle").x = 0;
            this.dataPack.setBtnStatus();
            this.dataPack.setDataDefault();
            this.dataPack.updateDataValue();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
        
    },

    //// 20200304
    onDenyBtnClick: function(){
        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    //// 20200304
    setHint(){
        if (this.Hint == null){
            this.Hint = ["蝴蝶王子金库","出错啦！收集BUG中"];
        }
        
        this.node.getChildByName("root").getChildByName("title").getChildByName("titleText").getComponent(cc.Label).string = this.Hint[0];
        
        this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionConfirm").getComponent(cc.Label).string = this.Hint[1];
        if (this.dataPack.dataType == "deposit"){
            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionValue").getComponent(cc.Label).string = GlobalFuncVar.userInfo.goldDeposit + this.dataPack.dataDepositValueDelta;
            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionDelta").getChildByName("actionValue").getComponent(cc.Label).string = this.dataPack.dataDepositValueDelta;
        } else if (this.dataPack.dataType == "withdraw"){
            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionValue").getComponent(cc.Label).string = GlobalFuncVar.userInfo.goldDeposit - this.dataPack.dataWithdrawValueDelta;
            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionDelta").getChildByName("actionValue").getComponent(cc.Label).string =  this.dataPack.dataWithdrawValueDelta;
        };
        let node_temp = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionType").getComponent(cc.Sprite);
        GlobalFuncVar.SetActiExpIconUpdate(1, node_temp, this);
        let node_temp2 = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionDelta").getChildByName("actionType").getComponent(cc.Sprite);
        GlobalFuncVar.SetActiExpIconUpdate(1, node_temp2, this);
    },
    
    start () {

    },

    //// 20200304
    update (dt) {
        if (this._goBackFlag == true){
            this.onDenyBtnClick();
            this.node.getChildByName("maskLayer").off(cc.Node.EventType.TOUCH_END);
            this._goBackFlag = false;
        };
    },
});
