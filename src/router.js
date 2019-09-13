import Home from './components/Home/Home';
import Contratacao from './components/Contratacao/Contratacao';
import Cadastro  from './components/Cadastro/Cadastro';
import DadosPessoais from  './components/DadosPessoais/DadosPessoais';

const routes = [
    { path: '/', component: Home },
    { path: '/contratacao' , component: Contratacao },
    { path: '/cadastro' , component: Cadastro,
        children: [
        { path: 'dados-pessoais',  component: DadosPessoais },
        // { path: 'endereço',  component: },
        // { path: 'pagamento',  component: },
        ]
    }
];

export default routes;