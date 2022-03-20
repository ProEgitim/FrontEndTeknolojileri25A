// export class Sinif {
//     id: number;
//     name: string;
//     lastName: string;
//     lastLoginDate: Date;
//     status: boolean; // true-false
// }

// var sinif = new Sinif()
// sinif.id = 1
// sinif.name = 'Gizem SAYAR'

// Mesaj(){
//     return 'Mesaj Alındı';
// }

// Mesaj(mesaj: string, kontrol: number) {

// }

export class SinifinDemirbaslari {
    sira: 21;
    tahta: '100-01 numaralı';
}

export class Sinif {
    name: string;
    constructor() {
        this.name = 'Varsayılan Tahta'
        var _sinifinDemirbaslari = new SinifinDemirbaslari()
    }
}

var sinif = new Sinif()