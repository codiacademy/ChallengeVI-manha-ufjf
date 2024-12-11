/*
  Warnings:

  - You are about to drop the column `category` on the `shoppingCart` table. All the data in the column will be lost.
  - Added the required column `isFavorite` to the `shoppingCart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isShoppingCart` to the `shoppingCart` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shoppingCart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "isShoppingCart" BOOLEAN NOT NULL,
    CONSTRAINT "shoppingCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "shoppingCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_shoppingCart" ("id", "productId", "userId") SELECT "id", "productId", "userId" FROM "shoppingCart";
DROP TABLE "shoppingCart";
ALTER TABLE "new_shoppingCart" RENAME TO "shoppingCart";
CREATE UNIQUE INDEX "shoppingCart_id_key" ON "shoppingCart"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
