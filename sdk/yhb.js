/**
 * yhBridge.js
 */

const YHB = {
    toast: function(params={
        action: "toast",
        content: ""
    }){
        const str = JSON.stringify(params)
        if (window.webkit && window.webkit.messageHandlers) {
            window.webkit.messageHandlers.yhBridge.postMessage(str)
        }
    }
}


~function(){
    window.yhb = YHB
}()
