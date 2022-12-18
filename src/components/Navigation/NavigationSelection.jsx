import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./navigation.css";

/*Navigationbars selection icon which is able to change it's color when selected.*/
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
        className="nav-icon"
        style={({isActive})=>{return {color: isActive ? "var(--color-primary-2)" : "var(--color-primary-1)"}}} /*react-router-dom v6 new*/
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
