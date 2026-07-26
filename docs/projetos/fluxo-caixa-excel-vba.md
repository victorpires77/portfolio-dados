# Fluxo de Caixa Automatizado em Excel e VBA

Solução desenvolvida para apoiar o controle financeiro pessoal e empresarial,
reunindo lançamentos, indicadores, dashboards e automação em um único arquivo
do Excel.

## Objetivo

Facilitar o registro e o acompanhamento de entradas, saídas, contas pendentes e
saldo disponível, reduzindo atividades manuais na atualização das análises.

## Principais funcionalidades

- controle financeiro pessoal e empresarial;
- cadastro personalizável de categorias, formas de pagamento e status;
- listas suspensas alimentadas pela aba de cadastro;
- acompanhamento de contas a pagar e a receber;
- cálculo da quantidade de dias em aberto;
- cálculo do valor disponível para gasto diário;
- identificação de despesas pendentes;
- dashboards para as visões pessoal e empresarial;
- tabelas dinâmicas, gráficos, filtros e segmentações;
- atualização automática das tabelas dinâmicas ao salvar o arquivo.

## Estrutura da solução

### Cadastro

Centraliza categorias, formas de pagamento, tipos de movimentação e status
utilizados nas demais abas.

### Pessoal

Permite registrar e acompanhar receitas e despesas pessoais, incluindo valor
disponível, despesas pendentes e limite diário estimado.

### Empresa

Organiza contas a pagar e a receber, vencimentos, formas de pagamento, status e
dias em aberto.

### Dashboard Pessoal

Apresenta entradas, saídas, distribuição por categoria, situação das despesas e
evolução mensal.

### Dashboard Empresa

Apresenta o fluxo financeiro empresarial, categorias com maior movimentação,
status dos lançamentos e evolução das entradas e saídas.

## Automação em VBA

O arquivo contém uma rotina executada ao salvar a planilha. A macro atualiza as
tabelas dinâmicas para que os dashboards reflitam os lançamentos mais recentes
sem exigir a atualização manual de cada análise.

## Tecnologias e recursos

- Microsoft Excel
- VBA
- Tabelas do Excel
- Tabelas dinâmicas
- Gráficos
- Segmentações de dados
- Fórmulas e validações

## Arquivos

- [Baixar o modelo em Excel com VBA](../downloads/modelo-fluxo-caixa-excel-vba.xlsm)
- [Abrir o manual de uso](../downloads/manual-fluxo-caixa-excel-vba.pdf)

## Aviso de segurança

O modelo utiliza macros. Antes de habilitá-las, o usuário deve baixar o arquivo
somente de uma fonte confiável e verificar seu conteúdo. O formato `.xlsm` deve
ser mantido para preservar o VBA.

## Observação

O projeto deve ser utilizado com dados fictícios ou com informações próprias do
usuário. Nenhuma informação financeira real foi disponibilizada no portfólio.

