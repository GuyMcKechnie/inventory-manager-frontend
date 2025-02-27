import PropTypes from "prop-types";

function Button({ type, content, icon }) {
  return (
    <button
      type={type}
      className="flex cursor-pointer items-center justify-center gap-2 rounded bg-gray-900 p-2 font-medium text-white ring-gray-200 hover:bg-gray-700 focus:ring-2"
    >
      {icon}
      {content}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;
