export default function topic(topic = {
    data: { author: {} },
    loading: true,
    isError: false,
    error_msg: '',
}, action) {
    switch (action.type) {
        case 'topic_loading':
            return {
                data: { author: {} },
                loading: true,
                isError: false,
                error_msg: '',
            }
        case 'topic_loadover':
            return {
                data: action.data,
                loading: false,
                isError: false,
                error_msg: '',
            }
        case 'topic_error_msg':
            return {
                data: {
                    author: {}
                },
                loading: false,
                isError: true,
                error_msg: action.error_msg,
            }
        default:
            return topic
    }
}