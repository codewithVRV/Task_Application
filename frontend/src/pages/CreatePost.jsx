const CreatePost = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-10 mb-10">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Post Here
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Image Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter your image title here"
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
                placeholder="Describe about you post here"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
