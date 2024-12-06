if (sha256(getCookie('key')) != 'b81ae6d606ee9295cab3e2cfad84fba393eccb03408a5b2acbf89b3e80b7882b') {  
    window.location = 'data:text/html,no';
}

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);                    
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function getCookie(cookiename) {
    var cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
