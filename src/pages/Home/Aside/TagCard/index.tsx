import { useRequest } from 'ahooks'
import React from 'react'

import Card from '@/components/Card'
import { DB } from '@/utils/apis/dbConfig'
import { getData } from '@/utils/apis/getData'
import { staleTime } from '@/utils/constant'

import styles from './index.scss'

const TagCard: React.FC = () => {
  // const { data, loading } = useRequest(getData, {
  //   defaultParams: [DB.Tag],
  //   retryCount: 3,
  //   cacheKey: `TagCard-${DB.Tag}`,
  //   staleTime
  // })

  let { data, loading } = useRequest(
    async () => await import(`@/data/homeData/tags-data/tags-data.json`),
    {
      loadingDelay: 0,
      retryCount: 3,
      cacheKey: `TagCard-tag`,
      staleTime
    }
  )


  return (
    <Card className={styles.card} loading={loading}>
      {data?.data?.map((item: { _id: string; _openid: string; tag: string }, index: number) => (
        <span className={styles.tag} key={index}>
          {item.tag}
        </span>
      ))}
    </Card>
  )
}

export default TagCard
