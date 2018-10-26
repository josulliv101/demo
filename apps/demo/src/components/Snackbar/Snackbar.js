import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function CustomSnackbar(props) {
  const { showSnackbar, closeSnackbar, message } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={showSnackbar}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton key="close" color="inherit" onClick={closeSnackbar}>
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
}

CustomSnackbar.propTypes = {
  closeSnackbar: PropTypes.func.isRequired,
  showSnackbar: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default CustomSnackbar;
