# 🛍️ Shoppy

E-commerce fictício feito em **React + Vite** para estudar, na prática, o consumo de APIs. Nada de firula: o foco é entender como buscar dados de uma API externa e jogar isso na tela de forma organizada.

---

## 🎯 Objetivo

Aprender o fluxo básico que aparece em praticamente todo app real:

1. **Buscar dados** de uma API (aqui, a [FakeStore API](https://fakestoreapi.com/products)).
2. **Guardar** esses dados em estado.
3. **Renderizar** tudo na interface de um jeito bonito e responsivo.

É um projeto **didático de propósito** — sem carrinho, login, checkout ou tela de detalhes. Só o essencial, bem feito.

---

## 🧠 O que foi feito

### Consumo de API
- **Axios** faz a requisição `GET` para a FakeStore API.
- **`useEffect`** dispara essa busca **uma única vez**, assim que o componente monta (array de dependências vazio `[]`).
- **`useState`** guarda a lista de produtos que volta da API.
- Sem `try/catch` — mantido simples de propósito, pra não desviar o foco do aprendizado.

Todo esse fluxo mora no **`Main.jsx`**:

```jsx
const [products, setProducts] = useState([]);

useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then((res) => {
    setProducts(res.data);
  });
}, []);
```

### Arquitetura
Três componentes, cada um na sua pasta com JSX e CSS separados (zero estilo inline):

```
src/
├── components/
│   ├── Header/   → só o título "Shoppy"
│   ├── Main/     → busca a API + renderiza os cards
│   └── Footer/   → "Todos os direitos reservados."
├── App.jsx       → junta os três componentes
└── App.css       → reset global + base visual
```

### Design & Acessibilidade
- Layout de e-commerce **moderno e limpo**, com cards que ganham um leve *hover*.
- **Totalmente responsivo** via CSS Grid: `repeat(auto-fill, minmax(260px, 1fr))`. As colunas se ajustam sozinhas ao tamanho da tela — desktop, tablet e celular — sem scroll horizontal.
- Imagens com **`alt` descritivo**, essencial pra leitores de tela.

### Documentação no código
Os arquivos têm **comentários explicativos** detalhando o papel dos Hooks, das props e das regras de layout. A ideia é que dê pra reabrir o projeto daqui a seis meses e entender tudo na hora.

---

## 🚀 Como rodar

```bash
# instala as dependências
npm install

# instala o Axios (caso ainda não tenha)
npm install axios

# sobe o servidor de desenvolvimento
npm run dev
```

Abre no navegador o endereço que o Vite mostrar (geralmente `http://localhost:5173`).

---

## 🛠️ Stack

- **React** — biblioteca de UI
- **Vite** — build tool e dev server (rápido pra caramba)
- **Axios** — cliente HTTP
- **CSS puro** — sem framework, pra treinar o fundamento

---

## 💡 Próximos passos (pra evoluir o projeto)

Quando quiser sair do modo "só estudo" e deixar o Shoppy mais parrudo:

- **Loading e erro** — mostrar um *spinner* enquanto a API responde e uma mensagem amigável se algo der errado (aqui entram o `try/catch` e um estado de `loading`).
- **Busca e filtros** — campo de pesquisa e filtro por categoria (a FakeStore já tem `/products/categories`).
- **Skeleton loading** — aqueles cards "fantasma" cinza que aparecem antes dos dados carregarem. Deixa a experiência bem mais profissional.
- **Paginação ou scroll infinito** — em vez de despejar tudo de uma vez.
- **Custom Hook** — extrair a lógica da API pra um `useProducts()` e deixar o `Main` só com a parte visual.
- **Dark mode** — um toggle de tema claro/escuro usando variáveis CSS.
- **Deploy** — publicar de graça na Vercel ou Netlify e ter um link pra mandar pros amigos.
- **TypeScript** — tipar os produtos e pegar erros ainda no editor.

---

## 📄 Licença

Projeto de estudo, livre pra usar, quebrar, remontar e aprender. 🚀