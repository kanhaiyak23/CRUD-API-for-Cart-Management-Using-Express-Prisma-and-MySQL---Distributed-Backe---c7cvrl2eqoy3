
const {prisma} = require('../db/config')
const addProduct = async(req,res)=>{
    const { userId, productId, count } = req.body;

  if (!userId || !productId || !count) {
    return res.status(404).json({ error: "All fields required" });
  }

  const cart = await prisma.cart.create({
    data: { userId, productId, count },
  });
  res.status(201).json(cart);
}
const getById = async(req,res)=>{
    const {id} = req.params
    const cart = await prisma.cart.findUnique({
        where:{cartId:parseInt(id)}
    })
    if(!cart){
        return res.status(404).json({error: "Cart not found"})
    }
    res.status(200).json(cart)
}
const updateProduct = async(req,res)=>{
    const {id} = req.params
    const {count} =req.body
    const cart = await prisma.cart.update({
        where:{cartId:parseInt(id)},data:{count}
    })
    if(!cart){
        return res.status(404).json({error: "Cart not found"})
    }
    res.status(200).json(cart)
}
const deleteProduct = async(req,res)=>{
    const {id} = req.params
    const cart  = await prisma.cart.delete({where:{cartId:parseInt(id)}})
    if(!cart){
        return res.status(404).json({error: "Cart not found"})
    }
    return res.status(200).json({   "message": "Cart deleted successfully" 
    })
}
module.exports = {addProduct,getById,updateProduct,deleteProduct};
