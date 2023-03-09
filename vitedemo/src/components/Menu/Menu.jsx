import './Menu.css';
const Menu = ({arrItems, onClickHandler}) => {
  return (
    <nav className="menu">
      <ul>
        {arrItems.map((item, index) => {
          return (<li key={index} onClick={()=>{onClickHandler(item)}}>{item}</li>)
        })}
      </ul>
    </nav>
  )
}

export default Menu;
