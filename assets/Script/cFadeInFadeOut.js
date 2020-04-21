
cc.Class({
    extends: cc.Component,

    properties: {
        _fadeInFlag: null,
        _fadeOutFlag: null,
        _scaleIncrement: null,
        _incrementTimes: null,
        _scaleNode: cc.Node,
        _CallName: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onFadeIn(PrtName, FabInfo, Hint, CallFunc, CallName, CallFunc2){
        
        this._CallName = CallName;
        var node = this.node.getComponent(CallName);
        node.onShow(PrtName, FabInfo, Hint, CallFunc, CallFunc2);
        this._scaleNode = this.node.getChildByName("root");
        this._scaleNode.scale = 0;
        this._incrementTimes = 10;
        this._scaleIncrement = 1 / this._incrementTimes;
        this._fadeInFlag = true;
        this._fadeOutFlag = false;
        
    },

    onFadeInOver(){
        this._fadeInFlag = false;
        
    },

    onFadeOut(){
        this._fadeInFlag = false;
        this._fadeOutFlag = true;
    },

    onFadeOutOver(){
        this._fadeOutFlag = false;
        this.node.getComponent(this._CallName).onHide();
    },

    update (dt) {
        if (this._fadeInFlag == true){
            if (this._scaleNode.scale < 0.999){
                this._scaleNode.scale += this._scaleIncrement;
            } else {
                this.onFadeInOver();
            }
        }
        
        if (this._fadeOutFlag == true){
            if (this._scaleNode.scale > 0.001){
                this._scaleNode.scale -= this._scaleIncrement;
            } else {
                this.onFadeOutOver();
            }
        }        
    },
});
