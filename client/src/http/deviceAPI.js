import { $host, $authHost } from ".";
import jwt_decode from 'jwt-decode'

export const createType = async (type) =>{
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) =>{
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () =>{
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) =>{
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit) =>{
    const {data} = await $host.get('api/device', {params:{
        typeId, brandId, page, limit
    }})
    return data
}

export const fetchOneDevice = async (id) =>{
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const createBasketDevice = async (email, deviceId) =>{
    const {data} = await $authHost.post('api/basket?email='+email+'&deviceId='+deviceId)
    return data
}

export const fetchBasket = async (email) => {
    const {data} = await $authHost.get('api/basket?email='+email)
    return data
}

export const removeFromBasket = async (email, deviceId) =>{
    const {data} = await $authHost.delete('api/basket?email='+email+'&deviceId='+deviceId)
    return data
}