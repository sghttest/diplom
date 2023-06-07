import { makeAutoObservable } from 'mobx'

export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Смартфоны'},
            {id: 2, name: 'Смартчасы'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 25000, rating: 5, img:'img123'},
            {id: 2, name: 'Iphone 12', price: 25000, rating: 5, img:'img123'},
            {id: 3, name: 'Iphone 12', price: 25000, rating: 5, img:'img123'},
            {id: 4, name: 'Iphone 12', price: 25000, rating: 5, img:'img123'},
            
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }
}