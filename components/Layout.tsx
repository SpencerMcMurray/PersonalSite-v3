import { FunctionComponent, useContext, ReactElement } from "react";
import { Theme, getTheme } from "../public/helpers/theme";
import ThemeContext from "../components/ThemeContext";

interface LayoutProps {
  id: string;
  className?: string;
  height?: string;
  children: ReactElement | ReactElement[];
}

const Layout: FunctionComponent<LayoutProps> = ({
  id,
  className,
  children,
  height,
}) => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <div
      id={id}
      style={{ minHeight: height || "75vh" }}
      className={`layout ${theme.bg} ${className}`}
    >
      <div className="h-75 d-flex justify-content-center align-items-center container">
        <div className="w-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
