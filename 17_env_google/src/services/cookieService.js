export function setCookie(key, value, hours = null) {
    if(hours) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (hours * 60 * 60 * 1000));
        
        document.cookie = `${key}=${value}; path=/; expires=${expires.toUTCString()};`;
    } else {
        document.cookie = `${key}=${value}; path=/`;
    }
}

export function getCookie(key) {
    const cookie = document.cookie.split("; ");

    for(const c of cookie) {
        const items = c.split("=");
        if(items[0] === key) {
            return items[1];
        }
    }

    return null;
}

export function removeCookie(key) {
    document.cookie = `${key}=; path=/; expires=${new Date(0).toUTCString()};`;
}