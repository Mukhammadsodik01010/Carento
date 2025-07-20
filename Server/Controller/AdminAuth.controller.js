const Admins = require("../Modules/Admin.Module")


const AddNewUserAdmin = async (req, res) => {
    const { name, email, password, reminder } = req.body;
    if (!name || !email || !password || !reminder) {
        return res.status(500).json({message:"Fill all the required fields"})
    }
    const existingUser = await Admins.findOne({ email })
    if (existingUser) {
        return res.status(500).json({message:"Email is already in use", email})
    }
    try {
        const admin = new Admins({ name, email, password, reminder });
        await admin.save();
        res.json({ message:"Admin Added Successfully", admin}); 
    } catch (error) {
        return res.status(404).json({message:"Error addign new Admin", error:error.message})
    }
}

const GettingAllAdmins = async (req, res) => {
    try {
        const admin = await Admins.find()
        if (!admin) {
            return res.status(500).json({message:"Error finding Admins List"})
        }
        return res.json(admin)
    } catch (error) {
        return res
          .status(404)
          .json({ message: "Error addign new Admin", error: error.message });
    }
}

const DeleteAdmin = async (req, res) => {
    try {
        const admin = await Admins.findByIdAndDelete(req.params.id)
        if (!admin) {
          return res.status(500).json({ message: "Error deleting admin by id" });
        }
        return res.status(200).json({message:"Item deleted successfully"})
    } catch (error) {
        return res
          .status(404)
          .json({ message: "Error addign new Admin", error: error.message });
    }
}

const SignInAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({ message: "Fill all the required places" });
  }
  try {
    const admin = await Admins.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(500).json({ message: "invalid email or password" });
    }
    return res.status(201).json({ message: "Login successfull" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error signing in nnnn", error: error.message });
  }
};


module.exports = {
  AddNewUserAdmin,
  GettingAllAdmins,
  DeleteAdmin,
  SignInAdmin,
};