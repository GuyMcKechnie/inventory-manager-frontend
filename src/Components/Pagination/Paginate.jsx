import { Pagination } from "@mui/material";
import PropTypes from "prop-types";

function Paginate({ userCount }) {
  return (
    <div>
      <Pagination count={userCount} variant="outlined" color="primary" />
    </div>
  );
}

Paginate.propTypes = {
  userCount: PropTypes.number.isRequired,
};

export default Paginate;
