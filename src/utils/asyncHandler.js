
const asyncHandler = ()=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch(next)
    }
}
export {asyncHandler}

/*const asyncHandler = () =>{}
const asyncHandler = (func) =>() => {}
const asyncHandler = () => async() =>{}*/

/*const asyncHandler = (fn) => async(req,res,next) =>{
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(error.code||500).json({
            success:false,
            message:error.message
        })
    }
}

export{asyncHandler}*/