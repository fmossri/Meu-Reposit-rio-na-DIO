## TCP/IP, portas, roteadores, switches e modems



## TCP/IP

- Protocolos de comunicação entre computadores em rede
- Transmission Control Protocol
- Internet Protocol
- Modelo de camadas - Física (placa de rede), Rede (IP), Transporte (TCP, UDP), Aplicação (FTP(arquivos), SMTP(e-mail), HTTP(sites))

## TCP x UDP

### UDP

- Rápido
- Menos confiável - sem confirmações de envio/recebimento
- Usado para livestreams e outras conexões de alta velocidade

### TCP

- Voltado à conexão
- Handshake, confirmações entre os dispositivos
- Integridade, dados ordenados
- Aplicativos de mensagens de texto, sites, etc



## Portas

- 20: FTP - arquivos
- 22: SSH - conexão segura entre 2 computadores
- 25: SMTP - e-mails
- 53: DNS - tradutor de nome para IP e vice-versa
- 80: HTTP - requisição simples na internet
- 443: HTTPS - requisição segura



## Rodeadores, Switches e Modems

### Modem

- Modulator-demodulator
- Hardware que converte dados a um formato transmissível

### Roteador

- Distribui a internet para um ou mais dispositivos em uma rede
- Pode fazer a comunicação entre redes
- Faz a transmissão de dados de maneira desordenada, passando todos os dados para todos os dispositivos

### Switch

- Distribui a internet para um ou mais dispositivos em uma rede
- Criado para fazer a transmissão de maneira organizada, distribuindo os dados apenas para quem os requisitou (estado atual dos roteadores)



## Exercício Final - Portas "Default" do GMAIL, MySQL, Apache

- Gmail SMTP port (TLS): 587. Gmail SMTP port (SSL): 465
- MySQL TCP port: 3306
- Apache: default 80, mas podendo escolher entre 1024 - 65535 para testes