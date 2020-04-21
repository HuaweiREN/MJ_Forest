

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
        this.setHint();
        this.listenToSwitch();
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
        if (this.dataPack.dataType == "gold"){
            var emitDataPack = {
                emitID: [1,34,35],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.goldTradeValue, this.dataPack.dataGoldDelta],
            };
            //GlobalFuncVar.emitData(29, emitDataPack).then(this.eventAfterSync_goldBuy.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(29, emitDataPack, this.eventAfterSync_goldBuy.bind(this));

        } else if (this.dataPack.dataType == "food"){
            var emitDataPack = {
                emitID: [2,36,37],
                emitData: [GlobalFuncVar.userInfo.foodHoldVolume, GlobalFuncVar.userInfo.foodTradeValue, this.dataPack.dataFoodDelta],
            };
            //GlobalFuncVar.emitData(31, emitDataPack).then(this.eventAfterSync_foodSell.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(31, emitDataPack, this.eventAfterSync_foodSell.bind(this));
        }

        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    eventAfterSync_goldBuy(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["投入金币成功！\n下个萌鸡日记得回来领取交易回报喔~","好的"]);
            GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.goldTradeValue = rcvDataPack.rcvData[1];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.PrtName.getChildByName("lowerBox").getChildByName("tradeSlider").getChildByName("Handle").x = 0;
            this.dataPack.setDataDefault();
            this.dataPack.updateDataValue();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
        
    },

    eventAfterSync_foodSell(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.PrtName,"PopUpType1",["投入粮食成功！\n下个萌鸡日记得回来领取交易回报喔~","好的"]);
            GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.foodTradeValue = rcvDataPack.rcvData[1];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.PrtName.getChildByName("lowerBox").getChildByName("tradeSlider").getChildByName("Handle").x = 0;
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

    setHint(){
        if (this.Hint == null){
            this.Hint = ["山羊爷爷市场","出错啦！收集BUG中"];
        }
        
        this.node.getChildByName("root").getChildByName("title").getChildByName("titleText").getComponent(cc.Label).string = this.Hint[0];
        
        this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionConfirm").getComponent(cc.Label).string = this.Hint[1];
        if (this.dataPack.dataType == "gold"){
            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionValue").getComponent(cc.Label).string = this.dataPack.dataGoldTradeValue;
            let node_temp = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionType").getComponent(cc.Sprite);
            GlobalFuncVar.SetActiExpIconUpdate(1, node_temp, this);

            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionDelta").getChildByName("actionValue").getComponent(cc.Label).string = this.dataPack.dataGoldTradeValue - GlobalFuncVar.userInfo.goldTradeValue;
            let node_temp2 = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionDelta").getChildByName("actionType").getComponent(cc.Sprite);
            GlobalFuncVar.SetActiExpIconUpdate(1, node_temp2, this);

        } else if (this.dataPack.dataType == "food"){
            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionValue").getComponent(cc.Label).string = this.dataPack.dataFoodTradeValue;
            let node_temp = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionVolume").getChildByName("actionType").getComponent(cc.Sprite);
            GlobalFuncVar.SetActiExpIconUpdate(2, node_temp, this);

            this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionDelta").getChildByName("actionValue").getComponent(cc.Label).string = this.dataPack.dataFoodTradeValue - GlobalFuncVar.userInfo.foodTradeValue;
            let node_temp2 = this.node.getChildByName("root").getChildByName("actionInfo").getChildByName("actionDelta").getChildByName("actionType").getComponent(cc.Sprite);
            GlobalFuncVar.SetActiExpIconUpdate(2, node_temp2, this);
        }
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
