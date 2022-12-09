import { v4 as uuid } from "uuid";

class ContainerMemory {
  constructor() {
    this.db = [];
  }
  async getAll() {
    return this.db;
  }
  async create(data) {
    const newItem = { id: uuid(), ...data };
    this.db.push(newItem);
    return newItem;
  }
  async getById(id) {
    const found = this.db.find((item) => item.id === id);
    if (!found) throw new Error("Item not found");
    return found;
  }
  async update(id, changes) {
    const found = this.db.findIndex((item) => item.id === id);
    if (found < 0) {
      throw new Error("Item not found");
    }
    const updated = { ...this.db[found], ...changes };
    this.db[found] = updated;
    return updated;
  }
  async delete(id) {
    this.db = this.db.filter((item) => item.id !== id);
  }
}

export default ContainerMemory;
