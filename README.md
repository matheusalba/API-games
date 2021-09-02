# Uma api que salva e consulta jogos e seus estúdios num banco mysql.

![Alt text](img/api-games-01.PNG?raw=true)

![Alt text](img/api-games-02.PNG?raw=true)

 * post /studio --- Para salvar um estúdio. 
 * get /studio --- Para consultar todos estúdios salvos.
 * post /games/:id --- Para salvar um jogo em um estúdio, o estúdio é identificado pelo id da requisição.
 * get /games/:id --- Para consultar os jogos de um estúdio, o estúdio é identificado pelo id da requisição.
 * get /games --- Para consultar todos os jogos.

* Obs: Fiz esse projeto para fixar conceitos de migrations, pretendo criar outros exemplos com CRUD completo e querys mais complexas.
