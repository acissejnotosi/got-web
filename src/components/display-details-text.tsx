import { DisplayDetailsTextType } from '../types'

export const DisplayDetailsText = ({
  detail,
  title
}: DisplayDetailsTextType) => (
  <>
    {detail?.toString() !== '' && (
      <>
        <h2>{title}</h2>
        <p>{detail}</p>
      </>
    )}
  </>
)
