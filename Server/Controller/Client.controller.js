const Client = require("../Modules/Client.module");

const AddClient = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(500).json({ message: "Fill all the required places" });
  }
  const existingUser = await Client.findOne({ email });
  if (existingUser) {
    return res.status(500).json({ message: "This email is alreasy in use" });
  }
  try {
    const client = new Client({ username, email, password });
    await client.save();
    res.status(200).json({message:"Client is added", client});
  } catch (error) {
    return res.status(404).json({ message: "Error adding new client", error:error.message });
  }
};

const SignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({ message: "Fill all the required places" });
  }
  try {
    const client =  await Client.findOne({ email })
    if (!client || !(await client.comparePassword(password))) {
      return res.status(500).json({ message: "invalid email or password" });
    }
    return res.status(201).json({ message: "Login successfull" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error signing in nnnn", error: error.message });
  }
}

const GettingAllClients = async (req, res) => {
    try {
        const client = await Client.find()
        res.status(200).json({ message: "List of all clients", client});
    } catch (error) {
        return res
          .status(404)
          .json({ message: "Error getting all clients list", error: error.message });
    }
}

module.exports = { AddClient, GettingAllClients, SignIn };
