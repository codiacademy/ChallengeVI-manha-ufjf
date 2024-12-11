/*
  Warnings:

  - You are about to drop the column `userId` on the `shoppingCart` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shoppingCart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "isShoppingCart" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "shoppingCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_shoppingCart" ("id", "isFavorite", "isShoppingCart", "productId") SELECT "id", "isFavorite", "isShoppingCart", "productId" FROM "shoppingCart";
DROP TABLE "shoppingCart";
ALTER TABLE "new_shoppingCart" RENAME TO "shoppingCart";
CREATE UNIQUE INDEX "shoppingCart_id_key" ON "shoppingCart"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
