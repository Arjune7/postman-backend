import {PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const getHistory = async(req : express.Request, res : express.Response) => {
    try {
        const requests = await prisma.history.findMany();
        res.status(200).json(requests)
    } catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
}


export const addHistory = async(req : express.Request, res : express.Response) => {
    try {
        const {api_url, method} = req.body;
        const result = await prisma.history.create({
            data : {
                api_url,
                method
            }
        })
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
}