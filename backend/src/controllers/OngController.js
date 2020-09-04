const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = generateUniqueId();
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    },

    async delete(req, res) {
        const ong_id = req.headers.authorization;

        await connection('ongs').where('id', ong_id).delete();

        return res.status(204).send();
    }
};