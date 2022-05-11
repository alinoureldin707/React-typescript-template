
export const flat = (array: any[]) => {
    var result: any[] = []
    array.forEach(function (a) {
        result.push(a)
        if (Array.isArray(a.children)) {
            result = result.concat(flat(a.children))
        }
    })
    return result
}
