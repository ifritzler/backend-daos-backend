import knex from "knex";
import _ from "lodash";
import { knexConfig } from "../common/config/knex.js";

class ContainerSQL {
  constructor(tableName) {
    this.db = knex(knexConfig);
    this.tableName = tableName;
  }
  async getAll() {
    try {
      this.db.initialize();
      const items = this.db.select("*").from(this.tableName);
      return items;
    } catch (error) {
      throw error;
    } finally {
      this.db.destroy();
    }
  }
  async create(data) {
    try {
      this.db.initialize();
      const newItem = await this.db.insert(data, "*").into(this.tableName);
      return newItem;
    } catch (error) {
      throw error;
    } finally {
      this.db.destroy();
    }
  }

  async getById(id) {
    try {
      this.db.initialize();
      const found = await this.db
        .select("*")
        .from(this.tableName)
        .where({ id });
      if (_.isNil(found) || _.isEmpty(found)) throw new Error("Item not found");
      return found;
    } catch (error) {
      throw error;
    } finally {
      this.db.destroy();
    }
  }
  async update(id, changes) {
    try {
      this.db.initialize();
      await this.getById(id);
      const updated = await this.db
        .update(changes)
        .from(this.tableName)
        .where({ id });
      return updated;
    } catch (error) {
      throw error;
    } finally {
      this.db.destroy();
    }
  }
  async delete(id) {
    try {
      this.db.initialize();
      await this.db.select("*").from(this.tableName).where({ id }).delete;
    } catch (error) {
      throw error;
    } finally {
      this.db.destroy();
    }
  }
}

export default ContainerSQL;
