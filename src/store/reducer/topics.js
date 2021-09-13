export default function topics(topics = {
    data: [],
    loading: true
}, action) {
    switch (action.type) {
        case 'topics_loading':
            return {
                data: [],
                loading: true
            }
        case 'topics_loadover':
            return {
                data: action.data,
                loading: false
            }
        default:
            return topics
    }
}