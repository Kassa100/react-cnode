import { Fragment } from 'react'
import { useSelector } from "react-redux";

import { useEffect } from 'react';
import { useParams, useHistory } from "react-router"
import { useTopicInfo } from '../../store/action/index.js'
import { Alert } from 'antd'
import TopicDetail from './TopicDetail';
import TopicReplies from './TopicReplies'
export default function TopicPage(props) {
    let { id } = useParams();
    let getData = useTopicInfo();
    let history = useHistory();
    let { loading, data, isError, error_msg } = useSelector(state => state.topic)
    console.log(loading, data, isError, error_msg);
    useEffect(() => {
        getData(id)
    }, [id])
    return (
        <div id='topic-detail'>
            {isError ?
                <Alert
                    closable
                    message={'请求出错'}
                    type="error"
                    description={
                        <Fragment>
                            <p>{error_msg}</p>
                            <p>点击关闭按钮返回上一步</p>
                        </Fragment>}
                    afterClose={() => {
                        history.goBack()
                    }} />
                : (<>
                    <TopicDetail loading={loading} data={data} />
                    <TopicReplies loading={loading} data={data.replies} />
                </>)}
        </div>
    )
}