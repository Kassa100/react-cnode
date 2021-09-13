import { Card, Alert, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Fragment, useEffect } from 'react'
import { useHistory, useParams } from "react-router";
import { useSelector } from 'react-redux'
import TopicsList from '../../component/TopicsList'
import { useUserInfo } from "../../store/action";
import { getDate } from "../../assets/js/default";

export default function UserPage(props) {
    let { loginname } = useParams()
    let history = useHistory();
    let { loading, data, isError, error_msg } = useSelector(state => state.user)
    let { recent_replies = [], recent_topics = [], avatar_url, create_at, githubUsername, score } = data
    let getData = useUserInfo();
    useEffect(() => {
        getData(loginname)
    }, [loginname])
    return (
        <div className='user-page'>
            {
                isError
                    ? <Alert
                        closable
                        message={'请求出错'}
                        type="error"
                        description={
                            <Fragment>
                                <p>{error_msg}</p>
                                <p>点击关闭按钮返回上一步</p>
                            </Fragment >}
                        afterClose={() => {
                            history.goBack()
                        }} />
                    : (<Fragment>
                        <Card loading={loading} type='inner' className='user-details'>
                            <Avatar size={80} icon={<UserOutlined />} title={loginname} src={avatar_url} />
                            <p style={{ marginTop: 20 }}>用户名：{loginname}  注册时间：{getDate(create_at)}  积分：{score}</p>
                            <p>github：<a href={`https://github.com/${githubUsername}`} target='_blank'>https://github.com/{githubUsername}</a></p>
                        </Card>
                        <Card loading={loading} title='最近创建话题' type='inner'>
                            <TopicsList loading={loading} data={recent_topics} />
                        </Card>
                        <Card loading={loading} title='最近参与话题' type='inner'>
                            <TopicsList loading={loading} data={recent_replies} />
                        </Card>
                    </Fragment>
                    )} </div>

    )
}