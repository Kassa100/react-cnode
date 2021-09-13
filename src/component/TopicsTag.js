import { Tag } from "antd";


function setTab(tab) {
    switch (tab) {
        case 'good':
            return <Tag color='#f50' className='topics-tag'>精华</Tag>
        case 'top':
            return <Tag color='#87d068' className='topics-tag'>精华</Tag>
        case 'share':
            return <Tag color='green' className='topics-tag'>分享</Tag>
        case 'ask':
            return <Tag color='gold' className='topics-tag'>问答</Tag>
        case 'job':
            return <Tag color='blue' className='topics-tag'>招聘</Tag>
        case 'dev':
            return <Tag color='purple' className='topics-tag'>测试</Tag>
        default:
            return null;
    }
}

export default function TopicsTag(props) {
    const { tab } = props
    return setTab(tab)
}