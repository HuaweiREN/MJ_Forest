cc.Class({
    extends: cc.Component,

    properties: {
        DDgame: null,
        YYgame: null,
        MMgame: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    },

    onShow: function(PrtName, FabInfo){
        this.node.active = true;
        this.setDateNowPos();
        this.setMMandYY();
        this.setNoti();
    },

    onHide: function(){
        this.node.active = false;
    },


    setDateNowPos: function(){
        this.DDgame = (GlobalFuncVar.sysDate.HH+8) % 24;
        if (this.DDgame == 0){
            this.DDgame = 24;
        }
        let nodeDateTot = this.node.getChildByName("dateChart");
        let nodeDateNow = nodeDateTot.getChildByName("dateNow").getComponent(cc.Widget);
        let unitX = 1/12;
        let unitY = 1/8;
        let dateRow = Math.ceil(this.DDgame/6);
        let dateCol = this.DDgame - (dateRow-1)*6;
        let moveY = (2*dateRow-1)*unitY;
        let moveX = (2*dateCol-1)*unitX;
        nodeDateNow.isAbsoluteTop = false;
        nodeDateNow.isAbsoluteLeft = false;
        nodeDateNow.top = moveY - 0.0625;
        nodeDateNow.left = moveX - 0.058;
    },

    setMMandYY: function(){
        let node_MMgame = this.node.getChildByName("YYMM").getChildByName("MM");
        let node_YYgame = this.node.getChildByName("YYMM").getChildByName("YY");
        let dateCH = GlobalFuncVar.DateTransfer();
        node_YYgame.getComponent(cc.Label).string = [dateCH.MM2+dateCH.MM1+"萌鸡年"];
        node_MMgame.getComponent(cc.Label).string = [dateCH.DD2+dateCH.DD1+"萌鸡月"];
    },

    setNoti: function(){
        var existDay = Math.ceil((GlobalFuncVar.timeStamp.absolute-GlobalFuncVar.timeStamp.relative)/(3600*1000));
        this.node.getChildByName("NotiText").getComponent(cc.Label).string = "成为萌鸡训练师的第" + existDay + "天...";
    },

    update (dt) {
        if(this.DDgame != GlobalFuncVar.sysDate.HH){
            this.setDateNowPos();
            this.setMMandYY();
        }

     },
});
