const prisma = require("../config/db");

exports.createTask = async (req, res) => {

  try {

    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.user.id
      }
    });

    res.status(201).json({
      message: "Task Created",
      task
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getTasks = async (req, res) => {

  try {

    const tasks = await prisma.task.findMany({
      where: {
        userId: req.user.id
      }
    });

    res.status(200).json({
      tasks
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.updateTask = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id)
      },
      data: req.body
    });

    res.status(200).json({
      message: "Task Updated",
      updatedTask
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.deleteTask = async (req, res) => {

  try {

    const { id } = req.params;

    await prisma.task.delete({
      where: {
        id: Number(id)
      }
    });

    res.status(200).json({
      message: "Task Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};