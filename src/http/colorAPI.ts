import {$host} from "./index"


export const createType = async (type:{}) => {
    const {data} = await $host.post('/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('/type')
    // console.log(data)
    return data
}

export const fetchColors = async (typeId?:number | null, page?:number, limit?:number, query?: string | null) => {
    const {data} = await $host.get('/color', {params:{
            typeId, page, limit, query
        }})

    return data
}

export const createColor = async (color:{}) => {
    const {data} = await $host.post('/color', color)
    return data
}

export const createColorGenerate = async (count: string) => {
    const {data} = await $host.post('/color/generate', {count: count})
    return data
}

export const fetchOneColor = async (id:any, shadows?:any) => {
    const {data} = await $host.get('/color/'+ id, {params:{shadows}})
    // console.log(data)
    return data
}


export const fetchColorRandom = async (typeId:number) => {
    const {data} = await $host.get('/color/random',{params:{typeId}})
    return data
}
