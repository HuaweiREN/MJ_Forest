
cc.Class({
    extends: cc.Component,

    properties: {
        _settingBtn: cc.Button,
        _whiteBoardBtn: cc.Button,
        _contactBtn: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onClear(){},

    onShow(PrtName, FabInfo){
        this.setNodeDefault();
        this.node.active = true;
    },

    onHide(){
        this.node.active = false;
        
    },

    setNodeDefault(){
        this._settingBtn = this.node.getChildByName("settingBtn").getComponent(cc.Button);
        this._whiteBoardBtn = this.node.getChildByName("whiteBoardBtn").getComponent(cc.Button);
        this._contactBtn = this.node.getChildByName("contactBtn").getComponent(cc.Button);
    },

    onSettingBtnClick(){
        GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["敬请期待设置功能上线哦~", "好的"]);
        
    },
    onContactBtnClick(){
        GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["微信: 13753477289\n来找我聊聊天吧~", "好的"]);
    },
    onWhiteBoardBtnClick(){
        GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["制作团队\n小维的成长之路", "好的"]);
    },
    onShareBtnClick(){
        GlobalFuncVar.CallPopUp(this.node,"PopUpType1",["敬请期待邀请好友功能上线哦~", "好的"]);
    },

    // update (dt) {},
});
