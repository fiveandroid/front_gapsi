import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {


  const [providerList, setProviderList] = useState()

  const getProviders = async () => {
    let data = await fetch('http://localhost:8080/providers'
    )
    
    data = await data.json()
    
    console.log( data )
     
    console.log( data.data.proveedores )
    setProviderList(data.data.proveedores)
    
  }


  const deleteProvider = async ( id ) => {

    console.log(`hizo click ${id.id}`, id )

    let data = await fetch(`http://localhost:8080/providers/${id.id}`,
      {
        method: 'DELETE'        
      }
    )
    
    data = await data.json()
    
    console.log( data )
     
    getProviders()

  }


  const clickHandler = event => {
    console.log("Aqui esta")

    getProviders()
  }
  
 

  useEffect(() => {
   
  }, [providerList])

  return (
    <div className="App">
    
      <div className='container'>

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">e-Commerce Gapsi</a>
            <div className="d-flex">
              
                <button className="btn btn-outline-success" type="button">Search</button>
            </div>
          </div>
        </nav>

        <div className='row  d-flex align-content-center justify-content-center'>        
          
          <div className='col-4' >
            <div className='row'>
              <img src="http://www.gapsi.com.mx/img/logo.png" alt="" />

              <p>Bienvenido Candidato 01</p>

              <button className="btn btn-primary" type="button" onClick={clickHandler}>Continuar</button>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-6'>

            {providerList ? (
              <div className='row row-cols-1 row-cols-md-2 g-4'>
             
                <div>
                

                  <button type="button" class="btn btn-primary" // onClick={() => deleteKoder(providerKey)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                      <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"></path>
                      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
                    </svg>
                      Nuevo Proveedor
                  </button>
                </div>
                <table className="table table-striped table-hover">
                <tbody>
                  <tr className="table-active">
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Servicio</th>
                    <th>Acciones</th>

                  </tr>
  
                {Object.keys(providerList).map(providerKey => {
                  const { id, name, service } = providerList[providerKey]
                  return (

                    <tr className="table-active">
                      <th scope="row">{id}</th>
                      <td  >{name}</td>
                      <td>{service}</td>
                      <td>
                        <button type="button" class="btn btn-secondary" onClick={() => deleteProvider({id}) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                            <path fill-rule="evenodd" d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                   
                  )
                })}
                 </tbody>
                </table>
              </div>
            ):""
            }

          </div>
      </div>
    </div>
  );
}

export default App;
