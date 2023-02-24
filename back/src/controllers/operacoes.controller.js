const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}

const create = async (req, res) => {
    const opera = await prisma.opera.create({
        data: req.body
    })
    res.status(201).end();
}

const readAll = async (req, res) => {
    const opera = await prisma.opera.findMany({
    })
    res.json(opera).end();
}

const update = async (req, res) => {
    const opera = await prisma.opera.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(opera).end();
}

const del = async (req, res) => {
    const opera = await prisma.opera.delete({
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