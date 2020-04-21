
cc.Class({
    extends: cc.Component,

    properties: {
        _friend: null,
        _world: null,
        _pet: null,
        _gold: null,
        _food: null,
        _scrollRankContent: cc.Node,
        _childDomain: cc.Node,
        _friendNumTot: null,
        _worldNumTot: null,
        selfRankLevel: cc.Integer,
        selfRankGold: cc.Integer,
        selfRankFood: cc.Integer,
        selfRankItem: cc.Node,
        _selfRankNum: null,
        _petRankBtn : cc.Node,
        _goldRankBtn : cc.Node,
        _foodRankBtn : cc.Node,
        _friendBtn: cc.Node,
        _worldBtn: cc.Node,
        _worldRankNoti: cc.Node,
        _friendRankNoti: cc.Node,
        _rankIcon: null,
        _goldCion: null,
        _foodWheat: null,
        child: {
            default: null,
            type: cc.Node,
            serializable: true
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    //// 20200316注释
    //// 仅需更改this.setRankShow()函数，将子域中传来的图片在该函数内设置为可见，即可完成显示
    /*
    其中，this._friend = true;
        this._pet = true;
        this._world = false;
        this._gold = false;
        this._food = false;

        以上几个指令为控制显示的flag，例如，当_friend与_pet为true时，显示好友排行榜的萌鸡榜
        
        *子域图片的预加载位置：cBaseView -- line: 96 {
            // 加载子域图片（排行榜）
            GlobalFuncVar.childDomainPreload();
        }

        *子域图片预储存位置：cGlobalFuncVar -- line: 1497 {
            childDomainPreload(){
                //GlobalFuncVar.childDomainList.friendPet = xxxxxxxxxx
                //GlobalFuncVar.childDomainList.friendGold = xxxxxxxxxx
                //GlobalFuncVar.childDomainList.friendFood = xxxxxxxxxx
                //GlobalFuncVar.childDomainList.world = xxxxxxxxxx
            },
        }

    */

    onShow(){ 
        this.setDefault();
        this.node.active = true;
    },
    onHide(){},

    //// 20200302
    setDefault(){
        this._friend = true;
        this._pet = true;
        this._world = false;
        this._gold = false;
        this._food = false;
        //this._friendNumTot = GlobalFuncVar.userRankInfo.friendIDList.length;
        this._worldNumTot = GlobalFuncVar.userRankInfo.level.rank.length - 1;
        this._petRankBtn = this.node.getChildByName("petRank");
        this._goldRankBtn = this.node.getChildByName("goldRank");
        this._foodRankBtn = this.node.getChildByName("foodRank");
        this._friendBtn = this.node.getChildByName("friendRank");
        this._worldBtn = this.node.getChildByName("worldRank");
        this._worldRankNoti = this.node.getChildByName("WorldRankNotiText");
        this._friendRankNoti = this.node.getChildByName("FriendRankNotiText");
        this._scrollRankContent = this.node.getChildByName("scrollRank").getChildByName("view").getChildByName("content");
        this._scrollRankContent.removeAllChildren();
        this._scrollRankContent.active = true;
        this._friendBtn.active = true;
        this._worldBtn.active = true;
        this._petRankBtn.active = true;
        this._goldRankBtn.active = true;
        this._foodRankBtn.active = true;
        this._petRankBtn.getComponent(cc.Button).interactable = false;
        this._friendBtn.getComponent(cc.Button).interactable = true;
        this._worldBtn.getComponent(cc.Button).interactable = false;
        this._goldRankBtn.getComponent(cc.Button).interactable = true;
        this._foodRankBtn.getComponent(cc.Button).interactable = true;
        this._worldRankNoti.active = false;
        this._friendRankNoti.active = false;

        this._rankIcon = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("rankIconPS");
        this._goldCoin = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("goldCoinPS");
        this._foodWheat = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("foodWheatPS");

        //this._childDomain = this.node.getChildByName("scrollRank").getChildByName("view").getChildByName("childDomain");
        //console.log("抓取子域展示所需节点", this._childDomain)
        //this._childDomain.active = true;
        this.setSelfRankShow();
        this._selfRankNum = this.selfRankItem.getChildByName("rRank");
        this._selfRankNum.active = false;
        GlobalFuncVar.getNodeInfo(this.node, "RankView");

        //子域相关
        this.childView = this.child.getComponent(cc.WXSubContextView);
        this.childView.enabled = false;
        this.child.active = false;
        this.onFriendRankBtnClick();
        
    },

    onFriendRankBtnClick(){
        /*
        // 除去scrollview上的子节点，并且放入节点池中
        var childrenCount = this._scrollRankContent.childrenCount
        for (let j=0; j<childrenCount; j++){
            // console.log("First element in the array: ", this._scrollRankContent.children[0]);
            GlobalFuncVar.preloadList.rankElementPool.put(this._scrollRankContent.children[0]);
            // console.log("Nodepool element left: ", GlobalFuncVar.preloadList.rankElementPool.size());
        }
        // this._scrollRankContent.removeAllChildren();
        */
        this._scrollRankContent.removeAllChildren();

        this._friend = true;
        this._pet = true;
        this._world = false;
        this.child.active = true;
        this._scrollRankContent.active = false;
        this._petRankBtn.active = true;
        this._goldRankBtn.active = true;
        this._foodRankBtn.active = true;
        this._friendRankNoti.active = false;
        this._petRankBtn.getComponent(cc.Button).interactable = false;
        this._goldRankBtn.getComponent(cc.Button).interactable = true;
        this._foodRankBtn.getComponent(cc.Button).interactable = true;
        this._friendBtn.getComponent(cc.Button).interactable = false;
        this._worldBtn.getComponent(cc.Button).interactable = true;
        //this.setRankShow();
        this.setSelfRankShow();
        this.showFriendLevelRank();
        this._selfRankNum.active = false;
    },
    onWorldRankBtnClick(){
        
        // 除去scrollview上的子节点，并且放入节点池中
        var childrenCount = this._scrollRankContent.childrenCount;
        for (let j=0; j<childrenCount; j++){
            // console.log("First element in the array: ", this._scrollRankContent.children[0]);
            this._scrollRankContent.children[0].color = new cc.Color(255, 255, 255);
            GlobalFuncVar.preloadList.rankElementPool.put(this._scrollRankContent.children[0]);
            // console.log("Nodepool element left: ", GlobalFuncVar.preloadList.rankElementPool.size());
        }
        // 鲁棒性
        this._scrollRankContent.removeAllChildren();
        
        this._world = true;
        this._friend = false;
        this._pet = true;
        this.child.active = false;
        this._scrollRankContent.active = true;
        this._petRankBtn.active = true;
        this._goldRankBtn.active = true;
        this._foodRankBtn.active = true;
        this._friendRankNoti.active = false;
        this._petRankBtn.getComponent(cc.Button).interactable = false;
        this._goldRankBtn.getComponent(cc.Button).interactable = true;
        this._foodRankBtn.getComponent(cc.Button).interactable = true;
        this._friendBtn.getComponent(cc.Button).interactable = true;
        this._worldBtn.getComponent(cc.Button).interactable = false;
        this.setRankShow();
        this._selfRankNum.active = true;
    },
    onPetRankBtnClick(){
        /*
        // 除去scrollview上的子节点，并且放入节点池中
        var childrenCount = this._scrollRankContent.childrenCount
        for (let j=0; j<childrenCount; j++){
            // console.log("First element in the array: ", this._scrollRankContent.children[0]);
            this._scrollRankContent.children[0].color = new cc.Color(255, 255, 255);
            GlobalFuncVar.preloadList.rankElementPool.put(this._scrollRankContent.children[0]);
            // console.log("Nodepool element left: ", GlobalFuncVar.preloadList.rankElementPool.size());
        }
        // this._scrollRankContent.removeAllChildren();
        */
        
        this._scrollRankContent.removeAllChildren();

        this._pet = true;
        this._gold = false;
        this._food = false;
        this._petRankBtn.getComponent(cc.Button).interactable = false;
        this._goldRankBtn.getComponent(cc.Button).interactable = true;
        this._foodRankBtn.getComponent(cc.Button).interactable = true;
        //this.setRankShow();
        if (this._world == true){
            this.setRankShow();
            this._selfRankNum.active = true;
        } else {
            this.setSelfRankShow();
            this.showFriendLevelRank();
            this._selfRankNum.active = false;
        }
    },
    onGoldRankBtnClick(){
        /*
        // 除去scrollview上的子节点，并且放入节点池中
        var childrenCount = this._scrollRankContent.childrenCount
        for (let j=0; j<childrenCount; j++){
            // console.log("First element in the array: ", this._scrollRankContent.children[0]);
            this._scrollRankContent.children[0].color = new cc.Color(255, 255, 255);
            GlobalFuncVar.preloadList.rankElementPool.put(this._scrollRankContent.children[0]);
            // console.log("Nodepool element left: ", GlobalFuncVar.preloadList.rankElementPool.size());
        }
        // this._scrollRankContent.removeAllChildren();
        */
        this._scrollRankContent.removeAllChildren();

        this._gold = true;
        this._food = false;
        this._pet = false;
        this._petRankBtn.getComponent(cc.Button).interactable = true;
        this._goldRankBtn.getComponent(cc.Button).interactable = false;
        this._foodRankBtn.getComponent(cc.Button).interactable = true;
        //this.setRankShow();
        
        if (this._world == true){
            this.setRankShow();
            this._selfRankNum.active = true;
        } else {
            this.setSelfRankShow();
            this.showFriendCoinRank();
            this._selfRankNum.active = false;
        }
    },
    onFoodRankBtnClick(){
        /*
        // 除去scrollview上的子节点，并且放入节点池中
        var childrenCount = this._scrollRankContent.childrenCount
        for (let j=0; j<childrenCount; j++){
            // console.log("First element in the array: ", this._scrollRankContent.children[0]);
            GlobalFuncVar.preloadList.rankElementPool.put(this._scrollRankContent.children[0]);
            // console.log("Nodepool element left: ", GlobalFuncVar.preloadList.rankElementPool.size());
        }
        // this._scrollRankContent.removeAllChildren();
        */
        this._scrollRankContent.removeAllChildren();

        this._food = true;
        this._pet = false;
        this._gold = false;
        this._petRankBtn.getComponent(cc.Button).interactable = true;
        this._goldRankBtn.getComponent(cc.Button).interactable = true;
        this._foodRankBtn.getComponent(cc.Button).interactable = false;
        if (this._world == true){
            this.setRankShow();
            this._selfRankNum.active = true;
        } else {
            this.setSelfRankShow();
            this.showFriendFoodRank();
            this._selfRankNum.active = false;
        }
    },

    setRankShow(){
        /*
        //////子域图片显示
        console.log("选择类型", this._friend, this._pet, this._gold, this._food, this._world);
        if (this._friend == true && this._pet == true){
            console.log("替换图片", GlobalFuncVar.childDomainList.friendPet)
            this._childDomain.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.childDomainList.friendPet;
            this.node.getChildByName("scrollRank").getComponent(cc.ScrollView).scrollToTop(0.2);
        } else if (this._friend == true && this._gold == true){
            console.log("替换图片", GlobalFuncVar.childDomainList.friendGold)
            this._childDomain.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.childDomainList.friendGold;
            this.node.getChildByName("scrollRank").getComponent(cc.ScrollView).scrollToTop(0.2);
        } else if (this._friend == true && this._food == true){
            console.log("替换图片", GlobalFuncVar.childDomainList.friendFood)
            this._childDomain.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.childDomainList.friendFood;
            this.node.getChildByName("scrollRank").getComponent(cc.ScrollView).scrollToTop(0.2);
        } else if (this._world == true){
            console.log("替换图片", GlobalFuncVar.childDomainList.world)
            this._childDomain.getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.childDomainList.world;
            this.node.getChildByName("scrollRank").getComponent(cc.ScrollView).scrollToTop(0.2);
        }
        */
        this.setOtherRankShow();
        this.setSelfRankShow();
    },

    setOtherRankShow(){
        if (this._friend == true && this._pet == true){
            var indexList = GlobalFuncVar.GetRankIndex("friend","pet");
            var rankNametemp = [];
            var rankPetLeveltemp = [];
            var rankFoodtemp = [];
            var rankGoldtemp = [];
            var rankTypetemp = [];

            for (let j=0; j<indexList.length; j++){
                rankNametemp.push(GlobalFuncVar.userRankInfo.firendNameList[indexList[j]]);
                rankPetLeveltemp.push(GlobalFuncVar.userRankInfo.friendPetLevel[indexList[j]]);
                rankFoodtemp.push(GlobalFuncVar.userRankInfo.friendFoodRes[indexList[j]]);
                rankGoldtemp.push(GlobalFuncVar.userRankInfo.friendGoldRes[indexList[j]]);
                rankTypetemp.push(GlobalFuncVar.userRankInfo.friendPetType[indexList[j]]);
            }
            this.selfRankIndex = GlobalFuncVar.GetSelfRankIndex("friend","pet",rankPetLeveltemp);
            GlobalFuncVar.userRankInfo.selfPetFriendRank = this.selfRankIndex+1;
            var NUMCOUNT = this._friendNumTot;

        } else if (this._friend == true && this._gold == true){
            var indexList = GlobalFuncVar.GetRankIndex("friend","gold");
            var rankNametemp = [];
            var rankPetLeveltemp = [];
            var rankFoodtemp = [];
            var rankGoldtemp = [];
            var rankTypetemp = [];

            for (let j=0; j<indexList.length; j++){
                rankNametemp.push(GlobalFuncVar.userRankInfo.firendNameList[indexList[j]]);
                rankPetLeveltemp.push(GlobalFuncVar.userRankInfo.friendPetLevel[indexList[j]]);
                rankFoodtemp.push(GlobalFuncVar.userRankInfo.friendFoodRes[indexList[j]]);
                rankGoldtemp.push(GlobalFuncVar.userRankInfo.friendGoldRes[indexList[j]]);
                rankTypetemp.push(GlobalFuncVar.userRankInfo.friendPetType[indexList[j]]);
            }

            this.selfRankIndex = GlobalFuncVar.GetSelfRankIndex("friend","gold",rankGoldtemp);
            GlobalFuncVar.userRankInfo.selfGoldFriendRank = this.selfRankIndex+1;
            var NUMCOUNT = this._friendNumTot;

        } else if (this._friend == true && this._food == true){
            var indexList = GlobalFuncVar.GetRankIndex("friend","food");
            var rankNametemp = [];
            var rankPetLeveltemp = [];
            var rankFoodtemp = [];
            var rankGoldtemp = [];
            var rankTypetemp = [];

            for (let j=0; j<indexList.length; j++){
                rankNametemp.push(GlobalFuncVar.userRankInfo.firendNameList[indexList[j]]);
                rankPetLeveltemp.push(GlobalFuncVar.userRankInfo.friendPetLevel[indexList[j]]);
                rankFoodtemp.push(GlobalFuncVar.userRankInfo.friendFoodRes[indexList[j]]);
                rankGoldtemp.push(GlobalFuncVar.userRankInfo.friendGoldRes[indexList[j]]);
                rankTypetemp.push(GlobalFuncVar.userRankInfo.friendPetType[indexList[j]]);
            }

            this.selfRankIndex = GlobalFuncVar.GetSelfRankIndex("friend","food",rankFoodtemp);
            GlobalFuncVar.userRankInfo.selfFoodFriendRank = this.selfRankIndex+1;
            var NUMCOUNT = this._friendNumTot;

        } else if (this._world == true && this._pet == true){

            var rankNametemp = [];
            var rankPetLeveltemp = [];
            var rankFoodtemp = [];
            var rankGoldtemp = [];
            var rankTypetemp = [];
            var rankAvatartemp = [];

            for (let j=0; j<this._worldNumTot; j++){
                rankNametemp.push(GlobalFuncVar.userRankInfo.level.name[j]);
                rankPetLeveltemp.push(GlobalFuncVar.userRankInfo.level.level[j]);
                rankFoodtemp.push(GlobalFuncVar.userRankInfo.level.food[j]);
                rankGoldtemp.push(GlobalFuncVar.userRankInfo.level.gold[j]);
                rankTypetemp.push(GlobalFuncVar.userRankInfo.level.type[j]);
                rankAvatartemp.push(GlobalFuncVar.userRankInfo.avatarImage.level[j]);
            }
            // 最后一位存储当前用户信息
            this.selfRankIndex = GlobalFuncVar.userRankInfo.level.rank[this._worldNumTot] - 1;
            console.log(GlobalFuncVar.userRankInfo);
            var NUMCOUNT = this._worldNumTot;

        } else if (this._world == true && this._gold == true){

            var rankNametemp = [];
            var rankPetLeveltemp = [];
            var rankFoodtemp = [];
            var rankGoldtemp = [];
            var rankTypetemp = [];
            var rankAvatartemp = [];

            for (let j=0; j<this._worldNumTot; j++){
                rankNametemp.push(GlobalFuncVar.userRankInfo.gold.name[j]);
                rankPetLeveltemp.push(GlobalFuncVar.userRankInfo.gold.level[j]);
                rankFoodtemp.push(GlobalFuncVar.userRankInfo.gold.food[j]);
                rankGoldtemp.push(GlobalFuncVar.userRankInfo.gold.gold[j]);
                rankTypetemp.push(GlobalFuncVar.userRankInfo.gold.type[j]);
                rankAvatartemp.push(GlobalFuncVar.userRankInfo.avatarImage.gold[j]);
            }
            // 最后一位存储当前用户信息
            this.selfRankIndex = GlobalFuncVar.userRankInfo.gold.rank[this._worldNumTot] - 1;
            console.log(GlobalFuncVar.userRankInfo);
            var NUMCOUNT = this._worldNumTot;

        } else if (this._world == true && this._food == true){
            var rankNametemp = [];
            var rankPetLeveltemp = [];
            var rankFoodtemp = [];
            var rankGoldtemp = [];
            var rankTypetemp = [];
            var rankAvatartemp = [];

            for (let j=0; j<this._worldNumTot; j++){
                rankNametemp.push(GlobalFuncVar.userRankInfo.food.name[j]);
                rankPetLeveltemp.push(GlobalFuncVar.userRankInfo.food.level[j]);
                rankFoodtemp.push(GlobalFuncVar.userRankInfo.food.food[j]);
                rankGoldtemp.push(GlobalFuncVar.userRankInfo.food.gold[j]);
                rankTypetemp.push(GlobalFuncVar.userRankInfo.food.type[j]);
                rankAvatartemp.push(GlobalFuncVar.userRankInfo.avatarImage.food[j]);
            }
            // 最后一位存储当前用户信息
            this.selfRankIndex = GlobalFuncVar.userRankInfo.food.rank[this._worldNumTot] - 1;
            console.log(GlobalFuncVar.userRankInfo);
            var NUMCOUNT = this._worldNumTot;
        };

        let count = 0;
        for (let i=0;i<(NUMCOUNT);i++){
            //if (i < this.selfRankIndex){
            if (true){
                if (GlobalFuncVar.preloadList.rankElementPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
                    console.log("Nodepool element left: ", GlobalFuncVar.preloadList.rankElementPool.size());
                    var RankItem = GlobalFuncVar.preloadList.rankElementPool.get();
                } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
                    var RankItem = cc.instantiate(GlobalFuncVar.preloadList.rankElement);
                    console.log("Nodepool element left: ", GlobalFuncVar.preloadList.rankElementPool.size());
                }

                this._scrollRankContent.addChild(RankItem,0,"RankItem"+count);
                let RankDetail = this._scrollRankContent.getChildByName("RankItem"+count);
                if (count<3){
                    RankDetail.color = new cc.Color(241, 220, 120);
                } else {
                    RankDetail.color = new cc.Color(226, 212, 178);
                }
                if (rankNametemp[count] == GlobalFuncVar.userInfo.name){
                    console.log(count);
                    RankDetail.color = new cc.Color(248, 203, 173);
                }
                RankDetail.getChildByName("rName").getComponent(cc.Label).string = rankNametemp[count];
                RankDetail.getChildByName("rRank").getComponent(cc.Label).string = count+1;
                let petType = rankTypetemp[count];
                let spriteNode = RankDetail.getChildByName("rPetType").getComponent(cc.Sprite);
                let self = this;
                GlobalFuncVar.SetPetSelfieIconUpdate(petType, spriteNode, self);
                RankDetail.getChildByName("rSelfie").getComponent(cc.Sprite).spriteFrame = rankAvatartemp[count];
        
                if (this._world == true && this._pet == true){
                    RankDetail.getChildByName("rPetLevel").getChildByName("rRankIcon").getComponent(cc.Sprite).spriteFrame = this._rankIcon;
                    RankDetail.getChildByName("rGold").getChildByName("rGoldIcon").getComponent(cc.Sprite).spriteFrame = this._goldCoin;
                    RankDetail.getChildByName("rFood").getChildByName("rFoodIcon").getComponent(cc.Sprite).spriteFrame = this._foodWheat;
                    RankDetail.getChildByName("rPetLevel").getComponent(cc.Label).string = rankPetLeveltemp[count];
                    RankDetail.getChildByName("rGold").getComponent(cc.Label).string = rankGoldtemp[count];
                    RankDetail.getChildByName("rFood").getComponent(cc.Label).string = rankFoodtemp[count];
                } else if (this._world == true && this._gold == true){
                    RankDetail.getChildByName("rPetLevel").getChildByName("rRankIcon").getComponent(cc.Sprite).spriteFrame = this._goldCoin;
                    RankDetail.getChildByName("rGold").getChildByName("rGoldIcon").getComponent(cc.Sprite).spriteFrame = this._rankIcon;
                    RankDetail.getChildByName("rFood").getChildByName("rFoodIcon").getComponent(cc.Sprite).spriteFrame = this._foodWheat;
                    RankDetail.getChildByName("rPetLevel").getComponent(cc.Label).string = rankGoldtemp[count];
                    RankDetail.getChildByName("rGold").getComponent(cc.Label).string = rankPetLeveltemp[count];
                    RankDetail.getChildByName("rFood").getComponent(cc.Label).string = rankFoodtemp[count];
                } else if (this._world == true && this._food == true){
                    RankDetail.getChildByName("rPetLevel").getChildByName("rRankIcon").getComponent(cc.Sprite).spriteFrame = this._foodWheat;
                    RankDetail.getChildByName("rGold").getChildByName("rGoldIcon").getComponent(cc.Sprite).spriteFrame = this._goldCoin;
                    RankDetail.getChildByName("rFood").getChildByName("rFoodIcon").getComponent(cc.Sprite).spriteFrame = this._rankIcon;
                    RankDetail.getChildByName("rPetLevel").getComponent(cc.Label).string = rankFoodtemp[count];
                    RankDetail.getChildByName("rGold").getComponent(cc.Label).string = rankGoldtemp[count];
                    RankDetail.getChildByName("rFood").getComponent(cc.Label).string = rankPetLeveltemp[count];
                }

                count += 1;
            }
        };
    },


    setSelfRankShow(){
        this.selfRankLevel = GlobalFuncVar.userRankInfo.level.rank[this._worldNumTot] - 1;
        this.selfRankGold = GlobalFuncVar.userRankInfo.gold.rank[this._worldNumTot] - 1;
        this.selfRankFood = GlobalFuncVar.userRankInfo.food.rank[this._worldNumTot] - 1;
        let node = this.node.getChildByName("scrollRank").getChildByName("selfRankItem");
        node.getChildByName("rName").getComponent(cc.Label).string = GlobalFuncVar.userInfo.name;
        node.getChildByName("rRank").active = true;
        let petType = GlobalFuncVar.userPetInfo.petType;
        let spriteNode = node.getChildByName("rPetType").getComponent(cc.Sprite);
        let self = this;
        GlobalFuncVar.SetPetSelfieIconUpdate(petType, spriteNode, self);
        node.getChildByName("rSelfie").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.userRankInfo.avatarImage.level[this._worldNumTot];

        if (this._pet == true){
            node.getChildByName("rRank").getComponent(cc.Label).string = this.selfRankLevel+1;
            node.getChildByName("rPetLevel").getChildByName("rRankIcon").getComponent(cc.Sprite).spriteFrame = this._rankIcon;
            node.getChildByName("rGold").getChildByName("rGoldIcon").getComponent(cc.Sprite).spriteFrame = this._goldCoin;
            node.getChildByName("rFood").getChildByName("rFoodIcon").getComponent(cc.Sprite).spriteFrame = this._foodWheat;
            node.getChildByName("rPetLevel").getComponent(cc.Label).string = GlobalFuncVar.userPetInfo.petLevel;
            node.getChildByName("rGold").getComponent(cc.Label).string = GlobalFuncVar.userInfo.goldHoldVolume;
            node.getChildByName("rFood").getComponent(cc.Label).string = GlobalFuncVar.userInfo.foodHoldVolume;
        } else if (this._gold == true){
            node.getChildByName("rRank").getComponent(cc.Label).string = this.selfRankGold+1;
            node.getChildByName("rPetLevel").getChildByName("rRankIcon").getComponent(cc.Sprite).spriteFrame = this._goldCoin;
            node.getChildByName("rGold").getChildByName("rGoldIcon").getComponent(cc.Sprite).spriteFrame = this._rankIcon;
            node.getChildByName("rFood").getChildByName("rFoodIcon").getComponent(cc.Sprite).spriteFrame = this._foodWheat;
            node.getChildByName("rPetLevel").getComponent(cc.Label).string = GlobalFuncVar.userInfo.goldHoldVolume;
            node.getChildByName("rGold").getComponent(cc.Label).string = GlobalFuncVar.userPetInfo.petLevel;
            node.getChildByName("rFood").getComponent(cc.Label).string = GlobalFuncVar.userInfo.foodHoldVolume;
        } else if (this._food == true){
            node.getChildByName("rRank").getComponent(cc.Label).string = this.selfRankFood+1;
            node.getChildByName("rPetLevel").getChildByName("rRankIcon").getComponent(cc.Sprite).spriteFrame = this._foodWheat;
            node.getChildByName("rGold").getChildByName("rGoldIcon").getComponent(cc.Sprite).spriteFrame = this._goldCoin;
            node.getChildByName("rFood").getChildByName("rFoodIcon").getComponent(cc.Sprite).spriteFrame = this._rankIcon;
            node.getChildByName("rPetLevel").getComponent(cc.Label).string = GlobalFuncVar.userInfo.foodHoldVolume;
            node.getChildByName("rGold").getComponent(cc.Label).string = GlobalFuncVar.userInfo.goldHoldVolume;
            node.getChildByName("rFood").getComponent(cc.Label).string = GlobalFuncVar.userPetInfo.petLevel;
        }
    },

    // update (dt) {},


    showWorldRank: function(){
        console.log("显示世界排行榜");
        let _rankData = new Array();
        // 在云数据库刷新世界排行榜
        wx.cloud.callFunction({
            name: 'setWorldRank',
            success(res){
                console.log("生成当前的世界排行榜", res.result);
                wx.cloud.callFunction({
                    name: 'getWorldRank',
                    success(res){
                        console.log("获取当前的世界排行榜", res);
                        _rankData = res.result;

                        // 获取排行榜上对应的信息
                        let openDataContext = wx.getOpenDataContext();
                        openDataContext.postMessage({
                            type: 'WORLD',
                            data: _rankData,
                            timer: WeChat.getServerTime()
                        });
                        this.childView.enabled = true;
                        this.child.active = true;
                        this.childView.update();
                    },
                    fail: console.error
                });
            },
            fail: console.error
        });                
    },

    showFriendLevelRank: function(){
        console.log("显示好友等级排行榜");
        // 获取排行榜上对应的信息
        let getArr = new Array();
        getArr.push('level');
        let openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage({
            type: 'FRIEND',
            data: getArr,
            timer: GlobalFuncVar.timeStamp.absolute,
        });
        this.childView.enabled = true;
        this.child.active = true;
        this.childView.update();
    },

    showFriendFoodRank: function(){
        console.log("显示好友食物排行榜");
        // 获取排行榜上对应的信息
        let getArr = new Array();
        getArr.push('food');
        let openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage({
            type: 'FRIEND',
            data: getArr,
            timer: GlobalFuncVar.timeStamp.absolute,
        });
        this.childView.enabled = true;
        this.child.active = true;
        this.childView.update();
    },

    showFriendCoinRank: function(){
        console.log("显示好友金币排行榜");
        // 获取排行榜上对应的信息
        let getArr = new Array();
        getArr.push('coin');
        let openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage({
            type: 'FRIEND',
            data: getArr,
            timer: GlobalFuncVar.timeStamp.absolute,
        });
        this.childView.enabled = true;
        this.child.active = true;
        this.childView.update();
    },

    closeRank: function(){
        console.log("隐藏排行榜");
        this.childView.enabled = false;
        this.child.active = false;
    },
    // update (dt) {},
});