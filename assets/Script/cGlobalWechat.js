window.WeChat = {};

// 发送登录请求
WeChat.Login = function(){
    return new Promise((resolve, reject) => {
        wx.login({
            success: function(res){
                if(res.code){
                    console.log("CLOUD 登录成功，获取到code", res.code);
                }
                else{
                    console.log("CLOUD 获取登录code失败！")
                }
            },

        });
        
        wx.getSetting({
            success (res) {
                //console.log("CLOUD 授权状态", res.authSetting);
                if (res.authSetting["scope.userInfo"]) {
                    console.log("CLOUD 用户已授权");
                    window.wx.getUserInfo({
                        success(res){
                            WeChat.loadSeq(50)
                            .then( (msg) => {console.log("LOCAL" + msg + "加载页面开始");GlobalFuncVar.WelcomePrefab("Welcome", GlobalFuncVar.sysNodeDict["BaseView"],null); return WeChat.loadSeq(5000)}) // 渲染加载页
                            .then( (msg) => {console.log("LOCAL" + msg + "加载页面结束");
                                var welcomeNode = GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("Welcome");
                                welcomeNode.removeFromParent(true);
                                welcomeNode.destroy();
                            });
                            //console.log(res);
                            // 注册信息
                            WeChat.onRegisterUser(res.userInfo).then(res => {
                                console.log(res);
                                resolve("CLOUD 完成登录");
                                console.log("上传数据至子域")
                                WeChat.onAddUserOpenData(GlobalFuncVar.userPetInfo.petLevel, 'level');
                                WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.goldHoldVolume, 'coin');
                                WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.foodHoldVolume, 'food');
                                resolve("CLOUD 完成登录");
                            });
                
                        }
                    });
                } 
                else {
                    console.log("CLOUD 用户未授权");
                    GlobalFuncVar.sysNodeDict["WelcomeBase"].active = false;
                    let button = window.wx.createUserInfoButton({
                        type: 'text',
                        text: '',
                        style: {
                            left: 0,
                            top: 0,
                            width: wx.getSystemInfoSync().screenWidth,
                            height: wx.getSystemInfoSync().screenHeight,
                            backgroundColor: '#00000000',//最后两位为透明度
                            color: '#ffffff',
                            fontSize: 20,
                            textAlign: "center",
                            lineHeight: wx.getSystemInfoSync().screenHeight,
                        }
                    });

                    button.show();
                    button.onTap((res)=>{
                        button.destroy();
                        // 开始进度条
                        WeChat.loadSeq(50)
                            .then( (msg) => {console.log("LOCAL" + msg + "加载页面开始");GlobalFuncVar.WelcomePrefab("Welcome", GlobalFuncVar.sysNodeDict["BaseView"],null); return WeChat.loadSeq(5000)}) // 渲染加载页
                            .then( (msg) => {console.log("LOCAL" + msg + "加载页面结束");
                                var welcomeNode = GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("Welcome");
                                welcomeNode.removeFromParent(true);
                                welcomeNode.destroy();
                        });
                        //console.log(res);
                        if (res.errMsg === "getUserInfo:ok"){
                            console.log("CLOUD 已经授权：", res);
                            // 注册信息
                            WeChat.onRegisterUser(res.userInfo).then(res => {
                                //console.log("完成进度条");
                                console.log(res);
                                console.log("上传数据至子域")
                                WeChat.onAddUserOpenData(GlobalFuncVar.userPetInfo.petLevel, 'level');
                                WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.goldHoldVolume, 'coin');
                                WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.foodHoldVolume, 'food');
                                resolve("CLOUD 完成登录");
                            });
                        }
                        else{
                            console.log("CLOUD 没有授权");
                        }
                    })
                }
            }
        })
    });
};

// 设定页面等待计时器, 200ms
WeChat.loadSeq = function (time){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            resolve("页面等待中！");
        }, time);
    })
};                

