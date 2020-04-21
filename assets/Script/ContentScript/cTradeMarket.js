

cc.Class({
    extends: cc.Component,

    properties: {
        _priceGoldAvg: cc.Node,
        _priceFoodAvg: cc.Node,
        _priceTrendFigure: cc.Node,
        _goldHoldVolume: cc.Node,
        _foodHoldVolume: cc.Node,
        _goldTradeValue: cc.Node,
        _foodTradeValue: cc.Node,
        _tradeSlider: cc.Node,
        _tradeSliderBg : cc.Node,
        _tradeSliderHandler : cc.Node,
        _tradeBuyBtn: cc.Node,
        _tradeSellBtn: cc.Node,
        _tradeFriendBtn: cc.Node,
        _priceTrend1: cc.Sprite,
        _priceTrend2: cc.Sprite,
        _priceTrend3: cc.Sprite,
        _priceTrend4: cc.Sprite,
        _priceTrend5: cc.Sprite,
        _syncBtn: cc.Node,

        _dataGoldHoldVolume: cc.Interger,
        _dataFoodHoldVolume: cc.Interger,
        _dataGoldTradeValue: cc.Interger,
        _dataFoodTradeValue: cc.Interger,

        //_handlerFlag: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onShow(){
        this.setNodeDefault();
        this.setTradeAwardPop();
        this.setDataDefault();
        this.onSetCurrentBtnClick();
        this.onSyncBtnClick();
        this.node.active = true;
        setTimeout(function () {
            GlobalFuncVar.ShowDemoText(this,"训练师小贴士：成功预测当前萌鸡日的粮食结算价格，并投入合理的金币/粮食资源，是训练师立足萌鸡森林的关键哦~", 120);
        // 20200224 改动，4000 --> 3000
        }.bind(this), 2000);
        
    },

    onSyncBtnClick(){
        this._priceFoodAvg.getComponent(cc.Label).string = "小秘密";
        var emitDataPack = {
            emitID: [48,49],
            emitData: [GlobalFuncVar.sysResInfo.priceFoodDynamic, null],
        };
        GlobalFuncVar.emitData(35, emitDataPack, this.eventAfterSync.bind(this));
    },

    eventAfterSync(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.sysResInfo.priceFoodDynamic = Math.round(rcvDataPack.rcvData[0]*100)/100;
            GlobalFuncVar.sysResInfo.priceFoodTrend = Math.round(rcvDataPack.rcvData[1]*100)/100;

            // 鲁棒性机制
            if (rcvDataPack.rcvData[0]){
                this._priceFoodAvg.getComponent(cc.Label).string = Math.round(rcvDataPack.rcvData[0]*100)/100;
            } else {
                this._priceFoodAvg.getComponent(cc.Label).string = "小秘密";
            }
            
            if(GlobalFuncVar.sysResInfo.priceFoodTrend >= 0){
                this._priceFoodAvg.color = new cc.Color(213,91,28);
            } else {
                this._priceFoodAvg.color = new cc.Color(24,147,70);
            }
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
        }
        
    },



    onHide(){},
    setNodeDefault(){
        this._priceGoldAvg = this.node.getChildByName("upperBox").getChildByName("priceYesterday").getChildByName("transferIcon").getChildByName("goldPriceBox").getChildByName("goldPriceBg").getChildByName("goldPriceValue");
        this._priceFoodAvg = this.node.getChildByName("upperBox").getChildByName("priceYesterday").getChildByName("transferIcon").getChildByName("foodPriceBox").getChildByName("foodPriceBg").getChildByName("foodPriceValue");
        this._goldHoldVolume = this.node.getChildByName("lowerBox").getChildByName("userRes").getChildByName("goldHoldVolume").getChildByName("goldHoldBox").getChildByName("goldHoldValue");
        this._foodHoldVolume = this.node.getChildByName("lowerBox").getChildByName("userRes").getChildByName("foodHoldVolume").getChildByName("foodHoldBox").getChildByName("foodHoldValue");
        this._goldTradeValue = this.node.getChildByName("lowerBox").getChildByName("userRes").getChildByName("goldTradeVolume").getChildByName("goldTradeBox").getChildByName("goldTradeValue");
        this._foodTradeValue = this.node.getChildByName("lowerBox").getChildByName("userRes").getChildByName("foodTradeVolume").getChildByName("foodTradeBox").getChildByName("foodTradeValue");
        this._tradeSlider = this.node.getChildByName("lowerBox").getChildByName("tradeSlider");
        this._tradeSliderBg = this._tradeSlider.getChildByName("Background");
        this._tradeSliderHandler = this._tradeSlider.getChildByName("Handle");
        this._tradeBuyBtn = this.node.getChildByName("lowerBox").getChildByName("tradeBuyBtn");
        this._tradeSellBtn = this.node.getChildByName("lowerBox").getChildByName("tradeSellBtn");
        this._tradeFriendBtn = this.node.getChildByName("lowerBox").getChildByName("tradeFriendBtn");
        this._priceTrend1 = this.node.getChildByName("upperBox").getChildByName("priceTrend").getChildByName("priceTrendRecord").getChildByName("trend1");
        this._priceTrend2 = this.node.getChildByName("upperBox").getChildByName("priceTrend").getChildByName("priceTrendRecord").getChildByName("trend2");
        this._priceTrend3 = this.node.getChildByName("upperBox").getChildByName("priceTrend").getChildByName("priceTrendRecord").getChildByName("trend3");
        this._priceTrend4 = this.node.getChildByName("upperBox").getChildByName("priceTrend").getChildByName("priceTrendRecord").getChildByName("trend4");
        this._priceTrend5 = this.node.getChildByName("upperBox").getChildByName("priceTrend").getChildByName("priceTrendRecord").getChildByName("trend5");
        this._syncBtn = this.node.getChildByName("upperBox").getChildByName("priceYesterday").getChildByName("syncBtn");
    },

    setTradeAwardPop(){
        if (GlobalFuncVar.userInfo.tradeAwardReady == 1){
            GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["山羊爷爷来送上次投资的市场收获啦！\n请查收奖励~","好的"],"tradeAward");
            this.node.getComponent("cSoundEffect").onClickBtn(null,"getGo");
        };
    },

    //// 20200302
    setDataDefault(){
        this._dataGoldHoldVolume = GlobalFuncVar.userInfo.goldHoldVolume;
        this._dataFoodHoldVolume = GlobalFuncVar.userInfo.foodHoldVolume;
        this._dataGoldTradeValue = GlobalFuncVar.userInfo.goldTradeValue;
        this._dataFoodTradeValue = GlobalFuncVar.userInfo.foodTradeValue;

        /*
        this._tradeSliderHandler.on(cc.Node.EventType.TOUCH_START, function (event){
            this._handlerFlag = true;
        }.bind(this));
        this._tradeSliderHandler.on(cc.Node.EventType.TOUCH_END, function (event){
           this._handlerFlag = false;
        }.bind(this));
        */

        /*
        this._priceTrend1.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[0]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[0] >= GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend1.color = new cc.Color(213,91,28);
        } else if (GlobalFuncVar.sysResInfo.priceTrend[0] < GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend1.color = new cc.Color(24,147,70);
        };

        this._priceTrend2.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[1]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[1] >= GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend2.color = new cc.Color(213,91,28);
        } else if (GlobalFuncVar.sysResInfo.priceTrend[1] < GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend2.color = new cc.Color(24,147,70);
        };

        this._priceTrend3.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[2]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[2] >= GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend3.color = new cc.Color(213,91,28);
        } else if (GlobalFuncVar.sysResInfo.priceTrend[2] < GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend3.color = new cc.Color(24,147,70);
        };

        this._priceTrend4.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[3]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[3] >= GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend4.color = new cc.Color(213,91,28);
        } else if (GlobalFuncVar.sysResInfo.priceTrend[3] < GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend4.color = new cc.Color(24,147,70);
        };

        this._priceTrend5.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[4]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[4] >= GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend5.color = new cc.Color(213,91,28);
        } else if (GlobalFuncVar.sysResInfo.priceTrend[4] < GlobalFuncVar.sysResInfo.priceFoodAvg) {
            this._priceTrend5.color = new cc.Color(24,147,70);
        };
        */

        this._priceTrend1.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[0]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[0]) {
            this._priceTrend1.color = new cc.Color(213,91,28);
        }

        this._priceTrend2.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[1]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[1] >= GlobalFuncVar.sysResInfo.priceTrend[0]) {
            this._priceTrend2.color = new cc.Color(213,91,28);
        } else {
            this._priceTrend2.color = new cc.Color(24,147,70);
        };

        this._priceTrend3.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[2]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[2] >= GlobalFuncVar.sysResInfo.priceTrend[1]) {
            this._priceTrend3.color = new cc.Color(213,91,28);
        } else {
            this._priceTrend3.color = new cc.Color(24,147,70);
        };

        this._priceTrend4.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[3]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[3] >= GlobalFuncVar.sysResInfo.priceTrend[2]) {
            this._priceTrend4.color = new cc.Color(213,91,28);
        } else {
            this._priceTrend4.color = new cc.Color(24,147,70);
        };

        this._priceTrend5.getComponent(cc.Label).string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[4]*100)/100;
        if (GlobalFuncVar.sysResInfo.priceTrend[4] >= GlobalFuncVar.sysResInfo.priceTrend[3]) {
            this._priceTrend5.color = new cc.Color(213,91,28);
        } else {
            this._priceTrend5.color = new cc.Color(24,147,70);
        };


    },
    //// 20200311
    updateDataValue(){
        
        this._priceGoldAvg.getComponent(cc.Label).string = GlobalFuncVar.sysResInfo.priceGoldAvg;
        //this._priceFoodAvg.getComponent(cc.Label).string = GlobalFuncVar.sysResInfo.priceFoodAvg;
        //this._priceFoodAvg.getComponent(cc.Label).string = GlobalFuncVar.sysResInfo.priceFoodDynamic;
        this._goldHoldVolume.getComponent(cc.Label).string = this._dataGoldHoldVolume;
        this._foodHoldVolume.getComponent(cc.Label).string = this._dataFoodHoldVolume;
        this._goldTradeValue.getComponent(cc.Label).string = this._dataGoldTradeValue;
        this._foodTradeValue.getComponent(cc.Label).string = this._dataFoodTradeValue;
    },
    onTradeBuyBtnClick(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["在此处将金币投入市场哦~\n山羊爷爷会在第二个萌鸡日将粮食回报送回~","好的"]);
        } else {
            let dataPack = {
                dataGoldTradeValue : this._dataGoldTradeValue,
                dataGoldHoldVolume : this._dataGoldHoldVolume,
                dataGoldDelta: this._dataGoldTradeValue - GlobalFuncVar.userInfo.goldTradeValue,
                dataType : "gold",
                setDataDefault : this.setDataDefault.bind(this),
                updateDataValue : this.updateDataValue.bind(this),
            };
            if (dataPack.dataGoldTradeValue == 0){
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["咦？你好像没投入金币呀！~","返回"]);
            } else if (dataPack.dataGoldTradeValue > 0){
                GlobalFuncVar.CallDoubleConfirm_TradeMarket(this.node,"PopUpType4",["山羊爷爷市场","确定要进行如下投资嘛？"],dataPack);
            } else {
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["出错啦！","返回"]);
            };
        }
    },
    onTradeSellBtnClick(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["在此处将粮食投入市场哦~\n山羊爷爷会在第二个萌鸡日将金币回报送回~","好的"]);
        } else {
            let dataPack = {
                dataFoodTradeValue : this._dataFoodTradeValue,
                dataFoodHoldVolume : this._dataFoodHoldVolume,
                dataFoodDelta: this._dataFoodTradeValue - GlobalFuncVar.userInfo.foodTradeValue,
                dataType : "food",
                setDataDefault : this.setDataDefault.bind(this),
                updateDataValue : this.updateDataValue.bind(this),
            };
            if (dataPack.dataFoodTradeValue == 0){
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["咦？你好像没投入粮食呀！~","返回"]);
            } else if (dataPack.dataFoodTradeValue > 0){
                GlobalFuncVar.CallDoubleConfirm_TradeMarket(this.node,"PopUpType4",["山羊爷爷市场","确定要进行如下投资嘛？"],dataPack);
            } else {
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["出错啦！","返回"]);
            };
        }
    },
    
    

    catchUserAction(){
        if (this._tradeSliderHandler.x < 0) {
            // 买
            if (GlobalFuncVar.userInfo.goldHoldVolume == 0){
                this._tradeSliderHandler.x = this._tradeSliderBg.x;
            };
            this._dataGoldTradeValue = GlobalFuncVar.userInfo.goldTradeValue + Math.round((-this._tradeSliderHandler.x) / (this._tradeSliderBg.width/2) * GlobalFuncVar.userInfo.goldHoldVolume);
            this._dataGoldHoldVolume = GlobalFuncVar.userInfo.goldHoldVolume - Math.round((-this._tradeSliderHandler.x) / (this._tradeSliderBg.width/2) * GlobalFuncVar.userInfo.goldHoldVolume);
            this._dataFoodTradeValue = GlobalFuncVar.userInfo.foodTradeValue;
            this._dataFoodHoldVolume = GlobalFuncVar.userInfo.foodHoldVolume;
            this._tradeBuyBtn.getComponent(cc.Button).interactable = true;
            this._tradeSellBtn.getComponent(cc.Button).interactable = false;

        } else if (this._tradeSliderHandler.x > 0) {
            // 取
            if (GlobalFuncVar.userInfo.foodHoldVolume == 0){
                this._tradeSliderHandler.x = this._tradeSliderBg.x;
            };
            this._dataFoodTradeValue = GlobalFuncVar.userInfo.foodTradeValue + Math.round((this._tradeSliderHandler.x) / (this._tradeSliderBg.width/2) * GlobalFuncVar.userInfo.foodHoldVolume);
            this._dataFoodHoldVolume = GlobalFuncVar.userInfo.foodHoldVolume - Math.round((this._tradeSliderHandler.x) / (this._tradeSliderBg.width/2) * GlobalFuncVar.userInfo.foodHoldVolume);
            this._dataGoldTradeValue = GlobalFuncVar.userInfo.goldTradeValue;
            this._dataGoldHoldVolume = GlobalFuncVar.userInfo.goldHoldVolume;
            this._tradeBuyBtn.getComponent(cc.Button).interactable = false;
            this._tradeSellBtn.getComponent(cc.Button).interactable = true;

        } else if (this._tradeSliderHandler.x == 0){
            this.setDataDefault();
            this._tradeBuyBtn.getComponent(cc.Button).interactable = false;
            this._tradeSellBtn.getComponent(cc.Button).interactable = false;
        }
    },

    onSetCurrentBtnClick(){
        this._tradeSliderHandler.x = 0;
        this.catchUserAction();
        this.updateDataValue();
    },



    start () {

    },

    //// 20200302
    update (dt) {
        //if (this._handlerFlag == true){
        this.catchUserAction();
        this.updateDataValue();
        //};
        //if (GlobalFuncVar.gameFlag.userResUpdate == true){
            //this.setDataDefault();
            //this.updateDataValue();
        //};
    },
});
