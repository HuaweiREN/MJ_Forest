cc.Class({
    extends: cc.Component,

    properties: {
        _animi: null,
        _DB: null,
        _animi_Index: null,
        _animiName: null,
        _animiBtn: cc.Button,
        _animiNumber: null,
        _animiCollect: [],
        _animiAmarture: [],
        _animiStatus: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._DB = this.node.getComponent(dragonBones.ArmatureDisplay);
        this._animiName = this.node.getChildByName("animiName");
        // this._animi_Index = Math.ceil(Math.random()*32);
        this._animiBtn = this.node.getComponent(cc.Button);
        this._animiBtn.interactable = true;
        this._animiStatus = "lock";
        this._animiTemp = this._DB.getArmatureNames();
        if (this._animiCollect.length == 0 && this._animiAmarture.length == 0){
            for(let j=0; j<this._animiTemp.length; j++){
                for (let i=0; i<this._DB.getAnimationNames(this._animiTemp[j]).length; i++){
                    this._animiAmarture.push(this._animiTemp[j]);
                    this._animiCollect.push(this._DB.getAnimationNames(this._animiTemp[j])[i]);
                }
            }
        }
        this._animiNumber = this._animiCollect.length;
        this._animi = {
            animi_dayu: {
                greet: ["dayu_greet_tot", "dayuGreet", "大宇打招呼"],
                greet2: ["dayu_greet_tot", "dayuGreet2", "大宇打招呼2"],
                work: ["dayu_work_tot", "dayuWork", "大宇打工"],
                work2: ["dayu_work_tot", "dayuWork2", "大宇打工2"],
                sleep: ["dayu_sleep_tot", "dayuSleep", "大宇睡觉"],
                sleep2: ["dayu_sleep_tot", "dayuSleep2", "大宇睡觉2"],
                farm: ["dayu_farm_tot", "dayuFarm", "大宇务农"],
                farm2: ["dayu_farm_tot", "dayuFarm2", "大宇务农2"],
                interview: ["dayu_interview_tot", "dayuInterview", "大宇采访"],
                interview2: ["dayu_interview_tot", "dayuInterview2", "大宇采访2"],
                play: ["dayu_play_tot", "dayuPlay", "大宇玩耍"],
                play2: ["dayu_play_tot", "dayuPlay2", "大宇玩耍2"],
            },

            animi_duoduo: {
                sleep: ["duoduo_sleep_tot", "duoduoSleep", "朵朵睡觉"],
                sleep2: ["duoduo_sleep_tot", "duoduoSleep2", "朵朵睡觉2"],
                greet: ["duoduo_greet_tot", "duoduoGreet", "朵朵打招呼"],
                greet2: ["duoduo_greet_tot", "duoduoGreet2", "朵朵打招呼2"],
                interview: ["duoduo_inter_tot", "duoduoInterview", "朵朵采访"],
                interview2: ["duoduo_inter_tot", "duoduoInterview2", "朵朵采访2"],
                farm: ["duoduo_farm_tot", "duoduoFarm", "朵朵务农"],
                farm2: ["duoduo_farm_tot", "duoduoFarm2", "朵朵务农2"],
                work: ["duoduo_work_tot", "duoduoWork", "朵朵工作"],
                work2: ["duoduo_work_tot", "duoduoWork2", "朵朵工作2"],
                play: ["duoduo_play_tot", "duoduoPlay", "朵朵玩耍"],
                play2: ["duoduo_play_tot", "duoduoPlay2", "朵朵玩耍2"],
            },

            animi_maiqi: {
                farm: ["maiqi_farm_tot", "maiqiFarm", "麦奇务农"],
                farm2: ["maiqi_farm_tot", "maiqiFarm2", "麦奇务农2"],
                greet: ["maiqi_greet_tot", "maiqiGreet", "麦奇打招呼"],
                greet2: ["maiqi_greet_tot", "maiqiGreet2", "麦奇打招呼2"],
                interview: ["maiqi_interview_tot", "maiqiInterview", "麦奇采访"],
                interview2: ["maiqi_interview_tot", "maiqiInterview2", "麦奇采访2"],
                play: ["maiqi_play_tot", "maiqiPlay", "麦奇玩耍"],
                play2: ["maiqi_play_tot", "maiqiPlay2", "麦奇玩耍2"],
                sleep: ["maiqi_sleep_tot", "maiqiSleep", "麦奇睡觉"],
                sleep2: ["maiqi_sleep_tot", "maiqiSleep2", "麦奇睡觉2"],
                work: ["maiqi_work_tot", "maiqiWork", "麦奇打工"],
                work2: ["maiqi_work_tot", "maiqiWork2", "麦奇打工2"],
            },

            animi_huanhuan: {
                play: ["huanhuan_play_tot", "huanhuanPlay", "欢欢玩耍"],
                play2: ["huanhuan_play_tot", "huanhuanPlay2", "欢欢玩耍2"],
                sleep: ["huanhuan_sleep_tot", "huanhuanSleep", "欢欢睡觉"],
                sleep2: ["huanhuan_sleep_tot", "huanhuanSleep2", "欢欢睡觉2"],
                work: ["huanhuan_work_tot", "huanhuanWork", "欢欢打工"],
                work2: ["huanhuan_work_tot", "huanhuanWork2", "欢欢打工2"],
                farm: ["huanhuan_farm_tot", "huanhuanFarm", "欢欢务农"],
                farm2: ["huanhuan_farm_tot", "huanhuanFarm2", "欢欢务农2"],
                interview: ["huanhuan_inter_tot", "huanhuanInterview", "欢欢采访"],
                interview2: ["huanhuan_inter_tot", "huanhuanInterview2", "欢欢采访2"],
                greet: ["huanhuan_greet_tot", "huanhuanGreet", "欢欢打招呼"],
                greet2: ["huanhuan_greet_tot", "huanhuanGreet2", "欢欢打招呼2"],
            },
        };
    },

    onSpecificPick(){
        if (GlobalFuncVar.userPetInfo.petType == "dayu"){
            var petName = "animi_dayu";
        } else if (GlobalFuncVar.userPetInfo.petType == "duoduo"){
            var petName = "animi_duoduo";
        } else if (GlobalFuncVar.userPetInfo.petType == "huanhuan"){
            var petName = "animi_huanhuan";
        } else if (GlobalFuncVar.userPetInfo.petType == "maiqi"){
            var petName = "animi_maiqi";
        };

        if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 0){
            // 大宇玩耍
            var petActi = "play";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 1){
            // 大宇打工
            var petActi = "work";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 2){
            // 大宇务农
            var petActi = "farm";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 3){
            // 大宇采访
            var petActi = "interview";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 4){
            // 大宇睡觉
            var petActi = "sleep";
        };

        this._DB.armatureName = this._animi[petName][petActi][0]; 
        //this._animiName.getComponent(cc.Label).string = this._animi[petName][petActi][2]; 
        this._animiName.opacity = 255;
        this._animiName.runAction(cc.fadeOut(1));
        this._DB.playAnimation(this._animi[petName][petActi][1], 0);
        
    },

    /*
    onRandomPick(){
        console.log(this._animi_Index, this._animi["animi_"+this._animi_Index][0]);
        this._DB.armatureName = this._animi["animi_"+this._animi_Index][0];
        this._animiName.getComponent(cc.Label).string = this._animi["animi_"+this._animi_Index][2];
        this._DB.playAnimation(this._animi["animi_"+this._animi_Index][1], 0);
    },
    */

    onClickChange(target, msg){ 

        if (GlobalFuncVar.userPetInfo.petType == "dayu"){
            var petName = "animi_dayu";
        } else if (GlobalFuncVar.userPetInfo.petType == "duoduo"){
            var petName = "animi_duoduo";
        } else if (GlobalFuncVar.userPetInfo.petType == "huanhuan"){
            var petName = "animi_huanhuan";
        } else if (GlobalFuncVar.userPetInfo.petType == "maiqi"){
            var petName = "animi_maiqi";
        };

        if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 0){
            // 大宇玩耍
            var petActi = "play";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 1){
            // 大宇打工
            var petActi = "work";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 2){
            // 大宇务农
            var petActi = "farm";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 3){
            // 大宇采访
            var petActi = "interview";
        } else if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 4){
            // 大宇睡觉
            var petActi = "sleep";
        };

        if (msg == "callChange"){
            this._animiBtn.interactable = false;
            let animiSeq = new Promise(function(resolve, reject){
                let style = Math.ceil(Math.random()*2);
                if (style == 1){
                    var name = "greet";
                } else {
                    var name = "greet2";
                }
                this._DB.armatureName = this._animi[petName][name][0];
                this._DB.playAnimation(this._animi[petName][name][1], 1);
                //this._animiName.getComponent(cc.Label).string = this._animi[petName]["greet"][2];
                this._animiName.opacity = 255;
                this._animiName.runAction(cc.fadeOut(1));
                setTimeout(function () {
                    this._animiBtn.interactable = true;
                    resolve("打招呼完成！");
                // 20200224 改动，4000 --> 3000
                }.bind(this), 3000);
                // 20200224 改动
            }.bind(this));
            animiSeq.then((msg) => {
                //console.log(msg);
                this._DB.armatureName = this._animi[petName][petActi][0];
                this._DB.playAnimation(this._animi[petName][petActi][1], 0);
                //this._animiName.getComponent(cc.Label).string = this._animi[petName][petActi][2];
                this._animiName.opacity = 255;
                this._animiName.runAction(cc.fadeOut(1));
            })
        }
        
    },

    //// 20200305
    onClickRolling(target, msg){
        
        if (this._animiStatus == "lock"){
            GlobalFuncVar.ShowDemoText(this, "Demo小贴士：动画滚动已开启，仅Demo内测玩家专属福利哦~", 200);
            this.node.getChildByName("animiRolling").getChildByName("Background").getChildByName("status").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPack2PS.getSpriteFrame("unlockPS");
            this._animiStatus = "unlock";
            var i = 0;
            this._DB.on(dragonBones.EventObject.LOOP_COMPLETE, function (event){
            this._DB.armatureName = this._animiAmarture[i];
            this._DB.playAnimation(this._animiCollect[i], 1);
            //this._animiName.getComponent(cc.Label).string = this._animiCollect[i];
            this._animiName.opacity = 255;
            this._animiName.runAction(cc.fadeOut(2));
            if (i < this._animiNumber){
                i += 1;
            } else {
                i = 0;
            }
            //console.log("loop complete", this._animiCollect[i]);
            }.bind(this))

            //this._animiName.getComponent(cc.Label).string = "动画轮滚已解锁~";
            this._animiName.opacity = 255;
            this._animiName.runAction(cc.fadeOut(2));
        } else if (this._animiStatus == "unlock"){
            this._animiStatus = "lock";
            this.node.getChildByName("animiRolling").getChildByName("Background").getChildByName("status").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPack2PS.getSpriteFrame("lockPS");
            //this._animiName.getComponent(cc.Label).string = "动画轮滚已锁定~";
            this._animiName.opacity = 255;
            this._animiName.runAction(cc.fadeOut(2));

            this._DB.off(dragonBones.EventObject.LOOP_COMPLETE);
            this.onSpecificPick();
        }
        
    }

    //update (dt) {},
});
