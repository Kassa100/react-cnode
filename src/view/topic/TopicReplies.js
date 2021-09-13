import { Card, List, Comment, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { getDate } from '../../assets/js/default'
import { Link } from "react-router-dom";
export default function TopicReplies(props) {
    let { loading, data = [] } = props
    data.reverse()
    return (
        <Card title='评论列表' type='inner' loading={loading}>
            <List dataSource={data}
                renderItem={(itemData) => {
                    let { author, content } = itemData
                    return <List.Item>
                        <Comment
                            author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
                            avatar={<Avatar icon={<UserOutlined />} title={author.loginname} src={author.avatar_url} />}
                            content={<div dangerouslySetInnerHTML={{ __html: content }}></div>}
                            datetime={<time>发表于： {getDate(itemData.create_at)}</time>}
                        />
                    </List.Item>
                }}
                pagination={{
                    simple: true
                }}

            />
        </Card>
    )
}