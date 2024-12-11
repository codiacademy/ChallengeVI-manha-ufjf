-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shoppingCart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "isShoppingCart" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "shoppingCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "shoppingCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_shoppingCart" ("id", "isFavorite", "isShoppingCart", "productId", "userId") SELECT "id", "isFavorite", "isShoppingCart", "productId", "userId" FROM "shoppingCart";
DROP TABLE "shoppingCart";
ALTER TABLE "new_shoppingCart" RENAME TO "shoppingCart";
CREATE UNIQUE INDEX "shoppingCart_id_key" ON "shoppingCart"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
