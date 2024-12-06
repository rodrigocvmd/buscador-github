# Buscador GitHub

Projeto de uma aplicação que permite a busca e exibição de perfis e repositórios do GitHub, utilizando integração com a **API oficial do GitHub**. A navegação entre as páginas é feita de forma fluida com o uso do **React Router**, enquanto o back-end lida com requisições assíncronas para recuperação de dados, garantindo eficiência no direcionamento para perfis e repositórios.

A solução oferece uma **interface amigável** e é preparada para tratar situações de erro, como perfis inexistentes ou páginas não encontradas, assegurando uma experiência completa para o usuário.

---

## 🛠️ Tecnologias Utilizadas

- **React Router**: Navegação entre as páginas.
- **API do GitHub**: Integração para busca de perfis e repositórios.
- **Context API e Reducers**: Gerenciamento de estado eficiente.
- **Backend**: Requisições assíncronas para comunicação com a API.
- **Libs de ícones e componentes**: Interface escalável e responsiva.

---

## 🌟 Destaques do Projeto

### 1. **Gerenciamento de Estado Robusto**
Foi desenvolvido um sistema que combina **Context API** com **reducers personalizados**, como:
- **GithubProvider**: Gerencia dados e interações relacionadas à API do GitHub.
- **AlertProvider**: Gerencia alertas e notificações dentro da aplicação.

Essa abordagem permitiu fornecer dados e funcionalidades para múltiplos componentes sem a necessidade de passar propriedades manualmente, resultando em um código mais limpo e eficiente.

---

### 2. **Arquitetura Modular**
- A modularização do código facilitou a escalabilidade e a manutenção.
- A integração de **ícones** e **componentes reutilizáveis** foi essencial para criar uma interface responsiva e funcional.

---

### 3. **Tratamento de Erros**
- Implementação de mensagens claras para casos como perfis inexistentes ou páginas não encontradas.
- Garantia de uma experiência do usuário contínua e livre de frustrações.

---

## 🚀 Funcionalidades

- **Busca de perfis do GitHub**: Permite encontrar qualquer usuário público na plataforma.
- **Listagem de repositórios**: Exibe repositórios de um usuário específico.
- **Navegação intuitiva**: Transição suave entre páginas e perfis.
- **Alertas dinâmicos**: Feedback imediato para o usuário em situações de erro ou sucesso.

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, foram reforçadas habilidades cruciais, como:
- Gerenciamento eficiente de múltiplos contextos.
- Desenvolvimento de reducers para lidar com alertas e dados dinâmicos.
- Construção de uma aplicação **escalável e responsiva**.
- Integração com APIs externas e manipulação de dados assíncronos.

---

## 🛠️ Como Executar

1. Clone o repositório:
   `git clone https://github.com/rodrigocvmd/buscador-github.git`

2. Instale as dependências:
   `npm install`

3. Inicie a aplicação:
   `npm start`

4. Acesse a aplicação em 'http://localhost:3000' ou na porta que estiver utilizando.
