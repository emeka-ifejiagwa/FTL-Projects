import "./Chip.css"

export function Chip({ label = "", isActive = false , clickHandler}) {
  let buttonClassName = isActive ? "chip active" : "chip"
  return (
    <button className={buttonClassName} onClick={clickHandler}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
