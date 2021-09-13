import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router"
import TopicsList from "../../component/TopicsList"
import { useTopicsList } from "../../store/action"
import IndexPagination from './IndexPagination'
import qs from 'qs'
import IndexNav from "./IndexNav"

export default function IndexPage(props) {
    const { search } = useLocation()
    const { tab = 'all', page = 1 } = qs.parse(search.substr(1))
    const { loading, data } = useSelector(state => state.topics)
    const getData = useTopicsList()
    useEffect(() => {
        getData(tab, page)
    }, [tab, page])
    return (
        <>
            <IndexNav />
            <TopicsList data={data} loading={loading} />
            {loading ? '' : <IndexPagination />}
        </>
    )
}