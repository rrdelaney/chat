import { USER, ROOM, MESSAGE } from './actions'

export default function select(state) {
    return {
        users: users(state),
        messages: messages(state),
        rooms: rooms(state),
        user: users(state).findLast(user => user.id.toString() === state.app.id) || {},
        roomId: state.app.roomId,
        activeTab: state.app.activeTab,
        theme: state.app.theme,
        mobile: state.app.mobile,
        showSidebar: state.app.showSidebar
    };
}

function users(state) {
    return state.entities
                .map((entity, id) => ({ ...entity, id }))
                .filter(entity => entity.type === USER);

}

function messages(state) {
    return state.entities
                .map((entity, id) => ({ ...entity, id }))
                .filter(entity => entity.type === MESSAGE);
}

function rooms(state) {
    return state.entities
                .map((entity, id) => ({ ...entity, id }))
                .filter(entity => entity.type === ROOM);
}