// 微信登录注册调用
WeChat.onRegisterUser = function(_userinfo){
    return new Promise((resolve, reject) => {
        // 调用云函数处理注册
        wx.cloud.init({env: "xiaowei-test-5xkmt"});
        wx.cloud.callFunction({
            // 云函数的名字
            name: 'login',
            // 传入的参数
            data: {
                userinfo: _userinfo,
            },
            success: function(res){
                console.log("CLOUD 登录成功回调", res);
                // 获取玩家数据和服务器时间
                GlobalFuncVar.dataTransfer(res.result, "logon");
                // 监听时间
                WeChat.onWatchTime();
                /*
                // 完成进度条
                WeChat.loadSeq().then( (msg) => {cc.log(msg + "7"); return WeChat.loadSeq()}).then( (msg) => {cc.log(msg + "8"); return WeChat.loadSeq()})
                .then( (msg) => {cc.log(msg + "9"); return WeChat.loadSeq()}).then( (msg) => {cc.log(msg + "10"); return WeChat.loadSeq()})
                .then( (msg) => {cc.log(msg + "11");GlobalFuncVar.TierOnePrefab("Welcome", GlobalFuncVar.sysNodeDict["BaseView"], [1.0, "数据加载完毕..."]); return WeChat.loadSeq()})
                .then( (msg) => {cc.log(msg + "12");GlobalFuncVar.sysNodeDict["BaseView"].removeChild(GlobalFuncVar.sysNodeDict["BaseView"].getChildByName("Welcome")); return WeChat.loadSeq()})
                .then( (msg) => {
                    cc.log(msg + "12");
                    resolve("完成进度条");
                });
                */
                resolve("LOCAL 完成进度条");
                
            },
            fail: console.error()
        })
    });
};

// 回合更新调用
WeChat.onRoundUpdate = function(){
    return new Promise((resolve, reject) => {
        wx.login({
            success: function(res){
                if(res.code){
                    console.log("CLOUD 回合更新成功，获取到code", res.code);
                    var _userinfo = res.userInfo;
                    // 调用云函数处理注册
                    wx.cloud.init({env: "xiaowei-test-5xkmt"});
                    wx.cloud.callFunction({
                        // 云函数的名字
                        name: 'login',
                        // 传入的参数
                        data: {
                            userinfo: _userinfo,
                        },
                        success: function(res){
                            console.log("CLOUD 回合更新成功回调", res.result);
                            // 获取玩家数据和服务器时间
                            GlobalFuncVar.dataTransfer(res.result, "logon");
                            resolve("LOCAL 回合更新完毕");
                        },
                        fail: console.error()
                    })
                }
                else{
                    console.log("CLOUD 回合更新失败！")
                }
            },

        });     
    });
};

WeChat.onWatchTime = function(){
    const db = wx.cloud.database();
    // 更新用户时间数据至全局
    WeChat.onUpdateUserTime().then(res => {
        // 启动客户端倒计时
        db.collection('user_time').where({
            _openid: GlobalFuncVar.openid
        }).get().then(res => {
            let _step = GlobalFuncVar.sysDate.Minu;
            if (GlobalFuncVar.sysDate.Minu == 59) {
                if (GlobalFuncVar.sysDate.Secon >= 20 && GlobalFuncVar.sysDate.Secon < 30) {
                    _step = 59.2;
                }
                else if (GlobalFuncVar.sysDate.Secon >= 30){
                    _step = 59.3;
                }
            }
            if (res.data.length === 0) {
                // 创建时间数据
                db.collection('user_time').add({data: {
                    step: _step,
                }}).then(res => {console.log("CLOUD 创建时间数据", res)});
            }
            else {
                // 更新时间数据
                db.collection('user_time').where({
                    _openid: GlobalFuncVar.openid
                }).update({data: {
                    step: _step,
                }}).then(res => {console.log("CLOUD 更新时间数据", res)});
            }
            console.log('CLOUD 开始监听时间，当前step: ', _step, ", INIT状态: ", GlobalFuncVar.userInfo.INIT);
            // 如果step为59.3，则封锁
            if (_step == 59.3 && GlobalFuncVar.userInfo.INIT == false){
                GlobalFuncVar.showLockWindow();
            }
            
            GlobalFuncVar.gameFlag.watcher = db.collection('user_time').where({
                _openid: GlobalFuncVar.openid
            }).watch({
                onChange: function(snapshot) {
                    console.log(snapshot);
                    if (snapshot.docChanges[0].updatedFields){
                        console.log("step count: ", snapshot.docChanges[0].updatedFields)
                        let current_step = snapshot.docChanges[0].updatedFields.step;
                        switch (current_step) {
                            case 0: 
                                console.log("CLOUD 开始回合，解锁界面，跳出回合奖励");
                                WeChat.onRoundUpdate().then(msg => {
                                    console.log(msg);
                                    WeChat.onUpdateUserTime().then(msg => {
                                        console.log(msg);
                                        console.log("上传数据至子域")
                                        WeChat.onAddUserOpenData(GlobalFuncVar.userPetInfo.petLevel, 'level');
                                        WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.goldHoldVolume, 'coin');
                                        WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.foodHoldVolume, 'food');
                                        GlobalFuncVar.gameFlag.petInfoUpdate = true;
                                        GlobalFuncVar.gameFlag.userResUpdate = true;
                                        GlobalFuncVar.popDailyAward();
                                    });
                                });
                                if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == null){
                                    GlobalFuncVar.showLockWindow();
                                }
                                break;
                            case 59.3:  
                                console.log("CLOUD 回合结束，锁定界面，更新回合数据");
                                WeChat.onUpdateUserTime().then(msg => {console.log(msg)});
                                if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == null){
                                    GlobalFuncVar.showLockWindow();
                                }
                                break;
                            case 59.2:
                                console.log("CLOUD 倒计时10秒");
                                WeChat.onUpdateUserTime().then(msg => {console.log(msg)});
                                break;
                            default:
                                if(GlobalFuncVar.gameFlag.userLeft == false){
                                    console.log("CLOUD 倒计时更新分钟数");
                                    WeChat.onUpdateUserTime().then(msg => {console.log(msg)});
                                }
                        }
                    }
                },
                onError: function(err) {
                    console.error('the watch closed because of error', err);
                },
            });
        });
    });
};

