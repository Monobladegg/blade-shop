import s from "./index.module.scss";
import Search from "src/components/Search";
import { ICategory } from "src/types/db";

import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

type Props = {
  db: ICategory[];
};

const Header = ({ db }: Props) => {
  return (
    <div className={s.header}>
      <div className={s.left}>
        <Link to="/">
          <h1>Blade-shop</h1>
        </Link>
      </div>
      <div className={s.center}>
        <Search db={db} />
      </div>
      <div className={s.right}>
        <Link to="/profile" className={s.element}>
          <FaRegUserCircle size={37} />
        </Link>
        <div className={s.element}>
          <FaShoppingCart size={37} />
        </div>
        <div className={s.element}>
          <TiDocumentText size={37} />
        </div>
      </div>
    </div>
  );
};

export default Header;
