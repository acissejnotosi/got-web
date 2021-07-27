import { DisplayDetailsListType } from '../types'

export const DisplayDetailsList = ({
  details,
  title
}: DisplayDetailsListType) => (
  <>
    {details?.toString() !== '' && (
      <>
        <h2>{title}</h2>
        <ul>
          {details?.map(detail => (
            <li>{detail}</li>
          ))}
        </ul>
      </>
    )}
  </>
)
