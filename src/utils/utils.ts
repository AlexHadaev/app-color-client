export const rgbaToHex = (rgba:string) => {
    const rgbaArr:Array<string> = rgba.split(',');
    let r:number = parseFloat(rgbaArr[0]),g:number = parseFloat(rgbaArr[1]),b:number = parseFloat(rgbaArr[2]),a:number = parseFloat(rgbaArr[3]);
    let outParts = [
        r.toString(16),
        g.toString(16),
        b.toString(16),
        Math.round(a * 255).toString(16).substring(0, 2)
    ];

    // Pad single-digit output values
    outParts.forEach(function (part, i) {
        if (part.length === 1) {
            outParts[i] = '0' + part;
        }
    })

    return ('#' + outParts.join('').toUpperCase());
}

export const hexToRGB = (h:string) => {
    let r:string = '', g:string = '', b:string = '';

    // 3 digits
    if (h.length === 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
    } else if (h.length === 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    return  +r + "," + +g + "," + +b;
}

export const hexAToRGBA = (h:string) => {
    let r:string = '', g:string = '', b:string = '', a:any = 1;

    if (h.length === 5) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
        a = "0x" + h[4] + h[4];

    } else if (h.length === 9) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
        a = "0x" + h[7] + h[8];
    }
    a = +(a / 255).toFixed(3);

    return + +r + "," + +g + "," + +b + "," + a;
}

export const shadows = () => {
    let shadows = [];
    for (let i = 2; i < 11; i+=2) {
        shadows.push(i/10)

    }
    return shadows;
}