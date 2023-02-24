const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}

const create = async (req, res) => {
    const manutencao = await prisma.manutencao.create({
        data: req.body
    })
    res.status(201).end();
}

const readAll = async (req, res) => {
    const manutencao = await prisma.manutencao.findMany({
    })
    res.json(manutencao).end();
}

const update = async (req, res) => {
    const manutencao = await prisma.manutencao.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(manutencao).end();
}

const del = async (req, res) => {
    const manutencao = await prisma.manutencao.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}

module.exports = {
    test,
    create,
    readAll,
    update,
    del
}