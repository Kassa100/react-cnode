import { Fragment } from 'react'
import { Card } from 'antd'
import TopicsTag from '../../component/TopicsTag'
import { Link } from 'react-router-dom'
import { getDate } from '../../assets/js/default'
export default function TopicDetail(props) {
    let { loading, data } = props
    let { author, content, create_at, good, title, top, tab, visit_count } = data
    return (<div>
        <Card
            bordered
            loading={loading}
            title={
                <Fragment>
                    <h1>{<TopicsTag tab={top ? 'top' : (good ? "good" : tab)} />}{title}</h1>
                    <p>-  作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>  -  创建时间：{getDate(create_at)}  -  浏览人数：{visit_count}</p>
                </Fragment>
            }
            type='inner'
        >
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Card></div>
    )
}