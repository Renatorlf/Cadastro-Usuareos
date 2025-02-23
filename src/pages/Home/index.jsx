import './style.css'
import Trash from '../../assets/trash.svg'

//É aqui onde se escreve todos os códigos do componente REACT
//Eu posso Renomear a Função principal do App
function Home() {

  const users = [
    {
      id: 'gi3g4u5iu3gi4',
      name: 'Renato',
      age: 33,
      email: 'renato@email.com'
    },
    {
      id: 'fasefr34556',
      name: 'Keila',
      age: 45,
      email: 'keila@email.com'
    },

    {
      id: 'jnndfnodnfg',
      name: 'José',
      age: 27,
      email: 'jose@email.com'
    },
  ]

  //No REACT tudo que esta acima do 'return' é código JavaScript, e o que está abaixo é código HTML.
  //Para utilizar código JavaScript dentro do return, coloca o código dentro de chaves '{}'.
  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usúarios</h1>
        <input placeholder="Nome" name='nome' type="text" />
        <input placeholder="Idade" name='idade' type="number" />
        <input placeholder="E-mail" name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>))
      }
    </div>
  )
}

export default Home
