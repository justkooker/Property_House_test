import classNames from "classnames";

import s from "./Logo.module.scss";

function Logo({ color }) {
  return (
    <p
      className={classNames(s.logo)}
      style={{ color: color ? color : "inherit" }}
    >
      commit
    </p>
  );
}

export default Logo;
