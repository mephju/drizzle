import { int, sqliteTable as table, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

export const usersTable = table("users", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const productsTable = table("products", {
  id: text()
    .primaryKey()
    .$default(() => createId()),
  name: text().notNull(),
});
