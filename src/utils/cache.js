import { MD5 } from "crypto-js"

function encodeKey(key) {
    return MD5(window.location.host + process.env.VUE_APP_SOURCE + process.env.VUE_APP_ID + key)
}

export const session = {
    set(key, val) {
        sessionStorage.setItem(encodeKey(key), val)
    },
    get(key) {
        return sessionStorage.getItem(encodeKey(key)) || ''
    },
    remove(key) {
        sessionStorage.removeItem(encodeKey(key))
    },
}

export const local = {
    set(key, val) {
        localStorage.setItem(encodeKey(key), val)
    },
    get(key) {
        return localStorage.getItem(encodeKey(key)) || ''
    },
    remove(key) {
        localStorage.removeItem(encodeKey(key))
    },
}

export const UserToken = {
    key: '__user_token__',
    set(val) { session.set(this.key, val) },
    get() { return session.get(this.key) },
    remove() { session.remove(this.key) },
}

export const UserName = {
    key: '__user_name__',
    set(val) { session.set(this.key, val) },
    get() { return session.get(this.key) },
    remove() { session.remove(this.key) },
}

export const UserAvatar = {
    key: '__user_avatar__',
    set(val) { session.set(this.key, val) },
    get() { return session.get(this.key) },
    remove() { session.remove(this.key) },
}

export function clean() {
    UserToken.remove()
}
