import fs from "fs/promises";
import _ from "lodash";
import path from "path";
import { v4 as uuid } from "uuid";
import { getDirName } from "../common/utils.js";

class ContainerFs {
  constructor(fileName) {
    this.path = path.resolve(getDirName(), `../common/${fileName}.txt`);
  }
  async getAll() {
    try {
      const fileData = await fs.readFile(this.path, { encoding: "utf-8" });
      const data = await JSON.parse(fileData);
      return data;
    } catch (error) {
      // Si el archivo no existe emite un error ENOENT (Error no entity)
      if (error.code === "ENOENT") return [];
    }
  }
  async create(entity) {
    const data = await this.getAll();
    const newEntity = { id: uuid(), ...entity };
    data.push(newEntity);
    await fs.writeFile(this.path, JSON.stringify(data, null, 2));
    return newEntity;
  }

  async getById(id) {
    const data = await this.getAll();
    const entity = data.find((ent) => ent.id == id);
    if (_.isNil(entity)) throw new Error("Item not found");
    return entity;
  }
  async update(id, changes) {
    const data = await this.getAll();
    this.getById(id);
    const newData = data.map((ent) => {
      if (ent.id == id) {
        return { ...ent, ...changes };
      }
      return ent;
    });
    await fs.writeFile(this.path, JSON.stringify(newData, null, 2));
  }
  async delete(id) {
    const data = await this.getAll();
    const newData = data.filter((ent) => ent.id != id);
    await fs.writeFile(this.path, JSON.stringify(newData, null, 2));
  }
}

export default ContainerFs;
