"use strict";
cc._RF.push(module, '05b4dSOjPtMKYJGWme/kNAu', 'cPetInfo');
// Script/ContentScript/cPetInfo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        PrtName: null,
        TalentIntro: null,
        _bgNode: null,
        _goBackFlag: false

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    onShow: function onShow(PrtName, FabInfo, PetName) {
        this.PrtName = PrtName;
        this._bgNode = this.node.getChildByName("bg");
        this.setName(PetName);
        this.setTalent(PetName);
        this.listenToSwitch();
        this.node.active = true;
    },

    onHide: function onHide() {
        this.node.active = false;
        this.PrtName.active = true;
        this.node.removeFromParent(true);
    },

    setName: function setName(PetName) {
        var petName = this.node.getChildByName("titleBg").getChildByName("petName").getComponent(cc.Label);
        var petSelfie = this.node.getChildByName("petIntro").getChildByName("petSelfie").getComponent(cc.Sprite);
        var petIntroText = this.node.getChildByName("petIntro").getComponent(cc.Label);

        if (PetName == "dayu") {

            petSelfie.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("dayuSelfiePS");
            petIntroText.string = GlobalFuncVar.sysPetIntro.dayu;
            //petName.string = "大宇";
        } else if (PetName == "duoduo") {
            petSelfie.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("duoduoSelfiePS");
            petIntroText.string = GlobalFuncVar.sysPetIntro.duoduo;
            //petName.string = "朵朵";
        } else if (PetName == "huanhuan") {
            petSelfie.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("huanhuanSelfiePS");
            petIntroText.string = GlobalFuncVar.sysPetIntro.huanhuan;
            //petName.string = "欢欢";
        } else if (PetName == "maiqi") {
            petSelfie.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("maiqiSelfiePS");
            petIntroText.string = GlobalFuncVar.sysPetIntro.maiqi;
            //petName.string = "麦奇";
        };
    },

    //// 20200302
    onClickBackToDict: function onClickBackToDict() {

        // 除去scrollview上的子节点，并且放入节点池中
        var nodePrt = this.node.getChildByName("petTalent").getChildByName("view").getChildByName("content");
        var childrenCount = nodePrt.childrenCount;
        for (var j = 0; j < childrenCount; j++) {
            //console.log("First element in the array: ", nodePrt.children[0]);
            GlobalFuncVar.preloadList.petTalentPool.put(nodePrt.children[0]);
            //console.log("Nodepool element left: ", GlobalFuncVar.preloadList.petTalentPool.size());
        }

        this.onHide();
    },


    //// 20200302
    setTalent: function setTalent(PetName) {
        var nodePrt = this.node.getChildByName("petTalent").getChildByName("view").getChildByName("content");
        var petTalentTemp = null;
        if (PetName == "dayu") {
            petTalentTemp = GlobalFuncVar.sysPetTalentText.dayu;
        } else if (PetName == "duoduo") {
            petTalentTemp = GlobalFuncVar.sysPetTalentText.duoduo;
        } else if (PetName == "huanhuan") {
            petTalentTemp = GlobalFuncVar.sysPetTalentText.huanhuan;
        } else if (PetName == "maiqi") {
            petTalentTemp = GlobalFuncVar.sysPetTalentText.maiqi;
        };

        var count = 0;
        for (var i = 0; i < petTalentTemp.length; i++) {

            if (GlobalFuncVar.preloadList.petTalentPool.size() > 0) {
                // 通过 size 接口判断对象池中是否有空闲的对象
                //console.log("Nodepool element left: ", GlobalFuncVar.preloadList.petTalentPool.size());
                var RankItem = GlobalFuncVar.preloadList.petTalentPool.get();
            } else {
                // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
                var RankItem = cc.instantiate(GlobalFuncVar.preloadList.petTalent);
                //console.log("Nodepool element left: ", GlobalFuncVar.preloadList.petTalentPool.size());
            }

            var TalentIntro = RankItem;
            nodePrt.addChild(TalentIntro, 0, "TalentIntro" + count);
            var TalentIntroText = nodePrt.getChildByName("TalentIntro" + count);
            TalentIntroText.color = new cc.Color(96, 80, 44);
            TalentIntroText = TalentIntroText.getComponent(cc.Label);
            if (count < GlobalFuncVar.userPetInfo.petLevel + 20) {
                TalentIntroText.string = "    " + petTalentTemp[count];
            } else {
                TalentIntroText.string = "    待解锁";
            }

            count += 1;

            /*
            cc.loader.loadRes("/Element/TalentIntro", function(err, prefab){
                if (err) {return console.log("cannot find element: TalentIntro")};
                let TalentIntro = cc.instantiate(prefab);
                nodePrt.addChild(TalentIntro,0,"TalentIntro"+count);
                let TalentIntroText = nodePrt.getChildByName("TalentIntro"+count);
                TalentIntroText.color = new cc.Color(96, 80, 44);
                TalentIntroText = TalentIntroText.getComponent(cc.Label);
                TalentIntroText.string = petTalentTemp[count];
                count += 1;
            }.bind(this))
            */
        };
    },


    //// 20200302
    listenToSwitch: function listenToSwitch() {
        this.node.getChildByName("maskLayer").on(cc.Node.EventType.TOUCH_END, function (event) {
            this._goBackFlag = true;
        }.bind(this), this);
    },


    //// 20200302
    update: function update(dt) {
        if (this._goBackFlag == true) {
            this.onClickBackToDict();
            this.node.getChildByName("maskLayer").off(cc.Node.EventType.TOUCH_END);
            this._goBackFlag = false;
        };
    }
});

cc._RF.pop();