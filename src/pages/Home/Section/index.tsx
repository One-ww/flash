import { useRequest, useSafeState } from 'ahooks'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MyPagination from '@/components/MyPagination'
import { storeState } from '@/redux/interface'
// import { DB } from '@/utils/apis/dbConfig'
// import { getPageData } from '@/utils/apis/getPageData'
import { _ } from '@/utils/cloudBase'
import { homeSize, staleTime } from '@/utils/constant'

import styles from './index.scss'
import PostCard from './PostCard'

interface theAtc {
  classes: string
  content: string
  date: number
  tags: string[]
  title: string
  titleEng: string
  _id: string
  _openid: string
}

interface Props {
  artSum?: number
}

const Section: React.FC<Props> = ({ artSum }) => {
  const navigate = useNavigate()
  const [page, setPage] = useSafeState(1)

  // const { data, loading } = useRequest(
  //   () =>
  //     getPageData({
  //       dbName: DB.Article,
  //       where: { post: _.eq(true) },
  //       sortKey: 'date',
  //       isAsc: false,
  //       page,
  //       size: homeSize
  //     }),
  //   {
  //     retryCount: 3,
  //     refreshDeps: [page],
  //     cacheKey: `Section-${DB.Article}-${page}`,
  //     staleTime
  //   }
  // )

  const { data, loading } = useRequest(
    async () => await import(`@/data/homeData/article-data/data-${page}.json`),
    {
      loadingDelay: 0,
      retryCount: 3,
      refreshDeps: [page],
      cacheKey: `Section-${page}`,
      staleTime
    }
  )

  return (
    <section className={styles.section}>
      {data?.data.map(({ _id, title, content, date, tags }: theAtc) => (
        <PostCard
          key={_id}
          title={title}
          content={content}
          date={date}
          tags={tags}
          loading={loading}
          onClick={() => navigate(`/post?title=${encodeURIComponent(_id)}&page=${page}`)}
        />
      ))}
      <MyPagination
        current={page}
        defaultPageSize={homeSize}
        total={artSum}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={document.body.clientHeight - 80}
      />
    </section>
  )
}

export default connect((state: storeState) => ({ artSum: state.artSum }))(Section)
