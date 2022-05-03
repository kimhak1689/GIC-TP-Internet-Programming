
const Products = require("../models/products")
var mongoose = require('mongoose');
const s = require("connect-redis");

const findById = async (id) => {
  try {
    const product = await Products.findById(id);
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async () => {
  // to do
  try {
    const products = await Products.find()
    if (!Products) throw new Error('Product not found')
    return {
      success: true,
      data: products
    };
  } catch (error) {
    return { error: error.message, data: null }
  }
}

const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return createdProduct;
}

const update = async (id, body) => {
  console.log(id);
  console.log(body);
  // to do
  try {
    const updatedProduct = await Products.updateOne({ _id: id }, body);
    // if (!updatedProduct) throw new Error('Failed to update Product')
    if (updatedProduct) {
      return {
        success: true,
        data: updatedProduct
      }
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const remove = async (id) => {
  // to doF
  try {
    const product = await Products.findById(id).remove();
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}