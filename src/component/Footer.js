import { Layout } from "antd";

export default function Footer(props) {
    return (
        <>
            <Layout.Footer id='footer'>
                <div className="warp">
                    <p>CNode 社区 为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究</p>
                </div>
            </Layout.Footer>
        </>
    )
}