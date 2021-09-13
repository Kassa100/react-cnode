import dayjs from "dayjs";

function getDate(date) {
    var relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime)
    require('dayjs/locale/zh-cn')
    dayjs.locale('zh-cn')
    return dayjs(date).fromNow()
}

export {
    getDate
}