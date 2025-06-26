/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import ToDoItem from "./TodoItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSnackbar } from "notistack";
import { saveTodo } from "../services/todoService";

const ToDoList = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await saveTodo({ title: newTodo });
    enqueueSnackbar(res.message, { variant: "success" });
    setNewTodo("");
  };

  return (
    <motion.div
      className="bg-gradient-to-tr from-cyan-200 via-sky-300 to-cyan-200 p-2 flex w-3/4 gap-2 flex-col items-center rounded-xl max-md:w-5/6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center w-full items-center p-2 gap-4 max-sm:gap-2"
      >
        <motion.input
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
          type="text"
          value={newTodo}
          required
          className="text-center w-full border-2 rounded-md py-2 font-mono text-xl focus:outline-none focus:border-2 focus:border-slate-700 max-md:w-3/4 max-md:text-lg max-sm:text-sm"
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter Your Todo..."
        />
        <motion.button
          type="submit"
          whileHover={{ scale: "1.25px" }}
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
        >
          <IoIosAddCircleOutline className="text-5xl cursor-pointer bg-purple-400 hover:bg-purple-500 rounded-full  max-md:text-4xl max-sm:text-3xl" />
        </motion.button>
      </form>
      <motion.div
        className="px-5 w-full py-2 max-h-120 overflow-y-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.6, delay: 0.4 }}
      >
        {props?.allTodos?.map((todoItem, index) => (
          <ToDoItem key={index} todoItem={todoItem} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ToDoList;
