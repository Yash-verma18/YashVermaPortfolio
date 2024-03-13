"use client";

import { ThemeProvider } from "next-themes";

const Theme = ({ children }) => {
  // for hydration error
  // const [state, setState] = useState(false);

  // useEffect(() => {
  //   setState(true);
  // }, []);

  // if (!state) return null;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Theme;
