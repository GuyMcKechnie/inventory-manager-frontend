import PropTypes from "prop-types";

function Button({ type, content, icon, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 px-4 font-medium text-white ring-1 ring-gray-200/10 transition-all hover:bg-gray-700"
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
  onClick: PropTypes.func,
};

export default Button;
