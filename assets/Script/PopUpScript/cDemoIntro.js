

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {},

    // update (dt) {},

    onShow(target, dir){
        if (dir == "recall"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["该按钮可召回正在活动的萌鸡，\n但活力值消耗将不予返还哦~","好的"]);
        } else if (dir == "shakeShake"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["该按钮用于增长萌鸡活力值，\n活力值越高，活动越容易成功~","好的"]);
        } else if (dir == "nextAssign"){
            if (GlobalFuncVar.userPetInfo.actiTypeCurrent == 0){
                GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["萌鸡会在活动布置后立即出发~","好的"]);
            } else {
                GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["可以召回活动中的萌鸡，\n但损失的活力值不会返还哦~","好的"]);
            }
        } else if (dir == "calendar"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["萌鸡时间对照表\n1萌鸡年=1自然月\n1萌鸡月=1自然日\n1萌鸡日=1小时","好的"]);
        } else if (dir == "userTask"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["小编苦思冥想构思有趣的用户任务中...","好的"]);
        } else if (dir == "harvest"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["丰收日的奖励保留周期为:\n一个萌鸡月(一个自然日)","好的"]);
        } else if (dir == "foodWelfare"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["","好的"], GlobalFuncVar.preloadList.iconPack3PS.getSpriteFrame("foodWelfare"));
        } else if (dir == "goldWelfare"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["","好的"], GlobalFuncVar.preloadList.iconPack3PS.getSpriteFrame("goldWelfare"));
        } else if (dir == "goldInterest"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["奖励金计算公式:\n奖励金 = 储蓄金 * 利率\n当前利率：0.1","好的"]);
        } else if (dir == "restart"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["Demo项目中，重置不会清除资源。\n请放心使用~","好的"]);
        } else if (dir == "sync"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["Demo项目可通过该按钮进行手动时钟更新。","好的"]);
        } else if (dir == "petDining"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["喂食请逐级投喂，不然萌鸡会噎到的~","好的"]);
        } else if (dir == "priceIntro"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["","好的"], GlobalFuncVar.preloadList.iconPack3PS.getSpriteFrame("priceIntro"));
        } else if (dir == "marketIntro"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["","好的"], GlobalFuncVar.preloadList.iconPack3PS.getSpriteFrame("marketIntro"));
        } else if (dir == "userRes"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["Demo项目中，收入和支出将会被隐藏~","好的"]);
        } else if (dir == "animi"){
            GlobalFuncVar.CallPopUp(this.node, "PopUpType1", ["Demo项目中玩家可解锁动画轮滚播放~","好的"]);
        } 
    },
});
