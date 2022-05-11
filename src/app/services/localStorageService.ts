class localStorageService {
    ls = window.localStorage

    setItem(key: string, value: any) {
        value = JSON.stringify(value)
        this.ls.setItem(key, value)
        return true
    }

    getItem(key: string) {
        let value: any = this.ls.getItem(key)
        try {
            return JSON.parse(value)
        } catch (e) {
            return null
        }
    }
}

export default new localStorageService()
