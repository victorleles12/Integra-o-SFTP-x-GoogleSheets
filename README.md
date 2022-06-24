# cadastra_Integracao_MkCloud_DataStudio
Projeto para integrar o marketing cloud com o google data estúdio

ADDOROVER: Define se a planilha adicionará dados ao final ou sobrescreverá os dados. Valor "add" para adicionar ou "overwrite" para sobrescrever.

CLIENT: Nome do cliente para o qual a aplicação está sendo executada.

CLIENT_EMAIL: Email cadastrado no Google Cloud que é compartilhado (acesso editor) com a planilha na qual a apliacação escreverá.

FILE_NAME: Diretório, arquivo e extensão do arquivo no sftp

HOST: Host do sftp.

LOGGERURL: URL da aplicação de logs.

PERIODICIDADE: Se diário, deve estar vazio; se mensal, deve conter o dia do mês em que a aplicação será executada (obs: se o dia for menor que 10, deve haver um zero à esquerda ex: 09; obs 2: o dia máximo é 28, devido ao mês de fevereiro).

PRIVATE_KEY: Chave de acesso à api do Google.

SENHA: Senha do SFTP.

SHEET_ID: ID do conjunto de planilhas onde a aplicação escreverá.

SHEETS_KEY: ID da aba da planilha onde a aplicação escreverá.

USUARIO: Usuário do sftp.
