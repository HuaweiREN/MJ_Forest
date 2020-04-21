cc.Class({
    extends: cc.Component,

    properties: {
        _title: cc.Label,
        _btnGo: cc.Button,
        _notiText: cc.Label,
        _tutorialText: null,
        _dayuBtn: cc.Node,
        _duoduoBtn: cc.Node,
        _huanhuanBtn: cc.Node,
        _maiqiBtn: cc.Node,
        _petSelected: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setNodeDefault(){
        this._title = this.node.getChildByName("title").getComponent(cc.Label);
        this._btnGo = this.node.getChildByName("btnGo").getComponent(cc.Button);
        this._notiText = this.node.getChildByName("NotiBg").getChildByName("NotiText").getComponent(cc.Label);
        this._dayuBtn = this.node.getChildByName("PetDict").getChildByName("petGrid").getChildByName("petInfo1");
        this._duoduoBtn = this.node.getChildByName("PetDict").getChildByName("petGrid").getChildByName("petInfo2");
        this._huanhuanBtn = this.node.getChildByName("PetDict").getChildByName("petGrid").getChildByName("petInfo3");
        this._maiqiBtn = this.node.getChildByName("PetDict").getChildByName("petGrid").getChildByName("petInfo4");
        
    },

    //// 20200309
    setDataDefault(){
        this._tutorialText = GlobalFuncVar.verbal.tutorial.TutorialText;
    },

    setBgDefault(){
        if (this._petSelected == "dayu"){
            this._dayuBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("lightOrangeBgPS");
            this._duoduoBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
            this._huanhuanBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
            this._maiqiBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
            
        } else if (this._petSelected == "duoduo"){
            this._dayuBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
            this._duoduoBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("lightOrangeBgPS");
            this._huanhuanBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
            this._maiqiBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
        } else if (this._petSelected == "huanhuan"){
                this._dayuBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
                this._duoduoBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
                this._huanhuanBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("lightOrangeBgPS");
                this._maiqiBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
        } else if (this._petSelected == "maiqi"){
                this._dayuBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
                this._duoduoBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
                this._huanhuanBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("noEdgeBgPS");
                this._maiqiBtn.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = GlobalFuncVar.preloadList.iconPackPS.getSpriteFrame("lightOrangeBgPS");
        };
    },

    setDataUpdate(){
        var interval = 0.1;
        // 重复次数
        var repeat = this._tutorialText.length;
        // 开始延时
        var delay = 1;
        var stringCount = 0;
        this.schedule(function() {
            this._notiText.string = this._tutorialText.substring(0,stringCount);
            stringCount += 1;
        }, interval, repeat, delay);
    },
    
    onShow(){
        this.setNodeDefault();
        this.setDataDefault();
        this.setDataUpdate();
        this.node.active = true;
    },

    onHide(){
        this.node.active = false;
        this.node.removeFromParent(true); //while closing the alert window, remove the content node
    },

    onDayuBtnClick(){
        this._petSelected = "dayu";
        this.setBgDefault();
    },

    onDuoduoBtnClick(){
        this._petSelected = "duoduo";
        this.setBgDefault();
    },

    onHuanhuanBtnClick(){
        this._petSelected = "huanhuan";
        this.setBgDefault();
    },

    onMaiqiBtnClick(){
        this._petSelected = "maiqi";
        this.setBgDefault();
    },

    onGoBtnClick(){
        if (this._petSelected == "dayu"){
            var petName = "大宇";
            var dataPack = {
                petSelected: this._petSelected,
                petNameCH: petName,
                prtName: this.node.parent,
            };
            var CallFunc = {
                onHide: this.onHide.bind(this),
            };
            GlobalFuncVar.CallDoubleConfirm_Init(this.node,"PopUpType6",["确定要领养萌鸡"+petName+"吗？","再想想","确定"], dataPack ,CallFunc);
        } else if (this._petSelected == "duoduo"){
            var petName = "朵朵";
            var dataPack = {
                petSelected: this._petSelected,
                petNameCH: petName,
                prtName: this.node.parent,
            };
            var CallFunc = {
                onHide: this.onHide.bind(this),
            };
            GlobalFuncVar.CallDoubleConfirm_Init(this.node,"PopUpType6",["确定要领养萌鸡"+petName+"吗？","再想想","确定"], dataPack ,CallFunc);
        } else if (this._petSelected == "huanhuan"){
            var petName = "欢欢";
            var dataPack = {
                petSelected: this._petSelected,
                petNameCH: petName,
                prtName: this.node.parent,
            };
            var CallFunc = {
                onHide: this.onHide.bind(this),
            };
            GlobalFuncVar.CallDoubleConfirm_Init(this.node,"PopUpType6",["确定要领养萌鸡"+petName+"吗？","再想想","确定"], dataPack ,CallFunc);
        } else if (this._petSelected == "maiqi"){
            var petName = "麦奇";
            var dataPack = {
                petSelected: this._petSelected,
                petNameCH: petName,
                prtName: this.node.parent,
            };
            var CallFunc = {
                onHide: this.onHide.bind(this),
            };
            GlobalFuncVar.CallDoubleConfirm_Init(this.node,"PopUpType6",["确定要领养萌鸡"+petName+"吗？","再想想","确定"], dataPack ,CallFunc);
        } else {
            GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["你还没领养萌鸡呢~","返回"]);
        };
        
    },

    // update (dt) {},
});
