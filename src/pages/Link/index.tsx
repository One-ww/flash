import { useRequest } from 'ahooks'
import React from 'react'

import Layout from '@/components/Layout'
import { DB } from '@/utils/apis/dbConfig'
import { getData } from '@/utils/apis/getData'
import { staleTime } from '@/utils/constant'
import { shuffleArray } from '@/utils/function'

import { Title } from '../titleConfig'
import styles from './index.scss'
import LinkItem from './LinkItem'

interface linkType {
  _id: string
  link: string
  avatar: string
  name: string
  descr: string
}

const Link: React.FC = () => {
  // const { data, loading } = useRequest(getData, {
  //   defaultParams: [DB.Link],
  //   retryCount: 3,
  //   cacheKey: `Link-${DB.Link}`,
  //   staleTime
  // })

  const { data, loading } = useRequest(async () => await import(`@/data/linkData/link-data.json`), {
    retryCount: 3,
    cacheKey: `Link-link`,
    staleTime
  })

  return (
    <Layout title={Title.Link} loading={loading} className={styles.box}>
      {shuffleArray(data?.data).map((item: linkType) => (
        <LinkItem
          key={item._id}
          link={item.link}
          avatar={item.avatar}
          name={item.name}
          descr={item.descr}
        />
      ))}
    </Layout>
  )
}

export default Link
