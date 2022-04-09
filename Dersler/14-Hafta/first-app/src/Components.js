import React, { Component, useEffect, useState } from 'react'

import logo from './logo.svg'

/* Birden Çok fonksiyon (component) ların kullanımı */
// export function Test() {
//   const veri1 = () => {
//     return 1
//   }
  
//   const veri2 = val => {
//     return Number(2+val)
//   }

//   const veri3 = val => {
//     return veri2(val)
//   }

//   return([veri1(), veri1(), veri2(0), veri3(2)])

//   return ([
//     "Merhaba ilk sayfamız",
//     IkinciMesaj()
//   ])
// }

/* Mesaj component örneği */
// export function Message() {
//   return "İlk sayfamızdan gelen React verileri."
// }


/* Api fetch (ToDo - 1) Örneği */
// var data = []

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => {
//     data = response.json()
//   })
//   .then(json => console.log(json))

// export function UserInfo() {
//   const userInfo = "loggedIn"
//   const userName = ""

//   const hiMessage = () => {
//     return "Merhaba "
//   }
  
//   /* Shorthand kullanımı örneği */
//   const user = () => {
//     // if (userInfo === "loggedIn")
//     // return "Gizem, "
//     // else
//     // return "Kullanıcı, "
//     return userInfo === "loggedIn" ? userName : "Kullanıcı, "
//   }

//   const welcome = () => {
//     return "hoş geldiniz."
//   }

//   /* Tek bir atama ile sonuç döndürme */
//   // const response = hiMessage() + user() + welcome()
//   // return(response)

//   return([hiMessage(), user(), welcome()])
// }

export const Loading = () => {
    return <div className="App"> <img src={logo} className="App-logo" alt="logo" /> </div>
  }

export const Example1 = () => {
    return "Example1"
}

export function Example2() {
    return ("Example2")
}

//class Example3 extends React.Component
export class Example3 extends Component {
    render() {
        return "Example3"
    }
}

// const userName = "Veli"

export class ClassUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: 'Kullanıcı'
        }
    }

    render() {
        return (
            <div>
                <h4> Merhaba </h4>
                {this.state.userName}
            </div>
        )
    }
}

export const FunctionalUser = () => {
    const [userName, setUserName] = useState('Kullanıcı')

    return (
        <div>
            <h4> Merhaba </h4>
            {userName}
        </div>
    )
}

export class ClassUserWithLifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: 'Kullanıcı',
            users: [{
                id: 1,
                username: 'Ayşenur',
                phone: '+905554443322',
                isLoggedIn: true
            }]
        }
    }

    componentDidMount() {
        // Yanlış kullanım
        // this.state.userName = 'Ayşenur'

        this.setState({ userName: 'Ayşenur' })
    }
    
    render() {
        console.log(this.state.userName)
        return (
            <div>
                <h4> Merhaba </h4>
                {
                    this.state.userName
                }
                <hr />
                {
                    this.state.users.map(x => {
                        return "Id: " + x.id + " Kullanıcı Adı: " + x.username + " Telefon: " + x.phone + " Giriş Yapıldı Mı? " + x.isLoggedIn
                    })
                }
            </div>
        )
    }
}

export const FunctionalUserWithLifeCycle = () => {
    // { getter, setter }
    const [userName, setUserName] = useState('Kullanıcı')

    useEffect(() => {
        // Yanlış Kullanım
        // userName = 'Ümmügülsüm'

        setUserName('Ümmügülsüm')
    }, [])

    console.log(userName)
    return (
        <div>
            <h4> Merhaba </h4>
            {userName}
        </div>
    )
}

export class ClassProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            route: this.props.route || ''
        }
    }
    
    onData() {
        return this.props.route
    }

    render() {
        return (
            <div>
                <h4> Sayfa Başlığı : {this.onData()} - {this.state.route} </h4>
            </div>
        )
    }
}

export const FunctionalProps = props => {
    const onData = () => {
        return props.route
    }

    useEffect(() => {
    }, [])

    return (
        <div>
            <h4> Sayfa Başlığı : {onData()} </h4>
        </div>
    )
}