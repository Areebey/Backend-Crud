import User from "../models/user.js"

export const create = async (req, res)=>{
    try {
        const userData = new User(req.body);
        const {email} = userData;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User Already Exist"});
        }
        const saveUser = await userData.save();
        res.status(200).json(saveUser)
    } catch (error) {
        res,status(500).json({error : "Internal server error"});
    }

}

export const fetch = async (req, res)=>{
    try{
        return res.json("Hellllo");
    }catch (error){
        res,status(500).json({error : "Internal server error"});
    }
};