import React from "react";

import IndexPage from "../view/index/IndexPage"
import TopicPage from "../view/topic/TopicPage"
import AboutPage from "../view/about/AboutPage"
import UserPage from "../view/user/UserPage"
import GetstartPage from "../view/getstart/GetstartPage"
import UndefindPage from "../view/undefined/UndefindPage"
import qs from 'qs'


const types = ['all', 'good', 'share', 'ask', 'job', 'dev']

const route = [
    {
        path: '/',
        exact: true,
        render(props) {
            const { location } = props;
            const { search } = location;
            let { tab, page } = qs.parse(search.substr(1))
            if ((tab === undefined && page === undefined) || ((types.includes(tab) && page === undefined) || page > 0)) {
                return <IndexPage {...props} />
            }
            return <UndefindPage {...props} />
        }
    }, {
        path: '/topic/:id',
        exact: true,
        render(props) {
            return <TopicPage {...props} />
        }
    }, {
        path: '/about',
        exact: true,
        render(props) {
            return <AboutPage {...props} />
        }
    }, {
        path: '/user/:loginname',
        exact: true,
        render(props) {
            return <UserPage {...props} />
        }
    }, {
        path: '/getstart',
        exact: true,
        render(props) {
            return <GetstartPage {...props} />
        }
    }, {
        path: '',
        exact: false,
        render(props) {
            return <UndefindPage {...props} />
        }
    },
]


const nav = [{
    to: '/',
    text: '首页'
}, {
    to: '/getstart',
    text: '新手入门'
}, {
    to: '/about',
    text: '关于我们'
},]

const indexNav = [{
    text: '全部',
    to: '/?tab=all'
}, {
    text: '精华',
    to: '/?tab=good'
}, {
    text: '分享',
    to: '/?tab=share'
}, {
    text: '问答',
    to: '/?tab=ask'
}, {
    text: '招聘',
    to: '/?tab=job'
}, {
    text: '客户端测试',
    to: '/?tab=dev'
},]

export { route, nav, indexNav, types }