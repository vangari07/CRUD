import PropTypes from "prop-types";

const UserCard = ({ handleEdit, handleDelete, userInfo }) => {
  return (
    <div className="border-2 border-black rounded w-[300px] flex-wrap p-4">
      <div>Username : {userInfo?.name}</div>
      <div>Email : {userInfo?.email}</div>
      <div>Role : {userInfo?.role}</div>
      <div className="flex justify-between ">
        <button
          className="border-2 border-black rounded p-2"
          onClick={(e) => handleEdit(e)}
        >
          Edit
        </button>
        <button
          className="border-2 border-black rounded p-2"
          onClick={(e) => handleDelete(e)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
};

export default UserCard;
