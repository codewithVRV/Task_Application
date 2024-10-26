import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const [allTask, setAllTasks] = useState([]);
  const [temp, setTemp] = useState(false)

  const fetchAllTask = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/tasks");
      console.log("response is", response);
      setAllTasks(response.data);
    } catch (error) {
      console.log("Error caught by fethallTask", error);
    }
  };

  async function handleDeleteTask(id) {
    try{
        await axios.delete(`http://localhost:3000/api/tasks/${id}`)
        setTemp(!temp)
        toast.success("Task Deleted Successfully!")
    }
    catch(error) {
        console.log("Error caught by deleting function", error)
    }
  }

  useEffect(() => {
    fetchAllTask();
  }, [temp]);
  return (
    <div className="flex justify-center flex-wrap gap-4 mt-12 mb-10">
      {allTask &&
        allTask.map((data) => {
          return (
            <div
              key={data._id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.description}
              </p>
              <div>
                <button className="bg-green-500 px-4 font-semibold text-white py-2 rounded-md">
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(data._id)} className="bg-red-500 px-4 mx-4 font-semibold text-white py-2 rounded-md">
                  Delete
                </button>
                <button className="bg-blue-500 px-4 mx-4 font-semibold text-white py-2 rounded-md">
                  Pending
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
