# DS Container Manchete Destaques Home

Componente responsável pela exibição e edição do bloco de manchete e destaques da home do O Globo.

O projeto é dividido em dois módulos com responsabilidades distintas: o **pagesComponent**, usado no admin do Pages para edição de conteúdo, e o **delivery**, responsável pela renderização via SSR com Module Federation.

---

## pagesComponent

Interface de edição do componente utilizada no admin do [Pages (CMA)](http://docs.backstage.globoi.com/pages/). Permite configurar os layouts de manchete e destaques, incluindo campos de imagem, título, chapéu e links.

Documentação completa: [pagesComponent/ds-container-manchete-destaques-home/README.md](pagesComponent/ds-container-manchete-destaques-home/README.md)

---

## delivery

Componente de renderização com suporte a **Server Side Render (SSR)** e **Module Federation**. Consome os dados configurados no pagesComponent e os exibe na home.

Documentação completa: [delivery/components/ds-container-manchete-destaques-home/README.md](delivery/components/ds-container-manchete-destaques-home/README.md)

---

## Highlight

O componente `Highlight`, importado de `backstage-pages`, é a peça central de edição de cada bloco de conteúdo (manchete ou destaque) dentro dos layouts do pagesComponent. Ele expõe props para controle de visibilidade dos campos e para configuração de comportamento como proporção de imagem, tenant e validações por campo.

Documentação de referência: [pagesComponent/ds-container-manchete-destaques-home/Highlight.md](pagesComponent/ds-container-manchete-destaques-home/Highlight.md)
