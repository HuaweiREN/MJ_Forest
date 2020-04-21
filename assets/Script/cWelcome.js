cc.Class({
    extends: cc.Component,

    properties: {
        _FabInfo: null,
        _loadPercentage: null,
        _loadText: null,
        _loadProgress: null,
        _percentage: null,
        _loadingSegmentTwo: null,
        _loadingSegmentOne: null,

        _loadingBg: null,
        _loadingNow: null,
        _loadingText2: null,
        _loadingPercentage2: null,
    },

    //// 20200308
    onShow(FabInfo, PrtName){
        this._FabInfo = FabInfo;
        this._percentage = 10;
        this._loadPercentage = this.node.getChildByName("loading").getChildByName("loadPercentage").getComponent(cc.Label);
        this._loadText = this.node.getChildByName("loading").getChildByName("loadingText").getComponent(cc.Label);
        this._loadingSegmentOne = this.node.getChildByName("loading").getChildByName("mask").getChildByName("segmentOne");
        this._loadingSegmentTwo = this.node.getChildByName("loading").getChildByName("mask").getChildByName("segmentTwo");

        this._loadingBg = this.node.getChildByName("loadingBar").getChildByName("loadingbg");
        this._loadingNow = this._loadingBg.getChildByName("loadingNow");
        this._loadingText2 = this.node.getChildByName("loadingBar").getChildByName("loadingBarText").getComponent(cc.Label);
        this._loadingPercentage2 = this.node.getChildByName("loadingBar").getChildByName("loadBarPercentage").getComponent(cc.Label);


        this.node.active =true;
    },

    onHide(){
        this.node.active = false;
        this.node.removeFromParent(true);
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    //// 20200308
    loadingRolling(){
        if (this._loadingSegmentOne.x > 10){
            this._loadingSegmentOne.x = this._loadingSegmentTwo.x - this._loadingSegmentTwo.width;
        }

        if (this._loadingSegmentTwo.x > 10){
            this._loadingSegmentTwo.x = this._loadingSegmentOne.x - this._loadingSegmentOne.width;
        }

        this._loadingSegmentOne.x += 1;
        this._loadingSegmentTwo.x += 1;
    },

    //// 20200308
    dataUpdate(){
        if (this._percentage >= 100){
            this._percentage = 100;
        }
        this._loadPercentage.string = Math.ceil(this._percentage) + "%/100%";
        this._loadingSegmentOne.y += this._percentage;
        this._loadingSegmentTwo.y += this._percentage;
        if (this._percentage < 30){
            this._loadText.string = "初始化...";
        } else if (this._percentage < 50) {
            this._loadText.string = "发送数据中...";
        } else if (this._percentage < 99) {
            this._loadText.string = "接收数据中...";
        } else if (this._percentage == 100) {
            this._loadText.string = "欢迎萌鸡训练师归来！";
        }
    },


    //// 20200311
    loadingUpdate(){
        if (this._percentage >= 100){
            this._percentage = 100;
        }
        this._loadingPercentage2.string = Math.ceil(this._percentage) + "%/100%";
        this._loadingNow.width = this._loadingBg.width * this._percentage/100;
        if (this._percentage < 30){
            this._loadingText2.string = "初始化...";
        } else if (this._percentage < 50) {
            this._loadingText2.string = "发送数据中...";
        } else if (this._percentage < 99) {
            this._loadingText2.string = "接收数据中...";
        } else if (this._percentage == 100) {
            this._loadingText2.string = "欢迎萌鸡训练师归来！";
        }
    },

    //// 20200308
    update (dt) {
        this._percentage += 1;
        this.loadingUpdate();
    },
});
