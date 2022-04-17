export const resimler = [
{
    1 : {
        resim: {
            resim_1: 'https://i0.shbdn.com/photos/28/09/35/thmb_1011280935hdr.jpg',
            resim_2: 'https://i0.shbdn.com/photos/28/09/35/thmb_1011280935u92.jpg',
            resim_3: 'https://i0.shbdn.com/photos/28/09/35/x5_1011280935ded.jpg',
            resim_4: 'https://i0.shbdn.com/photos/28/09/35/x5_10112809350og.jpg'
        },
        baslik: '1- Milesight IoT UG65 Helium (HNT) Hotspot Miner',
        aciklama: 'Milesight IoT UG65 Helium (HNT) Hotspot Miner - Europe & UK - 868 MHz (EU868) Kutusu açılmamış yüksek performanslı helium hotspot',
        fiyat: 8.500
    },
    2 : {
        resim: {
            resim_1: 'https://i0.shbdn.com/photos/28/09/35/thmb_1011280935hdr.jpg',
            resim_2: 'https://i0.shbdn.com/photos/28/09/35/thmb_1011280935u92.jpg',
            resim_3: 'https://i0.shbdn.com/photos/28/09/35/x5_1011280935ded.jpg',
            resim_4: 'https://i0.shbdn.com/photos/28/09/35/x5_10112809350og.jpg'
        },
        baslik: '2- Milesight IoT UG65 Helium (HNT) Hotspot Miner',
        aciklama: 'Milesight IoT UG65 Helium (HNT) Hotspot Miner - Europe & UK - 868 MHz (EU868) Kutusu açılmamış yüksek performanslı helium hotspot',
        fiyat: 9.500
    },
    3: {
        resim: {
            resim_1: 'https://i0.shbdn.com/photos/28/09/35/thmb_1011280935hdr.jpg',
            resim_2: 'https://i0.shbdn.com/photos/28/09/35/thmb_1011280935u92.jpg',
            resim_3: 'https://i0.shbdn.com/photos/28/09/35/x5_1011280935ded.jpg',
            resim_4: 'https://i0.shbdn.com/photos/28/09/35/x5_10112809350og.jpg'
        },
        baslik: '3- Milesight IoT UG65 Helium (HNT) Hotspot Miner',
        aciklama: 'Milesight IoT UG65 Helium (HNT) Hotspot Miner - Europe & UK - 868 MHz (EU868) Kutusu açılmamış yüksek performanslı helium hotspot',
        fiyat: 10.500
    }
}]

export const API = resimler.map(satir => {
    let ilkResim
    let baslik
    let digerResimler
    let aciklama
    let fiyat

    ilkResim = satir[1].resim['resim_1']
    digerResimler = satir[1].resim
    baslik = satir[1].baslik
    aciklama = satir[1].aciklama
    fiyat = satir[1].fiyat
    
    return ({ilkResim, digerResimler, baslik, aciklama, fiyat})
})