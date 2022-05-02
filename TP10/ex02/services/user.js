const { encryptData } = require('../configs/encrypt');
const { findOne } = require('../models/users')
const Users = require('../models/users')

const findByOne = async (email) => {
    try{
        const user = await Users.findOne({email});
        return user
    }catch(err){
        throw('user invalid')
    }
}

const findall = async () => {
    try{
        const user = await Users.find();
        return user
    }catch(err){
        throw('findall err',err)
    }
}

const updatePass = async (newPassword, email) => {
    try{
        const hash = await encryptData(newPassword.password)
        await Users.findOneAndUpdate({email}, {"password":hash})
        const user = await Users.findOne({email})
        return {
            success: true,
            data: user
        }
    }catch(err){
        throw('update err', err)
    }
}

const updateUser = async (newInfo, email) => {
    try{
        await Users.findOneAndUpdate({email}, newInfo)
        const user = await Users.findOne({email})
        return {
            success: true,
            data: user
        }
    }catch(err){
        throw('update err', err)
    }
}
const deleteUser = async (email) => {
    try{
        const user = await Users.findOneAndDelete({email})
        return {
            success: true,
            data: user
        }
    }catch(err){
        throw('delete err', err)
    }
}

const findById = async (id) => {
  try {
    const user = await Users.findById(id);
    return user;
  } catch (err) {
    throw "User is not found"
  }
}

const getUser = async (userId) => {
    try{
        const user = await Users.findById(userId);
        if(!user){
            return{
                success: false,
                err: "Id is invalid"
            }
        }
        return{
            success: true,
            data: user
        }
    }catch(err){
        return{
            success: false,
            err: err
        }
    }
}

module.exports = {
    findByOne,
    findall,
    updatePass,
    updateUser,
    deleteUser,
    findById,
    getUser
}