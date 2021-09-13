import { Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import { indexNav, types } from "../../router"
import qs from "qs"

export default function IndexNav(props) {
    let { search } = useLocation();
    let { tab } = qs.parse(search.substr(1))
    let activeIndex = tab === undefined ? 0 : (types.indexOf(tab))
    return (
        <>
            <Menu className='index-nav' theme='light' mode='horizontal' selectedKeys={[String(activeIndex)]} defaultSelectedKeys={[String(activeIndex)]}>
                {indexNav.map((indexNavData, index) => {
                    return <Menu.Item key={index}> <Link to={indexNavData.to}>{indexNavData.text}</Link> </Menu.Item>
                })}
            </Menu>
        </>
    )
}