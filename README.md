# Agenda Laboratório de Informática Magnante

PWA para agendamento de aulas no laboratório de informática. Professores cadastram reservas extras (professor, disciplina, turma, data e horário) nos horários livres, e a grade semanal (manhã e tarde) fica sempre fixa automaticamente.

## Funcionalidades

- Grade fixa semanal (segunda a sexta) pré-cadastrada em `js/config.js`, travada e visível automaticamente.
- Esquema quinzenal (2 em 2 semanas): as aulas de Informática com professor + turma (segunda a quarta de manhã) só aparecem na "Semana A". Na "Semana B" esses horários voltam a ficar livres para reservas avulsas. Um selo no painel indica qual semana está sendo exibida.
- Sexta-feira de manhã é fixa como "Pesquisa" (uso livre do laboratório), todas as semanas.
- Cadastro de aulas extras/avulsas: professor, disciplina, turma (opcional), data, horário e observações.
- Detecção de conflito: impede reservar em cima de outra aula avulsa ou de um horário fixo ativo naquela semana.
- Painel semanal de ocupação (manhã / tarde), com navegação entre semanas.
- Clique em um horário livre da grade para pré-preencher o formulário.
- Agenda com as próximas aulas avulsas, busca por professor/disciplina, edição e cancelamento.
- Modo claro/escuro, com preferência salva no dispositivo.
- Instalável como app (PWA) e funciona offline (service worker).

## Estrutura de arquivos

```
agendamento-lab/
├── index.html
├── manifest.json
├── sw.js
├── css/
│   └── style.css
├── js/
│   ├── config.js      # dias da semana e períodos/horários (edite aqui)
│   ├── storage.js      # camada de dados (localStorage, pronta p/ Firebase)
│   └── app.js           # estado, renderização e interações
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-maskable-512.png
    └── apple-touch-icon.png
```

## Armazenamento de dados

Os agendamentos ficam no `localStorage` do navegador (chave `lab_agendamentos_v1`), sem depender de servidor. A camada `js/storage.js` expõe métodos assíncronos (`getAll`, `add`, `update`, `remove`, `encontrarConflito`) — se um dia for necessário migrar para Firebase/Firestore, basta reescrever essas funções; o restante do app não precisa mudar.

## Personalização

Para ajustar os horários das aulas (períodos, turnos ou dias da semana) ou a grade fixa semanal (professores/turmas de cada horário), edite apenas `js/config.js`, no array `horarioFixo`. A grade, o formulário e a agenda se atualizam automaticamente.

Para itens que só acontecem a cada 2 semanas, adicione `periodicidade: "quinzenal"` e `semana: "A"` ao item. A data que define qual semana é "Semana A" fica em `CONFIG.semanaReferenciaA` (atualmente `2026-08-03`) — se a contagem sair do compasso (por exemplo, após um feriado que pulou uma semana), ajuste essa data para a segunda-feira correta.

## Publicando no GitHub Pages

1. Suba esta pasta para um repositório no GitHub.
2. Em **Settings → Pages**, selecione a branch principal e a raiz (`/`) como origem.
3. O app ficará disponível em `https://<usuario>.github.io/<repositorio>/`.
