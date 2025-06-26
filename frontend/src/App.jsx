/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllTodos } from "./services/todoService";
import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [allTodos, setAllTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await getAllTodos();
      res && setAllTodos(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
      <motion.div
        className="flex flex-col gap-8 py-4 bg-gradient-to-br from-teal-300 via-slate-800 to-teal-500 h-screen overflow-hidden
        items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Header />
        <ToDoList allTodos={allTodos} refetchTodos={fetchTodos} />
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
