import User from "../models/User.js"

export const updateUser = async (req, res, next) =>{
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new:true }
    )
    res.status(200).json(updateUser)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next ) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User is deleted")
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) =>{
  try {
    const getUser = await User.findById(req.params.id)
    res.status(200).json(getUser)
  } catch (error) {
    next(error)
  }
}

export const getAllUsers = async (req, res, next) =>{
  try {
    const getAllUsers = await User.find()
    res.status(200).json(getAllUsers)
  } catch (error) {
    next(error)
  }
}