export const USER = 'USER';
export const ROOM = 'ROOM';
export const MESSAGE = 'MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CREATE_ROOM = 'CREATE_ROOM';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const JOIN_ROOM = 'JOIN_ROOM';
export const CHANGE_TAB = 'CHANGE_TAB';

export function addMessage(roomId, text, authorId) {
    return {
        type: ADD_MESSAGE,
        roomId,
        text,
        authorId
    };
}

export function createRoom(roomName) {
    return {
        type: CREATE_ROOM,
        roomName
    };
}

export function createMember(name) {
    return {
        type: CREATE_USER,
        memberName
    };
}

export function login(userId, password) {
    return {
        type: LOGIN,
        userId,
        password
    }
}

export function logout(userId) {
    return {
        type: LOGOUT,
        userId
    }
}

export function joinRoom(roomId) {
    return {
        type: JOIN_ROOM,
        roomId
    };
}

export function setActiveTab(tab) {
    return {
        type: CHANGE_TAB,
        tab
    };
}
