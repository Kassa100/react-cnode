import { Pagination } from "antd";
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
export default function IndexPagination(props) {
    let { search } = useLocation();
    let { tab = 'all', page = 1 } = qs.parse(search.substr(1))
    return (
        <div className='index-pagination'>
            <Pagination
                current={Number(page)}
                total={1000}
                itemRender={(page, type) => {
                    switch (type) {
                        case "page":
                            return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                        case "prev":
                            return <Link to={`/?tab=${tab}&page=${page}`}>{<LeftOutlined />}</Link>
                        case "next":
                            return <Link to={`/?tab=${tab}&page=${page}`}>{<RightOutlined />}</Link>
                        default:
                            return <Link to={`/?tab=${tab}&page=${page}`}>{'......'}</Link>
                    }
                }}
                defaultPageSize={12}
                showSizeChanger={false}
            />
        </div>
    )
}