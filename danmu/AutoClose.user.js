// ==UserScript==
// @name         auto close bullet screen 
// @version      1.0
// @description  2333
// @author       Klee
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at       @run-at document-idle
// @updateURL https://github.com/KleeU/userscript/raw/master/danmu/AutoClose.user.js
// @downloadURL https://github.com/KleeU/userscript/raw/master/danmu/AutoClose.user.js
// 111
// ==/UserScript==


(function() {

    clean(2000);
    function clean(seconds){
        setTimeout(function(){
            $("i[name='ctlbar_danmuku_close']").click();
        },seconds);
    }
})();