// 更新本地时间
WeChat.onUpdateUserTime = function(){
    return new Promise((resolve, reject) => {
        wx.cloud.callFunction({
            name: 'getServerTime',
            success: function(res) {
                //console.log("CLOUD 获取服务器日期后的回调", res);
                GlobalFuncVar.timeStamp.absolute = res.result.timeStamp.absolute;
                GlobalFuncVar.sysDate = res.result.sysDate;
                GlobalFuncVar.gameFlag.timeCheck = true;
                resolve("CLOUD 获取服务器日期成功");
            },
        });
    });
};

// 小程序右上角分享页面
WeChat.onRightUpShare = function(){
    wx.showShareMenu({
        withShareTicket: true
    });
    let _title, _picUrl;
    wx.cloud.callFunction({
        name: 'getShareInfo',
        success: function(res){
            console.log("CLOUD 右上角的调用，获取分享对应的信息：", res.result);
            _title = res.result.txt.title;
            _picUrl = res.result.pic.url;
            wx.onShareAppMessage(() => ({
                title: _title,
                imageUrl: _picUrl
            }))
        },
        fail: console.error
    })
};

// 玩家主动打开分享页面
WeChat.onShareFunction = function(){
    wx.showShareMenu({
        withShareTicket: true
    });
    let _title, _picUrl;
    wx.cloud.callFunction({
        name: 'getShareInfo',
        success: function(res){
            console.log("CLOUD 获取分享对应的信息：", res.result);
            _title = res.result.txt.title;
            _picUrl = res.result.pic.url;
            wx.shareAppMessage({
                title: _title,
                imageUrl: _picUrl
            })
        },
        fail: console.error
    })
};

WeChat.onAddUserOpenData = function(_score, _type){
    let addArr = new Array();
    let _value = JSON.stringify({
        'wxgame': {
            'score': _score,
            'update_time': GlobalFuncVar.timeStamp.absolute,
        },
    });
    addArr.push({key: _type, value: _value});
    wx.setUserCloudStorage({
        KVDataList: addArr,
        success: function(res) {
            console.log("CLOUD 开放数据上传成功", res.data, addArr);
        },
        fail: console.error,
        complete: function(res){}
    });
};

