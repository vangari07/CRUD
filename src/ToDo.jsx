import React from "react";

const ToDo = () => {
  const [id, setId] = React.useState(0);
  const [todoList, setTodoList] = React.useState({});
  const [toggle, setToggle] = React.useState(true);

  console.log("todoList", todoList);

  React.useEffect(() => {
    const apiCall = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const response = await data.json();
      let obj1 = {};
      response?.todos?.forEach((item) => {
        obj1 = { ...obj1, [item?.id]: item.todo };
        setTodoList(obj1);
      });
    };
    apiCall();
  }, []);

  const handleTodo = (id) => {
    setId(id);
  };

  const handleDelete = (id) => {
    let obj = {};
    Object.keys(todoList).forEach((item) => {
      if (item !== id) {
        obj = { ...obj, [item]: todoList[item] };
        setTodoList(obj);
      }
    });
  };

  return (
    <div className="w-[1000px] m-auto mt-11">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold">Listing</h1>
        <button
          className="border-2 border-blue-700 px-2"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Edit" : "View"}
        </button>
      </div>
      <ul className="ml-6">
        {todoList &&
          Object.keys(todoList)?.map((idx) => {
            return (
              <div className="flex justify-between w-full mb-2" key={idx}>
                {idx === id && toggle ? (
                  <input
                    type="text"
                    value={todoList[idx]}
                    className="w-full mr-2 pl-2"
                    onChange={(e) =>
                      setTodoList({ ...todoList, [idx]: e.target.value })
                    }
                  />
                ) : (
                  <li key={idx} onClick={() => handleTodo(idx)}>
                    {todoList[idx]}
                  </li>
                )}
                <button
                  className="border-2 border-red-700 rounded px-1"
                  onClick={() => handleDelete(idx)}
                >
                  delete
                </button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default ToDo;
