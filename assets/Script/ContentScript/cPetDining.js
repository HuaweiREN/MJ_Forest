
cc.Class({
    extends: cc.Component,

    properties: {
        _petExpe: cc.Node,
        _barNow: cc.Node,
        _petExpeValue: cc.Node,
        _petLevel: cc.Node,
        _feedVolume: cc.Node,
        _feedVolumeValue: cc.Node,
        _feedVolumePercentage: cc.Node,
        _foodHoldVolume: cc.Node,
        _feedConfirm: cc.Node,
        _datapetExpeValueNow: null,
        _datapetLevel: null,
        _datafoodHoldVolume: null,
        _datafeedValue : null,
        //_handlerFlag: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {

    },

    //// 20200302
    setNodeandData(){
        this._petExpe = this.node.getChildByName("petExpe");
        this._barNow = this._petExpe.getChildByName("barNow");
        this._petExpeValue = this._petExpe.getChildByName("petExpeValue");
        this._petLevel = this.node.getChildByName("petLevel");
        this._feedVolume = this.node.getChildByName("feedVolume");
        this._feedHandler = this._feedVolume.getChildByName("Handle");
        this._feedVolumePercentage = this._feedHandler.getChildByName("feedVolumePercentage");
        this._feedVolumeValue = this.node.getChildByName("feedVolumeValue").getChildByName("feedVolumeValue");
        this._foodHoldVolume = this.node.getChildByName("foodHoldVolume").getChildByName("foodHoldVolumeValue");
        this._feedConfirm = this.node.getChildByName("feedConfirm");
        /*
        this._feedHandler.on(cc.Node.EventType.TOUCH_START, function (event){
            //this._handlerFlag = true;
        }.bind(this));
        this._feedHandler.on(cc.Node.EventType.TOUCH_END, function (event){
           //this._handlerFlag = false;
        }.bind(this));
        */


    },
    onShow(PrtName, FabInfo){
        this.node.active = true;
        this.setNodeandData();
        this.setDefaultValue();

        setTimeout(function () {
            GlobalFuncVar.ShowDemoText(this, "训练师小贴士：请逐级给我投喂哦~一次吃太多会噎到哒！~", 120);
        // 20200224 改动，4000 --> 3000
        }.bind(this), 2000);
    },
    onHide(){
        this.node.active = false;
        this.node.removeFromParent(true); //while closing the alert window, remove the content node
    },
    //// 20200302
    setDefaultValue(){
        this._datapetExpeValueNow = GlobalFuncVar.userPetInfo.petExpeValueNow;
        this._datapetLevel = GlobalFuncVar.userPetInfo.petLevel;
        this._datafoodHoldVolume = GlobalFuncVar.userInfo.foodHoldVolume;
        //this._handlerFlag = false;

        this._barNow.getComponent(cc.Widget).isAbsoluteRight = false;
        if (GlobalFuncVar.userPetInfo.petExpeValueNow == 0) {
            this._barNow.getComponent(cc.Widget).right = 1;
        } else {
            this._barNow.getComponent(cc.Widget).right = 1 - ((GlobalFuncVar.userPetInfo.petExpeValueNow / GlobalFuncVar.userPetInfo.petExpeTotNow)*0.90+0.1);
        };

        this._petExpeValue.getComponent(cc.Label).string = this._datapetExpeValueNow +"/"+ GlobalFuncVar.userPetInfo.petExpeTotNow;
        this._petLevel.getComponent(cc.Label).string = "Lv. " + this._datapetLevel;
        this._feedVolume.getComponent(cc.Slider).progress = 0;

        this._feedVolumeValue.getComponent(cc.Label).string = 0;
        this._feedVolumePercentage.getComponent(cc.Label).string = "0%";
        this._foodHoldVolume.getComponent(cc.Label).string = this._datafoodHoldVolume;  

        this._datafeedValue = 0;      
    },
    //// 20200301
    updateFeedDataTemp(){
        this._datafeedMax = GlobalFuncVar.userPetInfo.petExpeTotNow - GlobalFuncVar.userPetInfo.petExpeValueNow;
        let handleMaxPosX = this._datafeedMax / GlobalFuncVar.userInfo.foodHoldVolume;
        let handlePosRate = this._feedVolume.getComponent(cc.Slider).progress;
        this._datafeedValue = Math.round(handlePosRate * this._datafoodHoldVolume);
        this._datapetExpeValueNow = GlobalFuncVar.userPetInfo.petExpeValueNow + this._datafeedValue;
        this._barNow.getComponent(cc.Widget).isAbsoluteRight = false;

        if (this._datafeedValue < this._datafeedMax){
            this._petExpeValue.getComponent(cc.Label).string = this._datapetExpeValueNow +"/"+ GlobalFuncVar.userPetInfo.petExpeTotNow;
            if (this._datapetExpeValueNow == 0) {
                this._barNow.getComponent(cc.Widget).right = 1;
            } else {
                this._barNow.getComponent(cc.Widget).right = 1 - ((this._datapetExpeValueNow / GlobalFuncVar.userPetInfo.petExpeTotNow)*0.90+0.1);
            };
            this._feedVolumeValue.getComponent(cc.Label).string = this._datafeedValue;
            if (this._datafoodHoldVolume == 0){
                this._feedVolumePercentage.getComponent(cc.Label).string = "0%";
            } else {
                this._feedVolumePercentage.getComponent(cc.Label).string = Math.round(this._datafeedValue/this._datafoodHoldVolume*100) + "%";
            };
            this._foodHoldVolume.getComponent(cc.Label).string = this._datafoodHoldVolume - this._datafeedValue;
            
            
        } else if (this._datafeedValue >= this._datafeedMax){
            this._petExpeValue.getComponent(cc.Label).string = GlobalFuncVar.userPetInfo.petExpeTotNow +"/"+ GlobalFuncVar.userPetInfo.petExpeTotNow;
            this._feedVolume.getComponent(cc.Slider).progress = handleMaxPosX;
            this._barNow.getComponent(cc.Widget).right = 0;
            this._feedVolumeValue.getComponent(cc.Label).string = this._datafeedMax;
            if (this._datafoodHoldVolume == 0){
                this._feedVolumePercentage.getComponent(cc.Label).string = "0%";
            } else {
                this._feedVolumePercentage.getComponent(cc.Label).string = Math.round(this._datafeedMax/this._datafoodHoldVolume*100) + "%";
            };
            this._foodHoldVolume.getComponent(cc.Label).string = this._datafoodHoldVolume - this._datafeedMax;
            
        }
    },

    //// 20200302
    onClickFeedConfirmBtn(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["这里是我的投喂按钮哦~\n有了主人细心的关怀与照顾\n我一定会健壮茁壮成长的！","好的"]);
        } else if (GlobalFuncVar.userPetInfo.petLevel == 50){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["我已到达Demo项目满级啦~","好的"]);
        } else {
            this._feedConfirm.getComponent(cc.Button).interactable = false;
            this._feedHandler.active = false;
            if (GlobalFuncVar.userInfo.foodHoldVolume == 0){
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["我们没粮食啦！肚子饿肚子饿！","好的"]);
                this.setDefaultValue();
                this._feedConfirm.getComponent(cc.Button).interactable = true;
                this._feedHandler.active = true;
            } else if (this._datafeedValue == 0){
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["我张了嘴，你却没喂...","好的"]);
                this.setDefaultValue();
                this._feedConfirm.getComponent(cc.Button).interactable = true;
                this._feedHandler.active = true;
            } else if (this._datafeedValue < this._datafeedMax){
                var emitDataPack = {
                    emitID: [2,12,13],
                    emitData: [GlobalFuncVar.userInfo.foodHoldVolume, this._datafeedValue, GlobalFuncVar.userPetInfo.petExpeValueNow],
                };
                //GlobalFuncVar.emitData(16, emitDataPack).then(this.eventAfterSync_notLevelUp.bind(this)).catch(err => {console.log(err)});
                GlobalFuncVar.emitData(16, emitDataPack, this.eventAfterSync_notLevelUp.bind(this));
            } else if (this._datafeedValue >= this._datafeedMax) {
                var emitDataPack = {
                    emitID: [2,13,14,15],
                    emitData: [GlobalFuncVar.userInfo.foodHoldVolume,  GlobalFuncVar.userPetInfo.petExpeValueNow, this._datafeedMax, GlobalFuncVar.userPetInfo.petLevel],
                };
                //GlobalFuncVar.emitData(17, emitDataPack).then(this.eventAfterSync_LevelUp.bind(this)).catch(err => {console.log(err)});
                GlobalFuncVar.emitData(17, emitDataPack, this.eventAfterSync_LevelUp.bind(this));
            }

            this.updateFeedDataTemp();
        }
    },

    eventAfterSync_notLevelUp(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userPetInfo.petExpeValueNow = rcvDataPack.rcvData[2];
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["啊呜啊呜，真香！\n(经验值+"+this._datafeedValue+")","好的"]);
            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.setDefaultValue();
            this._feedHandler.active = true;
            this._feedConfirm.getComponent(cc.Button).interactable = true;
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            this._feedHandler.active = true;
            this._feedConfirm.getComponent(cc.Button).interactable = true;
        }
        
    },

    eventAfterSync_LevelUp(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userPetInfo.petExpeValueNow = rcvDataPack.rcvData[1];
            GlobalFuncVar.userPetInfo.petLevel = rcvDataPack.rcvData[3];
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["我升级啦~\n谢谢主人！\n(等级+1)","好的"]);
            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.setDefaultValue();
            this._feedHandler.active = true;
            this._feedConfirm.getComponent(cc.Button).interactable = true;
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            this._feedHandler.active = true;
            this._feedConfirm.getComponent(cc.Button).interactable = true;
        }
    },

    //// 20200302
    update (dt) {
        //if (this._handlerFlag == true){
        this.updateFeedDataTemp();
        //}
        
    },
});
