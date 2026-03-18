# ProvaDs-18-03-2026
1. Preparando o Ambiente (O Motor)
Primeiro, você precisa ter o Node.js instalado no seu computador. Crie uma pasta exclusiva para o projeto e coloque os quatro arquivos lá dentro (server.js, index.html, style.css e script.js). Abra o terminal (ou CMD) dentro dessa pasta. Como o código utiliza o Express e o CORS para gerenciar as rotas e a segurança, você deve instalar essas dependências digitando o comando npm install express cors. Isso criará uma pasta chamada node_modules, que contém as ferramentas necessárias para o servidor funcionar.

2. Iniciando o Servidor
Com as dependências instaladas, é hora de dar vida ao backend. No terminal, digite node server.js e aperte Enter. Você verá uma mensagem confirmando que o servidor está rodando na porta 3000. Atenção: você não deve fechar essa janela do terminal! Se você fechá-la, o "cérebro" do simulador desliga e o site não terá de onde puxar os números da CPU e da RAM. O servidor ficará ali, em silêncio, esperando o navegador pedir os dados.

3. Executando a Interface (O Visual)
Agora que o motor está ligado, basta abrir o arquivo index.html no seu navegador de preferência (Chrome, Edge ou Firefox). O navegador vai ler o HTML, carregar o estilo visual do CSS e ativar o script.js. O JavaScript, por sua vez, começará a fazer "requisições" automáticas para o seu servidor a cada segundo. Ele pegará os números aleatórios que o Node.js gera e os desenhará nos gráficos do Chart.js.

4. Monitorando e Interpretando
Uma vez aberto, você verá os três quadrados (cards) ganhando vida. Os gráficos de linha começarão a se mover da direita para a esquerda. Se o servidor enviar um número alto (como 85% de CPU), o JavaScript detectará que esse valor ultrapassou o limite de segurança e aplicará automaticamente as classes de CSS que deixam o card vermelho e brilhante. Se você quiser ver os dados brutos que o servidor está enviando, pode acessar http://localhost:3000/api/stats em outra aba do navegador.
