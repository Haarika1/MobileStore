(function () {
    var app = angular.module("MobileStore",[]);
    var iphone ={
        name:"iphone7 plus",
        color:"apple Red",
        memory:"3GB RAM, 128GB Internal Storage",
        price:75000,
        image:"img/apple_iphone_7.png",
        isSoldOut:true,
        activeTab:"Description"
    };
    var pixel ={
        name:"google pixel",
        color:"silver",
        memory:"4GB RAM, 64GB Internal Storage",
        price:44000,
        image:"img/pixel.png",
        isSoldOut:true,
        activeTab:"Description"
    };
    var samsung ={
        name:"Samsung s8",
        color:"black",
        memory:"6GB RAM, 64GB Internal Storage",
        price:56000,
        image:"img/sam_s8.png",
        isSoldOut:true,
        activeTab:"Description"
    };
    app.controller("StoreController",function () {
        this.mobiles=[iphone,pixel,samsung];
        this.setActiveTab=function (mobile,tab) {
            mobile.activeTab=tab;
        }
    });
})();

