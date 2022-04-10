import './App.css'

import {
  UserInfo,
  ClassUser, FunctionalUser, 
  ClassUserWithLifeCycle, FunctionalUserWithLifeCycle,
  ClassProps, FunctionalProps,
  ClassOnClickButtons, FunctionalOnClickButtons,
  Test, Message,
  Loading 
} from './Components'

const App = () => {
  /* Sayfa yüklendi mi ? */
  // const loaded = false
  const loaded = true
  const routeName = 'Anasayfa'

  return (
    // console.log(data),
    loaded ?
      // <div class="App"></div>
      <div className="App">
      <header className="App-header">
        {/* Inline CSS kullanımı örneği */}
        {/* <header style={{ width: 200, height: 100, backgroundColor: 'red' }}> */}
          {/* <UserInfo /> */}
          {/* <Message /> */}
          {/* <Test /> */}
          {/* <ClassUser /> */}
          {/* <FunctionalUser /> */}
          {/* <ClassUserWithLifeCycle /> */}
          {/* <FunctionalProps route={routeName} /> */}
          {/* <ClassProps route={routeName} /> */}
          {/* <ClassProps /> */}
          {/* <ClassOnClickButtons /> */}
          <FunctionalOnClickButtons />

        {/* <p> Anasayfa </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hakkımızda
        </a> */}
      </header>
    </div> : <Loading />
  );
}

export default App