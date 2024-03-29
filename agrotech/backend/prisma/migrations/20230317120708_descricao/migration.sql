-- CreateTable
CREATE TABLE `Usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `tipoU` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Motorista` (
    `id_motorista` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `cnh` VARCHAR(191) NOT NULL,
    `disponivel` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Motorista_cpf_key`(`cpf`),
    UNIQUE INDEX `Motorista_cnh_key`(`cnh`),
    PRIMARY KEY (`id_motorista`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `id_veiculo` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `tipoV` VARCHAR(191) NOT NULL,
    `disponivel` BOOLEAN NOT NULL DEFAULT true,
    `alocado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id_veiculo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manutencao` (
    `id_manutencao` INTEGER NOT NULL AUTO_INCREMENT,
    `id_veiculo` INTEGER NOT NULL,
    `custo` DOUBLE NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `finalizado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id_manutencao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alocacao` (
    `id_alocacao` INTEGER NOT NULL AUTO_INCREMENT,
    `id_motorista` INTEGER NOT NULL,
    `id_veiculo` INTEGER NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_alocacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculo`(`id_veiculo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_id_motorista_fkey` FOREIGN KEY (`id_motorista`) REFERENCES `Motorista`(`id_motorista`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculo`(`id_veiculo`) ON DELETE RESTRICT ON UPDATE CASCADE;
