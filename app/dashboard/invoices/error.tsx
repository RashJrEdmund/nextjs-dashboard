'use client'

interface Props {};

export default function error(props: Props) {
  return (
    <div>
        <h2>
            Error Page
        </h2>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
  )
}
