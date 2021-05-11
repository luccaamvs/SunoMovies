/* Lucca Bordin - 02/05/21
    Este arquivo servira para centralizar todos os dados da API TMDB, utilizada para o projeto Suno_Movies.
 */

const API_KEY = 'e74ce1cd61844b99bb6e36d30179d558'; 
const API_BASE = 'https://api.themoviedb.org/3';

// Função auxiliar que vai dar fetch(Await = Faz requisição para um serviço externo) na URL e pegar e retornar o Json.

const basicFetch = async (endpoint) => {
     const req = await fetch(`${API_BASE}${(endpoint)}`);
     const json = await req.json();
     return json;
}

/* 
    Dados Importantes:
        - Gênero e popularidade.
        - Descrição do filme.

    Separar por:
        -Lançamentos da Semana;
        -Gênero;
*/

export default {
    getHomeList: async () => {
        return [
            /*
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213$language=pt-BR&api_key=${API_KEY}`)
            },
            */
            {
                slug: 'treding',
                title: 'LANÇAMENTOS DA SEMANA',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
   /* getMovieInfo: async(movieId, type) => {
        let info ={};

            if (movieId) {
                switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);

                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                }
            }
            return info;
    } */
}