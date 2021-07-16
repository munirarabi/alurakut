import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response) {

    if(request.method == 'POST') {
        const TOKEN = 'd4c76041acaa709fd6f02a08db6cd5'
        const client = new SiteClient(TOKEN)

        const registroCriado = await client.items.create({
            itemType: "968775",
            ...request.body,
            // title: "Comunidade de teste",
            // imageUrl: "https://www.github.com/munirarabi.png",
            // creatorSlug: "munirarabi",
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}