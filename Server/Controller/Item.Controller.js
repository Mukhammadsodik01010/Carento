const Items = require("../Modules/Items.Module");

const AddNewItem = async (req, res) => {
  const {
    name,
    location,
    miles,
    gearType,
    fuelType,
    seats,
    cost,
    rank,
    reviews,
  } = req.body;
  try {
    if (
      !name ||
      !location ||
      !miles ||
      !gearType ||
      !fuelType ||
      !seats ||
      !cost
    ) {
      return res.status(401).json({ message: "Fill all the placess" });
    }
    const item = new Items({
      name,
      location,
      miles,
      gearType,
      fuelType,
      seats,
      cost,
      rank,
      reviews,
    });
    await item.save();
    return res.json(item);
  } catch (error) {
    return res.status(500).json({ message: "Error adding new data", error });
  }
};

const GetItems = async (req, res) => {
  try {
    const item = await Items.find();
    if (!item) {
      return res.status(404).json({ message: "Error finding all items" });
    }
    return res.json(item);
  } catch (error) {
    return res.status(500).json({ message: "Error getting all data", error });
  }
};

const GetItemById = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Error finding item by id" });
    }
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json({ message: "Error getting all data", error });
  }
};

const UpdateItem = async (req, res) => {
  try {
    const item = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ message: "Error finding item by id" });
    }
    return res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating data", error });
  }
};


const DeleteItem = async (req, res) => {
  try {
    const item = await Items.findByIdAndDelete(req.params.id)
    if (!item) {
      return res.status(404).json({ message: "Error finding item by id" });
    }
    return res.status(200).json({message:"Item deleted successfully"})
  } catch (error) {
    return res.status(500).json({ message: "Error updating data", error });
  }
}

module.exports = { AddNewItem, GetItems, UpdateItem, GetItemById, DeleteItem };
