
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onClear(){},

    onShow(PrtName, FabInfo){
        this.node.active = true;
    },

    onHide(){
        this.node.active = false
    },

    onClickPetInfo1(){
        this.onHide();
        GlobalFuncVar.CallPetInfo(this.node,"PetInfo","dayu");
        
    },

    onClickPetInfo2(){
        this.onHide();
        GlobalFuncVar.CallPetInfo(this.node,"PetInfo","duoduo");
    },

    onClickPetInfo3(){
        this.onHide();
        GlobalFuncVar.CallPetInfo(this.node,"PetInfo","huanhuan");
    },

    onClickPetInfo4(){
        this.onHide();
        GlobalFuncVar.CallPetInfo(this.node,"PetInfo","maiqi");
    },

    // update (dt) {},
});
