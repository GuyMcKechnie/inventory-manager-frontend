import PropTypes from "prop-types";
import { BiPlus } from "react-icons/bi";
import api from "../Axios/api";
import Button from "./Button";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleAddUser = (event) => {
    event.preventDefault();
    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      cellphone: event.target.cellphone.value,
      marketing: event.target.marketing.value,
    };
    api({
      url: "/users/addUser",
      method: "POST",
      data: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/70 md:inset-0 md:h-full">
      <div className="relative h-full w-full max-w-2xl p-4 md:h-auto">
        {/* Content */}
        <div className="relative rounded-lg bg-white p-4 shadow sm:p-5 dark:bg-gray-800">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add User
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Body */}
          <form onSubmit={handleAddUser}>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name{""}
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    tabIndex="0"
                    autoFocus="true"
                    className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="John"
                    required
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="cellphone"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cellphone
                </label>
                <input
                  type="tel"
                  name="cellphone"
                  id="cellphone"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="+27 12 435 6789"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="marketing"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Marketing Permission
                </label>
                <select
                  id="marketing"
                  required
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                >
                  <option defaultValue={true}>Select Permission</option>
                  <option value="0">True</option>
                  <option value="1">False</option>
                </select>
              </div>
            </div>
            <Button
              type="submit"
              content={"Add User"}
              icon={<BiPlus />}
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
