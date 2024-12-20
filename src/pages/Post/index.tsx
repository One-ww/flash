import { useRequest } from 'ahooks'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Layout from '@/components/Layout'
import MarkDown from '@/components/MarkDown'
// import { DB } from '@/utils/apis/dbConfig'
// import { getWhereData } from '@/utils/apis/getWhereData'
// import { _ } from '@/utils/cloudBase'
import { staleTime } from '@/utils/constant'

import CopyRight from './CopyRight'
import styles from './index.scss'
import Navbar from './Navbar'
import PostTags from './PostTags'

const Post: React.FC = () => {
  const [searchParams] = useSearchParams()

  const params = searchParams.get('title')
  const page = searchParams.get('page')

  // const { data, loading } = useRequest(getWhereData, {
  //   defaultParams: [
  //     DB.Article,
  //     { titleEng: _.eq(params ? params : ""), post: _.eq(true) },
  //   ],
  //   retryCount: 3,
  //   cacheKey: `Post-${DB.Article}-${params}`,
  //   staleTime,
  // });

  let { data, loading } = useRequest(
    async () => await import(`@/data/homeData/article-data/data-${page}.json`),
    {
      loadingDelay: 0,
      retryCount: 3,
      refreshDeps: [params],
      cacheKey: `Post-${params}`,
      staleTime
    }
  )

  const handleData = data?.data.find((item: { _id: string | null }) => item._id == params)

  return (
    <Layout
      title={handleData?.title}
      loading={loading}
      classes={handleData?.classes}
      date={handleData?.date}
      isPost={true}
      rows={14}
    >
      <MarkDown content={handleData?.content} className={styles.mb} />
      <PostTags tags={handleData?.tags} />
      <CopyRight title={handleData?._id} titleEng={page ? page : ''} />
      {/* <Comment titleEng={params ? params : ""} title={handleData?.title} /> */}
      <Navbar content={handleData?.content} />
    </Layout>
  )
}

export default Post
