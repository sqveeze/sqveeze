const styles = {
  list: {
    fontSize: "sm",
    marginLeft: "25px",
    marginTop: "16px",
    marginVottom: "16px",
  },
  listItem: {
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
}

export default styles;