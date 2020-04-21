
// PrtName: 生父节点
// RtnName: 义父节点
window.GlobalFuncVar = {

    timeStamp : {
        absolute: null,
        relative: null,
    },

    sysDate: {
        MM: null,
        DD: null,
        HH: null,
        Minu: null,
        Secon: null, 
    },

    sysNodeDict: {
        "Calendar" : "AlertType1",
        "DailyTask" : "AlertType1",
        "PetDining" : "AlertType1",
    },

    sysPetTalentText : {
        dayu: ["Lv. 01   萌鸡活动后自动回复5点活力值","Lv. 02   萌鸡活动后自动回复5点活力值","Lv. 03   萌鸡活动后自动回复5点活力值","Lv. 04   萌鸡活动后自动回复5点活力值","Lv. 05   萌鸡活动后自动回复5点活力值",
                "Lv. 06   萌鸡活动后自动回复10点活力值","Lv. 07   萌鸡活动后自动回复10点活力值","Lv. 08   萌鸡活动后自动回复10点活力值","Lv. 09   萌鸡活动后自动回复10点活力值","Lv. 10   萌鸡活动后自动回复10点活力值",
                "Lv. 11   萌鸡活动后自动回复15点活力值","Lv. 12   萌鸡活动后自动回复15点活力值","Lv. 13   萌鸡活动后自动回复15点活力值","Lv. 14   萌鸡活动后自动回复15点活力值","Lv. 15   萌鸡活动后自动回复15点活力值",
                "Lv. 16   萌鸡活动后自动回复20点活力值","Lv. 17   萌鸡活动后自动回复20点活力值","Lv. 18   萌鸡活动后自动回复20点活力值","Lv. 19   萌鸡活动后自动回复20点活力值","Lv. 20   萌鸡活动后自动回复20点活力值",
                "Lv. 21   萌鸡活动后自动回复25点活力值","Lv. 22   萌鸡活动后自动回复25点活力值","Lv. 23   萌鸡活动后自动回复25点活力值","Lv. 24   萌鸡活动后自动回复25点活力值","Lv. 25   萌鸡活动后自动回复25点活力值",
                "Lv. 26   萌鸡活动后自动回复30点活力值","Lv. 27   萌鸡活动后自动回复30点活力值","Lv. 28   萌鸡活动后自动回复30点活力值","Lv. 29   萌鸡活动后自动回复30点活力值","Lv. 30   萌鸡活动后自动回复30点活力值",
                "Lv. 31   萌鸡活动后自动回复35点活力值","Lv. 32   萌鸡活动后自动回复35点活力值","Lv. 33   萌鸡活动后自动回复35点活力值","Lv. 34   萌鸡活动后自动回复35点活力值","Lv. 35   萌鸡活动后自动回复35点活力值",
                "Lv. 36   萌鸡活动后自动回复40点活力值","Lv. 37   萌鸡活动后自动回复40点活力值","Lv. 38   萌鸡活动后自动回复40点活力值","Lv. 39   萌鸡活动后自动回复40点活力值","Lv. 40   萌鸡活动后自动回复40点活力值",
                "Lv. 41   萌鸡活动后自动回复50点活力值","Lv. 42   萌鸡活动后自动回复50点活力值","Lv. 43   萌鸡活动后自动回复50点活力值","Lv. 44   萌鸡活动后自动回复50点活力值","Lv. 45   萌鸡活动后自动回复50点活力值",
                "Lv. 46   萌鸡活动后自动回复50点活力值","Lv. 47   萌鸡活动后自动回复50点活力值","Lv. 48   萌鸡活动后自动回复50点活力值","Lv. 49   萌鸡活动后自动回复50点活力值","Lv. 50   萌鸡活动后自动回复50点活力值",],
        duoduo: ["Lv. 01   打工后额外赚取1金币","Lv. 02   打工后额外赚取1金币","Lv. 03   打工后额外赚取1金币","Lv. 04   打工后额外赚取1金币","Lv. 05   打工后额外赚取1金币",
                "Lv. 06   打工后额外赚取2金币","Lv. 07   打工后额外赚取2金币","Lv. 08   打工后额外赚取2金币","Lv. 09   打工后额外赚取2金币","Lv. 10   打工后额外赚取2金币",
                "Lv. 11   打工后额外赚取3金币","Lv. 12   打工后额外赚取3金币","Lv. 13   打工后额外赚取3金币","Lv. 14   打工后额外赚取3金币","Lv. 15   打工后额外赚取3金币",
                "Lv. 16   打工后额外赚取4金币","Lv. 17   打工后额外赚取4金币","Lv. 18   打工后额外赚取4金币","Lv. 19   打工后额外赚取4金币","Lv. 20   打工后额外赚取4金币",
                "Lv. 21   打工后额外赚取5金币","Lv. 22   打工后额外赚取5金币","Lv. 23   打工后额外赚取5金币","Lv. 24   打工后额外赚取5金币","Lv. 25   打工后额外赚取5金币",
                "Lv. 26   打工后额外赚取6金币","Lv. 27   打工后额外赚取6金币","Lv. 28   打工后额外赚取6金币","Lv. 29   打工后额外赚取6金币","Lv. 30   打工后额外赚取6金币",
                "Lv. 31   打工后额外赚取7金币","Lv. 32   打工后额外赚取7金币","Lv. 33   打工后额外赚取7金币","Lv. 34   打工后额外赚取7金币","Lv. 35   打工后额外赚取7金币",
                "Lv. 36   打工后额外赚取8金币","Lv. 37   打工后额外赚取8金币","Lv. 38   打工后额外赚取8金币","Lv. 39   打工后额外赚取8金币","Lv. 40   打工后额外赚取8金币",
                "Lv. 41   打工后额外赚取9金币","Lv. 42   打工后额外赚取9金币","Lv. 43   打工后额外赚取9金币","Lv. 44   打工后额外赚取9金币","Lv. 45   打工后额外赚取9金币",
                "Lv. 46   打工后额外赚取10金币","Lv. 47   打工后额外赚取10金币","Lv. 48   打工后额外赚取10金币","Lv. 49   打工后额外赚取10金币","Lv. 50   打工后额外赚取10金币",],
        huanhuan: ["Lv. 01   采访后有10%概率获取额外新闻","Lv. 02   采访后有10%概率获取额外新闻","Lv. 03   采访后有10%概率获取额外新闻","Lv. 04   采访后有10%概率获取额外新闻","Lv. 05   采访后有10%概率获取额外新闻",
                    "Lv. 06   采访后有20%概率获取额外新闻","Lv. 07   采访后有20%概率获取额外新闻","Lv. 08   采访后有20%概率获取额外新闻","Lv. 09   采访后有20%概率获取额外新闻","Lv. 10   采访后有20%概率获取额外新闻",
                    "Lv. 11   采访后有30%概率获取额外新闻","Lv. 12   采访后有30%概率获取额外新闻","Lv. 13   采访后有30%概率获取额外新闻","Lv. 14   采访后有30%概率获取额外新闻","Lv. 15   采访后有30%概率获取额外新闻",
                    "Lv. 16   采访后有40%概率获取额外新闻","Lv. 17   采访后有40%概率获取额外新闻","Lv. 18   采访后有40%概率获取额外新闻","Lv. 19   采访后有40%概率获取额外新闻","Lv. 20   采访后有40%概率获取额外新闻",
                    "Lv. 21   采访后有50%概率获取额外新闻","Lv. 22   采访后有50%概率获取额外新闻","Lv. 23   采访后有50%概率获取额外新闻","Lv. 24   采访后有50%概率获取额外新闻","Lv. 25   采访后有50%概率获取额外新闻",
                    "Lv. 26   采访后有60%概率获取额外新闻","Lv. 27   采访后有60%概率获取额外新闻","Lv. 28   采访后有60%概率获取额外新闻","Lv. 29   采访后有60%概率获取额外新闻","Lv. 30   采访后有60%概率获取额外新闻",
                    "Lv. 31   采访后有70%概率获取额外新闻","Lv. 32   采访后有70%概率获取额外新闻","Lv. 33   采访后有70%概率获取额外新闻","Lv. 34   采访后有70%概率获取额外新闻","Lv. 35   采访后有70%概率获取额外新闻",
                    "Lv. 36   采访后有80%概率获取额外新闻","Lv. 37   采访后有80%概率获取额外新闻","Lv. 38   采访后有80%概率获取额外新闻","Lv. 39   采访后有80%概率获取额外新闻","Lv. 40   采访后有80%概率获取额外新闻",
                    "Lv. 41   采访后有90%概率获取额外新闻","Lv. 42   采访后有90%概率获取额外新闻","Lv. 43   采访后有90%概率获取额外新闻","Lv. 44   采访后有90%概率获取额外新闻","Lv. 45   采访后有90%概率获取额外新闻",
                    "Lv. 46   采访后有100%概率获取额外新闻","Lv. 47   采访后有100%概率获取额外新闻","Lv. 48   采访后有100%概率获取额外新闻","Lv. 49   采访后有100%概率获取额外新闻","Lv. 50   采访后有100%概率获取额外新闻",],
        maiqi: ["Lv. 01   务农后额外赚取10粮食","Lv. 02   务农后额外赚取10粮食","Lv. 03   务农后额外赚取10粮食","Lv. 04   务农后额外赚取10粮食","Lv. 05   务农后额外赚取10粮食",
                "Lv. 06   务农后额外赚取20粮食","Lv. 07   务农后额外赚取20粮食","Lv. 08   务农后额外赚取20粮食","Lv. 09   务农后额外赚取20粮食","Lv. 10   务农后额外赚取20粮食",
                "Lv. 11   务农后额外赚取30粮食","Lv. 12   务农后额外赚取30粮食","Lv. 13   务农后额外赚取30粮食","Lv. 14   务农后额外赚取30粮食","Lv. 15   务农后额外赚取30粮食",
                "Lv. 16   务农后额外赚取40粮食","Lv. 17   务农后额外赚取40粮食","Lv. 18   务农后额外赚取40粮食","Lv. 19   务农后额外赚取40粮食","Lv. 20   务农后额外赚取40粮食",
                "Lv. 21   务农后额外赚取50粮食","Lv. 22   务农后额外赚取50粮食","Lv. 23   务农后额外赚取50粮食","Lv. 24   务农后额外赚取50粮食","Lv. 25   务农后额外赚取50粮食",
                "Lv. 26   务农后额外赚取60粮食","Lv. 27   务农后额外赚取60粮食","Lv. 28   务农后额外赚取60粮食","Lv. 29   务农后额外赚取60粮食","Lv. 30   务农后额外赚取60粮食",
                "Lv. 31   务农后额外赚取70粮食","Lv. 32   务农后额外赚取70粮食","Lv. 33   务农后额外赚取70粮食","Lv. 34   务农后额外赚取70粮食","Lv. 35   务农后额外赚取70粮食",
                "Lv. 36   务农后额外赚取80粮食","Lv. 37   务农后额外赚取80粮食","Lv. 38   务农后额外赚取80粮食","Lv. 39   务农后额外赚取80粮食","Lv. 40   务农后额外赚取80粮食",
                "Lv. 41   务农后额外赚取90粮食","Lv. 42   务农后额外赚取90粮食","Lv. 43   务农后额外赚取90粮食","Lv. 44   务农后额外赚取90粮食","Lv. 45   务农后额外赚取90粮食",
                "Lv. 46   务农后额外赚取100粮食","Lv. 47   务农后额外赚取100粮食","Lv. 48   务农后额外赚取100粮食","Lv. 49   务农后额外赚取100粮食","Lv. 50   务农后额外赚取100粮食",],
    },
    
    sysPetIntro : {
        "dayu": "萌鸡大宇：三岁半\n小队憨萌担当\n憨厚害羞，但细心会照顾人\n天赋: 活力值损失减少",
        "duoduo": "萌鸡朵朵：三岁\n小队美萌担当\n爱美自信、且很有主见\n天赋：打工获得额外金币",
        "huanhuan": "萌鸡欢欢n两岁半\n小队逗萌担当\n顽皮淘气、且活泼开朗\n天赋：采访获取额外新闻",
        "maiqi": "萌鸡麦奇：一岁半\n小队软萌担当\n好奇宝宝、想象力丰富\n天赋：务农获得额外粮食",
    },

    sysNewsData : {
        newsNow: null,
        newsExtra: null,
        newsExtraExtra: null,
    },
    
    //// 20200311
    sysResInfo : {
        goldWelfare: null,
        foodHarvest: null,
        foodHarvestCount: null,
        foodWelfare: null,
        priceGoldYesterday: null,
        priceFoodYesterday: null,
        priceTrend: null,   //这个指的是过去五日的价格，是一个五个数字组成的数组
        priceGoldAvg: null,
        priceFoodAvg: null,
        goldInterestRate: null,
        goldWelfareThresold: null,
        foodWelfareThresold: null,
        priceFoodDynamic: null, //这个指的是动态价格，是一个数字
        priceFoodTrend: null, //这个指的是动态价格趋势，是一个1或者-1的数字
        shakeMax: null,
    
    },

    sysPetTalent : {
        sysPetTalent_DayuTalent: null,
        sysPetTalent_DuoduoTalent: null,
        sysPetTalent_HuanhuanTalent: null,
        sysPetTalent_MaiqiTalent: null,
    
    },
    
    sysActivityFeedback : {
        activityType0: null,
        activityType1: null,
        activityType2: null,
        activityType3: null,
        activityType4: null,  
    },

    userTaskInfo : {
        taskContent: null,
        taskHarvest: null,
        taskHarvestType: null,
        taskNode: null, // assign the node according to the tasks
        taskTier: [2, 2, 2], //////////////需要修正！！！！！
        taskCheckStandard: null,
    },
    
    userInfo : {
        name : null,
        INIT: null,
        existDay: null,
        timeLastAwardClick: null,
        ID : null,
        dailyLogon: null,
        goldHoldVolume: null,
        foodHoldVolume: null,
        goldIncome: null,
        goldConsume: null,
        foodIncome: null,
        goldInterest: null,
        goldDeposit: null,
        goldTradeValue: null,
        foodTradeValue: null,
        goldTradeFeedback: null,
        foodTradeFeedback: null,
        dailyAwardReady: null,
        tradeAwardReady: null,
        shakeShakeReady: null,
        goldInterestReady: null,
        goldWelfareReady: null,
        foodWelfareReady: null,
        foodHarvestReady: null,
        taskCheck: null,
        taskHarvested: null,
        newsExtra : null,  ///////////////////////////////////可能需要修正！！！
        shakeNum: null,
    },
    
    gameFlag: {
        userResUpdate: false,
        petInfoUpdate: false,
        petAnimiUpdate: true,
        popTime: true,
        restartAllGame: false,
        //// 20200305
        soundStatus: true,
        timeCheck: false,
        TutorialStep: null,
        showLock: true,
        onShowFlag: false,
        onHideFlag: false,
        newsViewed: false,
        userLeft: false,
        watcher: null,
    },

    userRankInfo : {
        friendNumber: 10,
        friendIDList: [1,2,3,4,5,6,7,8,9,10],///////////////////////////////////可能需要修正！！！
        firendNameList: ["a","b","c","d","e","f","i","j","k","l"],///////////////////////////////////可能需要修正！！！
        friendPetLevel: [88,20,7,8,1,5,4,3,2,1],///////////////////////////////////可能需要修正！！！
        friendGoldRes: [10,9,8,7,6,5,4,3,2,1],///////////////////////////////////可能需要修正！！！
        friendFoodRes: [1,2,3,4,5,6,7,8,9,10],///////////////////////////////////可能需要修正！！！
        friendPetType: ["dayu","duoduo","huanhuan","maiqi","dayu","duoduo","huanhuan","maiqi","dayu","duoduo"],///////////////////////////////////可能需要修正！！！
        friendPetLive: [11,22,33,44,55,66,77,88,99,100],///////////////////////////////////可能需要修正！！！
        selfPetFriendRank: null,///////////////////////////////////可能需要修正！！！
        selfGoldFriendRank: null,///////////////////////////////////可能需要修正！！！
        selfFoodFriendRank: null,///////////////////////////////////可能需要修正！！！
        selfPetWorldRank: null,
        worldIDList: null,
        worldNameList: null,
        worldPetLevel: null,
        worldGoldRes: null,
        worldFoodRes: null,
        worldPetType: null,
        worldRank: null,
        worldAvatar: null,
        avatarImage: {level:[], gold:[], food:[]},
        level:{rank:[], openid:[], name:[], avatar:[], type:[], level:[], gold:[], food:[]}, 
        gold:{rank:[], openid:[], name:[], avatar:[], type:[], level:[], gold:[], food:[]}, 
        food:{rank:[], openid:[], name:[], avatar:[], type:[], level:[], gold:[], food:[]},
    },

    userPetInfo : {
        petType: null,
        petLive: null,
        actiLeftDays: null,
        actiHarvest: null,  
        actiTypeCurrent: null,                                                                                                                                                                                                          
        actiAssigned: null,    //根据sysdata实时更新相关数据
        actiTypeNext: null,
        petExpeValueNow: null,
        petExpeTotNow: null,
        petLevel: null,
        petLevelMax: null,
    },

    preloadList : {
        iconPackPS: null,
        iconPack2PS: null,
        iconPack3PS: null,
        rankElement: null,
        rankElementPool: null,
        petTalent: null,
        petTalentPool: null,
        ActivityMain: null,
        Calendar: null,
        DailyTask: null,
        FoodBarn: null,
        GoldBank: null,
        More: null,
        NewsStation: null,
        PetDict: null,
        PetDining: null,
        PetInfo: null,
        RankView: null,
        ShakeShake: null,
        Share: null,
        Sync: null,
        TradeMarket: null,
        UndergrdMarket: null,
        UserRes: null,
        PopUpType1: null,
        PopUpType2: null,
        PopUpType3: null,
        PopUpType4: null,
        PopUpType5: null,
        PopUpType6: null,
        PopUpType7: null,
        MainView: null,
        SwitchView: null,
        Tutorial: null,
        AlertType1: null,
        AlertType2: null,
        AlertType2_copy: null,
        demoText: null,
    },

    childDomainList: {
        friendPet: null,
        friendGold: null,
        friendFood: null,
        world: null,
    },

    //// 20200309
    verbal: {
        tutorial : {
            TutorialText: "欢迎来到萌鸡森林！我是美嘉妈妈。从今天开始，你就要成为一名萌鸡训练师了！请在我的孩子们中选择一只，开始挑战吧！~",
            TutorialStep0: "小主人你好！我们就要开始互相陪伴，游历萌鸡森林啦！接下来，请点击对话框旁的按钮，看看萌鸡森林都有些什么好东西吧！~",
            TutorialStep1: "这里就是资源状态展示区~可以随时查看你的金币与粮食，以及我的等级与活力哦~~",
            TutorialStep2: "这里便是游戏信息展示区，请随意点击按钮瞧瞧看吧~",
            TutorialStep3: "这里是我的活动区~可以为我下达活动安排，进行粮食投喂等，随意点击按钮瞧瞧看吧~",
            TutorialStep4: "介绍完我们的私人地盘，再一起去萌鸡森林中看看吧~",
            TutorialStep5: "森林广播站每日都会发布新广播，有助训练师们了解市场动态与福利走向~\n萌鸡采访可以获得额外新闻哦~",
            TutorialStep6: "训练师可以在蝴蝶王子金库中，储蓄与提取金币，赚取利息；以及领取补助金哦~\n快来瞧瞧看吧！",
            TutorialStep7: "训练师可以在蜂鸟姐姐粮仓中领取丰收日奖励，以及领取救济粮哦~\n快来瞧瞧看~",
            TutorialStep8: "山羊爷爷市场是萌鸡森林的\"股票交易所\"，全森林的训练师可以在此进行金币与粮食投资，赚取\"利润\"~\n来一探究竟吧！",
            TutorialStep9: "熊猫交易所则是训练师们完成私下交易的宝地，可以接受微信好友的报价哦~",
            TutorialStep10: "好嘞！森林还有很多奇妙之处，我们一起慢慢探索吧！~",
        },
    },

    //// 20200309
    ShowDemoText: function(self, text, y){
        /*
        if (self.node.getChildByName("demoAlert") == null){
            var nodeTgt = GlobalFuncVar.preloadList.demoAlert;
            nodeTgt.parent = self.node;
            nodeTgt.x = 500;
            nodeTgt.y = y;
            nodeTgt.zIndex = 100;
            nodeTgt.getComponent(cc.Label).fontSize = 24;
            nodeTgt.getComponent(cc.Label).string = text;
            nodeTgt.getChildByName("demoAlert").getChildByName("demoText").getComponent(cc.Label).string = text;
            nodeTgt.active = true;
            

            self.schedule(function() {
                if (nodeTgt.parent!=null && nodeTgt.x >= -1000){
                    nodeTgt.x -= 2;
                } else if (nodeTgt.active == true) {
                    nodeTgt.removeFromParent(true);
                    //nodeTgt.destroy();
                }
            }, 0.01, 1000, 0);
        }
        */
    },

    GetRankIndex: function(FLAG_1, FLAG_2){
        /////////
        if (FLAG_1 == "friend" && FLAG_2 == "pet"){
            var SORTARRAY = [...GlobalFuncVar.userRankInfo.friendPetLevel];
            var TEMPARRAY = [...GlobalFuncVar.userRankInfo.friendPetLevel];
        } else if (FLAG_1 == "friend" && FLAG_2 == "gold") {
            var SORTARRAY = [...GlobalFuncVar.userRankInfo.friendGoldRes];
            var TEMPARRAY = [...GlobalFuncVar.userRankInfo.friendGoldRes];
        } else if (FLAG_1 == "friend" && FLAG_2 == "food") {
            var SORTARRAY = [...GlobalFuncVar.userRankInfo.friendFoodRes];
            var TEMPARRAY = [...GlobalFuncVar.userRankInfo.friendFoodRes];
        }
    
        SORTARRAY.sort(function(a, b) {
            return b-a;
          });
        var INDEXLIST = [];
        for (let i=0; i<SORTARRAY.length; i++){
            INDEXLIST.push(TEMPARRAY.indexOf(SORTARRAY[i]));
        }
    
        return INDEXLIST
    },
    
    GetSelfRankIndex: function(FLAG_1, FLAG_2, TARGETLIST){
    
        if (FLAG_1 == "friend" && FLAG_2 == "pet"){
            for (let i=0; i<TARGETLIST.length; i++){
                if (GlobalFuncVar.userPetInfo.petLevel > TARGETLIST[i]){
                    return i
                }
            }
        } else if (FLAG_1 == "friend" && FLAG_2 == "gold") {
            for (let i=0; i<TARGETLIST.length; i++){
                if (GlobalFuncVar.userInfo.goldHoldVolume > TARGETLIST[i]){
                    return i
                }
            }
        } else if (FLAG_1 == "friend" && FLAG_2 == "food") {
            for (let i=0; i<TARGETLIST.length; i++){
                if (GlobalFuncVar.userInfo.foodHoldVolume > TARGETLIST[i]){
                    return i
                }
            }
        } else if (FLAG_1 == "world" && FLAG_2 == "na"){
            for (let i=0; i<TARGETLIST.length; i++){
                if (GlobalFuncVar.userInfo.petLevel > TARGETLIST[i]){
                    return i
                }
            }
            return GlobalFuncVar.userRankInfo.selfPetWorldRank-1
        };
        return TARGETLIST.length
    
    },

    getNodeInfo: function(node, nodeName){
        GlobalFuncVar.sysNodeDict[nodeName] = node;
    },

    TutorialPrefab: function(FabName, PrtName, FabInfo, RtnName){
        FabInfo = FabInfo ? FabInfo : "FabInfo: <blank>";
        RtnName = RtnName ? RtnName : PrtName;

        if (PrtName.getChildByName(FabName) != null){
            var node = PrtName.getChildByName(FabName);
            node = node.getComponent("c"+FabName);
            node.onShow(FabInfo, PrtName);
    }
        else {
            /*
            cc.loader.loadRes("/Tier1/"+FabName, function(err, prefab){
                if (err) {return console.log("cannot find prefab: " + FabName)};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabName);
                // node = node.getComponent("cMainView");
                node.onShow(FabInfo, PrtName); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.Tutorial;
            //console.log("LOCAL ","Tutorial节点", node);
            if (node){
                PrtName.addChild(node);
                node = node.getComponent("c"+FabName);
                // node = node.getComponent("cMainView");
                node.onShow(FabInfo, PrtName); // 返回义父节点
            } else {
                // robust algorithm should be added.
                //console.log("LOCAL", "Tutorial鲁棒性逻辑触发");
                setTimeout(function () {
                    node = GlobalFuncVar.preloadList.Tutorial;
                    PrtName.addChild(node);
                    node = node.getComponent("c"+FabName);
                    // node = node.getComponent("cMainView");
                    node.onShow(FabInfo, PrtName);
                }.bind(this), 3000);
            }

        }
    },

    //// 20200308
    WelcomePrefab: function(FabName, PrtName, FabInfo, RtnName, CallFunc){
        FabInfo = FabInfo ? FabInfo : "FabInfo: <blank>";
        RtnName = RtnName ? RtnName : PrtName;

        if (PrtName.getChildByName(FabName) != null){
            var node = PrtName.getChildByName(FabName);
            node = node.getComponent("c"+FabName);
            node.onShow(FabInfo, PrtName, CallFunc);
        }
        else {
            cc.loader.loadRes("/Tier1/"+FabName, function(err, prefab){
                if (err) {return console.log("cannot find prefab: " + FabName)};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabName);
                // node = node.getComponent("cMainView");
                node.onShow(FabInfo, PrtName, CallFunc); // 返回义父节点
            }.bind(this))
            
            
            /*
            var node = GlobalFuncVar.preloadList[FabName];
            PrtName.addChild(node);
            node = node.getComponent("c"+FabName);
            // node = node.getComponent("cMainView");
            node.onShow(FabInfo, PrtName, CallFunc); // 返回义父节点
            */
        }
    },

    TierOnePrefab: function(FabName, PrtName, FabInfo, RtnName, CallFunc){
        FabInfo = FabInfo ? FabInfo : "FabInfo: <blank>";
        RtnName = RtnName ? RtnName : PrtName;

        if (PrtName.getChildByName(FabName) != null){
            var node = PrtName.getChildByName(FabName);
            node = node.getComponent("c"+FabName);
            node.onShow(FabInfo, PrtName, CallFunc);
        }
        else {
            
            /*
            cc.loader.loadRes("/Tier1/"+FabName, function(err, prefab){
                if (err) {return console.log("cannot find prefab: " + FabName)};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabName);
                // node = node.getComponent("cMainView");
                node.onShow(FabInfo, PrtName, CallFunc); // 返回义父节点
            }.bind(this))
            */
            var node = GlobalFuncVar.preloadList[FabName];
            //console.log("LOCAL ","MainView节点", node);
            if (node){
                PrtName.addChild(node);
                node = node.getComponent("c"+FabName);
                // node = node.getComponent("cMainView");
                node.onShow(FabInfo, PrtName, CallFunc); // 返回义父节点
            } else {
                // robust algorithm should be added.
                //console.log("LOCAL", "MainView鲁棒性逻辑触发");
                setTimeout(function () {
                    node = GlobalFuncVar.preloadList[FabName];
                    PrtName.addChild(node);
                    node = node.getComponent("c"+FabName);
                    // node = node.getComponent("cMainView");
                    node.onShow(FabInfo, PrtName, CallFunc);
                }.bind(this), 3000);
            }
            
        }
    },

    //// 20200304
    TierTwoPrefab: function(FabName, PrtName, FabInfo, RtnName, CallFunc){
        FabInfo = FabInfo ? FabInfo : "FabInfo: <blank>";
        RtnName = RtnName ? RtnName : PrtName;
    
        if (PrtName.getChildByName(FabName) != null){
            var node = PrtName.getChildByName(FabName);
            if (FabName != "AlertType1"){
                node = node.getComponent("cAlertType");
                node.onShow(FabInfo, RtnName, null, CallFunc);
            }
            else {
                node = node.getComponent("cFadeInFadeOut");
                node.onFadeIn(FabInfo, RtnName, "AlertType1", CallFunc, "cAlertType"); // 返回义父节点
            }
        }
        else {
            /*
            cc.loader.loadRes("/Tier2/"+FabName, function(err, prefab){
                if (err) {return console.log("cannot find prefab: " + FabName)};
        
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("cAlertType");
                node.onShow(FabInfo, RtnName, CallFunc); //返回义父节点
            }.bind(this))
            */
            
            var node = GlobalFuncVar.preloadList[FabName];
            if (node.parent != null){
                node.removeFromParent(true);
            }
            PrtName.addChild(node);
            if (FabName != "AlertType1"){
                node = node.getComponent("cAlertType");
                node.onShow(FabInfo, RtnName, null, CallFunc); //返回义父节点
            } else {
                node = node.getComponent("cFadeInFadeOut");
                node.onFadeIn(FabInfo, RtnName, "AlertType1", CallFunc, "cAlertType"); // 返回义父节点
            }
            
        }
    },

    CallSyncTimeOrRestart: function(PrtName, FabInfo, CallFunc){

        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.Sync;
            PrtName.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },

    CallCalendar: function(PrtName, FabInfo, CallFunc){

        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.Calendar;
            PrtName.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallDailyTask: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.DailyTask;
            PrtName.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallPetDict: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.PetDict;
            PrtName.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallPetInfo: function(PrtName, FabInfo, PetName, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, PetName, CallFunc);
        }
        else {
            
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.parent.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, PetName, CallFunc); // 返回义父节点
            }.bind(this))
            
            /*
            var node = GlobalFuncVar.preloadList.PetInfo;
            PrtName.parent.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, PetName, CallFunc); // 返回义父节点
            */
        }
        
    },
    
    CallShare: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.Share;
            PrtName.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallMore: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.More;
            PrtName.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallActivityMain: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

            var node = GlobalFuncVar.preloadList.ActivityMain;
            PrtName.addChild(node);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallPetDining: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.PetDining;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallRankView: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.RankView;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallShakeShake: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.ShakeShake;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallNewsStation: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.NewsStation;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallGoldBank: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.GoldBank;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallFoodBarn: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.FoodBarn;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },
    
    CallTradeMarket: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.TradeMarket;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },

    CallUndergrdMarket: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.UndergrdMarket;
           PrtName.addChild(node);
           node = node.getComponent("c"+FabInfo);
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },

    CallUserRes: function(PrtName, FabInfo, CallFunc){
    
        var err = PrtName ? null : "No Parent Found";
        var err2 = FabInfo ? null : "No FabInfo Found";
        if (err != null){return err};
        if (err2 != null){return err2};
    
        if (PrtName.getChildByName(FabInfo) != null){
            var node = PrtName.getChildByName(FabInfo);
            node = node.getComponent("c"+FabInfo);
            node.onShow(PrtName, FabInfo, CallFunc);
        }
        else {
            /*
            cc.loader.loadRes("/Content/"+FabInfo, function(err, prefab){
                if (err) {return console.log("cannot find content")};
                var node = cc.instantiate(prefab);
                PrtName.addChild(node);
                node = node.getComponent("c"+FabInfo);
                node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
            }.bind(this))
            */

           var node = GlobalFuncVar.preloadList.UserRes;
           PrtName.addChild(node);
           node = node.getComponent("c"+"UserRes");
           node.onShow(PrtName, FabInfo, CallFunc); // 返回义父节点
        }
        
    },

    //// 20200307
    CallPopUp: function(PrtName, FabInfo, Hint, CallFunc){
        
        cc.loader.loadRes("/PopUp/"+FabInfo, function(err, prefab){
            if (err) {return console.log("cannot find prefab: " + FabInfo)};
            var node = cc.instantiate(prefab);
            PrtName.addChild(node);
            node = node.getComponent("cPopUp");
            //node.onShow(PrtName, FabInfo, Hint,CallFunc); // 返回义父节点
            node = node.getComponent("cFadeInFadeOut");
            node.onFadeIn(PrtName, FabInfo, Hint, CallFunc, "cPopUp"); // 返回义父节点
        }.bind(this))
        

        /*
        var node = GlobalFuncVar.preloadList.PopUpType1;
        if (node.parent!=null){
            node.removeFromParent(true);
        }
        PrtName.addChild(node);
        //node = node.getComponent("cPopUp");
        //node.onShow(PrtName, FabInfo, Hint,CallFunc); // 返回义父节点

        node = node.getComponent("cFadeInFadeOut");
        node.onFadeIn(PrtName, FabInfo, Hint, CallFunc, "cPopUp"); // 返回义父节点
        */
    },
    
    //// 20200304
    CallDoubleConfirm: function(PrtName, FabInfo, Hint, CallFunc){
        /*
        cc.loader.loadRes("/PopUp/"+FabInfo, function(err, prefab){
            if (err) {return console.log("cannot find prefab: " + FabInfo)};
            var node = cc.instantiate(prefab);
            PrtName.addChild(node);
            node = node.getComponent("cDoubleConfirm");
            node.onShow(PrtName, FabInfo, Hint, CallFunc); // 返回义父节点
        }.bind(this))
        */

        var node = GlobalFuncVar.preloadList.PopUpType2;
        PrtName.addChild(node);
        //node = node.getComponent("cDoubleConfirm");
        //node.onShow(PrtName, FabInfo, Hint, CallFunc); // 返回义父节点

        node = node.getComponent("cFadeInFadeOut");
        node.onFadeIn(PrtName, FabInfo, Hint, CallFunc, "cDoubleConfirm"); // 返回义父节点
    },
    
    //// 20200304
    CallDoubleConfirm_GoldBank: function(PrtName, FabInfo, Hint, dataPack, CallFunc){
        /*
        cc.loader.loadRes("/PopUp/"+FabInfo, function(err, prefab){
            if (err) {return console.log("cannot find prefab: " + FabInfo)};
            var node = cc.instantiate(prefab);
            PrtName.addChild(node);
            node = node.getComponent("cDoubleConfirm_GoldBank");
            node.onShow(PrtName, FabInfo, Hint, dataPack, CallFunc); // 返回义父节点
        }.bind(this))
        */

        var node = GlobalFuncVar.preloadList.PopUpType3;
        PrtName.addChild(node);
        //node = node.getComponent("cDoubleConfirm_GoldBank");
        //node.onShow(PrtName, FabInfo, Hint, dataPack, CallFunc); // 返回义父节点

        node = node.getComponent("cFadeInFadeOut");
        node.onFadeIn(PrtName, FabInfo, Hint, dataPack, "cDoubleConfirm_GoldBank"); // 返回义父节点
    },
    
    //// 20200304
    CallDoubleConfirm_TradeMarket: function(PrtName, FabInfo, Hint, dataPack, CallFunc){
        /*
        cc.loader.loadRes("/PopUp/"+FabInfo, function(err, prefab){
            if (err) {return console.log("cannot find prefab: " + FabInfo)};
            var node = cc.instantiate(prefab);
            PrtName.addChild(node);
            node = node.getComponent("cDoubleConfirm_TradeMarket");
            node.onShow(PrtName, FabInfo, Hint, dataPack, CallFunc); // 返回义父节点
        }.bind(this))
        */

        var node = GlobalFuncVar.preloadList.PopUpType4;
        PrtName.addChild(node);
        //node = node.getComponent("cDoubleConfirm_TradeMarket");
        //node.onShow(PrtName, FabInfo, Hint, dataPack, CallFunc); // 返回义父节点

        node = node.getComponent("cFadeInFadeOut");
        node.onFadeIn(PrtName, FabInfo, Hint, dataPack, "cDoubleConfirm_TradeMarket"); // 返回义父节点
    },

    CallDoubleConfirm_Init: function(PrtName, FabInfo, Hint, dataPack, CallFunc){
        /*
        cc.loader.loadRes("/PopUp/"+FabInfo, function(err, prefab){
            if (err) {return console.log("cannot find prefab: " + FabInfo)};
            var node = cc.instantiate(prefab);
            PrtName.addChild(node);
            node = node.getComponent("cDoubleConfirm_Init");
            node.onShow(PrtName, FabInfo, Hint, dataPack, CallFunc); // 返回义父节点
        }.bind(this))
        */

        var node = GlobalFuncVar.preloadList.PopUpType6;
        PrtName.addChild(node);
        //node = node.getComponent("cDoubleConfirm_Init");
        //node.onShow(PrtName, FabInfo, Hint, dataPack, CallFunc); // 返回义父节点

        node = node.getComponent("cFadeInFadeOut");
        node.onFadeIn(PrtName, FabInfo, Hint, dataPack, "cDoubleConfirm_Init", CallFunc); // 返回义父节点
    },

    CallTimeAlert: function(PrtName, FabInfo, Hint, CallFunc){
        /*
        cc.loader.loadRes("/PopUp/"+FabInfo, function(err, prefab){
            if (err) {return console.log("cannot find prefab: " + FabInfo)};
            var node = cc.instantiate(prefab);
            PrtName.addChild(node);
            GlobalFuncVar.BringToFront(PrtName,node);
            node = node.getComponent("cTimeAlert");
            node.onShow(PrtName, FabInfo, Hint, CallFunc); // 返回义父节点
        }.bind(this))
        */

        var node = GlobalFuncVar.preloadList.PopUpType5;
        if (PrtName.getChildByName("PopUpType5") != null){
            PrtName.removeChild(node);
            //console.log("childRemoved");
        }
        PrtName.addChild(node);
        GlobalFuncVar.BringToFront(PrtName,node);
        //node = node.getComponent("cTimeAlert");
        //node.onShow(PrtName, FabInfo, Hint, CallFunc); // 返回义父节点

        node = node.getComponent("cFadeInFadeOut");
        node.onFadeIn(PrtName, FabInfo, Hint, CallFunc, "cTimeAlert"); // 返回义父节点
    },

    CallPopUpRestart: function(PrtName, FabInfo, Hint, CallFunc){
        /*
        cc.loader.loadRes("/PopUp/"+FabInfo, function(err, prefab){
            if (err) {return console.log("cannot find prefab: " + FabInfo)};
            var node = cc.instantiate(prefab);
            PrtName.addChild(node);
            node = node.getComponent("cPopUpRestart");
            node.onShow(PrtName, FabInfo, Hint,CallFunc); // 返回义父节点
        }.bind(this))
        */

        var node = GlobalFuncVar.preloadList.PopUpType7;
        PrtName.addChild(node);
        //node = node.getComponent("cPopUpRestart");
        //node.onShow(PrtName, FabInfo, Hint,CallFunc); // 返回义父节点

        node = node.getComponent("cFadeInFadeOut");
        node.onFadeIn(PrtName, FabInfo, Hint, CallFunc, "cPopUpRestart"); // 返回义父节点
    },

    DateTransfer: function(){
        let dateCH = {
            MM1: null,
            MM2: null,
            DD1: null,
            MM2: null,
        };

        if ((GlobalFuncVar.sysDate.MM % 10) == 0){
            dateCH.MM1 = "〇";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 1){
            dateCH.MM1 = "壹";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 2){
            dateCH.MM1 = "贰";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 3){
            dateCH.MM1 = "叁";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 4){
            dateCH.MM1 = "肆";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 5){
            dateCH.MM1 = "伍";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 6){
            dateCH.MM1 = "陆";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 7){
            dateCH.MM1 = "柒";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 8){
            dateCH.MM1 = "捌";
        } else if ((GlobalFuncVar.sysDate.MM % 10) == 9){
            dateCH.MM1 = "玖";
        };

        if ((GlobalFuncVar.sysDate.DD % 10) == 0){
            dateCH.DD1 = "〇";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 1){
            dateCH.DD1 = "壹";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 2){
            dateCH.DD1 = "贰";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 3){
            dateCH.DD1 = "叁";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 4){
            dateCH.DD1 = "肆";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 5){
            dateCH.DD1 = "伍";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 6){
            dateCH.DD1 = "陆";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 7){
            dateCH.DD1 = "柒";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 8){
            dateCH.DD1 = "捌";
        } else if ((GlobalFuncVar.sysDate.DD % 10) == 9){
            dateCH.DD1 = "玖";
        };

        if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 0){
            dateCH.MM2 = "〇";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 1){
            dateCH.MM2 = "壹";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 2){
            dateCH.MM2 = "贰";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 3){
            dateCH.MM2 = "叁";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 4){
            dateCH.MM2 = "肆";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 5){
            dateCH.MM2 = "伍";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 6){
            dateCH.MM2 = "陆";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 7){
            dateCH.MM2 = "柒";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 8){
            dateCH.MM2 = "捌";
        } else if (Math.floor(GlobalFuncVar.sysDate.MM / 10) == 9){
            dateCH.MM2 = "玖";
        };

        if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 0){
            dateCH.DD2 = "〇";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 1){
            dateCH.DD2 = "壹";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 2){
            dateCH.DD2 = "贰";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 3){
            dateCH.DD2 = "叁";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 4){
            dateCH.DD2 = "肆";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 5){
            dateCH.DD2 = "伍";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 6){
            dateCH.DD2 = "陆";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 7){
            dateCH.DD2 = "柒";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 8){
            dateCH.DD2 = "捌";
        } else if (Math.floor(GlobalFuncVar.sysDate.DD / 10) == 9){
            dateCH.DD2 = "玖";
        };

        return dateCH


    },

    //// 20200302
    resPreload(){
        // 提前加载图集
        cc.loader.loadRes("/IconPack/iconPack", cc.SpriteAtlas, function (err, atlas) {
            GlobalFuncVar.preloadList.iconPackPS = atlas;
        });

        cc.loader.loadRes("/IconPack/iconPack2", cc.SpriteAtlas, function (err, atlas) {
            GlobalFuncVar.preloadList.iconPack2PS = atlas;
        });

        cc.loader.loadRes("/IconPack/iconPack3", cc.SpriteAtlas, function (err, atlas) {
            GlobalFuncVar.preloadList.iconPack3PS = atlas;
        });

        //console.log("LOCAL Tutorial加载开始");
        cc.loader.loadRes("/Tier1/"+"Tutorial", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.Tutorial = cc.instantiate(prefab);
            //console.log("LOCAL Tutorial加载完成");
        })

        //console.log("LOCAL MainView加载开始");
        cc.loader.loadRes("/Tier1/"+"MainView", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.MainView = cc.instantiate(prefab);
            //console.log("LOCAL MainView加载完成");
        })

        cc.loader.loadRes("/Tier2/"+"AlertType1", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.AlertType1 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Tier2/"+"AlertType2", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.AlertType2 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Tier2/"+"AlertType2_copy", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.AlertType2_copy = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Element/demoAlert", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.demoAlert = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Tier1/"+"SwitchView", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.SwitchView = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"ActivityMain", function(err, prefab){
            if (err) {return console.log("cannot find content" )};
            GlobalFuncVar.preloadList.ActivityMain = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"Calendar", function(err, prefab){
            if (err) {return console.log("cannot find content:")};
            GlobalFuncVar.preloadList.Calendar = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"DailyTask", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.DailyTask = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"FoodBarn", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.FoodBarn = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"GoldBank", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.GoldBank = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"More", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.More = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"NewsStation", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.NewsStation = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"PetDict", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PetDict = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"PetDining", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PetDining = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"PetInfo", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PetInfo = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"RankView", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.RankView = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"ShakeShake", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.ShakeShake = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"Share", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.Share = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"Sync", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.Sync = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"TradeMarket", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.TradeMarket = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"UndergrdMarket", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.UndergrdMarket = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/Content/"+"UserRes", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.UserRes = cc.instantiate(prefab);
        })
        
        cc.loader.loadRes("/PopUp/"+"PopUpType1", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PopUpType1 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/PopUp/"+"PopUpType2", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PopUpType2 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/PopUp/"+"PopUpType3", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PopUpType3 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/PopUp/"+"PopUpType4", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PopUpType4 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/PopUp/"+"PopUpType5", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PopUpType5 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/PopUp/"+"PopUpType6", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PopUpType6 = cc.instantiate(prefab);
        })

        cc.loader.loadRes("/PopUp/"+"PopUpType7", function(err, prefab){
            if (err) {return console.log("cannot find content")};
            GlobalFuncVar.preloadList.PopUpType7 = cc.instantiate(prefab);
        })

        // 提前加载petTalent，并放入对象池
        cc.loader.loadRes("/Element/TalentIntro", function(err, prefab){
            if (err) {return console.log("cannot find element: RankItem")};
            GlobalFuncVar.preloadList.petTalent = prefab;
            GlobalFuncVar.preloadList.petTalentPool = new cc.NodePool();
            let initCount = 200;
            for (let i = 0; i < initCount; ++i) {
            let element = cc.instantiate(GlobalFuncVar.preloadList.petTalent); // 创建节点
            GlobalFuncVar.preloadList.petTalentPool.put(element); // 通过 put 接口放入对象池
            }
        });

        // 提前加载rankview，并放入对象池
        cc.loader.loadRes("/Element/selfRankItem", function(err, prefab){
            if (err) {return console.log("cannot find element: RankItem")};
            GlobalFuncVar.preloadList.rankElement = prefab;
            GlobalFuncVar.preloadList.rankElementPool = new cc.NodePool();
            let initCount = 20;
            for (let i = 0; i < initCount; ++i) {
            let element = cc.instantiate(GlobalFuncVar.preloadList.rankElement); // 创建节点
            GlobalFuncVar.preloadList.rankElementPool.put(element); // 通过 put 接口放入对象池
            }
        });
        
        
    },

    avatarPreload(){
        console.log("加载用户avatar");
        let totNum = GlobalFuncVar.userRankInfo.level.avatar.length;
        for (let i=0; i<totNum; i++){
            cc.loader.load({
                url: GlobalFuncVar.userRankInfo.level.avatar[i],
                type: "png",
            }, (err, texture) => {
                if (err){
                    console.error(err);
                }
                let sprite = new cc.SpriteFrame(texture);
                GlobalFuncVar.userRankInfo.avatarImage.level[i] = sprite;
            })

            cc.loader.load({
                url: GlobalFuncVar.userRankInfo.gold.avatar[i],
                type: "png",
            }, (err, texture) => {
                if (err){
                    console.error(err);
                }
                let sprite = new cc.SpriteFrame(texture);
                GlobalFuncVar.userRankInfo.avatarImage.gold[i] = sprite;
            })

            cc.loader.load({
                url: GlobalFuncVar.userRankInfo.food.avatar[i],
                type: "png",
            }, (err, texture) => {
                if (err){
                    console.error(err);
                }
                let sprite = new cc.SpriteFrame(texture);
                GlobalFuncVar.userRankInfo.avatarImage.food[i] = sprite;
            })
        
        }

    },

    childDomainPreload(){
        // 举个例子，需要修改为子域
        cc.loader.loadRes("/IconPack/viewPack", cc.SpriteAtlas, function (err, atlas) {
            GlobalFuncVar.childDomainList.friendPet = atlas.getSpriteFrame("MainViewPS");
            GlobalFuncVar.childDomainList.friendGold = atlas.getSpriteFrame("switchViewPS");
            GlobalFuncVar.childDomainList.friendFood = atlas.getSpriteFrame("MainViewPS");
            GlobalFuncVar.childDomainList.world = atlas.getSpriteFrame("switchViewPS");
        });
    },

    SetActiTypeIconUpdate(actiType, spriteNode, self){
        // 从图集中加载
        if(actiType == 1){
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiWorkPS");
        } else if (actiType == 2) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiFarmPS");
        } else if (actiType == 3) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiInterviewPS");
        } else if (actiType == 4) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiSleepPS");
        } else {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiPlayPS");
        }
    },

    SetActiExpIconUpdate(actiType, spriteNode, self){
        if(actiType == 1){
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("goldCoinPS");
        } else if (actiType == 2) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("foodWheatPS");
        } else if (actiType == 3) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("newsHornPS");
        } else if (actiType == 4) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("livePS");
        } else {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
        }
    },

    SetActiProgressLevel(actiType, progressNow, spriteNode, self){
        // 从图集中加载
        if(actiType == 1){
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiProgressLevel" + (3-progressNow) + "-3PS");
        } else if (actiType == 2) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiProgressLevel" + (2-progressNow) + "-2PS");
        } else if (actiType == 3) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiProgressLevel" + (1-progressNow) + "-1PS");
        } else if (actiType == 4) {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiProgressLevel" + (5-progressNow) + "-5PS");
        } else {
            //spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("actiProgressLevel" + (5-progressNow) + "-5PS");
            spriteNode.spriteFrame = null;
        }
    },

    SetPetSelfieIconUpdate(petType, spriteNode, self){
        if(petType == "dayu" || petType == "大宇"){
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("dayuSelfiePS");
        } else if (petType == "duoduo" || petType == "朵朵") {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("duoduoSelfiePS");
        } else if (petType == "huanhuan" || petType == "欢欢") {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("huanhuanSelfiePS");
        } else if (petType == "maiqi" || petType == "麦奇") {
            spriteNode.spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("maiqiSelfiePS");
        } 
    },

    BringToFront(prtName,childName){
        var childNum = prtName.childrenCount;
        childName.zIndex = childNum + 1;
    },

    requestDataPack(dateTemp){
        var dataPackLogon = {
            dataType: "logon",

            timeStamp: {
                absolute: dateTemp.getTime(),
                relative: 0,

            },
            sysDate: {
                MM: dateTemp.getMonth()+1,
                DD: dateTemp.getDate(),
                HH: dateTemp.getHours(),
                Minu: dateTemp.getMinutes(),
                Secon: dateTemp.getSeconds(),
            }, 
            sysNewsData : {
                newsNow: "《萌鸡小队》是奥飞娱乐股份有限公司出品的一部学龄前电视动画片，也是国内首部社交成长主题的正向育儿理念卡通。该片主要讲述了四只萌鸡宝宝在妈妈的关爱下，在大森林中与其他小动物一同快乐相处，共同成长的故事。萌鸡妈妈美佳开明又热心，萌鸡们活泼又可爱。他们互相帮助，四处探险，还结交了很多新朋友，让小朋友们在领略大自然的奥妙的同时，也在萌鸡身上学到许多美好品质。作品于2017年11月6日在全网上线。",
                newsExtra: "《萌鸡小队》讲述了四只萌鸡宝宝在妈妈的关爱下，与其他小动物一同快乐相处，共同成长的故事。在遥远的大森林里，有一棵美丽的大树，大树底下被弹性十足的蘑菇和争奇斗艳的花朵包围着，形成了一个宽阔的大自然游乐场，这就是萌鸡们的家。萌鸡妈妈美佳开明又热心，四只萌鸡宝宝（大哥大宇、二姐朵朵、三哥欢欢、小弟麦奇）活泼又可爱。他们互相帮助，四处探险，还结交了很多新朋友，共同描绘出一幅清新童趣的森林画卷，让小朋友们在领略大自然的奥妙的同时，也在萌鸡身上学到许多美好品质。",
                newsExtraExtra: "萌鸡森林游戏是小维的成长之路团队出品的第一款游戏，集合了萌宠养成与回合交易两个方面的元素",
            },
            sysResInfo : {
                goldWelfare: 2,
                foodHarvest: 100,
                foodHarvestCount: 3,
                foodWelfare: 50,
                priceGoldYesterday: 0,
                priceFoodYesterday: 0,
                priceTrend: [0, 0, 0, 0, 0],
                priceGoldAvg: 0,
                priceFoodAvg: 0,
                goldInterestRate: 0.1,
                goldWelfareThresold: 1000,
                foodWelfareThresold: 1000,
            
            },
            sysPetTalent : {
                sysPetTalent_DayuTalent: [0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,10,10,10,10,10,10,10,10,10,10,15,15,15,15,15,15,15,15,15,15,20,20,20,20,20,20,20,20,20,20,25,25,25,25,25,25,25,25,25,25],
                sysPetTalent_DuoduoTalent: [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5],
                sysPetTalent_HuanhuanTalent: [0,0,0,0,0,0,0,0,0,0,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9],
                sysPetTalent_MaiqiTalent: [0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,10,10,10,10,10,10,10,10,10,10,15,15,15,15,15,15,15,15,15,15,20,20,20,20,20,20,20,20,20,20,25,25,25,25,25,25,25,25,25,25],
            
            },
            sysActivityFeedback : {
                activityType0: [0, 0, null, 0],
                activityType1: [3, 10, "gold",25],
                activityType2: [2, 400, "food",15],
                activityType3: [1, "额外新闻", "news",5],
                activityType4: [5, 100, "live",0],  
            },
            userTaskInfo : {
                taskContent: ["打开日历", "萌鸡打到lv.5", "完成一次萌鸡喂养"],
                taskHarvest: [5,50,100],
                taskHarvestType: ["gold","food","live"],
                taskNode: ["Calendar", "PetDining", "PetDining"], // assign the node according to the tasks
                taskCheckStandard: [10001,12340,33330],
            },
            
            userInfo : {
                name : "ren",
                INIT: true,
                ID : "1111111",
                existDay: 10,
                dailyLogon: [10,100], 
                goldHoldVolume: 50,
                foodHoldVolume: 500,
                goldIncome: 123,
                goldConsume: 321,
                foodIncome: 8888,
                goldInterest: 5,
                goldDeposit: 50,
                goldTradeValue: 0,
                foodTradeValue: 0,
                goldTradeFeedback: 0,
                foodTradeFeedback: 0,
                shakeShakeReady: 1,
                tradeAwardReady: 0,
                dailyAwardReady: 1,
                goldInterestReady: 1,
                goldWelfareReady: 1,
                foodWelfareReady: 1,
                foodHarvestReady: 0,
                taskCheckNow: [10001,12340,33330],
                taskHarvested: [1,1,1],
            },
        
            userRankInfo : {
                // 好友排行榜数据

                selfPetWorldRank: 1000000,
                worldIDList: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                worldNameList: ["a","b","c","d","e","f","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"],
                worldPetLevel: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                worldGoldRes: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                worldFoodRes: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                worldPetType: ["dayu","duoduo","huanhuan","maiqi","dayu","duoduo","huanhuan","maiqi","dayu","duoduo","dayu","duoduo","huanhuan","maiqi","dayu","duoduo","huanhuan","maiqi","dayu","duoduo"],
            },
        
            userPetInfo : {
                petType: "dayu",
                petLive: 50,
                actiLeftDays: 0,
                actiTypeCurrent: 1,
                actiHarvest: 1,   // need the clock to change                                                                                                                                                                                      
                actiAssigned: 0,    //根据sysdata实时更新相关数据
                actiTypeNext: 0,
                petExpeValueNow: 0,
                petExpeTotNow: 1000,
                petLevel: 15,
                petLevelMax: 1000,
            },
        };

        return dataPackLogon
    },

    dataTransfer: function(dataPack, dataType){
        if (dataType == "logon"){

            GlobalFuncVar.timeStamp = dataPack.timeStamp;

            GlobalFuncVar.sysDate = dataPack.sysDate;

            GlobalFuncVar.sysNewsData = dataPack.sysNewsData;

            GlobalFuncVar.sysResInfo = dataPack.sysResInfo;

            // GlobalFuncVar.sysPetTalentText = dataPack.sysPetTalentText;

            // GlobalFuncVar.sysPetIntro = dataPack.sysPetIntro;
            
            // GlobalFuncVar.sysTutorial = dataPack.sysTutorial;

            GlobalFuncVar.sysPetTalent = dataPack.sysPetTalent;

            GlobalFuncVar.sysActivityFeedback = dataPack.sysActivityFeedback;

            GlobalFuncVar.userTaskInfo = dataPack.userTaskInfo;

            GlobalFuncVar.userInfo = dataPack.userInfo;

            GlobalFuncVar.userPetInfo = dataPack.userPetInfo;

            GlobalFuncVar.userRankInfo.level = dataPack.userRankInfo.level;
            GlobalFuncVar.userRankInfo.gold = dataPack.userRankInfo.gold;
            GlobalFuncVar.userRankInfo.food = dataPack.userRankInfo.food;

            /*
            GlobalFuncVar.timeStamp.absolute = dataPack.timeStamp.absolute;
            GlobalFuncVar.timeStamp.relative = dataPack.timeStamp.relative;

            GlobalFuncVar.sysDate.MM = dataPack.sysDate.MM;
            GlobalFuncVar.sysDate.DD = dataPack.sysDate.DD;
            GlobalFuncVar.sysDate.HH = dataPack.sysDate.HH;
            GlobalFuncVar.sysDate.Minu = dataPack.sysDate.Minu;
            GlobalFuncVar.sysDate.Secon = dataPack.sysDate.Secon;

            GlobalFuncVar.sysNewsData.newsNow = dataPack.sysNewsData.newsNow;
            GlobalFuncVar.sysNewsData.newsExtra = dataPack.sysNewsData.newsExtra;
            GlobalFuncVar.sysNewsData.newsExtraExtra = dataPack.sysNewsData.newsExtraExtra;

            GlobalFuncVar.sysResInfo.goldWelfare = dataPack.sysResInfo.goldWelfare;
            GlobalFuncVar.sysResInfo.foodHarvest = dataPack.sysResInfo.foodHarvest;
            GlobalFuncVar.sysResInfo.foodHarvestCount = dataPack.sysResInfo.foodHarvestCount;
            GlobalFuncVar.sysResInfo.foodWelfare = dataPack.sysResInfo.foodWelfare;
            GlobalFuncVar.sysResInfo.priceGoldYesterday = dataPack.sysResInfo.priceGoldYesterday;
            GlobalFuncVar.sysResInfo.priceFoodYesterday = dataPack.sysResInfo.priceFoodYesterday;
            GlobalFuncVar.sysResInfo.priceTrend = dataPack.sysResInfo.priceTrend;
            //// 20200311
            GlobalFuncVar.sysResInfo.priceFoodDynamic = dataPack.sysResInfo.priceFoodDynamic;
            GlobalFuncVar.sysResInfo.priceFoodTrend = dataPack.sysResInfo.priceFoodTrend;
            GlobalFuncVar.sysResInfo.priceGoldAvg = dataPack.sysResInfo.priceGoldAvg;
            GlobalFuncVar.sysResInfo.priceFoodAvg = dataPack.sysResInfo.priceFoodAvg;
            GlobalFuncVar.sysResInfo.goldInterestRate = dataPack.sysResInfo.goldInterestRate;
            GlobalFuncVar.sysResInfo.goldWelfareThresold = dataPack.sysResInfo.goldWelfareThresold;
            GlobalFuncVar.sysResInfo.foodWelfareThresold = dataPack.sysResInfo.foodWelfareThresold;
            

            GlobalFuncVar.sysPetTalent.sysPetTalent_DayuTalent = dataPack.sysPetTalent.sysPetTalent_DayuTalent;
            GlobalFuncVar.sysPetTalent.sysPetTalent_DuoduoTalent = dataPack.sysPetTalent.sysPetTalent_DuoduoTalent;
            GlobalFuncVar.sysPetTalent.sysPetTalent_HuanhuanTalent = dataPack.sysPetTalent.sysPetTalent_HuanhuanTalent;
            GlobalFuncVar.sysPetTalent.sysPetTalent_MaiqiTalent = dataPack.sysPetTalent.sysPetTalent_MaiqiTalent;

            GlobalFuncVar.sysActivityFeedback.activityType0 = dataPack.sysActivityFeedback.activityType0;
            GlobalFuncVar.sysActivityFeedback.activityType1 = dataPack.sysActivityFeedback.activityType1;
            GlobalFuncVar.sysActivityFeedback.activityType2 = dataPack.sysActivityFeedback.activityType2;
            GlobalFuncVar.sysActivityFeedback.activityType3 = dataPack.sysActivityFeedback.activityType3;
            GlobalFuncVar.sysActivityFeedback.activityType4 = dataPack.sysActivityFeedback.activityType4;

            GlobalFuncVar.userTaskInfo.taskContent = dataPack.userTaskInfo.taskContent;
            GlobalFuncVar.userTaskInfo.taskHarvest = dataPack.userTaskInfo.taskHarvest;
            GlobalFuncVar.userTaskInfo.taskHarvestType = dataPack.userTaskInfo.taskHarvestType;
            GlobalFuncVar.userTaskInfo.taskNode = dataPack.userTaskInfo.taskNode;
            GlobalFuncVar.userTaskInfo.taskCheckStandard = dataPack.userTaskInfo.taskCheckStandard;

            GlobalFuncVar.userInfo.name = dataPack.userInfo.name;
            GlobalFuncVar.userInfo.INIT = dataPack.userInfo.INIT;
            GlobalFuncVar.userInfo.ID = dataPack.userInfo.ID;
            GlobalFuncVar.userInfo.existDay = dataPack.userInfo.existDay;
            GlobalFuncVar.userInfo.dailyLogon = dataPack.userInfo.dailyLogon;
            GlobalFuncVar.userInfo.timeStampLastStart = dataPack.userInfo.timeStampLastStart;
            GlobalFuncVar.userInfo.goldHoldVolume = dataPack.userInfo.goldHoldVolume;
            GlobalFuncVar.userInfo.foodHoldVolume = dataPack.userInfo.foodHoldVolume;
            GlobalFuncVar.userInfo.goldIncome = dataPack.userInfo.goldIncome;
            GlobalFuncVar.userInfo.goldConsume = dataPack.userInfo.goldConsume;
            GlobalFuncVar.userInfo.foodIncome = dataPack.userInfo.foodIncome;
            GlobalFuncVar.userInfo.goldInterest = dataPack.userInfo.goldInterest;
            GlobalFuncVar.userInfo.goldDeposit = dataPack.userInfo.goldDeposit;
            GlobalFuncVar.userInfo.goldTradeValue = dataPack.userInfo.goldTradeValue;
            GlobalFuncVar.userInfo.foodTradeValue = dataPack.userInfo.foodTradeValue;
            GlobalFuncVar.userInfo.goldTradeFeedback = dataPack.userInfo.goldTradeFeedback;
            GlobalFuncVar.userInfo.foodTradeFeedback = dataPack.userInfo.foodTradeFeedback;
            GlobalFuncVar.userInfo.shakeShakeReady = dataPack.userInfo.shakeShakeReady;
            GlobalFuncVar.userInfo.tradeAwardReady = dataPack.userInfo.tradeAwardReady;
            GlobalFuncVar.userInfo.dailyAwardReady = dataPack.userInfo.dailyAwardReady;
            GlobalFuncVar.userInfo.goldInterestReady = dataPack.userInfo.goldInterestReady;
            GlobalFuncVar.userInfo.goldWelfareReady = dataPack.userInfo.goldWelfareReady;
            GlobalFuncVar.userInfo.foodWelfareReady = dataPack.userInfo.foodWelfareReady;
            GlobalFuncVar.userInfo.foodHarvestReady = dataPack.userInfo.foodHarvestReady;
            GlobalFuncVar.userInfo.taskCheckNow = dataPack.userInfo.taskCheckNow;
            GlobalFuncVar.userInfo.taskHarvested = dataPack.userInfo.taskHarvested;

            // 好友排行榜更新，需要开放数据域，渲染类目如下
            // GlobalFuncVar.userRankInfo.friendNumber = 
            // GlobalFuncVar.userRankInfo.friendIDList = 
            // GlobalFuncVar.userRankInfo.firendNameList = 
            // GlobalFuncVar.userRankInfo.friendPetLevel = 
            // GlobalFuncVar.userRankInfo.friendGoldRes = 
            // GlobalFuncVar.userRankInfo.friendFoodRes = 
            // GlobalFuncVar.userRankInfo.friendPetType = 
            // GlobalFuncVar.userRankInfo.friendPetLive = 
            
            GlobalFuncVar.userRankInfo.selfPetWorldRank = dataPack.userRankInfo.selfPetWorldRank;
            GlobalFuncVar.userRankInfo.worldIDList = dataPack.userRankInfo.worldIDList;
            GlobalFuncVar.userRankInfo.worldNameList = dataPack.userRankInfo.worldNameList;
            GlobalFuncVar.userRankInfo.worldPetLevel = dataPack.userRankInfo.worldPetLevel;
            GlobalFuncVar.userRankInfo.worldGoldRes = dataPack.userRankInfo.worldGoldRes;
            GlobalFuncVar.userRankInfo.worldFoodRes = dataPack.userRankInfo.worldFoodRes;
            GlobalFuncVar.userRankInfo.worldPetType = dataPack.userRankInfo.worldPetType;

            GlobalFuncVar.userPetInfo.petType = dataPack.userPetInfo.petType;
            GlobalFuncVar.userPetInfo.petLive = dataPack.userPetInfo.petLive;
            GlobalFuncVar.userPetInfo.actiLeftDays = dataPack.userPetInfo.actiLeftDays;
            GlobalFuncVar.userPetInfo.actiTypeCurrent = dataPack.userPetInfo.actiTypeCurrent;
            GlobalFuncVar.userPetInfo.actiHarvest = dataPack.userPetInfo.actiHarvest;
            GlobalFuncVar.userPetInfo.actiAssigned = dataPack.userPetInfo.actiAssigned;
            GlobalFuncVar.userPetInfo.actiTypeNext = dataPack.userPetInfo.actiTypeNext;
            GlobalFuncVar.userPetInfo.petExpeValueNow = dataPack.userPetInfo.petExpeValueNow;
            GlobalFuncVar.userPetInfo.petExpeTotNow = dataPack.userPetInfo.petExpeTotNow;
            GlobalFuncVar.userPetInfo.petLevel = dataPack.userPetInfo.petLevel;
            GlobalFuncVar.userPetInfo.petLevelMax = dataPack.userPetInfo.petLevelMax;
            */
        };
    },

    // 模拟等待服务器响应
    sleep(d){
        for(var t = Date.now();Date.now() - t <= d;){
            if ((Date.now()-t)%100 == 0){
                //console.log(Date.now()-t); //出现重复数字为正常现象
            }
        };
        return new Promise(function(resolve,reject){});
    },

    emitData: function(mjCode, emitDataPack, callFunc){
        /*
        // callback 至服务器，获取成功/失败flag
        console.log("开始等待");
        GlobalFuncVar.sleep(500)
        console.log("等待完毕");
        var rcvDataPack = GAMEFUNC.relayStation.localTriggerCloud(mjCode, emitDataPack);
        
        return new Promise(function(resolve,reject){
            if ((rcvDataPack.mjCode == mjCode) && (rcvDataPack.permitFlag == true) && (rcvDataPack.rcvID.toString() == emitDataPack.emitID.toString())){
                resolve(rcvDataPack);
            } else if (rcvDataPack == {}){
                reject("错误！！！！！！云端返回了空值");
            } else if (rcvDataPack == null){
                reject("错误！！！！！！rcvDataPack为空");
            } else if (rcvDataPack.mjCode != mjCode){
                reject("错误！！！！！！rcvDataPack.mjCode不匹配");
            } else if (rcvDataPack.permitFlag != true){
                reject("错误！！！！！！rcvDataPack.permitFlag不为true");
            } else if (rcvDataPack.rcvID.toString() != emitDataPack.emitID.toString()){
                reject("错误！！！！！！rcvDataPack.rcvID与emitDataPack.emitID不匹配");
            };
            
        })
        */

       GAMEFUNC.relayStation.localTriggerCloud(mjCode, emitDataPack, callFunc);
    },

    matchDataComparison: function(rcvDataPack, mjCodeNum, rcvIDString){
        if (rcvDataPack == null){
            return 0
        } else if (rcvDataPack.permitFlag != true){
            return -1
        } else if (rcvDataPack.mjCode != mjCodeNum){
            return -2
        } else if (rcvDataPack.rcvID.toString() != rcvIDString.toString()){
            return -3
        }
        return 1
    },
    
    syncErrReport: function(rcvDataPack, mjCodeNum, rcvIDString, self){
        if (GlobalFuncVar.matchDataComparison(rcvDataPack, mjCodeNum, rcvIDString) == 0){
            GlobalFuncVar.CallPopUp(self, "PopUpType1", ["网络原因，领取失败！\n请稍后重试","返回"]);
        } else if (GlobalFuncVar.matchDataComparison(rcvDataPack, mjCodeNum, rcvIDString) == -1){
            GlobalFuncVar.CallPopUp(self, "PopUpType1", ["请求被拒绝，领取失败！\n请稍后重试","返回"]);
        } else if (GlobalFuncVar.matchDataComparison(rcvDataPack, mjCodeNum, rcvIDString) == -2){
            GlobalFuncVar.CallPopUp(self, "PopUpType1", ["接口错误，领取失败！\n请稍后重试","返回"]);
        } else if (GlobalFuncVar.matchDataComparison(rcvDataPack, mjCodeNum, rcvIDString) == -3){
            GlobalFuncVar.CallPopUp(self, "PopUpType1", ["接收条目错误，领取失败！\n请稍后重试","返回"]);
        };
    },

    showNotiMark: function(nodeName, flag){
        if (flag == true) {
            nodeName.getChildByName("NotiMark").active = true;
        } else {
            nodeName.getChildByName("NotiMark").active = false;
        }
    },

    showLockWindow: function(){
        console.log("showLock改变前 ", GlobalFuncVar.gameFlag.showLock);
        if (GlobalFuncVar.gameFlag.showLock == true){
            GlobalFuncVar.sysNodeDict["BaseView"].removeChild(GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("PopUpType5"));
            GlobalFuncVar.CallTimeAlert(GlobalFuncVar.sysNodeDict["BaseView"], "PopUpType5", ["当当当！\n森林宵禁啦！揉揉眼睛放松下吧~","好的"],"0.5");
            GlobalFuncVar.gameFlag.popTime = false;
            GlobalFuncVar.gameFlag.showLock = false;
            console.log("showLock改变后 ", GlobalFuncVar.gameFlag.showLock);
        } else if (GlobalFuncVar.gameFlag.showLock == false){
            GlobalFuncVar.sysNodeDict["BaseView"].removeChild(GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("PopUpType5"));
            GlobalFuncVar.gameFlag.showLock = true;
            console.log("showLock改变后 ", GlobalFuncVar.gameFlag.showLock);
        }
        
    },

    // 每日登陆奖励弹出
    popDailyAward(){
        if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == null){
            
            if (GlobalFuncVar.userInfo.dailyAwardReady == 1){
                // 如果每日登陆奖励为ok，则弹窗显示
                GlobalFuncVar.sysNodeDict["BaseView"].removeChild(GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("PopUpType5"));
                GlobalFuncVar.gameFlag.popTime = false;
                GlobalFuncVar.CallTimeAlert(GlobalFuncVar.sysNodeDict["BaseView"], "PopUpType5", ["欢迎训练师归来！\n请查收登陆奖励！","好的"],"dailyAward");
            } else if (GlobalFuncVar.userInfo.dailyAwardReady == 2){
                // 如果每日登陆奖励为ok，则弹窗显示
                GlobalFuncVar.sysNodeDict["BaseView"].removeChild(GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("PopUpType5"));
                GlobalFuncVar.gameFlag.popTime = false;
                GlobalFuncVar.CallTimeAlert(GlobalFuncVar.sysNodeDict["BaseView"], "PopUpType5", ["欢迎训练师归来！\n登陆奖励已达时间上限！(5小时)","好的"],"dailyAwardMax");
            };
        }
    },
}


