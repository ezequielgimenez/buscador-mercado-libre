import { atom, selector } from "recoil";

// en este archivo voy a crear un atom "state" vacio para guardar la query del valor 
// y tambien voy a usar un selector para obtener get los datos de la api de acuerdo al valor de la query
export const queryState = atom({
    key:"query",
    default:""
})

export const resultsState = selector({
    key: "searchResults",
    get: async ({ get }) => {
      const valorDeQuery = get(queryState);
        const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery)
        const data = await res.json()
        const results =  data.results
        return results
    },
})

export const idParam = atom({
    key:"idParam",
    default:""
})

export const resultItem = selector({
    key: "resultItem",
    get: async ({ get }) => {
        const query = get(idParam)
        if (query) {
            const res = await fetch("https://api.mercadolibre.com/items/" + query)
            const data = await res.json()
            return data
        }else{
            return []
        }
    },
})
