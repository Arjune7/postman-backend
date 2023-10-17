-- CreateTable
CREATE TABLE "history" (
    "id" TEXT NOT NULL,
    "api_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method" TEXT NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);
