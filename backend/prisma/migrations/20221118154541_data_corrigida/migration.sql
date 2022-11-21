/*
  Warnings:

  - Added the required column `dataNascimento` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroCelular` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `dataNascimento` VARCHAR(191) NOT NULL,
    ADD COLUMN `numeroCelular` VARCHAR(191) NOT NULL;
