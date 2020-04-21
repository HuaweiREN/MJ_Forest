window.dbTOT = {
    dbUser: {
        // 时间戳
        timeStamp: {
            absolute: null,    // 服务器时间戳
            relative: null,    // 玩家首次玩游戏的时间戳
        },

        userTaskInfo : {
            taskContent: null,
            taskHarvest: null,
            taskHarvestType: null,
            taskNode: null, // assign the node according to the tasks
            taskCheckStandard: null,
        },
        
        userInfo : {
            name : null,
            avarta: null,
            INIT: null,
            ID : null,
            existDay: null,   //  (在GAME_INIT中，云函数初始化)
            timeLastAwardClick: null,
            dailyLogon: null, 
            goldHoldVolume: null,
            foodHoldVolume: null,
            goldIncome: null,    // 回合更新需加代码
            goldConsume: null,   // 回合更新需加代码
            foodIncome: null,   // 回合更新需加代码
            goldInterest: null,
            goldDeposit: null,
            goldTradeValue: null,
            foodTradeValue: null,
            goldTradeFeedback: null,
            foodTradeFeedback: null,
            shakeShakeReady: null, // 【1为可领取，-1为领取过，0为等待中】
            tradeAwardReady: null,
            dailyAwardReady: null,
            goldInterestReady: null,
            goldWelfareReady: null,
            foodWelfareReady: null,
            foodHarvestReady: null,
            taskCheckNow: null,
            taskHarvested: null,
            newsExtra: null,
        },
    
        userRankInfo : {
            // 好友排行榜数据
            selfPetWorldRank: null,
            worldIDList: null,
            worldNameList: null,
            worldPetLevel: null,
            worldGoldRes: null,
            worldFoodRes: null,
            worldPetType: null,
        },
    
        userPetInfo : {
            petType: null,
            petLive: null,
            actiLeftDays: null,
            actiTypeCurrent: null,
            actiHarvest: null,   // need the clock to change                                                                                                                                                                                      
            actiAssigned: null,    //根据sysdata实时更新相关数据
            actiTypeNext: null,
            petExpeValueNow: null,
            petExpeTotNow: null,    //根据等级，升级需要多少经验
            petLevel: null,
            petLevelMax: null,      //萌鸡最大等级数
        },
    },

    dbSys: {    //系统
        userNum: 1,  // 5
        priceTrend: [0,0,0,0,0],  // [0,0.5,0.6,0.7,0.8]
        priceFoodDynamic: 0.5,
        priceFoodTrend: 1,
        avgPrice: 0, // 0.5
        interestRate: 1,    // 利率
        goldWelfare: 10,    // 福利金发放量
        goldWelfareThresold: 5000,  // 福利金发放阈值， 30金币
        foodWelfare: 30,    // 救济粮发放量
        foodWelfareThresold: 5000,  // 救济粮发放阈值， 30粮食
        foodHarvest: 100,   // 丰收日发放量
        harvestCount: 2,    // 丰收日倒计时
        harvestPeriod: 24,  // 丰收日周期
        // 新闻列表
        newsNowList: ["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh", "iiii", "jjjj", "kkkk", "llll", "mmmm", "nnnn", "oooo", "pppp", "qqqq", "rrrr", "ssss", "tttt", ],
        newsNow: 2,
        // 额外新闻列表
        newsExList: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", ],
        newsExNow: 10,
        // 额外额外新闻列表
        newsExExList: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", ],
        newsExExNow: 12,
        // 福利金发放比例
        welfareRate: 0.3,
        // 每回合奖励
        goldLogon: 2,
        foodLogon: 20,
        // 奖励上限回合
        logMax: 5,
        // 当前时间
        timeNow: 1230000000,
        // 活动的信息
        actiFeedback : {
            activityType0: [0, 0, null, 0], // 玩耍， 【持续时间，回报，汇报类型，活力值消耗】
            activityType1: [3, 10, "gold",25],// 打工
            activityType2: [2, 400, "food",15], // 务农
            activityType3: [1, "额外新闻", "news",5], // 采访
            activityType4: [5, 100, "live",0],  // 睡觉
        },
        sysPetTalent : {
            sysPetTalent_DayuTalent: [0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,10,10,10,10,10,10,10,10,10,10,15,15,15,15,15,15,15,15,15,15,20,20,20,20,20,20,20,20,20,20,25,25,25,25,25,25,25,25,25,25],
            sysPetTalent_DuoduoTalent: [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5],
            sysPetTalent_HuanhuanTalent: [0,0,0,0,0,0,0,0,0,0,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9],
            sysPetTalent_MaiqiTalent: [0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,10,10,10,10,10,10,10,10,10,10,15,15,15,15,15,15,15,15,15,15,20,20,20,20,20,20,20,20,20,20,25,25,25,25,25,25,25,25,25,25],
        },
        petType: ["dayu", "duoduo", "huanhuan", "maiqi"],
        petExpeTot: [100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500,600,700,800,900,1000,],   //根据等级，升级需要多少经验
        petLevelMax: 50,
    },
}

