import { makeAutoObservable } from 'mobx'

export default class UserStore{
    constructor(){
        this._isAuth = false
        this._user = {}
        this._email = {}
        this._deleted = 0
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    setEmail(email){
        this._email = email
    }

    setDeleted(deleted){
        this._deleted = deleted
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }

    get email(){
        return this._email
    }

    get deleted(){
        return this._deleted
    }
}