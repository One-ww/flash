import { message } from 'antd'
import copy from 'copy-to-clipboard'
import React from 'react'

import { myLink, siteTitle } from '@/utils/constant'

import CopyIcon from './CopyIcon'
import CopyrightIcon from './CopyrightIcon'
import styles from './index.scss'

interface Props {
  titleEng?: string
  title?: string
}

const CopyRight: React.FC<Props> = ({ titleEng, title }) => {
  const url = `${myLink}/post?title=${title}&page=${titleEng}`

  const copyUrl = () => {
    if (copy(url)) {
      message.success('复制成功!')
    }
  }

  return (
    <div className={styles.copyrightBox}>
      <CopyrightIcon className={styles.copyrightIcon} />
      <div className={styles.title}>{title}</div>
      <div className={styles.urlBox}>
        <div className={styles.url}>{url}</div>
        <div className={styles.copyBtn} onClick={copyUrl}>
          <CopyIcon className={styles.copyIcon} />
        </div>
      </div>
      <div className={styles.text}>
        本站所有文章除特别声明外，均采用
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          className={styles.copyrightName}
          rel="noreferrer"
        >
          CC BY-NC-SA 4.0
        </a>
        许可协议，转载请注明来自
        <a href={myLink} target="_blank" className={styles.copyrightName} rel="noreferrer">
          {siteTitle}
        </a>
        。
      </div>
    </div>
  )
}

export default CopyRight