window.GAMEFUNC_MAIN = {
    GAME_INIT(){
        dbTOT.dbUser = {
            // 时间戳
            timeStamp: {
                absolute: null,    // 服务器时间戳，需修改为真实服务器时间戳
                relative: null,    // 玩家首次玩游戏的时间戳，需添加MJCODE35修改，未完成
            },
    
            userTaskInfo : {    // 暂时不管，未完成
                taskContent: ["打开日历", "萌鸡打到lv.5", "完成一次萌鸡喂养"],
                taskHarvest: [5,50,100],
                taskHarvestType: ["gold","food","live"],
                taskNode: ["Calendar", "PetDining", "PetDining"], // assign the node according to the tasks
                taskCheckStandard: [10001,12340,33330],
            },
            
            userInfo : {
                name : "ren",   // 需通过微信接口获取，未完成
                avarta: null,   // 需通过微信接口获取，未完成
                INIT: false, // MJCODE32修改，已完成
                ID : "1111111", // 需通过微信接口获取，已完成
                existDay: null,   // 已完成
                timeLastAwardClick: 0,  // 已完成
                dailyLogon:  null,// 已完成
                goldHoldVolume: 30, // 已完成
                foodHoldVolume: 300, // 已完成
                goldIncome: 123,    // 未完成
                goldConsume: 321,   // 回合更新需加代码，未完成
                foodIncome: 8888,   // 回合更新需加代码，未完成
                goldInterest: 3,    // 回合更新，已完成
                goldDeposit: 30,    // 回合更新，已完成
                goldTradeValue: 0,  // 回合更新，已完成
                foodTradeValue: 0,  // 回合更新，已完成
                goldTradeFeedback: 0,   // 回合更新，已完成
                foodTradeFeedback: 0,   // 回合更新，已完成
                shakeShakeReady: 1, // 【1为可领取，-1为领取过，0为等待中】，回合更新，已完成
                tradeAwardReady: 0, // 回合更新，已完成
                dailyAwardReady: null, // 回合更新，已完成
                goldInterestReady: 1,   // 回合更新，已完成
                goldWelfareReady: null,    // 回合更新，已完成
                foodWelfareReady: null,    // 回合更新，已完成
                foodHarvestReady: null,    // 回合更新，已完成
                taskCheckNow: [10001,12340,33330],  // 暂时不管，未完成
                taskHarvested: [1,1,1], // 暂时不管，未完成
                newsExtra: null,    // 本地数据，云端不需要，暂时放这里
            },
        
            userRankInfo : {
                // 好友排行榜数据，没啥用，暂时不管
        
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
                actiTypeCurrent: 0,
                actiHarvest: 0,   // need the clock to change                                                                                                                                                                                      
                actiAssigned: 0,    //根据sysdata实时更新相关数据
                actiTypeNext: 0,
                petExpeValueNow: 0,
                petExpeTotNow: null,    //根据等级，升级需要多少经验
                petLevel: 1,
                petLevelMax: 50,      //萌鸡最大等级数
            },
        };

        dbTOT.dbUser.timeStamp.absolute = new Date().getTime();
        dbTOT.dbUser.timeStamp.relative = new Date().getTime();
        dbTOT.dbUser.userInfo.existDay = GAMEFUNC.userData.userExistDay();
        let dailyLogonTemp = GAMEFUNC.logon.logonAward(dbTOT.dbSys.goldLogon, dbTOT.dbSys.foodLogon, UtlisFunc.timeCal(dbTOT.dbSys.userNum, dbTOT.dbUser.userInfo.timeLastAwardClick, dbTOT.dbSys.timeNow, "hour"), dbTOT.dbSys.logMax);
        dbTOT.dbUser.userInfo.dailyLogon = dailyLogonTemp.logonAward;
        dbTOT.dbUser.userInfo.dailyAwardReady = dailyLogonTemp.logonReady;
        dbTOT.dbUser.userInfo.foodHarvestReady = GAMEFUNC.foodBarn.foodHarvestCheck();
        dbTOT.dbUser.userInfo.goldWelfareReady = GAMEFUNC.goldBank.goldWelfareCheck();
        dbTOT.dbUser.userInfo.foodWelfareReady = GAMEFUNC.foodBarn.foodWelfareCheck();
        dbTOT.dbUser.userPetInfo.petExpeTotNow = dbTOT.dbSys.petExpeTot[dbTOT.dbUser.userPetInfo.petLevel - 1];
    }, //OK

    ROUND_UPDATE() {
        // 回合更新开始
        // 收集所有玩家当前的数据（从数据库收集）
        var sys = dbTOT.dbSys;
        var user = dbTOT.dbUser;
    
        // 更新排名
        var worldWelfare00 = GAMEFUNC.worldWelfare.roundUpdate(
            sys.userNum, [user.userInfo.goldHoldVolume], [user.userInfo.foodHoldVolume], sys.welfareRate
            );
        console.log("\n===================worldWelfare00===================" );
        console.log(worldWelfare00);
        console.log("===================worldWelfare00===================\n" );
    
        // 更新萌鸡活动情况
        var petRelated00 = GAMEFUNC.petRelated.roundUpdate(
            sys.userNum, [user.userPetInfo.actiTypeCurrent], [user.userPetInfo.actiLeftDays], [user.userPetInfo.actiAssigned], 
            [user.userPetInfo.actiTypeNext], sys.actiFeedback
            );
        console.log("\n===================petRelated00===================" );
        console.log(petRelated00);
        console.log("===================petRelated00===================\n" );
    
        // 更新世界市场
        var TradeMarket00 = GAMEFUNC.tradeMarket.roundUpdate(
            sys.userNum, [user.userInfo.goldTradeValue], [user.userInfo.foodTradeValue], sys.priceTrend, sys.avgPrice
            );
        console.log("\n===================trademarket00===================" );
        console.log(TradeMarket00);
        console.log("===================trademarket00===================\n" );
        
        // 更新世界银行
        var goldBank00 = GAMEFUNC.goldBank.roundUpdate(
            sys.userNum, [user.userInfo.goldHoldVolume], [user.userInfo.goldDeposit], sys.interestRate, sys.goldWelfare, sys.goldWelfareThresold
            );
        console.log("\n===================goldBank00===================" );
        console.log(goldBank00);
        console.log("===================goldBank00===================\n" );
    
        // 更新世界粮仓
        var foodBarn00 = GAMEFUNC.foodBarn.roundUpdate(
            sys.userNum, [user.userInfo.foodHoldVolume], sys.foodWelfare, sys.foodWelfareThresold, sys.foodHarvest, sys.harvestCount, sys.harvestPeriod
            );
        console.log("\n===================foodBarn00===================" );
        console.log(foodBarn00);
        console.log("===================foodBarn00===================\n" );
    
        // 更新世界新闻
        var newsStation00 = GAMEFUNC.newsStation.roundUpdate(
            sys.userNum, sys.newsNowList, sys.newsExList, sys.newsExExList
            );
        console.log("\n===================newsStation00===================" );
        console.log(newsStation00);
        console.log("===================newsStation00===================\n" );
    
        // 更新玩家每日登陆奖励
        var timeTemp = new Date().getTime(); // 临时模拟一个时间，实际上需要知道服务器真实时间
        dbTOT.dbSys.timeNow = timeTemp;
        var logon00 = GAMEFUNC.logon.roundUpdate(
            sys.userNum, sys.goldLogon, sys.foodLogon, UtlisFunc.timeCal(sys.userNum, [user.userInfo.timeLastAwardClick], sys.timeNow, "hour"), sys.logMax
            );
        console.log("\n===================logon00===================" );
        console.log(logon00);
        console.log("===================logon00===================\n" );
    
        // 更新玩家权限，此处目前仅包含活力铃铛
        var userTask00 = GAMEFUNC.userTask.roundUpdate(sys.userNum);
        console.log("\n===================userTask00===================" );
        console.log(userTask00);
        console.log("===================userTask00===================\n" );
    
        // 更新时间，此处模拟时间，对接时需改为抓取服务器时间
        const sysDate = UtlisFunc.getNewDate();

        // 修改数据库，并组织数据包并发给玩家
        GAMEFUNC.userData.userDataDistribution(petRelated00, TradeMarket00, goldBank00, foodBarn00, newsStation00, logon00, userTask00, sysDate);
        
    
        // 回合更新结束
        console.log("\n===================回合更新成功！！！===================\n")
    },

    LOGON_UPDATE(){
        // 用户登陆时候需要的数据包
        var dataPackLogon = {
            dataType: "logon",
            // 时间戳
            timeStamp: dbTOT.dbUser.timeStamp,

            sysDate: UtlisFunc.getNewDate(),    // 服务器时间

            sysNewsData : { // dbSys.NewsNow, NewsExNow, NewsExExNoow 看其余三条
                newsNow : dbTOT.dbSys.newsNowList[dbTOT.dbSys.newsNow],
                newsExtra: dbTOT.dbSys.newsExList[dbTOT.dbSys.newsExNow],
                newsExtraExtra: dbTOT.dbSys.newsExExList[dbTOT.dbSys.newsExExNow],
            },

            sysResInfo : {
                goldWelfare: dbTOT.dbSys.goldWelfare,
                foodHarvest: dbTOT.dbSys.foodHarvest,
                foodHarvestCount: dbTOT.dbSys.harvestCount,
                foodWelfare: dbTOT.dbSys.foodWelfare,
                priceGoldYesterday: 1,
                priceFoodYesterday: dbTOT.dbSys.priceTrend[4],
                priceTrend: dbTOT.dbSys.priceTrend,
                priceFoodDynamic: dbTOT.dbSys.priceFoodDynamic,
                priceFoodTrend: dbTOT.dbSys.priceFoodTrend,
                priceGoldAvg: 1,
                priceFoodAvg: dbTOT.dbSys.avgPrice,
                goldInterestRate: dbTOT.dbSys.interestRate,
                goldWelfareThresold: dbTOT.dbSys.goldWelfareThresold,
                foodWelfareThresold: dbTOT.dbSys.foodWelfareThresold,
            },

            sysPetTalent : dbTOT.dbSys.sysPetTalent,

            sysActivityFeedback : dbTOT.dbSys.actiFeedback,

            userTaskInfo : dbTOT.dbUser.userTaskInfo,
            
            userInfo : dbTOT.dbUser.userInfo,
        
            userRankInfo : dbTOT.dbUser.userRankInfo,
        
            userPetInfo : dbTOT.dbUser.userPetInfo,
        };
        return dataPackLogon
    }, //OK
}

