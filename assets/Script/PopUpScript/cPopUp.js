

cc.Class({
    extends: cc.Component,

    properties: {
        _goBackFlag: null,
        _blockInputEvents: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    //// 20200307
    onShow: function(PrtName, FabInfo, Hint, callFunc){
        // 连续使用blockinputevents会出现错误，因此每次都重新添加
        this.node.active = true;
        this._goBackFlag = false;
        this.setHint(Hint);
        this.node.getChildByName("maskLayer").addComponent(cc.BlockInputEvents);
        this.listenToSwitch();
        if (callFunc){
            this.node.getChildByName("root").getChildByName("tip").getChildByName("tipSprite").getComponent(cc.Sprite).spriteFrame = callFunc;
            this.node.getChildByName("root").getChildByName("tip").getChildByName("tipSprite").active = true;
        }
    },
    
    listenToSwitch(){
        this.node.getChildByName("maskLayer").on(cc.Node.EventType.TOUCH_END, function (event){
            this._goBackFlag = true;
        }.bind(this), this);
    },

    onHide: function(){
        this.node.getChildByName("maskLayer").getComponent(cc.BlockInputEvents).destroy();
        this.node.active = false;
        this.node.removeFromParent(true); //while closing the alert window, remove the content node
        this.node.destroy();
    },

    onBtnClick: function(){
        this.node.getChildByName("root").getChildByName("tip").getChildByName("tipSprite").getComponent(cc.Sprite).active = false;
        var node = this.node.getComponent("cFadeInFadeOut");
        node.onFadeOut();
        //this.onHide();
    },

    setHint(Hint){
        if (Hint == null){
            Hint = ["出错啦！收集BUG中", "再给我一次机会"];
        }
        
        this.node.getChildByName("root").getChildByName("tip").getComponent(cc.Label).string = Hint[0];

        this.node.getChildByName("root").getChildByName("confirm").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = Hint[1];
    },
    
    start () {

    },

    //// 20200304
    update (dt) {
        if (this._goBackFlag == true){
            this.onBtnClick();
            this.node.getChildByName("maskLayer").off(cc.Node.EventType.TOUCH_END);
            this._goBackFlag = false;
        };
    },
});
