-- CreateTable
CREATE TABLE "Sag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "typeid" INTEGER NOT NULL,
    "periodeID" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sag_pkey" PRIMARY KEY ("id")
);
