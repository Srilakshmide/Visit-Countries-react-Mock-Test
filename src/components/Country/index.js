import './index.css'

const Country = props => {
  const {deleteCountry, itemDetails} = props
  const {imageUrl, id, name} = itemDetails

  const onClickRemove = () => {
    deleteCountry(id)
  }

  return (
    <li>
      <div className="image-container">
        <img src={imageUrl} alt="thumbnail" className="image" />
        <div className="name-container">
          <p className="name">{name}</p>
          <button type="button" className="delete-btn" onClick={onClickRemove}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default Country
