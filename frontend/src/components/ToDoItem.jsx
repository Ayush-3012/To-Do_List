/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";
import { FaThumbsUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../services/todoService";

const ToDoItem = ({ todoItem }) => {
  const [checked, setChecked] = useState(todoItem.completed);
  const [isDeleted, setIsDeleted] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleted = async () => {
    const res = await deleteTodo(todoItem.id);
    console.log(res);
    // setIsDeleted(true);
    // enqueueSnackbar(res.message, { variant: "error" });
  };

  return (
    <div className="flex my-2 justify-between border-b-2">
      <div className="flex gap-2 justify-start items-center  ">
        {!isDeleted && checked && (
          <FaThumbsUp className="text-xl text-emerald-600 max-md:text-lg max-sm:text-sm" />
        )}
        {isDeleted && (
          <ImCross className="text-xl text-red-600 max-md:text-lg max-sm:text-sm" />
        )}
        {!isDeleted && (
          <motion.input
            type="checkbox"
            className="w-10 h-5 cursor-pointer accent-purple-600 max-sm:w-3"
            whileHover={{ scale: 1.18 }}
            checked={checked}
            onChange={() => {
              !checked
                ? enqueueSnackbar("Done 😄", {
                    variant: "success",
                  })
                : enqueueSnackbar("Not Done 🥺", {
                    variant: "error",
                  });
              setChecked(!checked);
            }}
          />
        )}
        {!isDeleted && !checked ? (
          <div
            className={`px-2 text-2xl flex gap-2 font-mono font-bold max-sm:text-lg text-slate-700`}
          >
            {todoItem.title}
          </div>
        ) : (
          <motion.p
            className={`${checked ? "line-through" : ""} ${
              isDeleted ? "text-black" : "text-slate-700"
            } text-2xl flex gap-2 font-mono font-bold max-sm:text-lg `}
            whileHover={
              !isDeleted && { translateY: "-5px", color: "rgb(248, 15, 128)" }
            }
          >
            {todoItem.title}
          </motion.p>
        )}
      </div>
      <motion.div className="flex items-center gap-2 justify-center">
        <button onClick={() => handleDeleted()}>
          <MdDelete className="text-4xl text-red-500 cursor-pointer hover:-translate-y-1.5 transition-all ease-out duration-150 max-md:text-2xl max-sm:text-xl" />
        </button>
      </motion.div>
    </div>
  );
};

export default ToDoItem;
