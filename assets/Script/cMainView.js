

cc.Class({
    extends: cc.Component,

    properties: {
        PrtName: null,
        FabInfo: null,
        timeClock: null,
        _shakeClock: cc.Node,
        _shakeClockBg: cc.Node,
        updateStart: null,
        _syncBtn: cc.Node,
        _bgmBtn: cc.Node,
        _userGoldRes: cc.Label,
        _userFoodRes: cc.Label,
        _userDepositRes: cc.Label,
        _petLevel: cc.Label,
        _petExp: cc.Node,
        _petExpValue: cc.Label,
        _petLiveValue: cc.Label,
        _petLive: cc.Node,
        _petActiStatus: cc.SpriteFrame,
        _petActiType: cc.Sprite,
        _petActiText: cc.Label,
        _tutorial: cc.Node,
        _tutorialMask: cc.Node,
        _tutorialBg: cc.Node,
        _tutorialText: cc.Node,
        _tutorialFingerPrint: cc.Node,
        _headFakeBtn: cc.Node,
        _midFakeBtn: cc.Node,
        _botFakeBtn: cc.Node,
        _switchFakeBtn: cc.Node,
        _touchStartX: null,
        _touchEndX: null,
        _headBtn2: cc.Node,
        _botBtn1: cc.Node,
        _botBtn2: cc.Node,
        _botBtn3: cc.Node,
        _botBtn4: cc.Node,
        _switchSlide: null,
        _animi: cc.Node,
        _switchView: cc.Node,
        _petLiveNew: cc.Node,
        _petLiveMask: cc.Node,
        _petLiveSegmentOne: cc.Node,
        _petLiveSegmentTwo: cc.Node,
        _petLiveCircle: cc.Node,
        _petLiveValueNew: cc.Label,
        _petLevelNew: cc.Node,
        _petLevelMask: cc.Node,
        _petLevelSegmentOne: cc.Node,
        _petLevelSegmentTwo: cc.Node,
        _petLevelCircle: cc.Node,
        _petLevelValueNew: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        GlobalFuncVar.getNodeInfo(this.node,"MainView");
    },

    start () {

    },


    //// 20200305
    // 节点路径设置
    setDefaultNode(FabInfo, PrtName){
        this.FabInfo = FabInfo;
        this.PrtName = PrtName;
        this.timeClock = this.node.getChildByName("timeBox").getChildByName("timeClock").getChildByName("timeClockCounting").getComponent(cc.ProgressBar);
        this._shakeClock = this.node.getChildByName("BotBox").getChildByName("BotBtn3").getChildByName("Background").getChildByName("shakeShakeCount");
        this._shakeClockBg = this.node.getChildByName("BotBox").getChildByName("BotBtn3").getChildByName("Background").getChildByName("shakeShakeCountBg");
        this.timeNoti = this.node.getChildByName("timeBox").getChildByName("timeNoti").getChildByName("timeBroadcast").getComponent(cc.Label);
        //this.timeNoti._isBold = true;
        this._userGoldRes = this.node.getChildByName("MidBox").getChildByName("userRes").getChildByName("goldRes").getChildByName("goldHoldVolume").getComponent(cc.Label);
        this._userFoodRes = this.node.getChildByName("MidBox").getChildByName("userRes").getChildByName("foodRes").getChildByName("foodHoldVolume").getComponent(cc.Label);
        // 20200224 改动，储蓄金显示路径变更
        this._userDepositRes = this.node.getChildByName("MidBox").getChildByName("userRes").getChildByName("goldRes").getChildByName("goldStoreVolume").getComponent(cc.Label);
        // 20200224 改动
        this._petLevel = this.node.getChildByName("MidBox").getChildByName("petLevelExp").getChildByName("petLevelBg").getChildByName("levelValue").getComponent(cc.Label);
        this._petExp = this.node.getChildByName("MidBox").getChildByName("petLevelExp").getChildByName("petExpBg").getChildByName("petExpNow");
        this._petExpValue = this.node.getChildByName("MidBox").getChildByName("petLevelExp").getChildByName("petExpBg").getChildByName("petExpValue").getComponent(cc.Label);
        this._petLiveValue = this.node.getChildByName("MidBox").getChildByName("petLive").getChildByName("petLiveBg").getChildByName("petLiveValue").getComponent(cc.Label);
        this._petLive = this.node.getChildByName("MidBox").getChildByName("petLive").getChildByName("petLiveBg").getChildByName("petLiveNow");
        this._petActiStatus = this.node.getChildByName("BotBox").getChildByName("BotBtn1").getChildByName("ActiStatus").getComponent(cc.Sprite);
        this._petActiText = this.node.getChildByName("BotBox").getChildByName("BotBtn1").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        //this._petActiText._isBold = true;
        this._petActiType = this.node.getChildByName("BotBox").getChildByName("BotBtn1").getChildByName("Background").getChildByName("icon").getComponent(cc.Sprite);
        this._headBtn2 = this.node.getChildByName("HeadBox").getChildByName("HeadBtn2");
        this._botBtn1 = this.node.getChildByName("BotBox").getChildByName("BotBtn1");
        this._botBtn2 = this.node.getChildByName("BotBox").getChildByName("BotBtn2");
        this._botBtn3 = this.node.getChildByName("BotBox").getChildByName("BotBtn3");
        this._botBtn4 = this.node.getChildByName("BotBox").getChildByName("BotBtn4");
        this._animi = this.node.getChildByName("animi");
        this._syncBtn = this.node.getChildByName("timeBox").getChildByName("timeNoti").getChildByName("syncBtn");
        this._bgmBtn = this.node.getChildByName("timeBox").getChildByName("timeNoti").getChildByName("bgmBtn");

        this._tutorial = this.node.getChildByName("Tutorial");
        this._tutorialMask = this._tutorial.getChildByName("TutorialMask");
        this._tutorialMask.getComponent(cc.Widget).isAbsoluteTop = false;
        this._tutorialMask.getComponent(cc.Widget).isAbsoluteLeft = false;
        this._tutorialMask.getComponent(cc.Widget).isAbsoluteRight = false;
        this._tutorialMask.getComponent(cc.Widget).isAbsoluteBottom = false;
        this._tutorialBg = this._tutorialMask.getChildByName("TutorialBg");
        this._tutorialBg.getComponent(cc.Widget).isAbsoluteTop = true;
        this._tutorialBg.getComponent(cc.Widget).isAbsoluteLeft = true;
        this._tutorialBg.getComponent(cc.Widget).isAbsoluteRight = true;
        this._tutorialBg.getComponent(cc.Widget).isAbsoluteBottom = true;
        this._tutorialText = this._tutorialBg.getChildByName("TutorialText");
        this._tutorialFingerPrint = this._tutorialBg.getChildByName("FingerPrint");
        this._tutorialFingerPrint.active = false; //默认隐藏按钮
        this._tutorial.active = false; //默认关闭教程页面
        
        this._headFakeBtn = this._tutorial.getChildByName("headFakeBtn");
        this._headFakeBtn.active = false;
        this._botFakeBtn = this._tutorial.getChildByName("botFakeBtn");
        this._botFakeBtn.active = false;
        this._switchFakeBtn = this._tutorial.getChildByName("botFakeBtn").getChildByName("fakeBtnSwitch");
        this._switchFakeBtn.active = false;
        this._midFakeBtn = this._tutorial.getChildByName("midFakeBtn");
        this._midFakeBtn.active = false;

        this._switchView = this.node.getChildByName("SwitchView");
        this._switchView.width = this._switchView.width * (cc.view.getFrameSize().width / 375) * (812 / cc.view.getFrameSize().height);
        this._switchSlide = true;
        
        this._petLiveNew = this.node.getChildByName("MidBox").getChildByName("petLiveNew");
        this._petLiveMask = this._petLiveNew.getChildByName("mask");
        this._petLiveSegmentOne = this._petLiveMask.getChildByName("segmentOne");
        this._petLiveSegmentTwo = this._petLiveMask.getChildByName("segmentTwo");
        this._petLiveCircle = this._petLiveNew.getChildByName("circle");
        this._petLiveValueNew = this.node.getChildByName("MidBox").getChildByName("petLiveNew").getChildByName("petLiveValue").getComponent(cc.Label);

        this._petLevelNew = this.node.getChildByName("MidBox").getChildByName("petLevelExpNew");
        this._petLevelMask = this._petLevelNew.getChildByName("mask");
        this._petLevelSegmentOne = this._petLevelMask.getChildByName("segmentOne");
        this._petLevelSegmentTwo = this._petLevelMask.getChildByName("segmentTwo");
        this._petLevelCircle = this._petLevelNew.getChildByName("circle");
        this._petLevelValueNew = this.node.getChildByName("MidBox").getChildByName("petLevelExpNew").getChildByName("petExpValue").getComponent(cc.Label);

        this._petLiveNew.getChildByName("petLiveValueText").getComponent(cc.Label)._isBold = true;
        this._petLevelNew.getChildByName("petLevelValueText").getComponent(cc.Label)._isBold = true;
    },
    
    // 数据更新函数
    setDataUpdate(){
        this.setUserResUpdate();
        this.setPetInfoUpdate();
    },

    // 玩家持有资源更新函数
    setUserResUpdate(){
        this._userGoldRes.string = GlobalFuncVar.userInfo.goldHoldVolume;
        this._userFoodRes.string = GlobalFuncVar.userInfo.foodHoldVolume;
        this._userDepositRes.string = GlobalFuncVar.userInfo.goldDeposit;
    },

    //// 20200305
    // 玩家宠物状态更新函数
    setPetInfoUpdate(){
        this._petLevel.string = "Lv. " + GlobalFuncVar.userPetInfo.petLevel;
        this._petExp.getComponent(cc.Widget).isAbsoluteRight = false;
        if (GlobalFuncVar.userPetInfo.petExpeValueNow == 0) {
            this._petExp.getComponent(cc.Widget).right = 1;
        } else {
            this._petExp.getComponent(cc.Widget).right = 1 - ((GlobalFuncVar.userPetInfo.petExpeValueNow / GlobalFuncVar.userPetInfo.petExpeTotNow)*0.90+0.1);
        }
        this._petExpValue.string = GlobalFuncVar.userPetInfo.petExpeValueNow + " / " + GlobalFuncVar.userPetInfo.petExpeTotNow;
        var expePercentage = Math.round(GlobalFuncVar.userPetInfo.petExpeValueNow/GlobalFuncVar.userPetInfo.petExpeTotNow*100);
        this._petLevelValueNew.string = "Lv. " + GlobalFuncVar.userPetInfo.petLevel;
        this._petLevelSegmentOne.y = expePercentage + 25;
        this._petLevelSegmentTwo.y = expePercentage + 25;
        this._petLevelSegmentOne.color = new cc.Color(156, 188, 48);
        this._petLevelSegmentTwo.color = new cc.Color(156, 188, 48);


        this._petLiveValue.string = GlobalFuncVar.userPetInfo.petLive + "/100";
        this._petLiveValueNew.string = GlobalFuncVar.userPetInfo.petLive + "/100";
        this._petLive.getComponent(cc.Widget).isAbsoluteRight = false;
        if (GlobalFuncVar.userPetInfo.petLive == 0){
            this._petLive.getComponent(cc.Widget).right = 1;
            this._petLiveSegmentOne.y = 5;
            this._petLiveSegmentTwo.y = 5;
        } else {
            this._petLive.getComponent(cc.Widget).right = 1 - ((GlobalFuncVar.userPetInfo.petLive/100)*0.90+0.1);
            this._petLiveSegmentOne.y = GlobalFuncVar.userPetInfo.petLive + 30;
            this._petLiveSegmentTwo.y = GlobalFuncVar.userPetInfo.petLive + 30;
            if (GlobalFuncVar.userPetInfo.petLive > 50){
                this._petLiveSegmentOne.color = new cc.Color(156, 188, 48);
                this._petLiveSegmentTwo.color = new cc.Color(156, 188, 48);
                this._petLive.color = new cc.Color(156, 188, 48);
            } else if (GlobalFuncVar.userPetInfo.petLive > 20){
                this._petLiveSegmentOne.color = new cc.Color(204, 204, 0);
                this._petLiveSegmentTwo.color = new cc.Color(204, 204, 0);
                this._petLive.color = new cc.Color(204, 204, 0);
            } else if (GlobalFuncVar.userPetInfo.petLive > 0){
                this._petLiveSegmentOne.color = new cc.Color(179, 72, 18);
                this._petLiveSegmentTwo.color = new cc.Color(179, 72, 18);
                this._petLive.color = new cc.Color(179, 72, 18);
            };
        };
        GlobalFuncVar.SetActiProgressLevel(GlobalFuncVar.userPetInfo.actiTypeCurrent, GlobalFuncVar.userPetInfo.actiLeftDays, this._petActiStatus, this);
        GlobalFuncVar.SetActiTypeIconUpdate(GlobalFuncVar.userPetInfo.actiTypeCurrent, this._petActiType, this);
        if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 0){
            this._petActiText.string = "玩耍中...";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 1) {
            this._petActiText.string = "打工中...";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 2) {
            this._petActiText.string = "务农中...";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 3) {
            this._petActiText.string = "采访中...";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 4) {
            this._petActiText.string = "睡觉中...";
        };
    },

    preLoad(){
        // 预加载switch页面
        GlobalFuncVar.TierOnePrefab("SwitchView", this.PrtName, this.FabInfo, this.node, false);
    },

    // 展示界面
    onShow: function(FabInfo, PrtName){
        this.setDefaultNode(FabInfo, PrtName);
        this.setDataUpdate();
        this.petAnimiUpdate();
        this.listenToSwitch();
        this.notiMarkStatus();
        this.updateStart = true;
        
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            /// backdoor
            //GlobalFuncVar.gameFlag.TutorialStep = 3;
            this._tutorial.active = true;
            this.tutorialRoute();
        };
        
        this.node.active = true;
        this.preLoad(); 
    },

    // 动画随机更新
    /*
    setAnimiUpdate(){
        this._animi.getComponent("cAnim").start();
        this._animi.getComponent("cAnim").onRandomPick();
    },
    */

    // 感叹号显示
    notiMarkStatus(){
        GlobalFuncVar.showNotiMark(this._headBtn2, GlobalFuncVar.userInfo.taskHarvested[0]==1 || GlobalFuncVar.userInfo.taskHarvested[1]==1 || GlobalFuncVar.userInfo.taskHarvested[2]==1);
        GlobalFuncVar.showNotiMark(this._botBtn1, GlobalFuncVar.userPetInfo.actiHarvest > 0);
        //GlobalFuncVar.showNotiMark(this._botBtn3, GlobalFuncVar.userInfo.shakeShakeReady == 1);
        GlobalFuncVar.showNotiMark(this._botBtn4, GlobalFuncVar.userInfo.tradeAwardReady == 1 || GlobalFuncVar.userInfo.goldInterestReady == 1 || 
                                                  GlobalFuncVar.userInfo.goldWelfareReady == 1 || GlobalFuncVar.userInfo.foodWelfareReady == 1 ||
                                                  GlobalFuncVar.userInfo.foodHarvestReady == 1 || GlobalFuncVar.userInfo.newsExtra != null);
    },

    // 监听页面切换
    listenToSwitch(){
        this.node.on(cc.Node.EventType.TOUCH_START, function (event){
            this._touchStartX = event.getLocationX();
        }.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event){
            this._touchEndX = event.getLocationX();
        }.bind(this), this);
    },

    //// 20200305
    onClickFakeAnimBtn(){
        this._animi.getComponent("cAnim").start();
        this._animi.getComponent("cAnim").onClickChange(this._animi,"callChange");
        //var animThis = this._animi.getComponent("cAnim");
        //this._midFakeBtn.getChildByName("fakeBtnAnim").getComponent("cAnim").onClickChange(this._midFakeBtn.getChildByName("fakeBtnAnim"), "callChange").bind(animThis);
        this._midFakeBtn.getChildByName("fakeBtnAnim").getComponent(cc.Button).interactable = false;
    },

    //// 20200309
    // 新手教程界面
    tutorialRoute(){
        if (GlobalFuncVar.gameFlag.TutorialStep == 0){
            this._tutorialText.getComponent(cc.Label).string = "";
            this._headFakeBtn.active = false;
            this._botFakeBtn.active = false;
            this._switchFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = 0;
            this._tutorialBg.getComponent(cc.Widget).right = 0;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(0,[0,0,0,0],[0.35,0.2,0.05,0.05])
            .then(
                this.setTutoriaTextlUpdate(0,GlobalFuncVar.verbal.tutorial.TutorialStep0,this._tutorialText.getComponent(cc.Label))
            )
            .then((msg) => {
                console.log(msg);
            })
            //// 20200302
            .then(() => {this._midFakeBtn.active = true;});
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 1){
            this._tutorialText.getComponent(cc.Label).string = "";
            this._headFakeBtn.active = false;
            this._botFakeBtn.active = false;
            this._switchFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = 0;
            this._tutorialBg.getComponent(cc.Widget).right = 0;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(1,[0.35,0.2,0.05,0.05],[0.18,0.55,0.05,0.05])
            .then(
            this.setTutoriaTextlUpdate(1,GlobalFuncVar.verbal.tutorial.TutorialStep1,this._tutorialText.getComponent(cc.Label))
            )
            .then((msg) => {
                console.log(msg);
            });
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 2){
            this._tutorialText.getComponent(cc.Label).string = "";
            this._headFakeBtn.active = false;
            this._botFakeBtn.active = false;
            this._switchFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = 0;
            this._tutorialBg.getComponent(cc.Widget).right = 0;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(2,[0.18,0.55,0.05,0.05],[0.03,0.75,0.05,0.05])
            .then(
            this.setTutoriaTextlUpdate(2,GlobalFuncVar.verbal.tutorial.TutorialStep2,this._tutorialText.getComponent(cc.Label))
            )
            .then((msg) => {
                console.log(msg);
            })
            .then(() => {this._headFakeBtn.active = true;});
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 3){
            this._tutorialText.getComponent(cc.Label).string = "";
            this._headFakeBtn.active = false;
            this._botFakeBtn.active = false;
            this._switchFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = 0;
            this._tutorialBg.getComponent(cc.Widget).right = 0;
            this._tutorialBg.getComponent(cc.Widget).top = -205;
            this.setTutorialBoxUpdate(3,[0.03,0.75,0.05,0.05],[0.8,0.01,0.05,0.25])
            .then(
            this.setTutoriaTextlUpdate(3,GlobalFuncVar.verbal.tutorial.TutorialStep3,this._tutorialText.getComponent(cc.Label))
            )
            .then((msg) => {
                console.log(msg);
            })
            .then(() => {
                this._botFakeBtn.active = true;
                this._switchFakeBtn.active = true;
                this._switchFakeBtn.getComponent(cc.Button).interactable = false;});
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 4){
            this._tutorialText.getComponent(cc.Label).string = "";
            this._headFakeBtn.active = false;
            this._botFakeBtn.active = false;
            this._switchFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = -150;
            this._tutorialBg.getComponent(cc.Widget).right = 0;
            this._tutorialBg.getComponent(cc.Widget).top = -205;
            this.setTutorialBoxUpdate(4,[0.8,0.01,0.05,0.25],[0.8,0.01,0.65,0.01])
            .then(
            this.setTutoriaTextlUpdate(4,GlobalFuncVar.verbal.tutorial.TutorialStep4,this._tutorialText.getComponent(cc.Label))
            )
            .then((msg) => {
                console.log(msg);
            })
            .then(() => {
                this._botFakeBtn.active = true;
                this._switchFakeBtn.active = true;
                this._switchFakeBtn.getComponent(cc.Button).interactable = true;
                GlobalFuncVar.gameFlag.TutorialStep += 1;
            });
        }
    },

    // 下一步按钮点击
    onNextStepBtnClick(){
        this._tutorialFingerPrint.active = false;
        if (GlobalFuncVar.gameFlag.TutorialStep < 4){
            GlobalFuncVar.gameFlag.TutorialStep += 1;
        }
        this.tutorialRoute();
    },

    // 教程更新函数
    setTutorialBoxUpdate(stepNum, initPos, finalPos){
        // initPos [top, bot, left, right]
        // finalPos [top, bot, left, right]
        var interval = 0.05;
        // 重复次数
        var repeat = 10;
        // 开始延时
        var delay = 0.1;
        var repeatCount = 0;
        this.schedule(function() {
            this._tutorialMask.getComponent(cc.Widget).top = initPos[0] - repeatCount/repeat*(initPos[0]-finalPos[0]);
            this._tutorialMask.getComponent(cc.Widget).bottom = initPos[1] - repeatCount/repeat*(initPos[1]-finalPos[1]);
            this._tutorialMask.getComponent(cc.Widget).left = initPos[2] - repeatCount/repeat*(initPos[2]-finalPos[2]);
            this._tutorialMask.getComponent(cc.Widget).right = initPos[3] - repeatCount/repeat*(initPos[3]-finalPos[3]);
            repeatCount += 1;
        }, interval, repeat, delay);
        return new Promise(function(resolve,reject){
            resolve("Tutorial Step " + stepNum + " excuted successfully !!!");
        }.bind(this));
    },

    // 教程文本更新函数
    setTutoriaTextlUpdate(stepNum, tutorialText, tutorialLabel){
        var interval = 0.05;
        // 重复次数
        var repeat = tutorialText.length;
        // 开始延时
        var delay = 0.3;
        var stringCount = 0;
        this.schedule(function() {
            tutorialLabel.string = tutorialText.substring(0,stringCount);
            if (stringCount == tutorialText.length){ 
                if (GlobalFuncVar.gameFlag.TutorialStep != 4){
                    this._tutorialFingerPrint.active = true;
                } 
                //else if (GlobalFuncVar.gameFlag.TutorialStep == 4){
                //    GlobalFuncVar.gameFlag.TutorialStep += 1;
                //}
            }
            stringCount += 1;
        }, interval, repeat, delay);
    },

    onHide: function(){
        this.node.active = false;
    },

    onClickSyncBtn: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    //// 20200305
    onClickBgmBtn: function(){
        if (GlobalFuncVar.gameFlag.soundStatus == true){
            GlobalFuncVar.gameFlag.soundStatus = false;
            this._bgmBtn.getChildByName("Background").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPack2PS.getSpriteFrame("mutePS");
            cc.audioEngine.pauseAll();

        } else if (GlobalFuncVar.gameFlag.soundStatus == false){
            GlobalFuncVar.gameFlag.soundStatus = true;
            this._bgmBtn.getChildByName("Background").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPack2PS.getSpriteFrame("unmutePS");
            cc.audioEngine.resumeAll();

        }
    },

    onClickHeadBtn1: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickHeadBtn2: function(target, pin){
        GlobalFuncVar.showNotiMark(this._headBtn2, false);
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickHeadBtn3: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickHeadBtn4: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickHeadBtn5: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickMidBtn1: function(){
        this.NextSlideIn(this).then((msg) => {
            GlobalFuncVar.showNotiMark(this._botBtn4, false);
            GlobalFuncVar.TierOnePrefab("SwitchView", this.PrtName, this.FabInfo, this.node, true);
            this.node.x -= this.node.width;
            console.log(msg);
            this.onHide();
        });
    },

    onClickMidBtn2: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2", this.PrtName, pin, this.node);
    },

    onClickBotBtn1: function(target, pin){
        GlobalFuncVar.showNotiMark(this._botBtn1, false);
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2", this.PrtName, pin, this.node);
    },

    onClickBotBtn2: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickBotBtn3: function(target, pin){
        GlobalFuncVar.showNotiMark(this._botBtn3, false);
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickUserResGold: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickUserResFood: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickUserResDeposit: function(target, pin){
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    //// 20200306
    updateProgressBar: function(progressBar, noti, dt){
        var progress = progressBar.progress;
        progress = (GlobalFuncVar.sysDate.Minu*60+GlobalFuncVar.sysDate.Secon)/3600;
        //noti.string = "距离明天还有："+[59-GlobalFuncVar.sysDate.Minu]+"'"+[59-GlobalFuncVar.sysDate.Secon]+"\"！";
        if (59-GlobalFuncVar.sysDate.Minu > 0){
            noti.string = " 距离明天还有"+[59-GlobalFuncVar.sysDate.Minu]+"分钟哦~";
        } else {
            noti.string = " 距离明天只剩"+[59-GlobalFuncVar.sysDate.Secon]+"秒啦~";
        }
        
        progressBar.progress = progress;
    },

    updateShakeCount: function(progressBar, dt){
        var progress = progressBar.progress;
        progress = (GlobalFuncVar.sysDate.Minu*60+GlobalFuncVar.sysDate.Secon)/3600;
        progressBar.progress = 1 - progress;
    },

    NextSlideIn: function(self){
        var timeTot = 0.1;
        var interval = 0.01;
        var repeat = timeTot / interval - 1;
        var increment = this.node.width / (repeat+1);
        var delay = 0;
        
        return new Promise(function(resolve, reject){
            self.schedule(function() {
                self.node.x += increment;
            }, interval, repeat, delay);
            setTimeout(function () {
                resolve("页面切换成功！");
            }, 200);
        })
        
    },
    
    petAnimiUpdate(){
        this._animi.getComponent("cAnim").start();
        this._animi.getComponent("cAnim").onSpecificPick();
    },

    //// 20200303
    petLiveRolling(){
        if (this._petLiveSegmentOne.x > 10){
            this._petLiveSegmentOne.x = this._petLiveSegmentTwo.x - this._petLiveSegmentTwo.width;
        }

        if (this._petLiveSegmentTwo.x > 10){
            this._petLiveSegmentTwo.x = this._petLiveSegmentOne.x - this._petLiveSegmentOne.width;
        }

        if (this._petLevelSegmentOne.x > 10){
            this._petLevelSegmentOne.x = this._petLevelSegmentTwo.x - this._petLevelSegmentTwo.width;
        }

        if (this._petLevelSegmentTwo.x > 10){
            this._petLevelSegmentTwo.x = this._petLevelSegmentOne.x - this._petLevelSegmentOne.width;
        }

        this._petLiveSegmentOne.x += 1;
        this._petLiveSegmentTwo.x += 1;
        this._petLevelSegmentOne.x += 1;
        this._petLevelSegmentTwo.x += 1;

    },

    //// 20200303
    update (dt) {
        if (this.updateStart == true){
            this.updateProgressBar(this.timeClock, this.timeNoti, dt);
        };

        if (GlobalFuncVar.userInfo.shakeShakeReady == 1){
            this._shakeClock.active = false;
            this._shakeClockBg.active = false;
        } else {
            this._shakeClock.active = true;
            this._shakeClockBg.active = true;
            this.updateShakeCount(this._shakeClock.getComponent(cc.ProgressBar), dt);
        }
        
        if (this._touchStartX - this._touchEndX < -150 && this._touchStartX != null && this._touchEndX != null){
            /*
            this._switchSlide = false;
            this.NextSlideIn(this).then((msg) => {
                this._touchStartX = null,
                this._touchEndX = null,
                this.onClickMidBtn1();
                this._switchSlide = true;
                this.node.x -= this.node.width;
                console.log(msg);
            })
            */
           this._touchStartX = null,
           this._touchEndX = null,
           this.onClickMidBtn1();
        };

        if (GlobalFuncVar.gameFlag.userResUpdate == true){
            this.setUserResUpdate();
            GlobalFuncVar.gameFlag.userResUpdate = false;
        };

        if (GlobalFuncVar.gameFlag.petInfoUpdate == true){
            this.setPetInfoUpdate();
            GlobalFuncVar.gameFlag.petInfoUpdate = false;
        };

        if (GlobalFuncVar.gameFlag.petAnimiUpdate == true){
            this.petAnimiUpdate();
            GlobalFuncVar.gameFlag.petAnimiUpdate = false;
        }

        this.petLiveRolling();
        this.notiMarkStatus();
    },

    
});
