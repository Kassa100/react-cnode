
import { Layout } from "antd";
import { Route, Switch } from "react-router";
import { route } from './router/index'
import Header from "./component/Header";
import Footer from "./component/Footer";

import './assets/css/index.css'
export default function App(props) {

  return (
    <>
      <Layout className="page">
        <Header />
        <Layout.Content>
          <div className='warp'>
            <Switch>
              {route.map((item, index) => {
                return <Route
                  key={index}
                  path={item.path}
                  exact={item.exact}
                  render={(props) => {
                    return item.render(props)
                  }}
                />
              })}
            </Switch>
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </>
  )
}
