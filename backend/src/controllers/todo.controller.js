import { v4 as uuidv4 } from "uuid";
let allTodos = [];

export const getAllTodos = async (req, res) => {
  try {
    return res.status(200).json(allTodos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
export const saveTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || title.trim() === "")
      return res.status(400).json({ message: "Title Is Required" });

    const newTodo = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
    };

    allTodos.push(newTodo);

    return res
      .status(201)
      .json({ message: "Todo Added Successfully", newTodo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const index = allTodos.findIndex((todo) => todo.id === id);

    if (index === -1)
      return res.status(404).json({ message: "Todo Not Found" });

    allTodos[index].completed = !allTodos[index].completed;

    return res.status(200).json(allTodos[index]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const index = allTodos.findIndex((todo) => todo.id === id);

    if (index === -1)
      return res.status(404).json({ message: "Todo Not Found" });

    allTodos.splice(index, 1);

    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
