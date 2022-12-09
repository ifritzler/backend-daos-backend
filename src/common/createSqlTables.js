import knex from "knex";
import { knexConfig } from "./config/knex.js";

const db = knex(knexConfig);

const createDB = async function (knex) {
  const existsTableMessages = await knex.schema.hasTable("messages");
  if (!existsTableMessages) {
    await knex.schema.createTable("messages", (table) => {
      table.increments();
      table.string("email", 50);
      table.text("text", "longtext");
      table.date("date");
    });
  }

  const existsTableProducts = await knex.schema.hasTable("products");
  if (!existsTableProducts) {
    await knex.schema.createTable("products", (table) => {
      table.increments();
      table.string("products", 50);
      table.float("price");
      table.text("thumbnail");
    });
  }

  const existsTableCarts = await knex.schema.hasTable("carts");
  if (!existsTableCarts) {
    await knex.schema.createTable("carts", (table) => {
      table.increments();
      table.integer("timestamp");
    });
  }

  const existsTableProdCarts = await knex.schema.hasTable("cart_product");
  if (!existsTableProdCarts) {
    await knex.schema.createTable("carts", (table) => {
      table.increments();
      table.integer("timestamp");
    });
  }

  db.destroy();
};

export default () => {
  createDB(db)
};
