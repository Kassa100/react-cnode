export default function user(user = {
    data: { author: {} },
    loading: true,
    isError: false,
    error_msg: '',
}, action) {
    switch (action.type) {
        case 'user_loading':
            return {
                data: { author: {} },
                loading: true,
                isError: false,
                error_msg: '',
            }
        case 'user_loadover':
            return {
                data: action.data,
                loading: false,
                isError: false,
                error_msg: '',
            }
        case 'user_error_msg':
            return {
                data: {
                    author: {}
                },
                loading: false,
                isError: true,
                error_msg: action.error_msg,
            }
        default:
            return user
    }
}