import { useData } from "./DataProvider";
import classnames from "classnames";

import FavoriteIcon from "@material-ui/icons/Favorite";

const Healthbar = () => {
  const { health } = useData();

  return (
    <div className="healthbar-container">
      <FavoriteIcon
        style={{ color: "red", margin: "0 0.5em", height: "2em", width: "2em" }}
      />
      <div
        className={classnames({
          "healthbar-3": health === 3,
          "healthbar-2": health === 2,
          "healthbar-1": health === 1,
        })}
      ></div>
    </div>
  );
};

export default Healthbar;
