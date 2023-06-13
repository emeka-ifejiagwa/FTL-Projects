import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map((fact) => 
      <NutritionalLabelFact key= {fact.id} fact-label={fact.label}
      item = {props.item} attribute = {fact.attribute} fact-value={fact}/>)}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props["fact-label"]}</span>{" "}
      <span className="fact-value">{props.item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
