
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const [allTask, setAllTasks] = useState([]);
  const [temp, setTemp] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [pendingTaskId, setPendingTaskId] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const fetchAllTask = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/tasks");
      setAllTasks(response.data);
    } catch (error) {
      console.log("Error caught by fetchAllTask", error);
    }
  };

  async function handleUpdateTask(id) {
    try {
      await axios.put(`http://localhost:3000/api/tasks/${id}`, newTask);
      setTemp(!temp);
      setNewTask({ title: "", description: "" }); // Reset newTask state
      setEditingTaskId(null); // Clear editing state after update
    } catch (error) {
      console.log("Error caught by handleUpdateTask", error);
    }
  }

  async function handleDeleteTask(id) {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${id}`);
      setTemp(!temp);
      toast.success("Task Deleted Successfully!");
    } catch (error) {
      console.log("Error caught by handleDeleteTask", error);
    }
  }

  function handlingState() {
    setTemp(!temp);
    setPendingTaskId(null)
  }
  useEffect(() => {
    fetchAllTask();
  }, [temp]);

  return (
    <div className="flex justify-center flex-wrap gap-4 mt-12 mb-10">
      {" "}
      {allTask &&
        allTask.map((data) => {
          return (
            <div
              key={data._id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              {" "}
              {editingTaskId === data._id && ( 
                <div>
                  {" "}
                  <input
                    type="text"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                  />
                  {" "}
                  <input
                    type="text"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                  />
                  {" "}
                </div>
              )}
              {" "}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title}{" "}
              </h5>
              {" "}
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.description}{" "}
              </p>
              {" "}
              <div>
                {" "}
                <button
                  onClick={() => {
                    if (editingTaskId === data._id) {
                      handleUpdateTask(data._id); 
                    } else {
                      setEditingTaskId(data._id); 
                      setNewTask({
                        title: data.title,
                        description: data.description,
                      }); 
                    }
                  }}

                  className="bg-green-500 px-4 font-semibold text-white py-2 rounded-md"
                >
                  {" "}
                  {editingTaskId === data._id ? "Save" : "Edit"}{" "}
                  
                  {" "}
                </button>
                {" "}
                <button
                  onClick={() => handleDeleteTask(data._id)}
                  className="bg-red-500 px-4 mx-4 font-semibold text-white py-2 rounded-md"
                >
                   Delete {" "}
                </button>
                {" "}
                <button 
                        onClick={() => {
                            if(pendingTaskId == data._id){
                                handlingState()
                            }
                            else {
                                setPendingTaskId(data._id)
                            }
                        }}
                    className="bg-blue-500 px-4 mx-4 font-semibold text-white py-2 rounded-md">
                 {!temp ? "Pending" : "Completed"} {" "}
                </button>
                {" "}
              </div>
              {" "}
            </div>
          );
        })}
      {" "}
    </div>
  );
};

export default Home;
