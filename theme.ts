// 1. Import the extendTheme function
import { extendTheme, ColorModeOptions } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';

export const config: ColorModeOptions = {
  useSystemColorMode: true,
  initialColorMode: "dark",
}

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}

const styles = {
  global: {
    "body": {
      fontFamily: "body",
      fontSize: "md",
      lineHeight: "20px",
      color: "#A9B7C6",
      // backgroundColor: mode("whiteAlpha.500", "#1A202C")(props),
      padding: 0,
      margin: 0,
    },
  },
}

const colors = {
  primary: "#FFC66D",
  // secondary: "#FFC66D",
  strong: "#CC7832",
}

const fonts = {
  body: "'Source Code Pro', sans-serif",
  heading: "'Source Code Pro', sans-serif",
  mono: "'Source Code Pro', sans-serif",
}

const Heading = {
  variants: {
    commentHeading: {
      fontSize: ['md', 'md', 'md', 'lg'],
      color: 'primary',
      marginBottom: '16px',
      fontWeight: 'normal',
      '&:before': {
        content: '"/* "',
      },
      '&:after': {
        content: '" */"',
      }
    }
  }
}

const Text = {
  variants: {
    codeText: {
      fontSize: 'sm',
      marginLeft: [0, 0, 0, "25px"],
      marginTop: "16px",
      marginBottom: "16px",
      textAlign: "justify",
      'strong': {
        fontWeight: 'normal',
        color: 'strong',
      },
    },
    linkText: {
      cursor: 'pointer',
    },
    menuText: {
      backgroundClip: "text",
      color: "transparent",
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(0.95)',
      },
      '&:before': {
        content: '"/* "',
      },
      '&:after': {
        content: '" */"',
      }
    }
  }
}

const Link = {
  variants: {
    codeLink: (props) => ({
      cursor: "pointer",
      color: "#A5C25C",
      textDecoration: "none",
      textShadow: mode("none", "1px 1px 0 #2B2B2B, -1px 1px 0 #2B2B2B, 2px 0 0 #2B2B2B, -2px 0 0 #2B2B2B")(props),
      boxShadow: mode("none", "inset 0 -1px 0 0 #2B2B2B, inset 0 -2px 0 0 #A5C25C")(props),
    })
  }
}

const UnorderedList = {
  variants: {
    codeList: {
      marginLeft: "25px",
      marginTop: "16px",
      marginVottom: "16px",
    }
  }
}

const ListItem = {
  '&:before': {
    content: "'- '",
  },
  '> span': {
    color: "#808080",
    "&:before": {
      content: "'['",
    },
    "&:after": {
      "content": "']'",
    }
  }
}

const components = {
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
};

export const theme = extendTheme({ styles, colors, fonts, components, breakpoints });
