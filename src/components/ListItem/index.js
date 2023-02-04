import './index.css'

const ListItem = props => {
  const {isActive, setActiveThumbnailId, text, details} = props
  const {id} = details
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className='list-item'>
      <button
        type="button"
        className={thumbnailClassName}
        onClick={onClickThumbnail}
      >
        {text}
      </button>
    </li>
  )
}

export default ListItem
