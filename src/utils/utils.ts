export const rgbToHex = (rgba:string) => {
    const rgbaArr:Array<string> = rgba.split(',')
    let r:number = parseFloat(rgbaArr[0]),g:number = parseFloat(rgbaArr[1]),b:number = parseFloat(rgbaArr[2])
    let outParts = [
        r.toString(16),
        g.toString(16),
        b.toString(16),
    ]

    // Pad single-digit output values
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
