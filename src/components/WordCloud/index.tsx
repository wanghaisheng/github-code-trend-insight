import React, {useLayoutEffect, useRef} from 'react'
import {start} from "./dist";
import './dist/index.css'
import './style.css'
import {useRank} from "../../api/query";

interface WordCloudProps {
  period: string
  children: JSX.Element
}

export default function WordCloud({children, period}: WordCloudProps) {
  const ref = useRef<HTMLDivElement>()
  const { data = [] } = useRank(period)

  useLayoutEffect(() => {
    if (data && ref.current) {
      if (data.length === 0) {
        return
      }
//       let max = data[0].history_events
      const list = data.map(({repo_name, history_events}, key) => {
        return {
          key: repo_name,
          word: repo_name.split('/')[1],
          weight: (data.length-key)/data.length,
        }
      })
      return start(list, { container: ref.current })
    }
  }, [data])

  return (
    <div ref={ref} className='wordcloud-container'>
      {children}
    </div>
  )
}
