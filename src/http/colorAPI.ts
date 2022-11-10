import {$host} from "./index";


export const createType = async (type:{}) => {
    const {data} = await $host.post('/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('/type')
    return data
}

export const fetchColors = async (typeId?:number | null, random?:number | null, page?:number, limit?:number) => {
    const {data} = await $host.get('/color', {params:{
            typeId, random, page, limit
        }})
    return data
}

export const createColor = async (color:{}) => {
    const {data} = await $host.post('/color', color)
    return data
}

export const createColorGenerate = async (count: string, shadow: boolean) => {
    const {data} = await $host.post('/color/generate', {count: count, shadow: shadow})
    return data
}

export const fetchOneColor = async (id:any, shadows?:any) => {
    const {data} = await $host.get('/color/'+ id, {params:{shadows}})
    return data
}

export const searchColors = async (typeId?:number | null, query?: string | null, page?:number, limit?:number) => {
    const data = await $host.get('/color', {
        params:{
            typeId, query, page, limit
        }
    })
    return data
}