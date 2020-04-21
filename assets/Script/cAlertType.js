

cc.Class({
    extends: cc.Component,

    properties: {
        RtnName: null,
        FabInfo: null,
        _goBackFlag: false,
        //// 20200304
        _root: cc.Node,
        temp: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    //// 20200304
    onShow: function(FabInfo, RtnName, temp, CallFunc){
        this.FabInfo = FabInfo;
        this.RtnName = RtnName;
        this.temp = temp;
        this.listenToSwitch();
        this._root = this.node.getChildByName("root");

        // choose which content should be poped out.
        if (FabInfo == "Calendar"){
            this.setAlertText("萌鸡日历", "calendarPS");
            GlobalFuncVar.CallCalendar(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "DailyTask"){
            this.setAlertText("每日任务", "taskPS");
            GlobalFuncVar.CallDailyTask(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "PetDict"){
            this.setAlertText("萌鸡图鉴", "petDictPS");
            GlobalFuncVar.CallPetDict(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "Share"){
            this.setAlertText("分享好友", "sharePS");
            GlobalFuncVar.CallShare(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "More"){
            this.setAlertText("更多", "morePS");
            GlobalFuncVar.CallMore(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "RankView"){
            this.setAlertText("昨日排行榜", "rankPS");
            GlobalFuncVar.CallRankView(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "ActivityMain"){
            this.setAlertText("萌鸡活动场","actiYardPS");
            GlobalFuncVar.CallActivityMain(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "PetDining"){
            this.setAlertText("萌鸡餐厅","petDiningPS");
            GlobalFuncVar.CallPetDining(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "ShakeShake"){
            this.setAlertText("活力铃铛","liveBellPS");
            GlobalFuncVar.CallShakeShake(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "NewsStation"){
            this.setAlertText("森林广播站","newsPS");
            GlobalFuncVar.CallNewsStation(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "GoldBank"){
            this.setAlertText("蝴蝶王子金库","bankPS");
            GlobalFuncVar.CallGoldBank(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "FoodBarn"){
            this.setAlertText("蜂鸟姐姐粮仓","barnPS");
            GlobalFuncVar.CallFoodBarn(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "TradeMarket"){
            this.setAlertText("山羊爷爷市场","marketPS");
            GlobalFuncVar.CallTradeMarket(this._root, FabInfo, CallFunc);
        } 
        //// 20200307
        else if (FabInfo == "UndergrdMarket"){
            this.setAlertText("熊猫交易所","undergrdMarketPS");
            GlobalFuncVar.CallUndergrdMarket(this._root, FabInfo, CallFunc);
        } 
        else if (FabInfo == "UserResGold"){
            this.setAlertText("金币口袋", "goldJarPS");
            GlobalFuncVar.CallUserRes(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "UserResFood"){
            this.setAlertText("粮食口袋", "foodJarPS");
            GlobalFuncVar.CallUserRes(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "UserResDeposit"){
            this.setAlertText("储蓄口袋", "goldJarPS");
            GlobalFuncVar.CallUserRes(this._root, FabInfo, CallFunc);
        }
        else if (FabInfo == "Sync"){
            this.setAlertText("萌鸡时钟", "restartPS");
            GlobalFuncVar.CallSyncTimeOrRestart(this._root, FabInfo, CallFunc);
        };
        this.node.active = true;
    },

    listenToSwitch(){
        if (this.FabInfo != "ShakeShake"){
            this.node.getChildByName("maskLayer").on(cc.Node.EventType.TOUCH_END, function (event){
                this._goBackFlag = true;
            }.bind(this), this);
        }
    },

    //// 20200304
    onHide: function(){
        this.node.active = false;
        let node = this._root.getChildByName(this.FabInfo) || this._root.getChildByName("UserRes");
        if(node.name == "ShakeShake"){
            cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, node.getComponent("cShakeShake").onDeviceMotionEvent, node.getComponent("cShakeShake"));
        } else if(node.name == "ShakeShake") {

        }
        if (node!=null){
            
            node.removeFromParent(true); //while closing the alert window, remove the content node
        }
        this.RtnName.active = true;
    },

    //// 20200304
    setAlertText: function(FabTitle, IconTitle){
        this.node.getChildByName("root").getChildByName("textBox").getChildByName("text").getComponent(cc.Label).string = FabTitle;
        // 从图集中加载资源
        if (GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame(IconTitle)){
            this.node.getChildByName("root").getChildByName("textBox").getChildByName("text").getChildByName("textIcon").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame(IconTitle);
        } else {
            this.node.getChildByName("root").getChildByName("textBox").getChildByName("text").getChildByName("textIcon").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPack2PS.getSpriteFrame(IconTitle);
        }
        
    },

    //// 20200304
    onClickBtnYes: function(){
        if (this.temp){
            var node = this.node.getComponent("cFadeInFadeOut");
            node.onFadeOut();
        } else {
            this.onHide();
        }
    },

    //// 20200304
    onClickBtnNo: function(){

        if (this.FabInfo == "ShakeShake"){
            this.node.getChildByName("root").getChildByName("ShakeShake").getComponent("cShakeShake").onHide();
        }

        if (this.temp){
            var node = this.node.getComponent("cFadeInFadeOut");
            node.onFadeOut();
        } else {
            this.onHide();
        }
    },

    update (dt) {
        if (this._goBackFlag == true){
            this.onClickBtnNo();
            this.node.getChildByName("maskLayer").off(cc.Node.EventType.TOUCH_END);
            this._goBackFlag = false;
        };
    },
});
