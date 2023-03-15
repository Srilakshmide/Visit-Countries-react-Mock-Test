import './index.css'

const CountriesList = props => {
  const {countryDetails, handleVisit} = props
  const {name, id, isVisited} = countryDetails

  const onClickVisit = () => {
    handleVisit(id)
  }

  const btnClassName = isVisited ? 'visited' : 'button'
  const btnText = isVisited ? 'Visited' : 'Visit'

  return (
    <li>
      <div className="table">
        <p className="name">{name}</p>
        {isVisited ? (
          <p className="visited">Visited</p>
        ) : (
          <button className={btnClassName} type="button" onClick={onClickVisit}>
            {btnText}
          </button>
        )}
      </div>
      <hr className="line" />
    </li>
  )
}

export default CountriesList
