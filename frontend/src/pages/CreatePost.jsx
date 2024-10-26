import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [data, setData] = useState({
        title:"", description:""
    })

    console.log("form data is", data)
    const navigator = useNavigate()
    async function handleSubmitData (e) {
        e.preventDefault()
        console.log("function called!")
        try{
            const response = await axios.post("http://localhost:3000/api/tasks", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)
            navigator("/")
            
        }
        catch(error) {
            console.log("Error caught by data submission", error)
        }
    }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-10 mb-10">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Post Here
          </h2>
          <form onSubmit={handleSubmitData}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Task Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) => setData({...data, title:e.target.value})}
                placeholder="Enter your Task here"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                onChange={(e) => setData({...data, description:e.target.value})}
                placeholder="Describe about you post here"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Task!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
