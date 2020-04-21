
cc.Class({
    extends: cc.Component,

    properties: {
        _harvestValue: cc.Node,
        _harvestDayCount: cc.Node,
        _harvestBtn: cc.Node,
        _foodRankCurrent: cc.Node,
        _foodRankCurrentType: cc.Node,
        _foodWelfareValue: cc.Node,
        _foodRankBtn: cc.Node,
        _foodWelfareBtn: cc.Node,
        _selfFoodRank: cc.Integer,
        _foodHoldVolume: cc.Node,

    },

    onShow(){
        this.setNodeDefault();
        this.setDataDefault();
        this.updateDataValue();
        this.setBtnStatus();
        this.notiMarkStatus();
        this.node.active = true;
        setTimeout(function () {
            GlobalFuncVar.ShowDemoText(this,"训练师小贴士：能否成功参与到救济粮计划中，是萌鸡森林全体训练师的一场博弈哦~", -70);
        // 20200224 改动，4000 --> 3000
        }.bind(this), 2000);
    },

    notiMarkStatus(){
        GlobalFuncVar.showNotiMark(this._harvestBtn, GlobalFuncVar.userInfo.foodHarvestReady == 1);
        GlobalFuncVar.showNotiMark(this._foodWelfareBtn, GlobalFuncVar.userInfo.foodWelfareReady == 1);
    },

    onHide(){
        this.node.active = false;
    },
    setNodeDefault(){
        this._harvestValue = this.node.getChildByName("upperBox").getChildByName("harvestFeedback").getChildByName("harvestDayFeedbackBox").getChildByName("harvestDayFeedbackValue");
        this._harvestDayCount = this.node.getChildByName("upperBox").getChildByName("harvestDayCount").getChildByName("harvestDayCountBox").getChildByName("harvestDayCountValue");
        this._harvestBtn = this.node.getChildByName("upperBox").getChildByName("harvestBtn");
        this._foodRankCurrent = this.node.getChildByName("lowerBox").getChildByName("foodRankBox").getChildByName("transferIcon").getChildByName("foodRankNow").getChildByName("foodRankValue");
        this._foodRankCurrentType = this._foodRankCurrent.getChildByName("foodRankType");
        this._foodWelfareValue = this.node.getChildByName("lowerBox").getChildByName("foodWelfare").getChildByName("foodWelfareBox").getChildByName("foodWelfareValue");
        this._foodRankBtn = this.node.getChildByName("lowerBox").getChildByName("foodRankBtn");
        this._foodWelfareBtn = this.node.getChildByName("lowerBox").getChildByName("foodWelfareBtn");
        this._foodHoldVolume = this.node.getChildByName("topBox").getChildByName("foodHoldVolume").getChildByName("foodHoldVolumeBg").getChildByName("foodHoldVolume");

        /*
        if (GlobalFuncVar.userRankInfo.selfFoodFriendRank != null){
            this._selfFoodRank = GlobalFuncVar.userRankInfo.selfFoodFriendRank;
        } else{
            let indexList = GlobalFuncVar.GetRankIndex("friend","food");
            let rankFoodtemp = [];
            for (let j=0; j<indexList.length; j++){
                rankFoodtemp.push(GlobalFuncVar.userRankInfo.friendFoodRes[indexList[j]]);
            };
            this._selfFoodRank = GlobalFuncVar.GetSelfRankIndex("friend","food",rankFoodtemp);
            GlobalFuncVar.userRankInfo.selfFoodFriendRank = this._selfFoodRank;
        };
        */
    },
    setDataDefault(){
        this._dataHarvestValue = GlobalFuncVar.sysResInfo.foodHarvest;
        this._dataHarvestCount = GlobalFuncVar.sysResInfo.foodHarvestCount;
        this._dataFoodRankCurrent = this._selfFoodRank;
        this._dataFoodHoldVolume = GlobalFuncVar.userInfo.foodHoldVolume;

    },
    updateDataValue(){
        this._harvestValue.getComponent(cc.Label).string = this._dataHarvestValue;
        this._harvestDayCount.getComponent(cc.Label).string = this._dataHarvestCount + " 个萌鸡日";
        this._foodRankCurrent.getComponent(cc.Label).string = GlobalFuncVar.sysResInfo.foodWelfareThresold;
        //GlobalFuncVar.SetActiExpIconUpdate(2, this._foodRankCurrentType.getComponent(cc.Sprite), this);
        this._foodWelfareValue.getComponent(cc.Label).string = GlobalFuncVar.sysResInfo.foodWelfare;
        this._foodHoldVolume.getComponent(cc.Label).string = GlobalFuncVar.userInfo.foodHoldVolume;
    },
    setBtnStatus(){
        if (GlobalFuncVar.userInfo.foodHarvestReady == 0){//////////////////////////////////////////从这里以下有问题
            this._harvestBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "等待中";
            this._harvestBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.foodHarvestReady == -1){
            this._harvestBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "已领取";
            this._harvestBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.foodHarvestReady == 1){
            this._harvestBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "领取";
            this._harvestBtn.getComponent(cc.Button).interactable = true;
        };

        if (GlobalFuncVar.userInfo.foodWelfareReady == 0){
            this._foodWelfareBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "未达标";
            this._foodWelfareBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.foodWelfareReady == -1){
            this._foodWelfareBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "已领取";
            this._foodWelfareBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.foodWelfareReady == 1){
            this._foodWelfareBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "领取";
            this._foodWelfareBtn.getComponent(cc.Button).interactable = true;
        };
        
    },

    //// 20200302
    onFoodHarvestBtnClick(){
        // 由于已经限制了button的开关，无需在此处进行弹框限制
        /* 
        if (GlobalFuncVar.userInfo.foodHarvestReady == 0){ // 0代表未准备好利息
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["丰收日尚未来到！","返回"]);
        } else if (GlobalFuncVar.userInfo.foodHarvestReady == -1){ //-1代表已经领取过利息
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["今天已经领取过丰收日奖励啦，不要贪心哦！","返回"]);
        } else */
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["丰收日到来时，可以领取额外粮食哦！\n丰收的喜悦，难以言说！~","好的"]);
        } else {
            this._harvestBtn.getComponent(cc.Button).interactable = false;
            if (GlobalFuncVar.userInfo.foodHarvestReady == 1){ //1代表用户可以领取福利
                var emitDataPack = {
                    emitID: [2,33,69],
                    emitData: [GlobalFuncVar.userInfo.foodHoldVolume, GlobalFuncVar.sysResInfo.foodHarvest, GlobalFuncVar.userInfo.foodHarvestReady],
                };
                //GlobalFuncVar.emitData(28, emitDataPack).then(this.eventAfterSync_foodHarvest.bind(this)).catch(err => {console.log(err)});
                GlobalFuncVar.emitData(28, emitDataPack, this.eventAfterSync_foodHarvest.bind(this));
                GlobalFuncVar.showNotiMark(this._harvestBtn, false);
            };
            this.setBtnStatus();
            this.setDataDefault();
            this.updateDataValue();
        }
    },

    eventAfterSync_foodHarvest(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["丰收日粮食来啦~\n领取成功！\n(粮食+"+GlobalFuncVar.sysResInfo.foodHarvest+")","返回"]);
            GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.foodHarvestReady = rcvDataPack.rcvData[2];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.setBtnStatus();
            this.setDataDefault();
            this.updateDataValue();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            this._harvestBtn.getComponent(cc.Button).interactable = true;
        }
    },

    //// 20200302
    onFoodWelfareBtnClick(){
        // 由于已经限制了button的开关，无需在此处进行弹框限制
        /*
        if (GlobalFuncVar.userInfo.foodWelfareReady == 0){ // 0代表未准备好利息
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["福利未到来！","返回"]);
        } else if (GlobalFuncVar.userInfo.foodWelfareReady == -1){ //-1代表已经领取过利息
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["今天已经领取过福利奖励啦，不要贪心哦！","返回"]);
        } else */

        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["在此处领取属于你的救济粮哦！\n持有越少，几率越大~","好的"]);
        } else {
            this._foodWelfareBtn.getComponent(cc.Button).interactable = false;
            if (GlobalFuncVar.userInfo.foodWelfareReady == 1){ //1代表用户可以领取福利
                var emitDataPack = {
                    emitID: [2,32,68],
                    emitData: [GlobalFuncVar.userInfo.foodHoldVolume, GlobalFuncVar.sysResInfo.foodWelfare, GlobalFuncVar.userInfo.foodWelfareReady],
                };
                //GlobalFuncVar.emitData(27, emitDataPack).then(this.eventAfterSync_foodWelfare.bind(this)).catch(err => {console.log(err)});
                GlobalFuncVar.emitData(27, emitDataPack, this.eventAfterSync_foodWelfare.bind(this));
                GlobalFuncVar.showNotiMark(this._foodWelfareBtn, false);
            };
        }
    },

    eventAfterSync_foodWelfare(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["救济粮来啦！\n领取成功~\n(粮食+"+GlobalFuncVar.sysResInfo.foodWelfare+")","好的"]);
            GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.foodWelfareReady = rcvDataPack.rcvData[2];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this.setBtnStatus();
            this.setDataDefault();
            this.updateDataValue();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            this._foodWelfareBtn.getComponent(cc.Button).interactable = true;
        }
        
    },

    onFoodRankBtnClick(){
        this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2_copy", GlobalFuncVar.sysNodeDict.BaseView, "RankView", this.node);
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {},

    update (dt) {
        this.notiMarkStatus();
    },
});
