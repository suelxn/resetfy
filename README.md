# Resetfy

Aplicação desktop desenvolvida para auxiliar usuários de computador na prevenção de doenças ocupacionais relacionadas ao uso prolongado de dispositivos digitais.

O **Resetfy** tem como objetivo incentivar pausas durante a jornada de uso do computador, exibindo lembretes, exercícios guiados e orientações para reduzir riscos de problemas como LER/DORT, síndrome do túnel do carpo e fadiga visual.

---

## 🎯 Objetivo do Projeto

Criar um widget desktop que funcione em segundo plano e auxilie o usuário através de pausas programadas contendo:

- Temporizador configurável;
- Avisos automáticos de pausa;
- Exercícios preventivos guiados;
- Vídeos/animações demonstrativas;
- Controle de duração das pausas.

---

## 🚀 Funcionalidades do MVP

### Temporizador

- Configuração do intervalo entre pausas;
- Configuração da duração da pausa;
- Configuração do tempo de adiamento;
- Contagem automática em segundo plano.

### Pausas guiadas

Durante a pausa o usuário terá acesso a:

- Vídeo ou animação do exercício;
- Instruções de execução;
- Barra de progresso do tempo restante.

### Controle do usuário

O usuário poderá:

- Realizar a pausa;
- Adiar a pausa;
- Pular a pausa;
- Encerrar a aplicação.

---

## 🛠️ Tecnologias utilizadas

### Aplicação Desktop

- Electron

### Interface

- React
- TypeScript
- Vite

### Ferramentas

- Node.js
- npm
- Git
- GitHub
- VS Code

---

## 📂 Estrutura do Projeto

```
resetfy
│
├── electron
│   └── Processos principais da aplicação desktop
│
├── src
│   ├── Componentes React
│   ├── Interfaces
│   └── Lógica da aplicação
│
├── public
│   └── Arquivos públicos
│
├── package.json
└── README.md
```

---

## ⚙️ Como executar o projeto

### Pré-requisitos

Ter instalado:

- Node.js
- npm
- Git

---

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta:

```bash
cd resetfy
```

Instale as dependências:

```bash
npm install
```

---

### Executar em ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação será iniciada em modo desenvolvimento.

---

## 📦 Build da aplicação

Para gerar uma versão de produção:

```bash
npm run build
```

---

## 🔮 Possíveis evoluções futuras

- Sistema de usuários;
- Histórico de pausas realizadas;
- Personalização dos exercícios;
- Banco de dados local;
- Configuração avançada de lembretes;
- Integração com sensores e dispositivos externos.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como MVP acadêmico com foco em experiência do usuário, prevenção de doenças ocupacionais e desenvolvimento de aplicações desktop.

---

## 📄 Licença

Este projeto está sob a licença MIT.