WeChat.setWatcher = function(){
    console.log("重新设置一个watcher");
    const db = wx.cloud.database();
    db.collection('user_time').where({
        _openid: GlobalFuncVar.openid
    }).get().then(res => {
        let _step = GlobalFuncVar.sysDate.Minu;
        if (GlobalFuncVar.sysDate.Minu == 59) {
            if (GlobalFuncVar.sysDate.Secon >= 20 && GlobalFuncVar.sysDate.Secon < 30) {
                _step = 59.2;
            }
            else if (GlobalFuncVar.sysDate.Secon >= 30){
                _step = 59.3;
            }
        }
        // 如果step为59.3，则封锁
        if (_step == 59.3 && GlobalFuncVar.userInfo.INIT == false){
            console.log("最后半分钟内切回，封锁");
            GlobalFuncVar.gameFlag.showLock = true;
            GlobalFuncVar.showLockWindow();
        } else if (_step > 0 && _step!= 59.3 && GlobalFuncVar.userInfo.INIT == false){
            console.log("回合中间切回，解除封锁");
            GlobalFuncVar.gameFlag.showLock = false;
            GlobalFuncVar.showLockWindow();

            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            GlobalFuncVar.gameFlag.userResUpdate = true;
            setTimeout(function () {
                GlobalFuncVar.popDailyAward();
            }, 3000);
        } else if (_step == 0 && GlobalFuncVar.userInfo.INIT == false){
            console.log("回合开始切回，解除封锁");
            GlobalFuncVar.gameFlag.showLock = false;
            GlobalFuncVar.showLockWindow();

            console.log("上传数据至子域")
            WeChat.onAddUserOpenData(GlobalFuncVar.userPetInfo.petLevel, 'level');
            WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.goldHoldVolume, 'coin');
            WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.foodHoldVolume, 'food');
            GlobalFuncVar.gameFlag.petInfoUpdate = true;
            GlobalFuncVar.gameFlag.userResUpdate = true;
            setTimeout(function () {
                GlobalFuncVar.popDailyAward();
            }, 3000);
        }
        
        GlobalFuncVar.gameFlag.watcher = db.collection('user_time').where({
            _openid: GlobalFuncVar.openid
        }).watch({
            onChange: function(snapshot) {
                console.log(snapshot);
                if (snapshot.docChanges[0].updatedFields){
                    console.log("step count: ", snapshot.docChanges[0].updatedFields)
                    let current_step = snapshot.docChanges[0].updatedFields.step;
                    switch (current_step) {
                        case 0: 
                            console.log("CLOUD 开始回合，解锁界面，跳出回合奖励");
                            WeChat.onRoundUpdate().then(msg => {
                                console.log(msg);
                                WeChat.onUpdateUserTime().then(msg => {
                                    console.log(msg);
                                    console.log("上传数据至子域")
                                    WeChat.onAddUserOpenData(GlobalFuncVar.userPetInfo.petLevel, 'level');
                                    WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.goldHoldVolume, 'coin');
                                    WeChat.onAddUserOpenData(GlobalFuncVar.userInfo.foodHoldVolume, 'food');
                                    GlobalFuncVar.gameFlag.petInfoUpdate = true;
                                    GlobalFuncVar.gameFlag.userResUpdate = true;
                                    GlobalFuncVar.popDailyAward();
                                });
                            });
                            if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == null){
                                GlobalFuncVar.showLockWindow();
                            }
                            break;
                        case 59.3:  
                            console.log("CLOUD 回合结束，锁定界面，更新回合数据");
                            WeChat.onUpdateUserTime().then(msg => {console.log(msg)});
                            if (GlobalFuncVar.userInfo.INIT == false && GlobalFuncVar.gameFlag.TutorialStep == null){
                                GlobalFuncVar.showLockWindow();
                            }
                            break;
                        case 59.2:
                            console.log("CLOUD 倒计时10秒");
                            WeChat.onUpdateUserTime().then(msg => {console.log(msg)});
                            break;
                        default:
                            if(GlobalFuncVar.gameFlag.userLeft == false){
                                console.log("CLOUD 倒计时更新分钟数");
                                WeChat.onUpdateUserTime().then(msg => {console.log(msg)});
                            }
                    }
                }
            },
            onError: function(err) {
                console.error('the watch closed because of error', err);
            },
        });
    });
};

WeChat.onShow = function(){
    console.log("开启微信返回界面监听");
    if (GlobalFuncVar.gameFlag.onShowFlag == false){
        wx.onShow(()=>{
            console.log("this is the watcher: ", GlobalFuncVar.gameFlag.watcher);
            WeChat.onRoundUpdate().then(msg => {
                console.log(msg);
                WeChat.onUpdateUserTime().then(msg => {
                    console.log(msg);
                    WeChat.setWatcher();
                });
            });
            console.log("监听用户返回！");
            GlobalFuncVar.gameFlag.userLeft = false;
        });
        GlobalFuncVar.gameFlag.onShowFlag = true;
    }
    
};

WeChat.onHide = function(){
    console.log("开启微信切入后台监听");
    if (GlobalFuncVar.gameFlag.onHideFlag == false){
        wx.onHide(()=>{
            GlobalFuncVar.gameFlag.userLeft = true;
            GlobalFuncVar.gameFlag.watcher.close();
            console.log("监听用户离开！，关闭watcher");
            console.log("this is the watcher: ", GlobalFuncVar.gameFlag.watcher);
        });
        GlobalFuncVar.gameFlag.onHideFlag = true;
    }
    
};
