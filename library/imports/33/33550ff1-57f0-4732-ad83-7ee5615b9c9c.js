"use strict";
cc._RF.push(module, '33550/xV/BHMq2DfuVhW5yc', 'cSwitchView');
// Script/cSwitchView.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        PrtName: null,
        NewsBroadcast: cc.Node,
        NewsNow: cc.String,
        _tutorial: cc.Node,
        _tutorialMask: cc.Node,
        _tutorialBg: cc.Node,
        _tutorialText: cc.Node,
        _tutorialFingerPrint: cc.Node,
        _newsStationFakeBtn: cc.Node,
        _privateMarketFakeBtn: cc.Node,
        _goldBankFakeBtn: cc.Node,
        _tradeMarketFadeBtn: cc.Node,
        _foodBarnFakeBtn: cc.Node,
        _toMainViewFakeBtn: cc.Node,
        _midBtn1: cc.Node,
        _midBtn2: cc.Node,
        _midBtn3: cc.Node,
        _midBtn4: cc.Node,
        _touchStartX: null,
        _touchEndX: null,
        _mainView: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    setDefaultNode: function setDefaultNode() {
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

        this._newsStationFakeBtn = this._tutorial.getChildByName("fadeBtnBox").getChildByName("newsStationFakeBtn");
        this._goldBankFakeBtn = this._tutorial.getChildByName("fadeBtnBox").getChildByName("goldBankFakeBtn");
        this._tradeMarketFadeBtn = this._tutorial.getChildByName("fadeBtnBox").getChildByName("tradeMarketFakeBtn");
        this._foodBarnFakeBtn = this._tutorial.getChildByName("fadeBtnBox").getChildByName("foodBarnFakeBtn");
        this._toMainViewFakeBtn = this._tutorial.getChildByName("fadeBtnBox").getChildByName("toMainViewFakeBtn");
        this._privateMarketFakeBtn = this._tutorial.getChildByName("fadeBtnBox").getChildByName("privateMarketFakeBtn");

        this._midBtn1 = this.node.getChildByName("MidBox").getChildByName("MidBtn1");
        this._midBtn2 = this.node.getChildByName("MidBox").getChildByName("MidBtn2");
        this._midBtn3 = this.node.getChildByName("MidBox").getChildByName("MidBtn3");
        this._midBtn4 = this.node.getChildByName("MidBox").getChildByName("MidBtn4");

        this._mainView = this.node.getChildByName("MainView");
        this._mainView.width = this._mainView.width * (cc.view.getFrameSize().width / 375) * (812 / cc.view.getFrameSize().height);
    },


    onShow: function onShow(FabInfo, PrtName, ShowFlag) {
        this.PrtName = PrtName;
        this.setDefaultNode();
        this.setNewsDefault();
        this.notiMarkStatus();
        this.listenToSwitch();

        if (GlobalFuncVar.gameFlag.TutorialStep != null) {
            /// backdoor
            // GlobalFuncVar.gameFlag.TutorialStep = 7;
            this._tutorial.active = true;
            this.tutorialRoute();
        };

        this.node.active = ShowFlag;
    },

    notiMarkStatus: function notiMarkStatus() {
        if (GlobalFuncVar.gameFlag.newsViewed == false) {
            GlobalFuncVar.showNotiMark(this._midBtn1, GlobalFuncVar.userInfo.newsExtra != null);
        };
        GlobalFuncVar.showNotiMark(this._midBtn2, GlobalFuncVar.userInfo.goldInterestReady == 1 || GlobalFuncVar.userInfo.goldWelfareReady == 1);
        GlobalFuncVar.showNotiMark(this._midBtn3, GlobalFuncVar.userInfo.foodWelfareReady == 1 || GlobalFuncVar.userInfo.foodHarvestReady == 1);
        GlobalFuncVar.showNotiMark(this._midBtn4, GlobalFuncVar.userInfo.tradeAwardReady == 1);
    },
    listenToSwitch: function listenToSwitch() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            this._touchStartX = event.getLocationX();
        }.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            this._touchEndX = event.getLocationX();
        }.bind(this), this);
    },


    //// 20200309
    tutorialRoute: function tutorialRoute() {
        var _this = this;

        if (GlobalFuncVar.gameFlag.TutorialStep == 5) {
            this._tutorialText.getComponent(cc.Label).string = "";
            this._newsStationFakeBtn.active = false;
            this._goldBankFakeBtn.active = false;
            this._tradeMarketFadeBtn.active = false;
            this._foodBarnFakeBtn.active = false;
            this._toMainViewFakeBtn.active = false;
            this._privateMarketFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = 0;
            this._tutorialBg.getComponent(cc.Widget).right = -200;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(5, [0.29, 0.71, 0, 1], [0.22, 0.64, 0.02, 0.58]).then(this.setTutoriaTextlUpdate(5, GlobalFuncVar.verbal.tutorial.TutorialStep5, this._tutorialText.getComponent(cc.Label))).then(function (msg) {
                console.log(msg);
            }).then(function () {
                _this._newsStationFakeBtn.active = true;
            });
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 6) {
            this._tutorialText.getComponent(cc.Label).string = "";
            this._newsStationFakeBtn.active = false;
            this._goldBankFakeBtn.active = false;
            this._tradeMarketFadeBtn.active = false;
            this._foodBarnFakeBtn.active = false;
            this._toMainViewFakeBtn.active = false;
            this._privateMarketFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = -200;
            this._tutorialBg.getComponent(cc.Widget).right = 0;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(6, [0.22, 0.64, 0.02, 0.58], [0.22, 0.64, 0.58, 0.02]).then(this.setTutoriaTextlUpdate(6, GlobalFuncVar.verbal.tutorial.TutorialStep6, this._tutorialText.getComponent(cc.Label))).then(function (msg) {
                console.log(msg);
            }).then(function () {
                _this._goldBankFakeBtn.active = true;
            });
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 7) {
            this._tutorialText.getComponent(cc.Label).string = "";
            this._newsStationFakeBtn.active = false;
            this._goldBankFakeBtn.active = false;
            this._tradeMarketFadeBtn.active = false;
            this._foodBarnFakeBtn.active = false;
            this._toMainViewFakeBtn.active = false;
            this._privateMarketFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = 0;
            this._tutorialBg.getComponent(cc.Widget).right = -200;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(7, [0.22, 0.64, 0.58, 0.02], [0.59, 0.24, 0.02, 0.58]).then(this.setTutoriaTextlUpdate(7, GlobalFuncVar.verbal.tutorial.TutorialStep7, this._tutorialText.getComponent(cc.Label))).then(function (msg) {
                console.log(msg);
            }).then(function () {
                _this._foodBarnFakeBtn.active = true;
            });
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 8) {
            this._tutorialText.getComponent(cc.Label).string = "";
            this._newsStationFakeBtn.active = false;
            this._goldBankFakeBtn.active = false;
            this._tradeMarketFadeBtn.active = false;
            this._foodBarnFakeBtn.active = false;
            this._toMainViewFakeBtn.active = false;
            this._privateMarketFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = -100;
            this._tutorialBg.getComponent(cc.Widget).right = -100;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(8, [0.59, 0.24, 0.02, 0.58], [0.35, 0.38, 0.2, 0.2]).then(this.setTutoriaTextlUpdate(8, GlobalFuncVar.verbal.tutorial.TutorialStep8, this._tutorialText.getComponent(cc.Label))).then(function (msg) {
                console.log(msg);
            }).then(function () {
                _this._tradeMarketFadeBtn.active = true;
            });
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 9) {
            this._tutorialText.getComponent(cc.Label).string = "";
            this._newsStationFakeBtn.active = false;
            this._goldBankFakeBtn.active = false;
            this._tradeMarketFadeBtn.active = false;
            this._foodBarnFakeBtn.active = false;
            this._toMainViewFakeBtn.active = false;
            this._privateMarketFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = -200;
            this._tutorialBg.getComponent(cc.Widget).right = 0;
            this._tutorialBg.getComponent(cc.Widget).bottom = -205;
            this.setTutorialBoxUpdate(9, [0.35, 0.38, 0.2, 0.2], [0.59, 0.24, 0.58, 0.02]).then(this.setTutoriaTextlUpdate(9, GlobalFuncVar.verbal.tutorial.TutorialStep9, this._tutorialText.getComponent(cc.Label))).then(function (msg) {
                console.log(msg);
            }).then(function () {
                _this._privateMarketFakeBtn.active = true;
            });
        } else if (GlobalFuncVar.gameFlag.TutorialStep == 10) {
            this._tutorialText.getComponent(cc.Label).string = "";
            this._newsStationFakeBtn.active = false;
            this._goldBankFakeBtn.active = false;
            this._tradeMarketFadeBtn.active = false;
            this._foodBarnFakeBtn.active = false;
            this._toMainViewFakeBtn.active = false;
            this._privateMarketFakeBtn.active = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignBottom = false;
            this._tutorialBg.getComponent(cc.Widget).isAlignTop = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignLeft = true;
            this._tutorialBg.getComponent(cc.Widget).isAlignRight = true;
            this._tutorialBg.getComponent(cc.Widget).left = -150;
            this._tutorialBg.getComponent(cc.Widget).right = -150;
            this._tutorialBg.getComponent(cc.Widget).top = -205;
            this.setTutorialBoxUpdate(10, [0.59, 0.24, 0.58, 0.02], [0.8, 0.04, 0.32, 0.32]).then(this.setTutoriaTextlUpdate(10, GlobalFuncVar.verbal.tutorial.TutorialStep10, this._tutorialText.getComponent(cc.Label))).then(function (msg) {
                console.log(msg);
            }).then(function () {
                _this._toMainViewFakeBtn.active = true;
                GlobalFuncVar.gameFlag.TutorialStep = null;
            });
        }
    },
    onNextStepBtnClick: function onNextStepBtnClick() {
        this._tutorialFingerPrint.active = false;
        if (GlobalFuncVar.gameFlag.TutorialStep != null) {
            GlobalFuncVar.gameFlag.TutorialStep += 1;
        };
        this.tutorialRoute();
    },
    setTutorialBoxUpdate: function setTutorialBoxUpdate(stepNum, initPos, finalPos) {
        // initPos [top, bot, left, right]
        // finalPos [top, bot, left, right]
        var interval = 0.05;
        // 重复次数
        var repeat = 20;
        // 开始延时
        var delay = 0.1;
        var repeatCount = 0;
        this.schedule(function () {
            this._tutorialMask.getComponent(cc.Widget).top = initPos[0] - repeatCount / repeat * (initPos[0] - finalPos[0]);
            this._tutorialMask.getComponent(cc.Widget).bottom = initPos[1] - repeatCount / repeat * (initPos[1] - finalPos[1]);
            this._tutorialMask.getComponent(cc.Widget).left = initPos[2] - repeatCount / repeat * (initPos[2] - finalPos[2]);
            this._tutorialMask.getComponent(cc.Widget).right = initPos[3] - repeatCount / repeat * (initPos[3] - finalPos[3]);
            repeatCount += 1;
        }, interval, repeat, delay);
        return new Promise(function (resolve, reject) {
            resolve("Tutorial Step " + stepNum + " excuted successfully !!!");
        }.bind(this));
    },
    setTutoriaTextlUpdate: function setTutoriaTextlUpdate(stepNum, tutorialText, tutorialLabel) {
        var interval = 0.05;
        // 重复次数
        var repeat = tutorialText.length;
        // 开始延时
        var delay = 0.3;
        var stringCount = 0;
        this.schedule(function () {
            tutorialLabel.string = tutorialText.substring(0, stringCount);
            stringCount += 1;
            if (stringCount == tutorialText.length) {
                if (GlobalFuncVar.gameFlag.TutorialStep != 10) {
                    this._tutorialFingerPrint.active = true;
                }
                // else if (GlobalFuncVar.gameFlag.TutorialStep == 10){
                //GlobalFuncVar.gameFlag.TutorialStep = null;
                // }
            }
        }, interval, repeat, delay);
        //return new Promise(function(resolve,reject){
        //    resolve("Tutorial Text Step " + stepNum + " excuted successfully !!!");
        //}.bind(this));
    },


    onHide: function onHide() {
        this.node.active = false;
    },

    onClickMidBtn1: function onClickMidBtn1(target, pin) {
        GlobalFuncVar.showNotiMark(this._midBtn1, false);
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType1", this.PrtName, pin, this.node);
    },

    onClickMidBtn2: function onClickMidBtn2(target, pin) {
        GlobalFuncVar.showNotiMark(this._midBtn2, false);
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2", this.PrtName, pin, this.node);
    },

    onClickMidBtn3: function onClickMidBtn3(target, pin) {
        GlobalFuncVar.showNotiMark(this._midBtn3, false);
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2", this.PrtName, pin, this.node);
    },

    onClickMidBtn4: function onClickMidBtn4(target, pin) {
        GlobalFuncVar.showNotiMark(this._midBtn4, false);
        //this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2", this.PrtName, pin, this.node);
    },

    onClickMidBtn5: function onClickMidBtn5() {
        var _this2 = this;

        this.NextSlideIn(this).then(function (msg) {
            GlobalFuncVar.TierOnePrefab("MainView", _this2.PrtName, _this2.FabInfo, _this2.node);
            _this2.node.x += _this2.node.width;
            console.log(msg);
            _this2.onHide();
        });
    },

    //// 20200307
    onClickMidBtn7: function onClickMidBtn7(target, pin) {
        this.onHide();
        GlobalFuncVar.TierTwoPrefab("AlertType2", this.PrtName, pin, this.node);
    },

    setNewsDefault: function setNewsDefault() {
        this.NewsBroadcast = this.node.getChildByName("newsBox").getChildByName("newsBroadcastMask").getChildByName("newsBroadcast");
        this.NewsNow = GlobalFuncVar.sysNewsData.newsNow;
        // 20200224改动，将新闻一分为3，原先长度可能出现显示问题，现修正为3个substring结合显示
        var NewsNowLen = this.NewsNow.length;
        var subStr1 = this.NewsNow.substring(0, Math.floor(NewsNowLen / 3) - 1);
        var subStr2 = this.NewsNow.substring(Math.floor(NewsNowLen / 3) - 1, 2 * Math.floor(NewsNowLen / 3) - 1);
        var subStr3 = this.NewsNow.substring(2 * Math.floor(NewsNowLen / 3) - 1, NewsNowLen);
        this.NewsBroadcast.getChildByName("newsPart1").getComponent(cc.Label).string = subStr1;
        this.NewsBroadcast.getChildByName("newsPart2").getComponent(cc.Label).string = subStr2;
        this.NewsBroadcast.getChildByName("newsPart3").getComponent(cc.Label).string = subStr3;
        // 20200224改动
    },
    setNewsBroadcast: function setNewsBroadcast() {
        if (this.NewsBroadcast.x + this.NewsBroadcast.width > this.NewsBroadcast.parent.width / 2) {
            this.NewsBroadcast.x -= 1;
        } else {
            this.NewsBroadcast.x = 0;
        }
    },


    NextSlideIn: function NextSlideIn(self) {
        var timeTot = 0.1;
        var interval = 0.01;
        var repeat = timeTot / interval - 1;
        var increment = this.node.width / (repeat + 1);
        var delay = 0;

        return new Promise(function (resolve, reject) {
            self.schedule(function () {
                self.node.x -= increment;
            }, interval, repeat, delay);
            setTimeout(function () {
                resolve("页面切换成功！");
            }, timeTot + 200);
        });
    },

    update: function update(dt) {
        this.setNewsBroadcast();

        if (this._touchStartX - this._touchEndX > 100 && this._touchStartX != null && this._touchEndX != null) {
            this._touchStartX = null, this._touchEndX = null, this.onClickMidBtn5();
        };

        this.notiMarkStatus();
    }
});

cc._RF.pop();