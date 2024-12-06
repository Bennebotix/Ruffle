sha256(((a)=>a?a:'')(getCookie('key'))).then(res => {
    if (res !== 'f6a5a99f56ff082b24369731f69fbb764ca33d2ef817a534cf6ca4d2d5dd1a7d') {
        window.stop();
        document.documentElement.innerHTML = '';
        document.write('<head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">Page inaccessible. Please contact the administrator for access.</pre></body>');
        document.close();
        window.location.href = 'about:blank';
        window.history.forward();
        window.onbeforeunload = function() { return "Warning: Leaving this page may result in loss of data."; };
    }
})

let sha256 = async (message) => {
    return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(message)))).map(b => b.toString(16).padStart(2, '0')).join('');
}

function getCookie(cookiename) {
    var cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
