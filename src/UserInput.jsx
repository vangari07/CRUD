import { useState } from "react";
import PropTypes from "prop-types";

const UserInput = ({
  userName,
  userEmail,
  userRole,
  setUserName,
  setUserEmail,
  setUserRole,
  handleSubmit,
}) => {
  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userRoleError, setUserRoleError] = useState("");

  const handleUserName = (e) => {
    const value = e.target.value;
    setUserName(value);
    if (value === "" || value.length < 3) {
      setUserNameError(
        "UserName is required and should be at least 3 characters long"
      );
    } else {
      setUserNameError("");
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    if (value === "" || !value.includes("@")) {
      setUserEmailError(
        "Email is required and should be a valid email address"
      );
    } else {
      setUserEmailError("");
    }
  };

  const handleRole = (e) => {
    const value = e.target.value;
    setUserRole(value);
    if (value !== "User") {
      setUserRoleError("Role should be either 'User' or 'Admin'");
    } else {
      setUserRoleError("");
    }
  };

  return (
    <div className="mt-12">
      <form className="flex flex-col lg:w-1/2 m-auto">
        <input
          value={userName}
          className="border-gray-300 mb-4 border-2"
          type="text"
          placeholder="User Name"
          onChange={(e) => handleUserName(e)}
        />
        {userNameError && (
          <span className="text-red-700 mb-8">{userNameError}</span>
        )}
        <input
          value={userEmail}
          className="border-gray-300 mb-4 border-2"
          type="text"
          placeholder="User email"
          onChange={handleEmail}
        />
        {userEmailError && (
          <span className="text-red-700 mb-8">{userEmailError}</span>
        )}
        <input
          value={userRole}
          className="border-gray-300 mb-4 border-2"
          type="text"
          placeholder="User / Admin"
          onChange={handleRole}
        />

        <span className="text-red-700 mb-8">{userRoleError}</span>

        <button
          disabled={userNameError || userEmailError || userRoleError}
          type="submit"
          className={`bg-red-200 w-[120px] m-auto ${
            userNameError || userEmailError || userRoleError
              ? "opacity-50"
              : "opacity-100"
          }`}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

UserInput.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  setUserName: PropTypes.string,
  setUserEmail: PropTypes.string.isRequired,
  setUserRole: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UserInput;
