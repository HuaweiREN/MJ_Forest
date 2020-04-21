"use strict";
cc._RF.push(module, '0db8fw3otJGwo6nIae3YFB7', 'cActivityMain');
// Script/ContentScript/cActivityMain.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        upperBox: cc.Node,
        lowerBox: cc.Node,
        PrtName: null,

        _petIcon: cc.Sprite,
        _petLiveIndex: cc.Label,
        _petLiveBar: cc.Node,
        _petActiType: cc.Sprite,
        _petActiStatus: cc.Sprite,
        _petActiName: cc.Label,
        _petActiExpValue: cc.Label,
        _petActiExpType: cc.Sprite,
        _petActiSuccessRate: cc.Label,

        _liveBell: cc.Node,
        _actiRecall: cc.Node,
        _actiType1: cc.Node,
        _actiType2: cc.Node,
        _actiType3: cc.Node,
        _actiType4: cc.Node,

        _actiTypeNext: cc.Sprite,
        _actiCallback: null,

        actiDuraOne: cc.Label,
        actiDuraTwo: cc.Label,
        actiDuraThree: cc.Label,
        actiDuraFour: cc.Label,

        actiBackOne: cc.Label,
        actiBackTwo: cc.Label,
        actiBackThree: cc.Label,
        actiBackFour: cc.Label,

        actiLiveOne: cc.Label,
        actiLiveTwo: cc.Label,
        actiLiveThree: cc.Label,
        actiLiveFour: cc.Label

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    setNodeDefault: function setNodeDefault() {
        this._upperBox = this.node.getChildByName("upperBox");
        this._lowerBox = this.node.getChildByName("lowerBox");
        this._petIcon = this._upperBox.getChildByName("petIcon").getComponent(cc.Sprite);
        this._petLiveIndex = this._upperBox.getChildByName("liveBar").getChildByName("liveIndex").getComponent(cc.Label);
        this._petLiveBar = this._upperBox.getChildByName("liveBar").getChildByName("bar");
        this._petActiType = this._upperBox.getChildByName("currentAssign").getChildByName("acitTypeIcon").getComponent(cc.Sprite);
        this._petActiStatus = this._upperBox.getChildByName("currentAssign").getChildByName("acitTypeIcon").getChildByName("actiStatusText").getChildByName("actiStatusBar").getComponent(cc.Sprite);
        this._petActiName = this._upperBox.getChildByName("currentAssign").getChildByName("acitTypeIcon").getChildByName("actiStatusText").getComponent(cc.Label);
        this._petTalent = this._upperBox.getChildByName("petIcon").getChildByName("petTalent");

        this._actiType1 = this._lowerBox.getChildByName("actiChart").getChildByName("actiBtnLayout").getChildByName("actiOne");
        this._actiType2 = this._lowerBox.getChildByName("actiChart").getChildByName("actiBtnLayout").getChildByName("actiTwo");
        this._actiType3 = this._lowerBox.getChildByName("actiChart").getChildByName("actiBtnLayout").getChildByName("actiThree");
        this._actiType4 = this._lowerBox.getChildByName("actiChart").getChildByName("actiBtnLayout").getChildByName("actiFour");

        GlobalFuncVar.SetPetSelfieIconUpdate(GlobalFuncVar.userPetInfo.petType, this._petIcon, this);

        this._actiCallback = {
            setActiBtnText: this.setActiBtnText.bind(this),
            setActi: this.setActi.bind(this),
            setLive: this.setLive.bind(this)
        };
    },


    //// 20200312
    onShow: function onShow(PrtName, FabInfo) {
        this.PrtName = PrtName;
        this.setNodeDefault();
        this.checkActi();
        this.setActiBtnText();
        this.setLive();
        this.setActi();
        this.node.active = true;

        setTimeout(function () {
            GlobalFuncVar.ShowDemoText(this, "训练师小贴士：摇动活力铃可提升萌鸡活动成功率哦~", 80);
            // 20200224 改动，4000 --> 3000
        }.bind(this), 2000);
    },
    onHide: function onHide() {
        this.node.active = false;
    },
    setActiBtnText: function setActiBtnText() {

        console.log("duration", this.actiDuraOne);
        this.actiDuraOne.string = GlobalFuncVar.sysActivityFeedback.activityType1[0];
        this.actiDuraTwo.string = GlobalFuncVar.sysActivityFeedback.activityType2[0];
        this.actiDuraThree.string = GlobalFuncVar.sysActivityFeedback.activityType3[0];
        this.actiDuraFour.string = GlobalFuncVar.sysActivityFeedback.activityType4[0];

        this.actiBackOne.string = GlobalFuncVar.sysActivityFeedback.activityType1[1];
        this.actiBackTwo.string = GlobalFuncVar.sysActivityFeedback.activityType2[1];
        this.actiBackThree.string = GlobalFuncVar.sysActivityFeedback.activityType3[1];
        this.actiBackFour.string = GlobalFuncVar.sysActivityFeedback.activityType4[1];

        this.actiLiveOne.string = "-" + GlobalFuncVar.sysActivityFeedback.activityType1[3];
        this.actiLiveTwo.string = "-" + GlobalFuncVar.sysActivityFeedback.activityType2[3];
        this.actiLiveThree.string = "-" + GlobalFuncVar.sysActivityFeedback.activityType3[3];
        this.actiLiveFour.string = "-" + GlobalFuncVar.sysActivityFeedback.activityType4[3];

        var node1 = this._actiType1.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        var node2 = this._actiType2.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        var node3 = this._actiType3.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        var node4 = this._actiType4.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);

        if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 0) {
            this._actiType1.getComponent(cc.Button).interactable = true;
            this._actiType2.getComponent(cc.Button).interactable = true;
            this._actiType3.getComponent(cc.Button).interactable = true;
            this._actiType4.getComponent(cc.Button).interactable = true;
            node1.string = "布置";
            node2.string = "布置";
            node3.string = "布置";
            node4.string = "布置";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 1) {
            this._actiType1.getComponent(cc.Button).interactable = true;
            this._actiType2.getComponent(cc.Button).interactable = false;
            this._actiType3.getComponent(cc.Button).interactable = false;
            this._actiType4.getComponent(cc.Button).interactable = false;
            node1.string = "召回";
            node2.string = "布置";
            node3.string = "布置";
            node4.string = "布置";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 2) {
            this._actiType1.getComponent(cc.Button).interactable = false;
            this._actiType2.getComponent(cc.Button).interactable = true;
            this._actiType3.getComponent(cc.Button).interactable = false;
            this._actiType4.getComponent(cc.Button).interactable = false;
            node1.string = "布置";
            node2.string = "召回";
            node3.string = "布置";
            node4.string = "布置";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 3) {
            this._actiType1.getComponent(cc.Button).interactable = false;
            this._actiType2.getComponent(cc.Button).interactable = false;
            this._actiType3.getComponent(cc.Button).interactable = true;
            this._actiType4.getComponent(cc.Button).interactable = false;
            node1.string = "布置";
            node2.string = "布置";
            node3.string = "召回";
            node4.string = "布置";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 4) {
            this._actiType1.getComponent(cc.Button).interactable = false;
            this._actiType2.getComponent(cc.Button).interactable = false;
            this._actiType3.getComponent(cc.Button).interactable = false;
            this._actiType4.getComponent(cc.Button).interactable = true;
            node1.string = "布置";
            node2.string = "布置";
            node3.string = "布置";
            node4.string = "召回";
        }
    },
    checkActi: function checkActi() {
        // need "harvest" params to check if the user has ready to harvest
        if (GlobalFuncVar.userPetInfo.actiHarvest > 0) {
            if (GlobalFuncVar.userPetInfo.actiHarvest == 1) {
                if (GlobalFuncVar.userPetInfo.petType == "duoduo") {
                    GlobalFuncVar.userInfo.goldHoldVolume += GlobalFuncVar.sysActivityFeedback.activityType1[1] + GlobalFuncVar.sysPetTalent.sysPetTalent_DuoduoTalent[GlobalFuncVar.userPetInfo.petLevel];
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我揣着金币回来啦！\n天赋让我还多赚了几枚金币哦~求表扬！\n(金币+" + GlobalFuncVar.sysActivityFeedback.activityType1[1] + ", 天赋金币+" + GlobalFuncVar.sysPetTalent.sysPetTalent_DuoduoTalent[GlobalFuncVar.userPetInfo.petLevel] + ")", "好的"]);
                } else {
                    GlobalFuncVar.userInfo.goldHoldVolume += GlobalFuncVar.sysActivityFeedback.activityType1[1];
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我回来啦！\n请收下我们的金币！\n(金币+" + GlobalFuncVar.sysActivityFeedback.activityType1[1] + ")", "好的"]);
                };
                //GlobalFuncVar.userPetInfo.petLive -= GlobalFuncVar.sysActivityFeedback.activityType1[3];
            } else if (GlobalFuncVar.userPetInfo.actiHarvest == 2) {
                if (GlobalFuncVar.userPetInfo.petType == "maiqi") {
                    GlobalFuncVar.userInfo.foodHoldVolume += GlobalFuncVar.sysActivityFeedback.activityType2[1] + GlobalFuncVar.sysPetTalent.sysPetTalent_MaiqiTalent[GlobalFuncVar.userPetInfo.petLevel];
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我扛着粮食回来啦！\n天赋让我还多赚了不少粮食哦~求表扬！\n(粮食+" + GlobalFuncVar.sysActivityFeedback.activityType1[1] + ", 天赋粮食+" + GlobalFuncVar.sysPetTalent.sysPetTalent_MaiqiTalent[GlobalFuncVar.userPetInfo.petLevel] + ")", "好的"]);
                } else {
                    GlobalFuncVar.userInfo.foodHoldVolume += GlobalFuncVar.sysActivityFeedback.activityType2[1];
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我回来啦！\n请收下我们的粮食！\n(粮食+" + GlobalFuncVar.sysActivityFeedback.activityType2[1] + ")", "好的"]);
                };
                //GlobalFuncVar.userPetInfo.petLive -= GlobalFuncVar.sysActivityFeedback.activityType2[3];
            } else if (GlobalFuncVar.userPetInfo.actiHarvest == 3) {
                if (GlobalFuncVar.userPetInfo.petType == "huanhuan" && Math.random() <= GlobalFuncVar.sysPetTalent.sysPetTalent_HuanhuanTalent[GlobalFuncVar.userPetInfo.petLevel]) {
                    GlobalFuncVar.userInfo.newsExtra = GlobalFuncVar.sysActivityFeedback.activityType3[1] + GlobalFuncVar.sysActivityFeedback.activityType3[1];
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我带着两条新闻回来啦！\n记得在森林广播站查看额外新闻事件哦！\n(" + GlobalFuncVar.sysActivityFeedback.activityType3[1] + "*2)", "好的"]);
                } else if (GlobalFuncVar.userPetInfo.petType == "huanhuan" && Math.random() > GlobalFuncVar.sysPetTalent.sysPetTalent_HuanhuanTalent[GlobalFuncVar.userPetInfo.petLevel]) {
                    GlobalFuncVar.userInfo.newsExtra = GlobalFuncVar.sysActivityFeedback.activityType3[1];
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我回来啦！\n这次我没能成功发挥天赋...\n(" + GlobalFuncVar.sysActivityFeedback.activityType3[1] + "*1)", "好的"]);
                } else {
                    GlobalFuncVar.userInfo.newsExtra = GlobalFuncVar.sysActivityFeedback.activityType3[1];
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我回来啦！\n请记得在森林广播站查看额外新闻事件哦！\n(" + GlobalFuncVar.sysActivityFeedback.activityType3[1] + "*1)", "好的"]);
                };
                //GlobalFuncVar.userPetInfo.petLive -= GlobalFuncVar.sysActivityFeedback.activityType3[3];
            } else if (GlobalFuncVar.userPetInfo.actiHarvest == 4) {
                GlobalFuncVar.userPetInfo.petLive += GlobalFuncVar.sysActivityFeedback.activityType4[1];
                if (GlobalFuncVar.userPetInfo.petLive > 100) {
                    GlobalFuncVar.userPetInfo.petLive = 100;
                }
                GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["睡得好香呀~\n我又恢复满满活力啦！\n(活力值+" + GlobalFuncVar.sysActivityFeedback.activityType4[1] + ")", "好的"]);
            };

            setTimeout(function () {
                if (GlobalFuncVar.userPetInfo.petType == "dayu") {
                    GlobalFuncVar.userPetInfo.petLive += GlobalFuncVar.sysPetTalent.sysPetTalent_DayuTalent[GlobalFuncVar.userPetInfo.petLevel];
                    if (GlobalFuncVar.userPetInfo.petLive > 100) {
                        GlobalFuncVar.userPetInfo.petLive = 100;
                    };
                    GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["我的天赋发挥作用啦！\n活力值得到小部分恢复~\n(活力值+" + GlobalFuncVar.sysPetTalent.sysPetTalent_DayuTalent[GlobalFuncVar.userPetInfo.petLevel] + ")", "好的"]);
                }
            }.bind(this), 1500);

            this.setActi();
            this.setActiBtnText();

            var emitDataPack = {
                emitID: [1, 2, 25, 10, 16, 26, 18, 19, 65],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.foodHoldVolume, GlobalFuncVar.userInfo.newsExtra, GlobalFuncVar.userPetInfo.petLive, GlobalFuncVar.userPetInfo.actiTypeCurrent, GlobalFuncVar.userPetInfo.actiLeftDays, GlobalFuncVar.userPetInfo.actiAssigned, GlobalFuncVar.userPetInfo.actiTypeNext, GlobalFuncVar.userPetInfo.actiHarvest]
            };
            //GlobalFuncVar.emitData(22, emitDataPack).then(this.eventAfterSync.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.emitData(22, emitDataPack, this.eventAfterSync.bind(this));
        };
    },
    eventAfterSync: function eventAfterSync(rcvDataPack) {
        if (rcvDataPack) {
            // 这里收获要更改，不然会一直报收获
            GlobalFuncVar.userPetInfo.actiHarvest = rcvDataPack.rcvData[rcvDataPack.rcvData.length];
            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            GlobalFuncVar.gameFlag.petAnimiUpdate = true;
            GlobalFuncVar.gameFlag.userResUpdate = true;
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~", "好的"]);
        }
    },


    //// 20200302
    onClickActiBtn: function onClickActiBtn(target, type) {
        if (GlobalFuncVar.gameFlag.TutorialStep != null) {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["此按钮可以为我布置任务！\n消耗活力值但是有丰厚回报~", "好的"]);
        } else {

            if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 0) {
                //布置任务
                if (type == "work") {
                    if (GlobalFuncVar.userPetInfo.petLive >= GlobalFuncVar.sysActivityFeedback.activityType1[3]) {
                        // 布置打工任务
                        GlobalFuncVar.CallDoubleConfirm(this.node, "PopUpType2", ["我是一个粉刷匠，粉刷本领强！\n那我去打工啦~", "加油", "再想想", "activity", "activityType1"], this._actiCallback);
                    } else {
                        GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["活力不足，无法出门打工...\n先为我摇动活力铃吧~", "好的"]);
                    }
                } else if (type == "farm") {
                    if (GlobalFuncVar.userPetInfo.petLive >= GlobalFuncVar.sysActivityFeedback.activityType2[3]) {
                        // 布置务农任务
                        GlobalFuncVar.CallDoubleConfirm(this.node, "PopUpType2", ["锄禾日当午，汗滴禾下土！\n那我去务农啦~", "加油", "再想想", "activity", "activityType2"], this._actiCallback);
                    } else {
                        GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["活力不足，无法出门打工...\n先为我摇动活力铃吧~", "好的"]);
                    }
                } else if (type == "interview") {
                    if (GlobalFuncVar.userPetInfo.petLive >= GlobalFuncVar.sysActivityFeedback.activityType3[3]) {
                        // 布置采访任务
                        GlobalFuncVar.CallDoubleConfirm(this.node, "PopUpType2", ["家事国事天下事，事事关心！\n那我去采访啦~", "加油", "再想想", "activity", "activityType3"], this._actiCallback);
                    } else {
                        GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["活力不足，无法出门打工...\n先为我摇动活力铃吧~", "好的"]);
                    }
                } else if (type == "sleep") {
                    // 布置睡觉任务
                    GlobalFuncVar.CallDoubleConfirm(this.node, "PopUpType2", ["Zzzzzzzzzzzzzz!\n那我去睡觉啦~", "晚安", "再想想", "activity", "activityType4"], this._actiCallback);
                }
            } else {
                // 召回鸡
                if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 1) {
                    var actiTypeTemp = "activityType1";
                } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 2) {
                    var actiTypeTemp = "activityType2";
                } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 3) {
                    var actiTypeTemp = "activityType3";
                } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 4) {
                    var actiTypeTemp = "activityType4";
                };
                GlobalFuncVar.CallDoubleConfirm(this.node, "PopUpType2", ["主人你找我回家嘛？会损失掉如下收获哦...", "快回来", "没事了", "recall", actiTypeTemp], this._actiCallback);
            }
        }
    },
    setLive: function setLive() {
        // set the progress bar according to the petLive.
        this._petLiveBar.getComponent(cc.Widget).isAbsoluteRight = false;
        if (GlobalFuncVar.userPetInfo.petLive == 0) {
            this._petLiveBar.getComponent(cc.Widget).right = 1;
        } else {
            this._petLiveBar.getComponent(cc.Widget).right = 1 - (GlobalFuncVar.userPetInfo.petLive / 100 * 0.90 + 0.1);
        }
        if (GlobalFuncVar.userPetInfo.petLive > 50) {
            this._petLiveBar.color = new cc.Color(156, 188, 48);
        } else if (GlobalFuncVar.userPetInfo.petLive > 20) {
            this._petLiveBar.color = new cc.Color(204, 204, 0);
        } else if (GlobalFuncVar.userPetInfo.petLive > 0) {
            this._petLiveBar.color = new cc.Color(179, 72, 18);
        };
        // set the index according to the petLive.
        this._petLiveIndex.string = "活力值：" + GlobalFuncVar.userPetInfo.petLive + " / 100";

        this._petTalent.getComponent(cc.Label).string = "萌鸡天赋：\n" + GlobalFuncVar.sysPetTalentText[GlobalFuncVar.userPetInfo.petType][Number(GlobalFuncVar.userPetInfo.petLevel - 1)];
    },
    setActi: function setActi() {
        if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 1) {
            GlobalFuncVar.SetActiProgressLevel(GlobalFuncVar.userPetInfo.actiTypeCurrent, GlobalFuncVar.userPetInfo.actiLeftDays, this._petActiStatus, this);
            this._petActiName.string = "打工中...";
            GlobalFuncVar.SetActiTypeIconUpdate(GlobalFuncVar.userPetInfo.actiTypeCurrent, this._petActiType, this);
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 2) {
            GlobalFuncVar.SetActiProgressLevel(GlobalFuncVar.userPetInfo.actiTypeCurrent, GlobalFuncVar.userPetInfo.actiLeftDays, this._petActiStatus, this);
            this._petActiName.string = "务农中...";
            GlobalFuncVar.SetActiTypeIconUpdate(GlobalFuncVar.userPetInfo.actiTypeCurrent, this._petActiType, this);
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 3) {
            GlobalFuncVar.SetActiProgressLevel(GlobalFuncVar.userPetInfo.actiTypeCurrent, GlobalFuncVar.userPetInfo.actiLeftDays, this._petActiStatus, this);
            this._petActiName.string = "采访中...";
            GlobalFuncVar.SetActiTypeIconUpdate(GlobalFuncVar.userPetInfo.actiTypeCurrent, this._petActiType, this);
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 4) {
            GlobalFuncVar.SetActiProgressLevel(GlobalFuncVar.userPetInfo.actiTypeCurrent, GlobalFuncVar.userPetInfo.actiLeftDays, this._petActiStatus, this);
            this._petActiName.string = "睡觉中...";
            GlobalFuncVar.SetActiTypeIconUpdate(GlobalFuncVar.userPetInfo.actiTypeCurrent, this._petActiType, this);
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 0) {
            GlobalFuncVar.SetActiProgressLevel(GlobalFuncVar.userPetInfo.actiTypeCurrent, GlobalFuncVar.userPetInfo.actiLeftDays, this._petActiStatus, this);
            this._petActiName.string = "玩耍中...";
            GlobalFuncVar.SetActiTypeIconUpdate(GlobalFuncVar.userPetInfo.actiTypeCurrent, this._petActiType, this);
        };
    },
    update: function update(dt) {
        if (GlobalFuncVar.gameFlag.petInfoUpdate == true) {
            this.setLive();
        };
    }
});

cc._RF.pop();