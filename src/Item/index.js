const Item = props => {
  const {item, itemDeleted} = props

  const deleteItem = () => {
    itemDeleted(item.id)
  }
  return (
    <li className="item" key={item.id}>
      <p className="time">{item.timeAccessed}</p>
      <div className="domain-details">
        <img src={item.logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{item.title}</p>
        <p className="domain-url">{item.domainUrl}</p>
      </div>
      <button type="button" className="delete-button" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          id={item.id}
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default Item
