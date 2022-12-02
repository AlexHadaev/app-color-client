import {makeAutoObservable} from "mobx";
import {IColors, ITypes} from "../types/types";

export default class ColorStore {
    constructor(
        public _types: Array<ITypes> = [],
        public _colors: Array<IColors> = [],
        public _selectedType: {} = {},
        public _query: string = '',
        public _onToggle: boolean = false,
        public _page: number = 1,
        public _totalCount: number = 0,
        public _limit: number = 12,
    ) {
        makeAutoObservable(this)
    }

    setQuery(query:string){
        this._query = query
    }
    setOnToggle(toggle:boolean){
        this._onToggle = toggle
    }

    setTypes(types: []) {
        this._types = types
    }

    setColors(colors: []) {
        this._colors = colors
    }

    setSelectedType(type: ITypes) {
        this.setPage(1)
        this._selectedType = type
    }

    setPage(page: number) {
        this._page = page
    }

    setTotalCount(count: number) {
        this._totalCount = count
    }

    get query(){
        return this._query
    }
    get onToggle(){
        return this._onToggle
    }

    get types() {
        return this._types
    }

    get colors() {
        return this._colors
    }

    get selectedType() {
        return this._selectedType
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}