/*
  Warnings:

  - You are about to drop the column `description` on the `Sag` table. All the data in the column will be lost.
  - You are about to drop the column `periodeID` on the `Sag` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Sag` table. All the data in the column will be lost.
  - Added the required column `offentlighedskode` to the `Sag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opdateringsdato` to the `Sag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodeid` to the `Sag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statsbudgetsag` to the `Sag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusid` to the `Sag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titel` to the `Sag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sag" DROP COLUMN "description",
DROP COLUMN "periodeID",
DROP COLUMN "title",
ADD COLUMN     "afgorelse" TEXT,
ADD COLUMN     "afgorelsesdato" TIMESTAMP(3),
ADD COLUMN     "afgorelsesresultatkode" TEXT,
ADD COLUMN     "afstemningskonklusion" TEXT,
ADD COLUMN     "baggrundsmateriale" TEXT,
ADD COLUMN     "begrundelse" TEXT,
ADD COLUMN     "deltundersagid" INTEGER,
ADD COLUMN     "fremsatundersagid" INTEGER,
ADD COLUMN     "kategoriid" INTEGER,
ADD COLUMN     "lovnummer" TEXT,
ADD COLUMN     "lovnummerdato" TIMESTAMP(3),
ADD COLUMN     "nummer" TEXT,
ADD COLUMN     "nummernumerisk" TEXT,
ADD COLUMN     "nummerpostfix" TEXT,
ADD COLUMN     "nummerprefix" TEXT,
ADD COLUMN     "offentlighedskode" TEXT NOT NULL,
ADD COLUMN     "opdateringsdato" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "paragraf" TEXT,
ADD COLUMN     "paragrafnummer" TEXT,
ADD COLUMN     "periodeid" INTEGER NOT NULL,
ADD COLUMN     "radsmodedato" TIMESTAMP(3),
ADD COLUMN     "resume" TEXT,
ADD COLUMN     "retsinformationsurl" TEXT,
ADD COLUMN     "statsbudgetsag" BOOLEAN NOT NULL,
ADD COLUMN     "statusid" INTEGER NOT NULL,
ADD COLUMN     "titel" TEXT NOT NULL,
ADD COLUMN     "titelkort" TEXT,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Sag_id_seq";
