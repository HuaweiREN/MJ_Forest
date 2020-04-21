
cc.Class({
    extends: cc.Component,

    properties: {
        _depositValue: cc.Node,
        _goldHoldVolume: cc.Node,
        _interestValue: cc.Node,
        _goldDepositBtn: cc.Node,
        _goldWithdrawBtn: cc.Node,
        _goldActionBar: cc.Node,
        _goldActionBg: cc.Node,
        _goldActionHandler: cc.Node,
        _goldActionText: cc.Node,
        _goldRankCurrent: cc.Node,
        _goldRankCurrentType: cc.Node,
        _goldWelfareValue: cc.Node,
        _goldRankBtn: cc.Node,
        _goldInterestBtn: cc.Node,
        _goldWelfareBtn: cc.Node,
        _interestValueExp : null,
        _setCurrent : null,
        _selfGoldRank: cc.Integer,
       // _handlerFlag : null,
    },

    onShow(){
        this.setNodeDefault();
        this.setDataDefault();
        this.onSetCurrentBtnClick();
        this.setBtnStatus();
        this.notiMarkStatus();
        this.node.active = true;
        setTimeout(function () {
            GlobalFuncVar.ShowDemoText(this,"训练师小贴士：能否成功参与到补助金计划中，是萌鸡森林全体训练师的一场博弈哦~", -70);
        // 20200224 改动，4000 --> 3000
        }.bind(this), 2000);
    },

    notiMarkStatus(){
        GlobalFuncVar.showNotiMark(this._goldInterestBtn, GlobalFuncVar.userInfo.goldInterestReady == 1);
        GlobalFuncVar.showNotiMark(this._goldWelfareBtn, GlobalFuncVar.userInfo.goldWelfareReady == 1);
    },

    onHide(){
        this.node.active = false;
    },

    //// 20200302
    setNodeDefault(){
        this._depositValue = this.node.getChildByName("topBox").getChildByName("goldRes").getChildByName("goldDepositVolume").getChildByName("goldDepositBox").getChildByName("goldDepositValue");
        this._goldHoldVolume = this.node.getChildByName("topBox").getChildByName("goldRes").getChildByName("goldHoldVolume").getChildByName("goldHoldBox").getChildByName("goldHoldValue");
        this._interestValue = this.node.getChildByName("upperBox").getChildByName("interestFeedback").getChildByName("interestFeedbackBox").getChildByName("interestFeedbackValue");
        this._goldDepositBtn = this.node.getChildByName("upperBox").getChildByName("goldDepositBtn");
        this._goldWithdrawBtn = this.node.getChildByName("upperBox").getChildByName("goldWithdrawBtn");
        this._interestValueExp = this.node.getChildByName("upperBox").getChildByName("goldActionBar").getChildByName("Handle").getChildByName("interestValueExp");
        this._setCurrent = this.node.getChildByName("upperBox").getChildByName("setCurrent");
        this._goldActionBar = this.node.getChildByName("upperBox").getChildByName("goldActionBar");
        this._goldActionBg = this._goldActionBar.getChildByName("Background");
        this._goldActionHandler = this._goldActionBar.getChildByName("Handle");
        this._goldActionText = this._goldActionHandler.getChildByName("Label");
        this._goldRankCurrent = this.node.getChildByName("lowerBox").getChildByName("goldRankBox").getChildByName("transferIcon").getChildByName("goldRankNow").getChildByName("goldRankValue");
        this._goldRankCurrentType = this._goldRankCurrent.getChildByName("goldRankType");
        this._goldWelfareValue = this.node.getChildByName("lowerBox").getChildByName("goldWelfare").getChildByName("goldWelfareBox").getChildByName("goldWelfareValue");
        this._goldRankBtn = this.node.getChildByName("lowerBox").getChildByName("goldRankBtn");
        this._goldWelfareBtn = this.node.getChildByName("lowerBox").getChildByName("goldWelfareBtn");
        this._goldInterestBtn = this.node.getChildByName("upperBox").getChildByName("getInterestBtn");

        /*
        if (GlobalFuncVar.userRankInfo.selfGoldFriendRank != null){
            this._selfGoldRank = GlobalFuncVar.userRankInfo.selfGoldFriendRank;
        } else{
            let indexList = GlobalFuncVar.GetRankIndex("friend","gold");
            let rankGoldtemp = [];
            for (let j=0; j<indexList.length; j++){
                rankGoldtemp.push(GlobalFuncVar.userRankInfo.friendGoldRes[indexList[j]]);
            };
            this._selfGoldRank = GlobalFuncVar.GetSelfRankIndex("friend","gold",rankGoldtemp);
            GlobalFuncVar.userRankInfo.selfGoldFriendRank = this._selfGoldRank;
        };
        */

        /*
        this._goldActionHandler.on(cc.Node.EventType.TOUCH_START, function (event){
            this._handlerFlag = true;
        }.bind(this));
        this._goldActionHandler.on(cc.Node.EventType.TOUCH_END, function (event){
           this._handlerFlag = false;
        }.bind(this));
        */
    },
    setDataDefault(){
        this._dataDepositValue = GlobalFuncVar.userInfo.goldDeposit;
        this._dataInterestValue = GlobalFuncVar.userInfo.goldInterest;
        this._dataGoldHoldVolume = GlobalFuncVar.userInfo.goldHoldVolume;
        this._dataCurrentGoldRank = this._selfGoldRank;
        this._dataInterestValueExp = Math.floor(GlobalFuncVar.userInfo.goldDeposit * GlobalFuncVar.sysResInfo.goldInterestRate);

    },
    updateDataValue(){
        this._depositValue.getComponent(cc.Label).string = this._dataDepositValue;
        this._interestValue.getComponent(cc.Label).string = this._dataInterestValue;
        this._goldHoldVolume.getComponent(cc.Label).string = this._dataGoldHoldVolume;
        this._goldWelfareValue.getComponent(cc.Label).string = GlobalFuncVar.sysResInfo.goldWelfare;
        this._goldRankCurrent.getComponent(cc.Label).string = GlobalFuncVar.sysResInfo.goldWelfareThresold;
        //GlobalFuncVar.SetActiExpIconUpdate(1, this._goldRankCurrentType.getComponent(cc.Sprite), this);
        this._interestValueExp.getComponent(cc.Label).string = this._dataInterestValueExp;
    },
    setBtnStatus(){
        if (GlobalFuncVar.userInfo.goldInterestReady == 0){
            this._goldInterestBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "等待中";
            this._goldInterestBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.goldInterestReady == -1){
            this._goldInterestBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "已领取";
            this._goldInterestBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.goldInterestReady == 1){
            this._goldInterestBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "领取";
            this._goldInterestBtn.getComponent(cc.Button).interactable = true;
        };

        if (GlobalFuncVar.userInfo.goldWelfareReady == 0){
            this._goldWelfareBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "未达标";
            this._goldWelfareBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.goldWelfareReady == -1){
            this._goldWelfareBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "已领取";
            this._goldWelfareBtn.getComponent(cc.Button).interactable = false;
        } else if (GlobalFuncVar.userInfo.goldWelfareReady == 1){
            this._goldWelfareBtn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "领取";
            this._goldWelfareBtn.getComponent(cc.Button).interactable = true;
        };
        
    },
    catchUserAction(){
        ////////////////////////////////////
        if (this._goldActionHandler.x > 0) {
            // 存
            if (GlobalFuncVar.userInfo.goldHoldVolume == 0){
                this._goldActionHandler.x = this._goldActionBg.x;
            }
            this._dataDepositValue = GlobalFuncVar.userInfo.goldDeposit + Math.round((this._goldActionHandler.x) / (this._goldActionBg.width/2) * GlobalFuncVar.userInfo.goldHoldVolume);
            this._dataGoldHoldVolume = GlobalFuncVar.userInfo.goldHoldVolume - Math.round((this._goldActionHandler.x) / (this._goldActionBg.width/2) * GlobalFuncVar.userInfo.goldHoldVolume);
            this._dataInterestValueExp = Math.floor(this._dataDepositValue*GlobalFuncVar.sysResInfo.goldInterestRate);
            this._goldDepositBtn.getComponent(cc.Button).interactable = true;
            this._goldWithdrawBtn.getComponent(cc.Button).interactable = false;
            this._goldActionText.getComponent(cc.Widget).isAlignLeft = true;
            this._goldActionText.getComponent(cc.Widget).isAlignRight = false;
            this._goldActionText.getComponent(cc.Widget).left = -125;

        } else if (this._goldActionHandler.x < 0) {
            // 取
            if (GlobalFuncVar.userInfo.goldDeposit == 0){
                this._goldActionHandler.x = this._goldActionBg.x;
            }
            this._dataDepositValue = GlobalFuncVar.userInfo.goldDeposit - Math.round((-this._goldActionHandler.x) / (this._goldActionBg.width/2) * GlobalFuncVar.userInfo.goldDeposit);
            this._dataGoldHoldVolume = GlobalFuncVar.userInfo.goldHoldVolume + Math.round((-this._goldActionHandler.x) / (this._goldActionBg.width/2) * GlobalFuncVar.userInfo.goldDeposit);
            this._dataInterestValueExp = Math.floor(this._dataDepositValue*GlobalFuncVar.sysResInfo.goldInterestRate);
            this._goldDepositBtn.getComponent(cc.Button).interactable = false;
            this._goldWithdrawBtn.getComponent(cc.Button).interactable = true;
            this._goldActionText.getComponent(cc.Widget).isAlignLeft = false;
            this._goldActionText.getComponent(cc.Widget).isAlignRight = true;
            this._goldActionText.getComponent(cc.Widget).right = -125;

        } else if (this._goldActionHandler.x == 0){
            this._dataDepositValue = GlobalFuncVar.userInfo.goldDeposit;
            this._dataGoldHoldVolume = GlobalFuncVar.userInfo.goldHoldVolume;
            this._dataInterestValueExp = Math.floor(GlobalFuncVar.userInfo.goldDeposit*GlobalFuncVar.sysResInfo.goldInterestRate);
        }
    },

    //// 20200302
    onGoldInterestBtnClick(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["在此处领取属于你的奖励金哦！\n存的越多，奖励越多~","好的"]);
        } else {
            if (GlobalFuncVar.userInfo.goldInterestReady == 1){ //1代表可以领取利息
                this._goldInterestBtn.getComponent(cc.Button).interactable = false;
                var emitDataPack = {
                    emitID: [1,31,67],
                    emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.goldInterest, GlobalFuncVar.userInfo.goldInterestReady],
                };
                //GlobalFuncVar.emitData(26, emitDataPack).then(this.eventAfterSync_goldInterest.bind(this)).catch(err => {console.log(err)});
                GlobalFuncVar.emitData(26, emitDataPack,this.eventAfterSync_goldInterest.bind(this));
                GlobalFuncVar.showNotiMark(this._goldInterestBtn, false);
            };
        }
    },

    eventAfterSync_goldInterest(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["奖励金来啦！\n领取成功~\n(金币+"+GlobalFuncVar.userInfo.goldInterest+")","返回"]);
            GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.goldInterestReady = rcvDataPack.rcvData[2];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this._goldActionHandler.x = 0;
            this.setBtnStatus();
            this.setDataDefault();
            this.updateDataValue();
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            this._goldInterestBtn.getComponent(cc.Button).interactable = true;
        }
        
    },

    //// 20200302
    onGoldDepositBtnClick(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["这里是储蓄金币按钮哦！\n存的越多，奖励越多~","好的"]);
        } else {
            let dataPack = {
                dataDepositValue : this._dataDepositValue,
                dataDepositValueDelta : this._dataDepositValue - GlobalFuncVar.userInfo.goldDeposit,
                dataGoldHoldVolume : this._dataGoldHoldVolume,
                dataType : "deposit",
                setBtnStatus : this.setBtnStatus.bind(this),
                setDataDefault : this.setDataDefault.bind(this),
                updateDataValue : this.updateDataValue.bind(this),
            };
            if (dataPack.dataDepositValueDelta == 0){
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["咦？你好像没存金币呀~","返回"]);
            } else if (dataPack.dataDepositValue <= GlobalFuncVar.userInfo.goldHoldVolume + GlobalFuncVar.userInfo.goldDeposit){
                GlobalFuncVar.CallDoubleConfirm_GoldBank(this.node,"PopUpType3",["蝴蝶王子金库","确定要存入金币吗？"],dataPack);
            } else {
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["出错啦！","返回"]);
            };
        }           
    },

    //// 20200302
    onGoldWithdrawBtnClick(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["这里是提取金币按钮哦！\n持有金可用于投资山羊爷爷市场等~","好的"]);
        } else {
            let dataPack = {
                dataDepositValue : this._dataDepositValue,
                dataWithdrawValueDelta : GlobalFuncVar.userInfo.goldDeposit - this._dataDepositValue,
                dataGoldHoldVolume : this._dataGoldHoldVolume,
                dataType : "withdraw",
                setBtnStatus : this.setBtnStatus.bind(this),
                setDataDefault : this.setDataDefault.bind(this),
                updateDataValue : this.updateDataValue.bind(this),
            };
            if (dataPack.dataWithdrawValueDelta == 0){
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["咦？你好像没存金币呀~","返回"]);
            } else if (dataPack.dataDepositValue <= GlobalFuncVar.userInfo.goldHoldVolume + GlobalFuncVar.userInfo.goldDeposit){
                GlobalFuncVar.CallDoubleConfirm_GoldBank(this.node,"PopUpType3",["蝴蝶王子金库","确定要取出金币吗？"],dataPack);
            } else {
                GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["出错啦！","返回"]);
            };
        }
    },

    //// 20200302
    onGoldWelfareBtnClick(){
        // 已经被按钮interactable限制，无需弹窗
        /*
        if (GlobalFuncVar.userInfo.goldWelfareReady == 0){ //0代表用户不处于-30%行列，没有补助
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["补助不是给你的哟","返回"]);
        } else if (GlobalFuncVar.userInfo.goldWelfareReady == -1){ //-1代表用户已经领取过补助
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["补助领取过啦","返回"]);
        } else */
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["在此处领取属于你的补助金哦！\n持有越少，几率越大~","好的"]);
        } else {
            this._goldWelfareBtn.getComponent(cc.Button).interactable = false;
            if (GlobalFuncVar.userInfo.goldWelfareReady == 1){ //1代表用户可以领取补助
                var emitDataPack = {
                    emitID: [1,27,66],
                    emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.sysResInfo.goldWelfare, GlobalFuncVar.userInfo.goldWelfareReady],
                };
                //GlobalFuncVar.emitData(23, emitDataPack).then(this.eventAfterSync_goldWelfare.bind(this)).catch(err => {console.log(err)});
                GlobalFuncVar.emitData(23, emitDataPack, this.eventAfterSync_goldWelfare.bind(this));
                GlobalFuncVar.showNotiMark(this._goldWelfareBtn, false);
            }
        }

    },

    eventAfterSync_goldWelfare(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["补助金来啦！\n领取成功~\n(金币+"+GlobalFuncVar.sysResInfo.goldWelfare+")","好的"]);
            GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            GlobalFuncVar.userInfo.goldWelfareReady = rcvDataPack.rcvData[2];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            this._goldActionHandler.x = 0;
            this.setBtnStatus();
            this.setDataDefault();
            this.updateDataValue();
        } else{
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            this._goldWelfareBtn.getComponent(cc.Button).interactable = true;
        }
        
    },

    onGoldRankBtnClick(){
        this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2_copy", GlobalFuncVar.sysNodeDict.BaseView, "RankView", this.node);
    },
    onSetCurrentBtnClick(){
        this._goldActionHandler.x = 0;
        this.catchUserAction();
        this.updateDataValue();
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    //// 20200302
    update (dt) {
        //if (this._handlerFlag == true){
        this.catchUserAction();
        this.updateDataValue();
        this.notiMarkStatus();
        //}
    },
});