window.GAMEFUNC = {
    // 本地操作触发云端的中继站
    relayStation: {
        localTriggerCloud: function(mjCode, emitDataPack, callFunc){

            /*
            // 微信小程序不支持eval，不确定云函数是否支持eval运算
            // var temp = "GAMEFUNC." + UtlisFunc.lookupTable(mjCode.toString(), "major") + ".mjCode" + mjCode;
            // return eval(temp)(emitDataPack, UtlisFunc.lookupTable(mjCode.toString(), "minor"))

            // 替代方案如下
            var majorClass = UtlisFunc.lookupTable(mjCode.toString(), "major");
            var funcName = "mjCode" + mjCode;
            return GAMEFUNC[majorClass][funcName](emitDataPack, UtlisFunc.lookupTable(mjCode.toString(), "minor"))
            
            // 其中，每一个的示例如下：
            if (mjCode == 11){
                return GAMEFUNC.logon.mjCode11(emitDataPack, UtlisFunc.lookupTable("11"))
            */

           var majorClass = UtlisFunc.lookupTable(mjCode.toString(), "major");
           var funcName = "mjCode" + mjCode;
           GAMEFUNC[majorClass][funcName](emitDataPack, UtlisFunc.lookupTable(mjCode.toString(), "minor"), callFunc)
        },
    },

    // 世界市场的函数
    tradeMarket: {
        // 回合更新阶段，世界市场的逻辑函数
        // 输入：玩家数量，所有玩家的金币，粮食投入数据，前五回合平均价格
        // 输出：所有玩家的金币，粮食产出数据，价格数据
        roundUpdate: function(userNum, goldTradePRE, foodTradePRE, priceTrendPRE, avgPricePRE){
            var goldSysAdd = null;
            var foodSysAdd = null;
            var goldPriceNow = null;
            var foodPriceNow = null;
            var foodTradePRO = [];
            var foodTradePREClear = [];
            var goldTradePRO = [];
            var goldTradePREClear = [];
            var priceTrendPRO = [];
            var avgPricePRO = null;
            var tradeAwardReady = [];

            // 计算今日价格
            goldPriceNow = 1;   // 金本位
            foodPriceNow = UtlisFunc.sum(foodTradePRE) / UtlisFunc.sum(goldTradePRE);
            
            // 添加调控
            goldSysAdd = 10;
            foodSysAdd = 10;
    
            // 计算重新分配值
            foodPriceNow = (UtlisFunc.sum(foodTradePRE) + foodSysAdd) / (UtlisFunc.sum(goldTradePRE) + goldSysAdd);
            for(let j = 0,len=userNum; j < len; j++) {
                foodTradePRO.push(Math.ceil((foodPriceNow/goldPriceNow) * goldTradePRE[j]));
                foodTradePREClear.push(0);
                goldTradePRO.push(Math.ceil(foodTradePRE[j] / (foodPriceNow/goldPriceNow)));
                goldTradePREClear.push(0);
                if (foodTradePRO[j] != 0 || goldTradePRO[j] != 0){
                    tradeAwardReady[j] = 1;
                } else {
                    tradeAwardReady[j] = 0;
                }
            }
    
            // 圆整
            goldPriceNow = Math.round(goldPriceNow*100)/100;    //价格至两位小数
            foodPriceNow = Math.round(foodPriceNow*100)/100;    //价格至两位小数
    
            // 更改价格趋势及平均价格
            priceTrendPRO = [...priceTrendPRE];
            priceTrendPRO.shift();
            priceTrendPRO.push(foodPriceNow/goldPriceNow);
            avgPricePRO = UtlisFunc.sum(priceTrendPRO) / priceTrendPRO.length;
    
            // 打包返回值
            var dataPack = {
                "goldSysAdd": goldSysAdd,
                "foodSysAdd": foodSysAdd,
                "goldPriceNow": goldPriceNow,
                "foodPriceNow": foodPriceNow,
                "foodTradePRO": foodTradePRO,
                "foodTradePREClear": foodTradePREClear,
                "goldTradePRO": goldTradePRO,
                "goldTradePREClear": goldTradePREClear,
                "priceTrendPRO": priceTrendPRO,
                "avgPricePRO": avgPricePRO,
                "tradeAwardReady": tradeAwardReady,
            };
    
            // 返回
            return dataPack
        },

        mjCode12: function(emitDataPack, IDList, callFunc){
            // ID: 1goldHoldVolume, 2foodHoldVolume, 3tradeAward,gold, 4tradeAward,food, 62tradeAwardReady
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 12,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("领取市场收入", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode29: function(emitDataPack, IDList, callFunc){
            // ID:  1goldHoldVolume,34goldTradeValue,35dataGoldDelta
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 29,
                        IDList: IDList,
                        data: emitDataPack.emitData[2],
                    },
                    success: function(res){
                        console.log("调整市场金币投入", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode31: function(emitDataPack, IDList, callFunc){
            // ID:  2foodHoldVolume,36foodTradeValue,37dataFoodDelta(负数)
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 31,
                        IDList: IDList,
                        data: emitDataPack.emitData[2],
                    },
                    success: function(res){
                        console.log("调整市场粮食投入", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }

            
        },

        // 未更改
        mjCode35: function(emitDataPack, IDList, callFunc){
            // ID: 71gameFlag_restartAllGame
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 35,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("玩家查看动态价格", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }

            
        },
    },
        
    // 世界银行的函数
    goldBank: {
        // 回合更新阶段，世界银行的逻辑函数
        // 输入：玩家数量，所有玩家的金币持有量，储蓄量，利息率，福利金量，福利金门槛
        // 输出：所有玩家的利息回报，利息回报flag，福利回报，福利回报flag
        roundUpdate: function(userNum, goldHold, goldStore, interestRate, welfareValue, welfareThresold){
            var goldInterest = [];
            var goldInterestReady = [];
            var goldWelfare = [];
            var goldWelfareReady = [];

            for(let j = 0,len=userNum; j < len; j++) {
                // 计算玩家应得利息
                let goldInterestTemp = Math.floor(interestRate*goldStore[j])
                goldInterest.push(goldInterestTemp);
                if (goldInterestTemp != 0){
                    goldInterestReady.push(1);
                } else {
                    goldInterestReady.push(0);
                }
                
                // 计算玩家应得福利金
                if (goldHold[j] < welfareThresold){
                    goldWelfare.push(welfareValue);
                    goldWelfareReady.push(1);
                } else {
                    goldWelfare.push(0);
                    goldWelfareReady.push(0);
                }
            };

            // 打包返回值
            var dataPack = {
                "goldInterest": goldInterest,
                "goldInterestReady": goldInterestReady,
                "goldWelfare": goldWelfare,
                "goldWelfareReady": goldWelfareReady,
                "welfareThresold": welfareThresold,
            };

            // 返回
            return dataPack
        },

        goldWelfareCheck(){
            if (dbTOT.dbSys.goldWelfareThresold >= dbTOT.dbUser.userInfo.goldHoldVolume){
                return 1
            } else {
                return 0
            }
        },

        mjCode23: function(emitDataPack, IDList, callFunc){
            // ID:  1goldHoldVolume,27goldWelfare,66goldWelfareReady
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 23,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("领取福利金收入", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode24: function(emitDataPack, IDList, callFunc){
            // ID:  1goldHoldVolume,30goldDeposit,28dataDepositValueDelta
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 24,
                        IDList: IDList,
                        data: emitDataPack.emitData[2],
                    },
                    success: function(res){
                        console.log("存储银行存款", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode25: function(emitDataPack, IDList, callFunc){
            // ID:  1goldHoldVolume,30goldDeposit,29dataWithdrawValueDelta
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 25,
                        IDList: IDList,
                        data: emitDataPack.emitData[2],
                    },
                    success: function(res){
                        console.log("提取银行存款", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode26: function(emitDataPack, IDList, callFunc){
            // ID:  1goldHoldVolume,31goldInterest,67goldInterestReady
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 26,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("领取银行收入", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },
    },

    // 世界粮仓的函数
    foodBarn: {
        // 回合更新阶段，世界粮仓的逻辑函数
        // 输入：玩家数量，所有玩家的粮仓持有量，粮仓救济金量，粮仓救济金门槛，粮仓丰收日量，粮仓丰收日倒计时
        // 输出：所有玩家的金币持有量，储蓄量价格数据
        roundUpdate: function(userNum, foodHold, welfareValue, welfareThresold, harvestValue, harvestCountPRE, harvestPeriod){
            var foodWelfare = [];
            var foodWelfareReady = [];
            var foodHarvest = [];
            var foodHarvestReady = [];
            var harvestCountPRO = null;

            // 丰收日倒计时
            if (harvestCountPRE == 0){
                harvestCountPRO = harvestPeriod;
            } else {
                harvestCountPRO = harvestCountPRE - 1;
            }

            for(let j = 0,len=userNum; j < len; j++) {
                // 计算玩家应得福利金
                if (foodHold[j] < welfareThresold){
                    foodWelfare.push(welfareValue);
                    foodWelfareReady.push(1);
                } else {
                    foodWelfare.push(0);
                    foodWelfareReady.push(0);
                }

                if (harvestCountPRO == 0){
                    foodHarvest.push(harvestValue);
                    foodHarvestReady.push(1);
                } else {
                    foodHarvest.push(0);
                    foodHarvestReady.push(0);
                }
            };

            // 打包返回值
            var dataPack = {
                "foodWelfare": foodWelfare,
                "foodWelfareReady": foodWelfareReady,
                "foodHarvest": foodHarvest,
                "foodHarvestReady": foodHarvestReady,
                "harvestCountPRO": harvestCountPRO,
                "welfareThresold": welfareThresold,
            };

            // 返回
            return dataPack
        },

        foodHarvestCheck(){
            if (dbTOT.dbSys.harvestCount == 0){
                return 1
            } else {
                return 0
            }
        },

        foodWelfareCheck(){
            if (dbTOT.dbSys.foodWelfareThresold >= dbTOT.dbUser.userInfo.foodHoldVolume){
                return 1
            } else {
                return 0
            }
        },

        mjCode27: function(emitDataPack, IDList, callFunc){
            // ID:  2foodHoldVolume,32foodWelfare,68foodWelfareReady
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 27,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("领取救济粮收入", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode28: function(emitDataPack, IDList, callFunc){
            // ID:  2foodHoldVolume,33foodHarvest,69foodHarvestReady
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 28,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("领取丰收日收入", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },
    },

    // 世界新闻的函数
    newsStation: {
        // 回合更新阶段，世界新闻的逻辑函数
        // 输入：玩家数量，当前新闻列表，额外新闻列表，额外额外新闻列表，萌鸡活动类型，活动剩余回合，萌鸡种类，萌鸡成功率
        // 输出：所有玩家的金币持有量，储蓄量价格数据
        roundUpdate: function(userNum, newsNowList, newsExList, newsExExList){
            var newsNow = [];
            var newsEx = [];
            var newsExEx = [];
            var userNews = null;
            var newsIndex = [];
            var newsGo = Math.floor(Math.random()*newsNowList.length);
            var newsExGo = Math.floor(Math.random()*newsExList.length);
            var newsExExGo = Math.floor(Math.random()*newsExExList.length);
            newsIndex = [newsGo, newsExGo, newsExExGo];

            // 变更sys数据库
            dbTOT.dbSys.newsNow = newsIndex[0];
            dbTOT.dbSys.newsExNow = newsIndex[1];
            dbTOT.dbSys.newsExExNow = newsIndex[2];
            
            for(let j = 0,len=userNum; j < len; j++) {
                newsNow = newsNowList[newsGo];
                newsEx = newsExList[newsExGo];
                newsExEx = newsExExList[newsExExGo];
            }

            var dataPack = {
                "newsNow": newsNow,
                "newsEx": newsEx,
                "newsExEx": newsExEx,
                "userNews": userNews,
                "newsIndex": newsIndex,
            }
            return dataPack
        },
    },

    // 萌鸡信息处理的函数
    petRelated: {
        // 回合更新阶段，处理玩家萌鸡活动状态
        // 输入：玩家当前萌鸡活动种类，玩家当前萌鸡活动剩余天数，玩家为萌鸡布置的下个任务，萌鸡类型，萌鸡天赋加成，活动类型及奖励
        // 输出：活动剩余天数，活动类型，活动收获状态位
        roundUpdate: function(userNum, actiTypePRE, actiLeftDayPRE, actiAssignedPRE, actiTypeNextPRE, actiFeedback){
            var actiLeftDayPRO = [];
            var actiTypePRO = [];
            var actiHarvestReady = [];
            var actiAssignedPRO = [];
            var actiTypeNextPRO = [];
            for(let j = 0,len=userNum; j < len; j++) {
                // 活动天数-1
                actiLeftDayPRO.push(actiLeftDayPRE[j] - 1);
                // 如果活动天数已经为0，则不减1
                if (actiLeftDayPRO[j] < 0){
                    actiLeftDayPRO[j] = 0;
                }
                // 如果萌鸡活动剩余天数为0
                if (actiLeftDayPRO[j] == 0) {
                    // 活动为玩耍，并且没有布置下一个任务
                    if (actiTypePRE[j] == 0 && actiAssignedPRE == 0){
                        actiLeftDayPRO[j] = 0;
                        actiTypePRO.push(0);
                        actiHarvestReady.push(0);
                        actiAssignedPRO.push(0);
                        actiTypeNextPRO.push(0);
                    // 如果活动为玩耍，但是布置了下一个任务
                    } else if (actiTypePRE[j] == 0 && actiAssignedPRE == 1){
                        actiLeftDayPRO[j] = actiFeedback["activityType" + actiTypeNextPRE[j]][0];
                        actiTypePRO.push(actiTypeNextPRE[j]);
                        actiHarvestReady.push(0);
                        actiAssignedPRO.push(0);
                        actiTypeNextPRO.push(0);
                    // 如果活动不为玩耍
                    } else if (actiTypePRE[j] != 0) {
                        actiLeftDayPRO[j] = 0;
                        actiTypePRO.push(actiTypePRE[j]);
                        actiHarvestReady.push(1);
                        actiAssignedPRO.push(actiAssignedPRE[j]);
                        actiTypeNextPRO.push(actiTypeNextPRE[j]);
                    }
                // 如果萌鸡活动剩余天数不为0
                } else {
                    actiLeftDayPRO[j] = actiLeftDayPRO[j];
                    actiTypePRO.push(actiTypePRE[j]);
                    actiHarvestReady.push(0);
                    actiAssignedPRO.push(actiAssignedPRE[j]);
                    actiTypeNextPRO.push(actiTypeNextPRE[j]);
                }
            }

            var dataPack = {
                "actiLeftDayPRO": actiLeftDayPRO,
                "actiTypePRO": actiTypePRO,
                "actiHarvestReady": actiHarvestReady,
                "actiAssignedPRO": actiAssignedPRO,
                "actiTypeNextPRO": actiTypeNextPRO,
            }

            return dataPack
        },

        mjCode15: function(emitDataPack, IDList, callFunc){
            // ID: 11petLiveIncrement,10petLive,64shakeShakeReady
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 15,
                        IDList: IDList,
                        data: [emitDataPack.emitData[1],emitDataPack.emitData[2],emitDataPack.emitData[3]],
                    },
                    success: function(res){
                        console.log("使用活力铃", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode16: function(emitDataPack, IDList, callFunc){
            // ID: 2foodHoldVolume, 12dataFeedValue, 13petExpeValueNow
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 16,
                        IDList: IDList,
                        data: emitDataPack.emitData[1],
                    },
                    success: function(res){
                        console.log("喂食", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode17: function(emitDataPack, IDList, callFunc){
            // ID: 2foodHold,13petExpeValueNow,14datafeedMax,15petLevel
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 17,
                        IDList: IDList,
                        data: emitDataPack.emitData[2],
                    },
                    success: function(res){
                        console.log("升级", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode18: function(emitDataPack, IDList, callFunc){
            // ID: 16actiTypeCurrent,17actiLeftDays
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 18,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("取消当前活动", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode19: function(emitDataPack, IDList, callFunc){
            // ID: 18actiAssigned, 19actiTypeNext
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 19,
                        IDList: IDList,
                        data: [emitDataPack.emitData[1],emitDataPack.emitData[2]],
                    },
                    success: function(res){
                        console.log("预设下一步活动", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode21: function(emitDataPack, IDList, callFunc){
            // ID: 18actiAssigned, 19actiTypeNext
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 21,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("取消下一步活动", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        mjCode22: function(emitDataPack, IDList, callFunc){
            // ID: 1goldHoldVolume(updated),2foodHoldVolume(updated),25newsExtra,10petLive,16actiTypeCurrent,26actiLeftDays,18actiAssigned,19actiTypeNext,65actiHarvest
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 22,
                        IDList: IDList,
                        data: emitDataPack.emitData,
                    },
                    success: function(res){
                        console.log("领取活动奖励", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return res.result;
                        callFunc(null);
                    },
                });
            }

            
        },

        //// 20200301
        mjCode32_copy: function(emitDataPack, IDList){
            // ID: 43petSelected，70userINIT
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                // step 2 变量声明
                var petSelected = emitDataPack.emitData[0];
                var userFirstLogon = emitDataPack.emitData[1];
                var userINIT = emitDataPack.emitData[2];
                // 如果满足获取登陆奖励的条件，状态位为1
                if (true){
                    // step 3 数据处理，由于本地已完成了数据处理，此处数据无需向本地发送，只需发送空即可
                    petSelected = petSelected;
                    userFirstLogon = 123456;//此处应该获取服务器的当前时间，作为用户首次登陆时间
                    userINIT = false;
                    // 修改数据库（注意此处数据库需要直接进行修改，而不是加减）
                    // 数据库中的goldHoldVolume = goldHold
                    // 数据库中的foodHoldVolume = foodHold
                    // .......
                    
                    // 创建返回给本地的数据包
                    var rcvDataPack = {
                        mjCode : 32,
                        permitFlag: true,
                        rcvID: [...IDList],
                        rcvData: [petSelected, userFirstLogon, userINIT],
                    };
                    return rcvDataPack
                } else {
                    console.log("数据处理出现问题！")
                    return {}
                }
            }

            
        },

        mjCode32: function(emitDataPack, IDList, callFunc){
            // ID: 43petSelected，70userINIT
            // step 1 校验数据包正确性，完整性
            
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 32,
                        IDList: IDList,
                        data: emitDataPack.emitData[0],
                    },
                    success: function(res){
                        console.log("确定宠物类型", res.result);
                        callFunc(res.result);
                        //return res.result;
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                    },
                });
            }

            
        },

        mjCode37: function(emitDataPack, IDList, callFunc){
            // ID: 43petSelected，70userINIT
            // step 1 校验数据包正确性，完整性
            
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 37,
                        IDList: IDList,
                        data: emitDataPack.emitData, //？？？
                    },
                    success: function(res){
                        console.log("点击活力铃铛", res.result);
                        callFunc(res.result);
                        //return res.result;
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                    },
                });
            }

            
        },

    },

    // 用户领取任务奖励处理的函数
    userTask: {
        // 回合更新阶段，处理玩家权限相关信息
        // 输入：玩家数
        // 输出：活力铃铛状态更新
        roundUpdate: function(userNum){
            var shakeShakeReady = [];
            for(let j = 0,len=userNum; j < len; j++) {
                shakeShakeReady.push(1);
            }

            var dataPack = {
                "shakeShakeReady": shakeShakeReady,
            }

            return dataPack
        },

        mjCode14: function(emitDataPack, IDList, callFunc){
            // ID: 1goldHoldVolume, 2foodHoldVolume, 7taskHarvestType, 8taskHarvest, 9taskNum, 10petLive, 63taskHarvested
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 14,
                        IDList: IDList,
                        data: emitDataPack.emitData[4],
                    },
                    success: function(res){
                        console.log("领取任务奖励", res.result);
                        callFunc(res.result);
                        //return res.result;
                    },
                    fail: function(res){
                        console.error(res);
                        callFunc(null);
                        //return res.result;
                    },
                });
            }

            
        },

        mjCode33: function(emitDataPack, IDList, callFunc){
            // ID: 44sysDate_Minu, 45sysDate_Secon
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                WeChat.onUpdateUserTime().then(msg => {console.log(msg)});
                callFunc(true);
            }

            
        },

        mjCode34: function(emitDataPack, IDList, callFunc){
            // ID: 71gameFlag_restartAllGame
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 34,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("申请重置云存档", res.result);
                        callFunc(res.result);
                        //return res.result;
                    },
                    fail: function(res){
                        console.error(res);
                        callFunc(null);
                        //return res.result;
                    },
                });
            }
        },

    },

    // 世界福利线的函数
    worldWelfare: {
        // 回合更新阶段，处理世界的福利线
        // 输入：所有玩家的金币持有量，粮食持有量，福利线比例
        // 输出：金币福利线，粮食福利线
        roundUpdate: function(userNum, goldHold, foodHold, welfareRate){
            var goldHoldTemp = [...goldHold];
            var foodHoldTemp = [...foodHold];
            var welfareIndex = null;
            var goldWelfareThresold = null;
            var foodWelfareThresold = null;
            goldHoldTemp.sort(function(a, b){return a - b}); 
            foodHoldTemp.sort(function(a, b){return a - b});
            welfareIndex = Math.floor(welfareRate * userNum);
            goldWelfareThresold = goldHoldTemp[welfareIndex];
            foodWelfareThresold = foodHoldTemp[welfareIndex];

            // 更新dbSys的福利线数据
            dbTOT.dbSys.goldWelfareThresold = goldWelfareThresold+500; // 测试使用，实际应该去掉+500
            dbTOT.dbSys.goldWelfareThresold = foodWelfareThresold+500;

            var dataPack = {
                "goldWelfareThresold": goldWelfareThresold,
                "foodWelfareThresold": foodWelfareThresold,
            }

            return dataPack
        }
    },

    // 回合奖励更新的函数
    logon: {
        // 回合更新阶段，处理用户的回合奖励更新
        // 输入：回合登陆奖励金币量，回合登陆奖励粮食量，上次登陆时间距离本次登陆时间间隔多少个萌鸡日（真实世界的小时），奖励允许的最长间隔时间
        // 输出：回合登陆状态位，回合登陆金币反馈，回合登陆粮食反馈
        roundUpdate: function(userNum, goldLogon, foodLogon, logGap, gapMax){
            var logonReady = [];
            var goldFeedback = [];
            var foodFeedback = [];
            for(let j = 0,len=userNum; j < len; j++) {
                logonReady.push(1);
                
                if (logGap[j] < gapMax){
                    goldFeedback.push(goldLogon * (logGap[j]+1));
                    foodFeedback.push(foodLogon * (logGap[j]+1));
                } else {
                    goldFeedback.push(goldLogon * gapMax);
                    foodFeedback.push(foodLogon * gapMax);
                }
                
            }
            var dataPack = {
                "logonReady": logonReady,
                "goldFeedback": goldFeedback,
                "foodFeedback": foodFeedback,
            }
            return dataPack
        },

        logonAward: function(goldLogon, foodLogon, logGap, gapMax){
            var logonAward = [];
            var logonReady = 1;
            if (logGap < gapMax){
                logonAward.push(goldLogon * (logGap+1));
                logonAward.push(foodLogon * (logGap+1));
            } else {
                logonAward.push(goldLogon * gapMax);
                logonAward.push(foodLogon * gapMax);
            }
                
            var dataPack = {
                "logonAward": logonAward,
                "logonReady": logonReady,
            }
            return dataPack
        },

        mjCode11: function(emitDataPack, IDList, callFunc){
            // ID: 1goldHoldVolume, 2foodHoldVolume, 5dailyLogonAward,gold, 6dailyLogonAward,food, 61dailyAwardReady
            // step 1 校验数据包正确性，完整性
            if (!emitDataPack){
                console.log("数据包为空！")
                return {}
            } else if (!emitDataPack.emitID || !emitDataPack.emitData){
                console.log("数据包ID或数据包数据为空！")
                return {}
            } else if (emitDataPack.emitID.toString() != IDList.toString()){
                console.log("数据包接口不正确！")
                return {}
            } else
            {
                wx.cloud.callFunction({
                    name: 'userRequest',
                    data: {
                        code: 11,
                        IDList: IDList,
                    },
                    success: function(res){
                        console.log("领取登录奖励", res.result);
                        //return res.result;
                        callFunc(res.result);
                    },
                    fail: function(res){
                        console.error(res);
                        //return {};
                        callFunc(null);
                    },
                });
            }
        },
    },

    userData: {
        userDataDistribution: function(petRelated00, TradeMarket00, goldBank00, foodBarn00, newsStation00, logon00, userTask00, sysDate){
            GlobalFuncVar.userPetInfo.actiLeftDays = petRelated00.actiLeftDayPRO[0];
            GlobalFuncVar.userPetInfo.actiTypeCurrent = petRelated00.actiTypePRO[0];
            GlobalFuncVar.userPetInfo.actiHarvest = petRelated00.actiHarvestReady[0];
            GlobalFuncVar.userPetInfo.actiAssigned = petRelated00.actiAssignedPRO[0];
            GlobalFuncVar.userPetInfo.actiTypeNext = petRelated00.actiTypeNextPRO[0];
        
            GlobalFuncVar.sysResInfo.priceGoldYesterday = TradeMarket00.goldPriceNow;
            GlobalFuncVar.sysResInfo.priceFoodYesterday = TradeMarket00.foodPriceNow;
            GlobalFuncVar.sysResInfo.priceTrend = TradeMarket00.priceTrendPRO;
            GlobalFuncVar.sysResInfo.priceFoodAvg = TradeMarket00.avgPricePRO;

            GlobalFuncVar.userInfo.foodTradeFeedback = TradeMarket00.foodTradePRO[0];
            GlobalFuncVar.userInfo.foodTradeValue = TradeMarket00.foodTradePREClear[0];
            GlobalFuncVar.userInfo.goldTradeFeedback = TradeMarket00.goldTradePRO[0];
            GlobalFuncVar.userInfo.goldTradeValue = TradeMarket00.goldTradePREClear[0];
            GlobalFuncVar.userInfo.tradeAwardReady = TradeMarket00.tradeAwardReady[0];

            GlobalFuncVar.userInfo.goldInterest = goldBank00.goldInterest[0];
            GlobalFuncVar.userInfo.goldInterestReady = goldBank00.goldInterestReady[0];
            GlobalFuncVar.userInfo.goldWelfareReady = goldBank00.goldWelfareReady[0];
            GlobalFuncVar.sysResInfo.goldWelfareThresold = goldBank00.welfareThresold;
        
            GlobalFuncVar.userInfo.foodWelfareReady = foodBarn00.foodWelfareReady[0];
            GlobalFuncVar.userInfo.foodHarvestReady = foodBarn00.foodHarvestReady[0];
            GlobalFuncVar.sysResInfo.foodHarvestCount = foodBarn00.harvestCountPRO;
            GlobalFuncVar.sysResInfo.foodWelfareThresold = foodBarn00.welfareThresold;
        
            GlobalFuncVar.sysNewsData.newsNow = newsStation00.newsNow;
            GlobalFuncVar.sysNewsData.newsExtra = newsStation00.newsEx;
            GlobalFuncVar.sysNewsData.newsExtraExtra = newsStation00.newsExEx;
            GlobalFuncVar.userInfo.newsExtra = newsStation00.userNews;
        
            GlobalFuncVar.userInfo.dailyAwardReady = logon00.logonReady[0];
            GlobalFuncVar.userInfo.dailyLogon = [logon00.goldFeedback[0],logon00.foodFeedback[0]];
        
            GlobalFuncVar.userInfo.shakeShakeReady = userTask00.shakeShakeReady[0];
        
            // 添加时钟，对接时修改
            GlobalFuncVar.sysDate = sysDate;
        },

        userExistDay: function(){
            var existDay = Math.ceil((dbTOT.dbUser.timeStamp.absolute -  dbTOT.dbUser.timeStamp.relative) / (3600*1000));
            return existDay
        },
    },
};

window.UtlisFunc = {
    // 编写求和函数
    // 输入：一个一维数组
    // 输出：求和值
    sum(arr) {
        var s = 0;
        for (var i=arr.length-1; i>=0; i--) {
            s += arr[i];
        }
        return s;
    },

    // 计算玩家两次登陆时间差
    // 输入：上次时间，本次时间，需求输出类型
    // 输出：根据需求输出类型输出的时间
    timeCal(timeLastLength, timeLast, timeNow, type){
        var timeGap = [];
        if (type == "hour"){
            for(let j = 0,len=timeLastLength; j < len; j++) {
                timeGap.push(Math.floor((timeNow - timeLast[j]) / (3600*1000)));
            }
            return timeGap
        }
    },

    // 接口查询表
    // 输入：接口大ID，string格式
    // 输出：接口小ID，array格式
    lookupTable(IDparent, IDClass){
        if (IDClass == "minor"){
            if (IDparent == "11"){
                return [1,2,5,6,46,61]
            } else if (IDparent == "12"){
                return [1,2,3,4,62]
            } else if (IDparent == "14"){
                return [1,2,7,8,9,10,63]
            } else if (IDparent == "15"){
                return [11,10,64]
            } else if (IDparent == "16"){
                return [2,12,13]
            } else if (IDparent == "17"){
                return [2,13,14,15]
            } else if (IDparent == "18"){
                return [16,17]
            } else if (IDparent == "19"){
                return [18,19,10,17]
            } else if (IDparent == "21"){
                return [18,19]
            } else if (IDparent == "22"){
                return [1,2,25,10,16,26,18,19,65]
            } else if (IDparent == "23"){
                return [1,27,66]
            } else if (IDparent == "24"){
                return [1,30,28]
            } else if (IDparent == "25"){
                return [1,30,29]
            } else if (IDparent == "26"){
                return [1,31,67]
            } else if (IDparent == "27"){
                return [2,32,68]
            } else if (IDparent == "28"){
                return [2,33,69]
            } else if (IDparent == "29"){
                return [1,34,35]
            } else if (IDparent == "31"){
                return [2,36,37]
            } else if (IDparent == "32"){
                return [43,70]
            } else if (IDparent == "33"){
                return [44,45]
            } else if (IDparent == "34"){
                return [71]
            } else if (IDparent == "35"){
                return [48,49]
            } else if (IDparent == "37"){
                return [10,64]
            } 
        } else if (IDClass == "major"){
            if (IDparent == 11){
                return "logon"
            } else if (IDparent == 12){
                return "tradeMarket"
            } else if (IDparent == 14){
                return "userTask"
            } else if (IDparent == 15){
                return "petRelated"
            } else if (IDparent == 16){
                return "petRelated"
            } else if (IDparent == 17){
                return "petRelated"
            } else if (IDparent == 18){
                return "petRelated"
            } else if (IDparent == 19){
                return "petRelated"
            } else if (IDparent == 21){
                return "petRelated"
            } else if (IDparent == 22){
                return "petRelated"
            } else if (IDparent == 23){
                return "goldBank"
            } else if (IDparent == 24){
                return "goldBank"
            } else if (IDparent == 25){
                return "goldBank"
            } else if (IDparent == 26){
                return "goldBank"
            } else if (IDparent == 27){
                return "foodBarn"
            } else if (IDparent == 28){
                return "foodBarn"
            } else if (IDparent == 29){
                return "tradeMarket"
            } else if (IDparent == 31){
                return "tradeMarket"
            } else if (IDparent == 32){
                return "petRelated"
            } else if (IDparent == 33){
                return "userTask"
            } else if (IDparent == 34){
                return "userTask"
            } else if (IDparent == 35){
                return "tradeMarket"
            } else if (IDparent == 37){
                return "petRelated"
            } 
        }
        
    }, 

    // 时间获取
    // 输入：null
    // 输出: 
    getNewDate(){
        let dateTemp = new Date();
        let newDate = {
            MM: dateTemp.getMonth()+1,
            DD: dateTemp.getDate(),
            HH: dateTemp.getHours(),
            Minu: dateTemp.getMinutes(),
            Secon: dateTemp.getSeconds(),
        }
        return newDate
    }
};

