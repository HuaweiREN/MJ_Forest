

cc.Class({
    extends: cc.Component,

    properties: {
        _flagZero : false, // 回合开始flag
        _flagHalf : false, // 30分钟flag
        _flagMinusFive : false, // 剩五分钟flag
        _flagMinusOne : false, // 剩一分钟flag
        _flagMinusHalfOne : false, // 剩30秒flag
        _roundUpdated: false,
        _roundTimer: null,
        _AlertExist: null,
        _loadindFinished: null,
        _second: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 将最底层的页面节点存入字典中
        GlobalFuncVar.getNodeInfo(this.node,"BaseView");
        GlobalFuncVar.getNodeInfo(this.node.getChildByName("WelcomeBase"),"WelcomeBase");  

        // 提前渲染资源，加快页面切换速度
        GlobalFuncVar.resPreload();

        // 显示背景音乐
        cc.loader.load({url: "https://7869-xiaowei-test-5xkmt-1301155080.tcb.qcloud.la/GameMusic/bgmLong.mp3?sign=0d8ead8c5b6cd8013f49182d12a12140&t=1584718239", type: "mp3"}, function(err, res){
            if(err){
                console.log(err);
                return;
            }
            cc.audioEngine.play(res, true, 0.6);
        }.bind(this));

        /*
        // 设定页面等待计时器, 200ms
        var loadSeq = function (time){
            return new Promise(function(resolve, reject){
                setTimeout(function () {
                    resolve("页面等待中！");
                }, time);
            })
        };

        //// 20200308
        // 显示进度条页面 0%-100%，利用此时间段进行本地--服务器数据传输
        loadSeq(50)
            .then( (msg) => {console.log(msg + "加载页面开始");GlobalFuncVar.WelcomePrefab("Welcome", GlobalFuncVar.sysNodeDict["BaseView"],null); return loadSeq(5000)}) // 渲染加载页
            .then( (msg) => {console.log(msg + "加载页面结束");
                //GlobalFuncVar.sysNodeDict["BaseView"].removeChild(GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("Welcome"))
                var welcomeNode = GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("Welcome");
                welcomeNode.removeFromParent(true);
                welcomeNode.destroy();
            });
        
        // 给服务器发送登陆信息

        // 模拟时钟，对接时删除
        //var dateTemp = new Date();
        
        // 接收服务器登陆信息，及数据包，现在假设数据包为: dataPackLogon
        //var dataPackLogon = GlobalFuncVar.requestDataPack(dateTemp);
        GAMEFUNC_MAIN.GAME_INIT();
        var dataPackLogon = GAMEFUNC_MAIN.LOGON_UPDATE();

        // 数据包赋值给线下的全局变量
        GlobalFuncVar.dataTransfer(dataPackLogon);
        */

        // 用户点击开始游戏，并授权
        WeChat.Login().then(res => {
            //console.log("完成登录");
            //console.log(res);
            // 开启主页面渲染
            console.log("是否初次登录: ", GlobalFuncVar.userInfo.INIT);
            this._loadindFinished = true;
            // 如果玩家不是新手，则不显示新手教程
            if (GlobalFuncVar.userInfo.INIT == false){
                console.log("进入首页");
                GlobalFuncVar.TierOnePrefab("MainView", this.node); //渲染首页
                if (GlobalFuncVar.sysDate.Minu == 59 && GlobalFuncVar.sysDate.Secon >= 30){
                    console.log("正好是封锁时期，不能弹窗每日奖励~");
                } else {
                    // 每日登陆弹窗，并把弹窗放在zindex = max(children_num)的位置，最前端，可以与poptimealert公用pop up window.
                    this.node.removeChild(this.node.getChildByName("PopUpType5"));
                    //延迟三秒弹出每日奖励，确保mainView已经加载完毕
                    setTimeout(function () {
                        GlobalFuncVar.popDailyAward();
                    }.bind(this), 3000);
                }
                //开启返回程序监听
                WeChat.onShow();  
                WeChat.onHide(); 

            // 如果玩家是新手，或是选择换鸡，则显示新手教程
            } else if (GlobalFuncVar.userInfo.INIT == true){
                console.log("进入新手页");
                // 显示Tutorial页面，指导新手
                GlobalFuncVar.TutorialPrefab("Tutorial", this.node); //新手页
            }; 

            // 加载子域图片（排行榜）
            GlobalFuncVar.childDomainPreload();
            // 加载好友头像（用于世界排行榜）
            GlobalFuncVar.avatarPreload();
        });

        // 设置倒计时，设置flag，存字典，及其他
        this._roundTimer = this.localTimer;
        this.setTimer();
    },

    //// 20200305
    start () {
        /*
        // 设定主页面启动之前的定时器，目前设定2000ms
        var initSeq = new Promise(function(resolve, reject){
            setTimeout(function () {
                resolve("页面start！");
            }, 3000);
        });

        //// 20200305
        // 定时器完成后，开启主页面渲染
        initSeq.then((msg)=>{
            console.log(msg);
            this._loadindFinished = true;
            
            // 如果玩家不是新手，则不显示新手教程
            if (GlobalFuncVar.userInfo.INIT == false){
                // 显示MainView，目前放在了start(){}函数中
                GlobalFuncVar.TierOnePrefab("MainView", this.node); //渲染首页
                // 每日登陆弹窗，并把弹窗放在zindex = max(children_num)的位置，最前端，可以与poptimealert公用pop up window.
                // 消除时间弹窗带来的潜在风险
                this.node.removeChild(this.node.getChildByName("PopUpType5"));
                this.popDailyAward();

            // 如果玩家是新手，或是选择换鸡，则显示新手教程
            } else if (GlobalFuncVar.userInfo.INIT == true){
                // 显示Tutorial页面，指导新手
                GlobalFuncVar.TutorialPrefab("Tutorial", this.node); //新手页
            }; 
        });
        */
    },

    update (dt) {
        // 根据倒计时时间变更计时器
        this.checkFlag();
        if (this._loadindFinished == true){
            // 计时器相关弹窗
            this.popTimeAlert();
        }

        if (GlobalFuncVar.gameFlag.timeCheck == true){
            this.reSchedule();
        }

        /*
        // 监听flag
        if (this._flagMinusHalfOne == true){
            // 如果在本回合的59.30未更新过
           if (this._roundUpdated == false){
               // 取消目前的计时器
                this.unschedule(this._roundTimer);
               //请求服务器进行更新
                GAMEFUNC_MAIN.ROUND_UPDATE();
                //更新标志位，显示已更新过
                // 更新一个计时器
                this.setTimer();
                this._roundUpdated = true;
                GlobalFuncVar.gameFlag.petInfoUpdate = true;
                GlobalFuncVar.gameFlag.petAnimiUpdate = true;
           }
           this._flagMinusHalfOne = false;
        };
        */
        
        if (GlobalFuncVar.gameFlag.restartAllGame == true){
            this.node.removeAllChildren(true);
            console.log("LOCAL 游戏即将重新开始");
            GlobalFuncVar.userInfo.INIT = true;
            GlobalFuncVar.gameFlag.restartAllGame = false;
            cc.audioEngine.stopAll();
            this.onLoad();
        };

        /*
        if (this._second != GlobalFuncVar.sysDate.Secon){
            console.log("min: ", GlobalFuncVar.sysDate.Minu, " second: ", GlobalFuncVar.sysDate.Secon);
            this._second = GlobalFuncVar.sysDate.Secon;
        }
        */
    },

    // 重新设置一个计时器
    reSchedule: function(){
        GlobalFuncVar.gameFlag.timeCheck = false;
        console.log("重新设置一个倒计时！");
        this.unschedule(this._roundTimer);
        this.setTimer();

        /*
        //// 每分钟假装登陆一次
        WeChat.onRoundUpdate().then(msg => {
            console.log(msg);
            console.log("该段代码应与服务器回合更新周期同步更改");
        })
        */
    },

    // 接到服务器信息后，以服务器时间为准，开启倒计时，每一秒钟计算一次，计算至回合开始
    setTimer: function(){
        // 以秒为单位的时间间隔
        var interval = 1;
        // 重复次数
        var repeat = (59-GlobalFuncVar.sysDate.Minu)*60 + (59-GlobalFuncVar.sysDate.Secon) + 10000;
        // 开始延时
        var delay = 0;
        this.schedule(this._roundTimer, interval, repeat, delay);
        // test
        this._second = GlobalFuncVar.sysDate.Secon;
    },

    localTimer: function(){        
        if (GlobalFuncVar.sysDate.Secon == 59){
            GlobalFuncVar.sysDate.Minu += 1;
            if (GlobalFuncVar.sysDate.Minu == 60){
                GlobalFuncVar.sysDate.Minu = 0;
            }
            GlobalFuncVar.sysDate.Secon = 0;
        } else {
            GlobalFuncVar.sysDate.Secon += 1;
        }
    },

    //// 20200306
    // 根据倒计时进行弹窗逻辑设计
    popTimeAlert: function(){
        if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == null){
            if (this.node.getChildByName("PopUpType5")){
                this._AlertExist = this.node.getChildByName("PopUpType5").getComponent("cTimeAlert")._count;
            } else {
                this._AlertExist = null;
            }
            // 如果倒计时时间为0，则弹窗萌鸡森林开放
            if (GlobalFuncVar.sysDate.Minu == 30 && GlobalFuncVar.sysDate.Secon == 0){
                //回合中间
                if (GlobalFuncVar.gameFlag.popTime == true && (this._AlertExist != "dailyAward" && this._AlertExist != "dailyAwardMax")){
                    GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["萌鸡森林将在30分钟后宵禁30秒哦~\n检查检查，有没有没领取的奖励呀~","好的"],"30");
                    GlobalFuncVar.gameFlag.popTime = false;
                };
            // 如果倒计时时间为5分，则弹窗5分关闭
            } else if (GlobalFuncVar.sysDate.Minu == 55 && GlobalFuncVar.sysDate.Secon == 0){
                //剩五分钟
                if (GlobalFuncVar.gameFlag.popTime == true  && (this._AlertExist != "dailyAward" && this._AlertExist != "dailyAwardMax")){
                    GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["萌鸡森林将在5分钟后宵禁30秒哦~\n抓紧时间去山羊爷爷市场投资呀！~","好的"],"5");
                    GlobalFuncVar.gameFlag.popTime = false;
                };
            // 如果倒计时时间为1分，则弹窗30s关闭
            } else if (GlobalFuncVar.sysDate.Minu == 59 && GlobalFuncVar.sysDate.Secon == 0){
                //剩一分钟
                if (GlobalFuncVar.gameFlag.popTime == true  && (this._AlertExist != "dailyAward" && this._AlertExist != "dailyAwardMax")){
                    GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["萌鸡森林将在30秒后开始宵禁哦~\n买定离手哦！","好的"],"1");
                    GlobalFuncVar.gameFlag.popTime = false;
                };
            };
            /*
            // 如果倒计时时间为30秒，则弹窗关闭
            } else if (GlobalFuncVar.sysDate.Minu == 59 && GlobalFuncVar.sysDate.Secon == 30){
                //剩三十秒，冻结开始
                //if (GlobalFuncVar.gameFlag.popTime == true){
                    this.node.removeChild(this.node.getChildByName("PopUpType5"));
                    GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["当当当！\n森林宵禁啦！揉揉眼睛放松下吧~","好的"],"0.5");
                    GlobalFuncVar.gameFlag.popTime = false;
                //};
            // 以下限制条件都要有，缺一不可
            } else if (GlobalFuncVar.sysDate.Minu == 59 && GlobalFuncVar.sysDate.Secon > 30 && GlobalFuncVar.sysDate.Secon < 59){
                //三十秒内登陆的玩家给予限制
                if (GlobalFuncVar.gameFlag.popTime == true){
                    this.node.removeChild(this.node.getChildByName("PopUpType5"));
                    GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["森林宵禁啦！\n不要着急，黑熊叔叔正在检查治安呢~","好的"],"0.5");
                    GlobalFuncVar.gameFlag.popTime = false;
                };
            };
            */
        }
    },

    // 交易收获奖励弹出，目前放置在了trade market
    /*
    popTradeAward(){
        if (GlobalFuncVar.userInfo.tradeAwardReady == 1){
                GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["山羊爷爷来送市场交易收获啦！\n请查收交易奖励！","收下"],"tradeAward");
        };
    },
    */

    /*
    // 每日登陆奖励弹出
    popDailyAward(){
        if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == null){
            // 如果每日登陆奖励为ok，则弹窗显示
            if (GlobalFuncVar.userInfo.dailyAwardReady == 1){
                this.node.removeChild(this.node.getChildByName("PopUpType5"));
                GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["欢迎训练师归来！\n请查收登陆奖励！","好的"],"dailyAward");
            } else if (GlobalFuncVar.userInfo.dailyAwardReady == 2){
                // 如果每日登陆奖励为“已领取”，则不显示弹窗
                this.node.removeChild(this.node.getChildByName("PopUpType5"));
                GlobalFuncVar.CallTimeAlert(this.node, "PopUpType5", ["欢迎训练师归来！\n登陆奖励已达时间上限！(5小时)","好的"],"dailyAwardMax");
            };
        }
    },
    */
    
    // flag变更函数，根据倒计时变更
    checkFlag(){
        if (GlobalFuncVar.sysDate.Minu == 0 && GlobalFuncVar.sysDate.Secon == 0){
            //回合开始
            this._flagZero = true;
            this._flagHalf = false;
            this._flagMinusFive = false;
            this._flagMinusOne = false;
            this._flagMinusHalfOne = false;
        } else if (GlobalFuncVar.sysDate.Minu == 30 && GlobalFuncVar.sysDate.Secon == 0){
            //回合中间
            this._flagZero = false;
            this._flagHalf = true;
            this._flagMinusFive = false;
            this._flagMinusOne = false;
            this._flagMinusHalfOne = false;
        } else if (GlobalFuncVar.sysDate.Minu == 55 && GlobalFuncVar.sysDate.Secon == 0){
            //剩五分钟
            this._flagZero = false;
            this._flagHalf = false;
            this._flagMinusFive = true;
            this._flagMinusOne = false;
            this._flagMinusHalfOne = false;
        } else if (GlobalFuncVar.sysDate.Minu == 59 && GlobalFuncVar.sysDate.Secon == 0){
            //剩一分钟
            this._roundUpdated = false;
            this._flagZero = false;
            this._flagHalf = false;
            this._flagMinusFive = false;
            this._flagMinusOne = true;
            this._flagMinusHalfOne = false;
        } else if (GlobalFuncVar.sysDate.Minu == 59 && GlobalFuncVar.sysDate.Secon == 30){
            //剩三十秒，冻结开始
            this._flagZero = false;
            this._flagHalf = false;
            this._flagMinusFive = false;
            this._flagMinusOne = false;
            this._flagMinusHalfOne = true;
        };
    },

});
