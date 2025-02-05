import React, {PropsWithChildren, useState} from "react";
import {createTheme} from "@mui/material";
import useThemeContext from '@theme/hooks/useThemeContext';
import ThemeProvider from "@mui/system/ThemeProvider";
import GroupSelectContext from "../GroupSelect/GroupSelectContext";

const ThemeAdaptor = ({children}: PropsWithChildren<any>) => {
  const {isDarkTheme} = useThemeContext();
  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : undefined,
      primary: {
        main: 'rgb(37, 193, 159)',
        contrastText: '#ffffff',
        dark: 'rgb(49,217,179)',
      }
    },
    typography: {
      h1: {
        fontFamily: 'var(--ifm-heading-font-family)',
        fontSize: 'var(--ifm-h1-font-size)',
        fontWeight: 'var(--ifm-heading-font-weight)',
        lineHeight: 'var(--ifm-heading-line-height)',
      },
      h2: {
        fontFamily: 'var(--ifm-heading-font-family)',
        fontSize: 'var(--ifm-h2-font-size)',
        fontWeight: 'var(--ifm-heading-font-weight)',
        lineHeight: 'var(--ifm-heading-line-height)',
      },
      h3: {
        fontFamily: 'var(--ifm-heading-font-family)',
        fontSize: 'var(--ifm-h3-font-size)',
        fontWeight: 'var(--ifm-heading-font-weight)',
        lineHeight: 'var(--ifm-heading-line-height)',
      },
      h4: {
        fontFamily: 'var(--ifm-heading-font-family)',
        fontSize: 'var(--ifm-h4-font-size)',
        fontWeight: 'var(--ifm-heading-font-weight)',
        lineHeight: 'var(--ifm-heading-line-height)',
      },
      h5: {
        fontFamily: 'var(--ifm-heading-font-family)',
        fontSize: 'var(--ifm-h5-font-size)',
        fontWeight: 'var(--ifm-heading-font-weight)',
        lineHeight: 'var(--ifm-heading-line-height)',
      },
      h6: {
        fontFamily: 'var(--ifm-heading-font-family)',
        fontSize: 'var(--ifm-h6-font-size)',
        fontWeight: 'var(--ifm-heading-font-weight)',
        lineHeight: 'var(--ifm-heading-line-height)',
      },
    }
  });

  const [group, setGroup] = useState<string>(undefined)

  return (
    <GroupSelectContext.Provider value={{ group, setGroup }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GroupSelectContext.Provider>
  )
}

ThemeAdaptor.displayName = 'MuiThemeAdaptor'

export default ThemeAdaptor
