import { Affix, Col, Layout, Row, Menu } from "antd";
import { nav } from "../router";
import { Link, useLocation } from 'react-router-dom'

export default function Header(props) {
    const { pathname } = useLocation();
    let activeIndex = nav.findIndex((navData) => {
        return pathname === navData.to
    })
    return (
        <>
            <Affix offsetTop={0}>
                <Layout.Header id="header">
                    <div className="warp">
                        <Row>
                            <Col xs={6} sm={4} md={2} >
                                <h1 className="logo"> <Link to='/'>CNode</Link> </h1>
                            </Col>
                            <Col xs={18} sm={20} md={22}>
                                <Menu mode='horizontal' theme='dark' selectedKeys={[String(activeIndex)]} >
                                    {nav.map((navData, index) => {
                                        return <Menu.Item key={index}>
                                            <Link to={navData.to}>{navData.text}</Link>
                                        </Menu.Item>
                                    })}
                                </Menu>
                            </Col>
                        </Row>
                    </div>
                </Layout.Header>
            </Affix>
        </>
    )
}