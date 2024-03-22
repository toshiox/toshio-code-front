export function isMobile() {
    let userAgent = navigator.userAgent;

    let dispositivosMoveis = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

    return dispositivosMoveis.some(dispositivo => userAgent.match(dispositivo));
}

export const navigatorFunctions = {
    isMobile
}