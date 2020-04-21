

cc.Class({
    extends: cc.Component,

    properties: {
        RtnName: null,
        _goTaskBtn1: cc.Node,
        _goTaskBtn2: cc.Node,
        _goTaskBtn3: cc.Node,
    },

    start () {

    },

    setNodeDefault(){
        this._goTaskBtn1 = this.node.getChildByName("TaskLayout").getChildByName("Task1").getChildByName("GoTask1");
        this._goTaskBtn2 = this.node.getChildByName("TaskLayout").getChildByName("Task2").getChildByName("GoTask2");
        this._goTaskBtn3 = this.node.getChildByName("TaskLayout").getChildByName("Task3").getChildByName("GoTask3");
    },

    onShow: function(FabInfo, RtnName){
        this.setNodeDefault();
        this.RtnName = RtnName;
        //this.checkTask();
        this.setTask();
        this.setBtnContent();
        this.notiMarkStatus();
        this.node.active = true;

        setTimeout(function () {
            GlobalFuncVar.ShowDemoText(this,"Demo小贴士：小编正在苦思冥想编辑每日任务中...", 105);
        // 20200224 改动，4000 --> 3000
        }.bind(this), 2000);
    },

    notiMarkStatus(){
        GlobalFuncVar.showNotiMark(this._goTaskBtn1, GlobalFuncVar.userInfo.taskHarvested[0]==1);
        GlobalFuncVar.showNotiMark(this._goTaskBtn2, GlobalFuncVar.userInfo.taskHarvested[1]==1);
        GlobalFuncVar.showNotiMark(this._goTaskBtn3, GlobalFuncVar.userInfo.taskHarvested[2]==1);
    },

    onHide: function(){
        this.node.parent.active = false;
        // show next node, using this.target
    },

    //// 20200302
    onClickGoTask1: function(){
        // check "task status", if task status is finished, then give harvest;
        // check "task status", if task status is not finished, then go task;
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["看来你已经学会领任务啦，记得在教程结束后回来领取奖励哦~","好的"]);
        } else {
            this.setBtnDirection(1);
        }
    },

    //// 20200302
    onClickGoTask2: function(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["看来你已经学会领任务啦，记得在教程结束后回来领取奖励哦~","好的"]);
        } else {
            this.setBtnDirection(2);
        }
    },

    //// 20200302
    onClickGoTask3: function(){
        if (GlobalFuncVar.gameFlag.TutorialStep != null){
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["看来你已经学会领任务啦，记得在教程结束后回来领取奖励哦~","好的"]);
        } else {
            this.setBtnDirection(3);
        }
    },

    /*
    setBtnDirection: function(BtnNum){
        if (GlobalFuncVar.userInfo.taskCheckNow[BtnNum-1] != GlobalFuncVar.userTaskInfo.taskCheckStandard[BtnNum-1]){
            // task has not finished
            this.onHide();
            if (GlobalFuncVar.userTaskInfo.taskTier[BtnNum-1] == 2){
                let tgtNode = GlobalFuncVar.userTaskInfo.taskNode[BtnNum-1];
                tgtNode = GlobalFuncVar.sysNodeDict[tgtNode];
                GlobalFuncVar.TierTwoPrefab(tgtNode, GlobalFuncVar.sysNodeDict.BaseView, GlobalFuncVar.userTaskInfo.taskNode[BtnNum-1],GlobalFuncVar.sysNodeDict.BaseView.getChildByName("MainView"));
            }
            else if (GlobalFuncVar.userTaskInfo.taskTier[BtnNum-1] == 1){
                GlobalFuncVar.TierOnePrefab(GlobalFuncVar.userTaskInfo.taskNode[BtnNum-1], GlobalFuncVar.sysNodeDict.BaseView, GlobalFuncVar.userTaskInfo.taskNode[BtnNum-1],GlobalFuncVar.sysNodeDict.BaseView.getChildByName("MainView"));
            }
            this.node.removeFromParent(true); //while closing the alert window, remove the content node
        }
        else if (GlobalFuncVar.userInfo.taskCheckNow[BtnNum-1] == GlobalFuncVar.userTaskInfo.taskCheckStandard[BtnNum-1] && GlobalFuncVar.userInfo.taskHarvested[BtnNum-1] == 1){
            // task has finished， 还没领奖励
            var emitDataPack = {
                emitID: [1,2,7,8,9,10,63],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.foodHoldVolume,
                            GlobalFuncVar.userTaskInfo.taskHarvestType[BtnNum-1], GlobalFuncVar.userTaskInfo.taskHarvest[BtnNum-1], BtnNum-1,
                            GlobalFuncVar.userPetInfo.petLive, GlobalFuncVar.userInfo.taskHarvested[BtnNum-1]],
            };
            GlobalFuncVar.emitData(14, emitDataPack).then(this.eventAfterSync.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.showNotiMark(this['_goTaskBtn'+BtnNum], false); 
        }
        else if (GlobalFuncVar.userInfo.taskCheckNow[BtnNum-1] == GlobalFuncVar.userTaskInfo.taskCheckStandard[BtnNum-1] && GlobalFuncVar.userInfo.taskHarvested[BtnNum-1] == -1){
            // task has finished，领了奖励
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1",["已经领取过奖励啦~","返回"]);
        }
    },
    */

    setBtnDirection: function(BtnNum){
        if (GlobalFuncVar.userInfo.taskHarvested[BtnNum-1] != 1){
            // task has not finished
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1",["奖励还没包装好呐~耐心等待哦~","好的"]);
        }
        else if (GlobalFuncVar.userInfo.taskHarvested[BtnNum-1] == 1){
            // 禁用按钮
            this._goTaskBtn1.getComponent(cc.Button).interactable = false;
            this._goTaskBtn2.getComponent(cc.Button).interactable = false;
            this._goTaskBtn3.getComponent(cc.Button).interactable = false;

            // task has finished， 还没领奖励
            var emitDataPack = {
                emitID: [1,2,7,8,9,10,63],
                emitData: [GlobalFuncVar.userInfo.goldHoldVolume, GlobalFuncVar.userInfo.foodHoldVolume,
                            GlobalFuncVar.userTaskInfo.taskHarvestType[BtnNum-1], GlobalFuncVar.userTaskInfo.taskHarvest[BtnNum-1], BtnNum-1,
                            GlobalFuncVar.userPetInfo.petLive, GlobalFuncVar.userInfo.taskHarvested[BtnNum-1]],
            };
            //GlobalFuncVar.emitData(14, emitDataPack).then(this.eventAfterSync.bind(this)).catch(err => {console.log(err)});
            GlobalFuncVar.showNotiMark(this['_goTaskBtn'+BtnNum], false); 
            GlobalFuncVar.emitData(14, emitDataPack, this.eventAfterSync.bind(this));
        }
    },

    eventAfterSync(rcvDataPack){
        if (rcvDataPack){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1",["请收下奖励~","好的"]);
            if (GlobalFuncVar.userTaskInfo.taskHarvestType[rcvDataPack.rcvData[4]] == "gold"){
                GlobalFuncVar.userInfo.goldHoldVolume = rcvDataPack.rcvData[0];
            } else if(GlobalFuncVar.userTaskInfo.taskHarvestType[rcvDataPack.rcvData[4]] == "food"){
                GlobalFuncVar.userInfo.foodHoldVolume = rcvDataPack.rcvData[1];
            } else if(GlobalFuncVar.userTaskInfo.taskHarvestType[rcvDataPack.rcvData[4]] == "live"){
                GlobalFuncVar.userPetInfo.petLive = rcvDataPack.rcvData[5];
            };
            GlobalFuncVar.userInfo.taskHarvested[rcvDataPack.rcvData[4]] = rcvDataPack.rcvData[6];
            GlobalFuncVar.gameFlag.userResUpdate = true;
            GlobalFuncVar.gameFlag.petInfoUpdate = true;      
            this.setBtnContent();

            // 启用按钮
            this._goTaskBtn1.getComponent(cc.Button).interactable = true;
            this._goTaskBtn2.getComponent(cc.Button).interactable = true;
            this._goTaskBtn3.getComponent(cc.Button).interactable = true;
        } else {
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["网络出现问题啦~\n请稍后再试~","好的"]);
            // 启用按钮
            this._goTaskBtn1.getComponent(cc.Button).interactable = true;
            this._goTaskBtn2.getComponent(cc.Button).interactable = true;
            this._goTaskBtn3.getComponent(cc.Button).interactable = true;
        }
        
    },

    /*
    setBtnContent: function(){
        let taskLayout = this.node.getChildByName("TaskLayout");
        let task1 = taskLayout.getChildByName("Task1").getChildByName("GoTask1").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        if (GlobalFuncVar.userInfo.taskCheckNow[0] != GlobalFuncVar.userTaskInfo.taskCheckStandard[0]){
            task1.string = "去完成";
        }
        else if (GlobalFuncVar.userInfo.taskCheckNow[0] == GlobalFuncVar.userTaskInfo.taskCheckStandard[0] && GlobalFuncVar.userInfo.taskHarvested[0] == 1){
            task1.string = "领取";
        }
        else if (GlobalFuncVar.userInfo.taskHarvested[0] == -1){
            task1.string = "已领取";
        };

        let task2 = taskLayout.getChildByName("Task2").getChildByName("GoTask2").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        if (GlobalFuncVar.userInfo.taskCheckNow[1] != GlobalFuncVar.userTaskInfo.taskCheckStandard[1]){
            task2.string = "去完成";
        }
        else if (GlobalFuncVar.userInfo.taskCheckNow[1] == GlobalFuncVar.userTaskInfo.taskCheckStandard[1] && GlobalFuncVar.userInfo.taskHarvested[1] == 1){
            task2.string = "领取";
        }
        else if (GlobalFuncVar.userInfo.taskHarvested[1] == -1){
            task2.string = "已领取";
        };


        let task3 = taskLayout.getChildByName("Task3").getChildByName("GoTask3").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        if (GlobalFuncVar.userInfo.taskCheckNow[2] != GlobalFuncVar.userTaskInfo.taskCheckStandard[2]){
            task3.string = "去完成";
        }
        else if (GlobalFuncVar.userInfo.taskCheckNow[2] == GlobalFuncVar.userTaskInfo.taskCheckStandard[2] && GlobalFuncVar.userInfo.taskHarvested[2] == 1){
            task3.string = "领取";
        }
        else if (GlobalFuncVar.userInfo.taskHarvested[2] == -1){
            task3.string = "已领取";
        };
        

    },
    */

    setBtnContent: function(){
        let taskLayout = this.node.getChildByName("TaskLayout");
        let task1 = taskLayout.getChildByName("Task1").getChildByName("GoTask1").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        if (GlobalFuncVar.userInfo.taskHarvested[0] != 1){
            task1.string = "等待中";
        }
        else if (GlobalFuncVar.userInfo.taskHarvested[0] == 1){
            task1.string = "领取";
        };

        let task2 = taskLayout.getChildByName("Task2").getChildByName("GoTask2").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        if (GlobalFuncVar.userInfo.taskHarvested[1] != 1){
            task2.string = "等待中";
        }
        else if (GlobalFuncVar.userInfo.taskHarvested[1] == 1){
            task2.string = "领取";
        };

        let task3 = taskLayout.getChildByName("Task3").getChildByName("GoTask3").getChildByName("Background").getChildByName("Label").getComponent(cc.Label);
        if (GlobalFuncVar.userInfo.taskHarvested[2] != 1){
            task3.string = "等待中";
        }
        else if (GlobalFuncVar.userInfo.taskHarvested[2] == 1){
            task3.string = "领取";
        };
        

    },

    setTask: function(){
        let taskLayout = this.node.getChildByName("TaskLayout");
        let task1 = taskLayout.getChildByName("Task1");
        let task1content = task1.getChildByName("TaskContent");
        let task1harvest = task1.getChildByName("TaskHarvest").getChildByName("TaskHarvestValue");
        let task1harvestType = task1.getChildByName("TaskHarvest").getChildByName("TaskType");
        task1content = task1content.getComponent(cc.Label);
        task1content.string = GlobalFuncVar.userTaskInfo.taskContent[0];
        task1harvest = task1harvest.getComponent(cc.Label);
        task1harvest.string = "+" + GlobalFuncVar.userTaskInfo.taskHarvest[0];

        if (GlobalFuncVar.userTaskInfo.taskHarvestType[0] == "gold"){
            task1harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("goldCoinPS");
        } else if (GlobalFuncVar.userTaskInfo.taskHarvestType[0] == "food"){
            task1harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("foodWheatPS");
        } else if (GlobalFuncVar.userTaskInfo.taskHarvestType[0] == "live"){
            task1harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("livePS");
        }

        let task2 = taskLayout.getChildByName("Task2");
        let task2content = task2.getChildByName("TaskContent");
        let task2harvest = task2.getChildByName("TaskHarvest").getChildByName("TaskHarvestValue");
        let task2harvestType = task2.getChildByName("TaskHarvest").getChildByName("TaskType");
        task2content = task2content.getComponent(cc.Label);
        task2content.string = GlobalFuncVar.userTaskInfo.taskContent[1];
        task2harvest = task2harvest.getComponent(cc.Label);
        task2harvest.string = "+" + GlobalFuncVar.userTaskInfo.taskHarvest[1];
        if (GlobalFuncVar.userTaskInfo.taskHarvestType[1] == "gold"){
            task2harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("goldCoinPS");
        } else if (GlobalFuncVar.userTaskInfo.taskHarvestType[1] == "food"){
            task2harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("foodWheatPS");
        } else if (GlobalFuncVar.userTaskInfo.taskHarvestType[1] == "live"){
            task2harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("livePS");
        }

        let task3 = taskLayout.getChildByName("Task3");
        let task3content = task3.getChildByName("TaskContent");
        let task3harvest = task3.getChildByName("TaskHarvest").getChildByName("TaskHarvestValue");
        let task3harvestType = task3.getChildByName("TaskHarvest").getChildByName("TaskType");
        task3content = task3content.getComponent(cc.Label);
        task3content.string = GlobalFuncVar.userTaskInfo.taskContent[2];
        task3harvest = task3harvest.getComponent(cc.Label);
        task3harvest.string = "+" + GlobalFuncVar.userTaskInfo.taskHarvest[2];
        if (GlobalFuncVar.userTaskInfo.taskHarvestType[2] == "gold"){
            task3harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("goldCoinPS");
        } else if (GlobalFuncVar.userTaskInfo.taskHarvestType[2] == "food"){
            task3harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("foodWheatPS");
        } else if (GlobalFuncVar.userTaskInfo.taskHarvestType[2] == "live"){
            task3harvestType.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("livePS");
        }
        
    },

    update (dt) {
        this.notiMarkStatus();
    },
});
