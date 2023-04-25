import "./AccountButtons.scss";

import UserIcon from "./assets/user-icon.svg";

import { getClickHandler } from "../../helpers/helper-functions";

// ------ COMPONENT: START ------ //

export default function AccountButtons() {
  return (
    <>
      <button className="account-buttons__sign-up" onClick={getClickHandler()}>
        რეგისტრაცია
      </button>
      <button className="account-buttons__sign-in" onClick={getClickHandler()}>
        <img
          className="account-buttons__sign-in__icon"
          src={UserIcon}
          alt="Icon representing user of the website."
        />
        <p className="account-buttons__sign-in__text">შესვლა</p>
      </button>
    </>
  );
}

// ------ COMPONENT: END ------ //
