# Bacharelado em Ciência de Computação
Disciplina: **Programação para Web I**
Turma: 001
Professor: Demetrio Gomes Mestre

## Roteiro VII - Atividade de ReactJS

**Etapa 1** - Baixe e descompacte a versão gratuita do material dashboard react da creative-tim, disponível no seguinte link: https://www.creative-tim.com/product/material-dashboard-react

**Etapa 2** - Acesse pelo terminal a pasta descompactada e execute o seguinte comando:
Comando: `npm install`

Em seguida, rode o seguinte comando (ainda na pasta):
Comando: `npm start`

Se tudo deu certo, você poderá ver o material dashboard rodando na url: http://localhost:3000/dashboard

**Etapa 3** - Baixe o arquivo compactado anexo a atividade e descompacte-o. Em seguida, adicione a pasta alunos (extraída do anexo) na pasta `layouts`, existente na pasta `src` (do projeto).

**Etapa 4** - Ajuste o array routes, existente no arquivo routes.js (pasta src), para só mostrar os menus do dashboard e alunos. O array deve conter apenas estes dois objetos:

```
{
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
},
{
    type: "collapse",
    name: "Alunos",
    key: "alunos",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/alunos",
    component: <Alunos />,
},
```

Se tudo deu certo, você verá apenas os dois menus aparecendo ao acessar a url: http://localhost:3000/dashboard

**Etapa 5** - Modifique o componente da tabela alunos para mostrar apenas as informações dos integrantes de sua equipe no projeto da disciplina. Coloque a foto de cada um, o nome completo com email, se já fez alguma coisa no projeto até agora (ativo ou desativado) e a data que começou a trabalhar no projeto.

Etapa 6 - Adicione um novo componente para ser acessado a partir do menu! Crie a tabela de disciplinas,
com os respectivos professores (desejados por você), que pretende cursar no próximo semestre.

**DESAFIO** - Pelo terminal, no diretório do projeto, instale o axios (comando: `npm install axios`). Preencha
a tabela de alunos atualizada na etapa 5 com dados consultados a partir do mockable.io.

Bom trabalho!