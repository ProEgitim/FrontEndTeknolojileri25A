let varsayilanSayi = { sayi : 0 }

// reducer (state, action, payload)

export const reducer = (state = varsayilanSayi, action) => {
    // Switch ile type kontrolü
    // switch(action.type) {
    //     case "SAYI_ARTTIR": return {
    //             //sayi: state.sayi++
    //             sayi: state.sayi + 1
    //         }
    //         break
    //     case "SAYI_AZALT": return {
    //         //sayi: state.sayi--
    //         sayi: state.sayi - 1
    //     }
    //     break
    //     default: 0
    // }

    // If ile type kontrolü
    if(action.type === "SAYI_ARTTIR") 
    return {
        sayi: state.sayi + 1
    }

    if(action.type === "SAYI_AZALT")
    return {
        sayi: state.sayi - 1
    }

    if(action.type === "SAYI_SIFIRLA")
    return {
        sayi: 0
    }

    return state
}