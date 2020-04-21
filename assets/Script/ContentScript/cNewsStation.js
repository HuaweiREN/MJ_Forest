cc.Class({
    extends: cc.Component,

    properties: {
        _newsNow: cc.String,
        _newsNoExtra:cc.String,
        _newsExtra: cc.String,
        _newsNowNode: cc.node,
        _newsExtraNode: cc.node,
        _newsExtraExtra: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onShow(){
        this.node.active = true;
        this.setNodeData();
        this.setNewsNowContent();
        if (GlobalFuncVar.userInfo.newsExtra == null){
            this.setNewsNoExtraContent();
        } else if(GlobalFuncVar.userInfo.newsExtra == "额外新闻"){
            this.setNewsExtraContent();
        } else if(GlobalFuncVar.userInfo.newsExtra == "额外新闻额外新闻"){
            this.setNewsExtraExtraContent();
        };
        GlobalFuncVar.gameFlag.newsViewed = true; 
    },
    onHide(){
        this.node.active = false;
    },

    setNodeData(){
        this._newsNowNode = this.node.getChildByName("NewsNowCard").getChildByName("view").getChildByName("content");
        this._newsExtraNode = this.node.getChildByName("NewsExtraCard").getChildByName("view").getChildByName("content");
        this._newsNow = GlobalFuncVar.sysNewsData.newsNow;
        this._newsNoExtra = "萌鸡没有参加森林新闻发布会，没有额外新闻喔~";
        this._newsExtra = GlobalFuncVar.sysNewsData.newsExtra;
        this._newsExtraExtra = GlobalFuncVar.sysNewsData.newsExtraExtra;
    },

    
    setNewsNowContent(){
        this._newsNowNode.getComponent(cc.Label).string = this._newsNow;
    },
    setNewsNoExtraContent(){
        this._newsExtraNode.getComponent(cc.Label).string = this._newsNoExtra;
    },
    setNewsExtraContent(){
        this._newsExtraNode.getComponent(cc.Label).string = this._newsExtra;
    },
    setNewsExtraExtraContent(){
        this._newsExtraNode.getComponent(cc.Label).string = this._newsExtra + "\n\n萌鸡采访收获新闻如下: \n" + this._newsExtraExtra;
    },

    // update (dt) {},
});
