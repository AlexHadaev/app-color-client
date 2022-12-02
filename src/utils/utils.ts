export const rgbToHex = (rgba:string) => {
    const rgbaArr:Array<string> = rgba.split(',')
    let r:number = parseFloat(rgbaArr[0]),g:number = parseFloat(rgbaArr[1]),b:number = parseFloat(rgbaArr[2])
    let outParts = [
        r.toString(16),
        g.toString(16),
        b.toString(16),
    ]

    outParts.forEach(function (part, i) {
        if (part.length === 1) {
            outParts[i] = '0' + part
        }
    })

    return ('#' + outParts.join(''))
}

export const hexToRGB = (h:string) => {
    let r:string = '', g:string = '', b:string = ''

    if (h.length === 4) {
        r = "0x" + h[1] + h[1]
        g = "0x" + h[2] + h[2]
        b = "0x" + h[3] + h[3]

    } else if (h.length === 7) {
        r = "0x" + h[1] + h[2]
        g = "0x" + h[3] + h[4]
        b = "0x" + h[5] + h[6]
    }

    return  +r + "," + +g + "," + +b
}

const  maxLevelRGB = (el:{rgb:string}): number => {
    const arrLevelRGB: any[] = el.rgb.split(',')
    // return arrLevelRGB.reduce((a, b) => Number(a) + Number(b))
    return Math.max.apply(null, arrLevelRGB)
}
export const  sortRGB = ( a:any, b:any ): number => {
    const elPrev = maxLevelRGB(a)
    const elNext = maxLevelRGB(b)
    return elPrev - elNext
}