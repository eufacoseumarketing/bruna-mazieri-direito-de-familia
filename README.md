# Bruna Mazieri Advocacia — Landing Page (Direito de Família)

Landing page institucional da **Bruna Mazieri Advocacia** (Direito de Família e Sucessões — Sorocaba/SP). Site desenvolvido/gerido pela EFSM.

## Sobre o projeto

Página única (single-page) com seções em âncora: hero, diferenciais, serviços (divórcio, guarda, pensão, inventário/holding), depoimentos, metodologia de atendimento, sobre a advogada, quebra de objeção, diferenciais em marquee, FAQ, CTA final e rodapé com botão flutuante de WhatsApp. Todos os CTAs e o botão flutuante apontam para o mesmo link do WhatsApp (constante `WA_LINK` em `src/routes/index.tsx`).

**Stack:**
- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (base do template, file-based routing)
- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion (animações de entrada `whileInView`, carrosséis, timeline com scroll)
- Biblioteca de componentes shadcn/radix em `src/components/ui/` (disponível, mas a landing atual é construída majoritariamente com HTML/Tailwind direto)

**Origem:** projeto gerado originalmente pela plataforma **Lovable** (`.lovable/project.json`) e depois customizado manualmente.

**Estrutura relevante:**
```
index.html                # HTML raiz — inclui Meta Pixel e Google Tag Manager
src/routes/index.tsx       # página inteira (hero até footer)
src/routes/privacy.tsx     # política de privacidade
src/routes/__root.tsx      # layout raiz, providers, tratamento de erro/404
src/assets/                # imagens usadas na landing
vite.config.ts             # base path "/direito-familia/", saída em dist/
```

**Tags/scripts ativos no `index.html`:**
- Meta Pixel: `987255377548780`
- Google Tag Manager: `GTM-55WBGPGQ`

> O script do widget **PescaChat** que existia antes no `index.html` foi removido — não está mais em uso.

## Rodando localmente

```bash
npm install
npm run dev
```

O Vite serve o site em `http://localhost:5173/direito-familia/` (o path `/direito-familia/` vem do `base` configurado em `vite.config.ts`, para bater com a pasta de produção).

Ao testar visualmente, lembre-se que várias seções usam animação de entrada (`whileInView` do Framer Motion) — o conteúdo só aparece depois de rolar a página até a seção ficar visível. Isso é comportamento esperado, não é um bug de layout.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` com:
- `dist/index.html`
- `dist/assets/` — JS, CSS e imagens, todos com hash de conteúdo no nome do arquivo (ex.: `main-C866XRtf.js`)

Como os nomes dos arquivos JS/CSS mudam a cada build (hash de conteúdo), arquivos de builds anteriores nunca são sobrescritos por engano — e assets de imagem que não mudaram geram o **mesmo hash**, então não precisam ser reenviados de novo.

## Deploy (produção via FTP)

O site é hospedado em hospedagem compartilhada (cPanel/Hostinger) e publicado via FTP na pasta `direito-familia/` do domínio `brunamazieri.adv.br`. O deploy é manual — não há CI/CD configurado.

**Servidor:** `82.112.246.141`
**Pasta remota:** `direito-familia/`
**Usuário e senha:** não versionados aqui por segurança — solicite ao responsável pelo projeto (guarde em gerenciador de senhas, nunca em texto puro no repositório).

Passos:

1. Gere o build (`npm run build`).
2. Compare `dist/assets/` com o que já está publicado (liste o conteúdo remoto de `assets/` via FTP) — envie **apenas** os arquivos com hash novo (tipicamente `main-*.js` e `main-*.css` quando há mudança de código; imagens só mudam de hash se a própria imagem for alterada).
3. Envie o novo `dist/index.html` **por último**, sobrescrevendo o remoto — é ele quem aponta para os arquivos com hash novo.
4. **Não** delete arquivos antigos automaticamente; deixe os assets órfãos de builds anteriores no servidor (evita quebrar caches de navegador durante a propagação).
5. **Não** mexa no `.htaccess` do servidor — ele não faz parte deste repositório (foi configurado manualmente na hospedagem) e cuida do roteamento da pasta.

Exemplo de upload via `curl` (rode a partir da raiz do projeto, depois do build; substitua `$FTP_USER`/`$FTP_PASS` por variáveis de ambiente, nunca com a senha em texto puro no comando):

```bash
BASE="ftp://82.112.246.141/direito-familia"

# 1. envie os assets com hash novo (ajuste os nomes conforme a saída do build)
curl -sS -u "$FTP_USER:$FTP_PASS" -T dist/assets/main-XXXXX.js  "$BASE/assets/main-XXXXX.js"
curl -sS -u "$FTP_USER:$FTP_PASS" -T dist/assets/main-XXXXX.css "$BASE/assets/main-XXXXX.css"

# 2. por último, sobrescreva o index.html
curl -sS -u "$FTP_USER:$FTP_PASS" -T dist/index.html "$BASE/index.html"
```

Depois do deploy, valide ao vivo:

```bash
curl -s https://brunamazieri.adv.br/direito-familia/ | grep -o 'main-[A-Za-z0-9]*\.\(js\|css\)'
```

Os hashes retornados devem bater com os arquivos que acabaram de ser enviados.
