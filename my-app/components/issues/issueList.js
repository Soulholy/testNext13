import React from 'react'
import Link from 'next/link'
export default function issueList({getdata}) {
  return (
    <ul>
        {getdata.map(data =>(
            <li key={data.id}>
                <article>
                    <h2>{data.title}</h2>
                    <p>{data.summary}</p>
                    <p>
                    <Link href={`/issues/${data.id}`}>Detail</Link>
                    </p>
                </article>
            </li>
        ))}
    </ul>
  )
}
