// ==UserScript==
// @name         12
// @version      1.0
// @description  2333
// @author       Klee
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at       @run-at document-idle


// @updateURL https://raw.githubusercontent.com/KleeU/userscript/master/danmu/123.js
// @downloadURL https://raw.githubusercontent.com/KleeU/userscript/master/danmu/123.js




// ==/UserScript==


(function() {

    clean(2000);
    function clean(seconds){
        setTimeout(function(){
            $("i[name='ctlbar_danmuku_close']").click();
        },seconds);
    }
})();
