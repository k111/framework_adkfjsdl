
// Device
var Device = function(){
    var u = window.navigator.userAgent.toLowerCase();
    var v = window.navigator.appVersion.toLowerCase();
    return {
        isTablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
        || u.indexOf("ipad") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
        || u.indexOf("kindle") != -1
        || u.indexOf("silk") != -1
        || u.indexOf("playbook") != -1,
        isMobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
            || u.indexOf("iphone") != -1
            || u.indexOf("ipod") != -1
            || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
            || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
            || u.indexOf("blackberry") != -1,
        isIE:(u.indexOf('msie') != -1),
        isIE8:(v.indexOf("msie 8.") != -1)
  };
};


//if(_ua.isMobile){
//この中のコードはスマホにのみ適用
//}else if(_ua.isTablet){
//この中のコードはタブレットにのみ適用
//}else{
//この中のコードはスマホとタブレット以外に適用
//}

module.exports = Device;

