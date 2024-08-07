import { FaBars, FaTimes } from "react-icons/fa";
import ToggleTheme from "./SubComponents/ToggleThemeButton";

function Header(props) {
    const { theme, handleToggleTheme } = props;

    return (
        <div className="fixed right-2">
            <ToggleTheme mobile={false} theme={theme} handleToggleTheme={handleToggleTheme} />
        </div>
    );
};

export default Header;