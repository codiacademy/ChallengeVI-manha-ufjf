/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `shoppingCart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "shoppingCart_productId_key" ON "shoppingCart"("productId");
