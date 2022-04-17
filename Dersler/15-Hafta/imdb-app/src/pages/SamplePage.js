import React from 'react'
import { connect } from 'react-redux'

const SamplePage = props => {
  const arttir = () => {
    props.dispatch({
      type: "SAYI_ARTTIR"
    })
  }

  const azalt = () => {
    props.dispatch({
      type: "SAYI_AZALT"
    })
  }
  
  const sifirla = () => {
    props.dispatch({
      type: "SAYI_SIFIRLA"
    })
  }

  return (
    <div>
      <button onClick={azalt}> Azalt </button>
      <button onClick={arttir}> Arttır </button>
      <button onClick={sifirla}> Sıfırla </button>
      <p> {props.sayi} </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sayi: state.sayi
  }
}

// export default SamplePage
export default connect(mapStateToProps)(SamplePage)