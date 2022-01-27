import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function NavigationSelection(props) {
  return (
    <CSSTransition
      in={true}
      timeout={props.time}
      classNames="navicon"
      appear={true}
    >
      <NavLink
        to={props.path}
        activeclassname="active"
        className="icon"
        data-tip
        data-for={props.name}
      >
        <i className={props.icon}></i>
        <ReactTooltip id={props.name} place={props.tooltipPlace} effect="solid">
          {props.name}
        </ReactTooltip>
      </NavLink>
    </CSSTransition>
  );
}

export default NavigationSelection;
