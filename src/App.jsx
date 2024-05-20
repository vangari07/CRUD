import UserCard from "./UserCard";
import UserInput from "./UserInput";
import { useEffect, useState } from "react";
import {
  addUserData,
  deleteUserData,
  editUserData,
  getUserData,
} from "./utils/apiFetching";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [listData, setListData] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserData();
      setListData([...data]);
      console.log("data", data);
    };

    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, userEmail, userRole);
    if (editId) {
      editUserData(editId, {
        name: userName,
        email: userEmail,
        role: userRole,
      });
    } else {
      addUserData({ name: userName, email: userEmail, role: userRole });
    }
    setEditId(null);
    setUserName("");
    setUserEmail("");
    setUserRole("");
    setListData(await getUserData());
  };

  const handleEdit = (data) => {
    setUserName(data.name);
    setUserEmail(data.email);
    setUserRole(data.role);
    setEditId(data.id);
  };

  const handleDelete = async (id) => {
    await deleteUserData(id);
    setListData(await getUserData());
  };

  return (
    <>
      <div className="w-full m-auto mb-10">
        <h1 className="text-3xl font-bold text-center">User Management</h1>
        <UserInput
          setUserName={setUserName}
          setUserEmail={setUserEmail}
          setUserRole={setUserRole}
          userName={userName}
          userEmail={userEmail}
          userRole={userRole}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="flex flex-wrap gap-4 w-[1000px] m-auto">
        {listData &&
          listData?.map((item) => {
            return (
              <UserCard
                key={item?.id}
                userInfo={item}
                handleEdit={() => handleEdit(item)}
                handleDelete={() => handleDelete(item?.id)}
              />
            );
          })}
      </div>
    </>
  );
};

export default App;
