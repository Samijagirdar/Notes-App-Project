import React, { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    let copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    let copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 flex-col gap-4 items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full font-medium border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 h-32 py-2 w-full font-medium outline-none border-2 rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className=" bg-white text-black active:scale-95 font-medium outline-none px-5 py-2 rounded w-full">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto no-scrollbar">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className=" flex flex-col justify-between items-start relative bg-cover h-52 w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] py-9 px-4 text-black"
              >
                <div className="h-full overflow-hidden flex flex-col">
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>

                  <p className="mt-3 leading-tight font-medium text-gray-500 overflow-y-auto break-words flex-1 pr-1 no-scrollbar">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full  cursor-pointer active:scale-95 bg-red-500 text-white py-1  text-xs rounded font-bold"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
