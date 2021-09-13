import { List, Col, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import TopicsTag from "./TopicsTag";
import { getDate } from '../assets/js/default'

export default function TopicsList(props) {
    const { loading, data, } = props
    return (
        <>
            <List className='topics-list' loading={loading} dataSource={data} renderItem={(data) => {
                let { author, last_reply_at, good, top, tab, title, id } = data
                let { loginname, avatar_url } = author
                return <List.Item>
                    <Col xs={3} sm={2} md={1} >
                        <Link to={`/user/${loginname}`}>
                            <Avatar icon={<UserOutlined />} title={loginname} src={avatar_url} />
                        </Link>
                    </Col>
                    <Col xs={21} sm={22} md={21}>

                        <TopicsTag tab={top ? 'top' : (good ? 'good' : tab)} />
                        <Link to={`/topic/${id}`} style={{ marginLeft: 10 }}>{title}</Link>
                    </Col>
                    <Col className='from-now' xs={0} sm={0} md={2}>{getDate(last_reply_at)}</Col>
                </List.Item>
            }} />
        </>
    )
}