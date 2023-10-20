import { query } from "../api/db"

export default async function handler(req, res) {
    try {
        // const querySql = 
        const valuesParams = [];
        const data = await query({ values: valuesParams})
        res.status(200).json({ name: "john doe"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}