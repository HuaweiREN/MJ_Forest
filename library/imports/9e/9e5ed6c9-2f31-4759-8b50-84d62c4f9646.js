"use strict";
cc._RF.push(module, '9e5edbJLzFHWYtQhNYsT5ZG', 'cUserRes');
// Script/ContentScript/cUserRes.js

"use strict";

cc.Class({
            extends: cc.Component,

            properties: {
                        _resBox1Text: cc.Label,
                        _resBox1Value: cc.Label,
                        _resBox1Type: cc.Sprite,
                        _resBox2Text: cc.Label,
                        _resBox2Value: cc.Label,
                        _resBox2Type: cc.Sprite,
                        _resBox3Text: cc.Label,
                        _resBox3Value: cc.Label,
                        _resBox3Type: cc.Sprite,
                        _resBox4Text: cc.Label,
                        _resBox4Value: cc.Label,
                        _resBox4Type: cc.Sprite,
                        _fabInfo: cc.String,
                        _foodPrice: cc.Node,
                        _cutoffLine2: cc.Node
            },

            // LIFE-CYCLE CALLBACKS:

            // onLoad () {},

            start: function start() {},
            setNodeDefault: function setNodeDefault() {
                        this._resBox1Text = this.node.getChildByName("userResBox1").getChildByName("text").getComponent(cc.Label);
                        this._resBox1Value = this.node.getChildByName("userResBox1").getChildByName("contentBg").getChildByName("contentValue").getComponent(cc.Label);
                        this._resBox1Type = this.node.getChildByName("userResBox1").getChildByName("contentBg").getChildByName("contentType").getComponent(cc.Sprite);
                        this._resBox2Text = this.node.getChildByName("userResBox2").getChildByName("text").getComponent(cc.Label);
                        this._resBox2Value = this.node.getChildByName("userResBox2").getChildByName("contentBg").getChildByName("contentValue").getComponent(cc.Label);
                        this._resBox2Type = this.node.getChildByName("userResBox2").getChildByName("contentBg").getChildByName("contentType").getComponent(cc.Sprite);
                        this._resBox3Text = this.node.getChildByName("userResBox3").getChildByName("text").getComponent(cc.Label);
                        this._resBox3Value = this.node.getChildByName("userResBox3").getChildByName("contentBg").getChildByName("contentValue").getComponent(cc.Label);
                        this._resBox3Type = this.node.getChildByName("userResBox3").getChildByName("contentBg").getChildByName("contentType").getComponent(cc.Sprite);
                        this._resBox4Text = this.node.getChildByName("userResBox4").getChildByName("text").getComponent(cc.Label);
                        this._resBox4Value = this.node.getChildByName("userResBox4").getChildByName("contentBg").getChildByName("contentValue").getComponent(cc.Label);
                        this._resBox4Type = this.node.getChildByName("userResBox4").getChildByName("contentBg").getChildByName("contentType").getComponent(cc.Sprite);

                        this._foodPrice = this.node.getChildByName("foodPrice"); // default off
                        this._cutoffLine2 = this.node.getChildByName("cutoffLine2"); // default on
            },


            //// 20200302
            setDataUpdate: function setDataUpdate() {
                        if (this._fabInfo == "UserResGold") {

                                    this._foodPrice.active = false; // default off
                                    this._cutoffLine2.active = true; // default on

                                    this._resBox3Text.string = "本月收入";
                                    this.node.getChildByName("userResBox3").getChildByName("text").active = true;
                                    //this._resBox3Value.string = GlobalFuncVar.userInfo.goldIncome;
                                    this._resBox3Value.string = "小秘密";
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox1Type, this);

                                    this._resBox4Text.string = "本月支出";
                                    this.node.getChildByName("userResBox4").getChildByName("text").active = true;
                                    //this._resBox4Value.string = GlobalFuncVar.userInfo.goldConsume;
                                    this._resBox4Value.string = "小秘密";
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox2Type, this);

                                    this._resBox1Text.string = "持有量";
                                    this._resBox1Value.string = GlobalFuncVar.userInfo.goldHoldVolume;
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox3Type, this);

                                    this._resBox2Text.string = "储蓄量";
                                    this._resBox2Value.string = GlobalFuncVar.userInfo.goldDeposit;
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox4Type, this);
                        } else if (this._fabInfo == "UserResFood") {

                                    this._foodPrice.active = true; // default off
                                    this._cutoffLine2.active = false; // default on

                                    this._resBox2Text.string = "本月收入";
                                    //this._resBox2Value.string = GlobalFuncVar.userInfo.foodIncome;
                                    this._resBox2Value.string = "小秘密";
                                    GlobalFuncVar.SetActiExpIconUpdate(2, this._resBox2Type, this);

                                    this._resBox1Text.string = "持有量";
                                    this._resBox1Value.string = GlobalFuncVar.userInfo.foodHoldVolume;
                                    GlobalFuncVar.SetActiExpIconUpdate(2, this._resBox1Type, this);

                                    this.node.getChildByName("userResBox3").getChildByName("text").active = false;
                                    this._resBox3Value.string = 1;
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox3Type, this);

                                    this.node.getChildByName("userResBox4").getChildByName("text").active = false;
                                    this._resBox4Value.string = Math.round(GlobalFuncVar.sysResInfo.priceTrend[4] * 100) / 100;
                                    GlobalFuncVar.SetActiExpIconUpdate(2, this._resBox4Type, this);
                        } else if (this._fabInfo == "UserResDeposit") {

                                    this._foodPrice.active = false; // default off
                                    this._cutoffLine2.active = true; // default on

                                    this._resBox1Text.string = "储蓄量";
                                    this._resBox1Value.string = GlobalFuncVar.userInfo.goldDeposit;
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox1Type, this);

                                    this._resBox2Text.string = "持有量";
                                    this._resBox2Value.string = GlobalFuncVar.userInfo.goldHoldVolume;
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox2Type, this);

                                    this._resBox3Text.string = "储蓄金利息";
                                    this._resBox3Value.string = GlobalFuncVar.userInfo.goldInterest;
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox3Type, this);

                                    this._resBox4Text.string = "福利金奖励";
                                    this._resBox4Value.string = GlobalFuncVar.sysResInfo.goldWelfare;
                                    GlobalFuncVar.SetActiExpIconUpdate(1, this._resBox4Type, this);
                        };
            },
            onShow: function onShow(PrtName, FabInfo, CallFunc) {
                        this._fabInfo = FabInfo;
                        this.setNodeDefault();
                        this.setDataUpdate();
                        this.node.active = true;

                        setTimeout(function () {
                                    GlobalFuncVar.ShowDemoText(this, "Demo小贴士：Demo中不会公布本月收入/支出数据，只好自己记账啦~", 0);
                                    // 20200224 改动，4000 --> 3000
                        }.bind(this), 2000);
            }
}

// update (dt) {},
);

cc._RF.pop();