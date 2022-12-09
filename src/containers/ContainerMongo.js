import mongoose from "mongoose";

class ContainerMongo {
  constructor(collection, schema) {
    this.model = mongoose.model(collection, schema);
  }
  async getAll() {
    const items = await this.model.find();
    return items;
  }
  async create(data) {
    const newItem = await this.model.create(data);
    return newItem;
  }
  async getById(id) {
    const found = await this.model.findById(id);
    if (!found) throw new Error("Item not found");
    return found;
  }
  async update(id, changes) {
    try {
      const updated = await this.model.findByIdAndUpdate(id, changes, {
        new: true,
      });
      return updated;
    } catch (error) {
      if (typeof error === "DocumentNotFoundError") {
        throw new Error("Item not found");
      }
    }
  }
  async delete(id) {
    await this.model.deleteOne({ _id: id });
  }
}

export default ContainerMongo;
