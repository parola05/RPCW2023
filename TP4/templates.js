exports.todoPage = function(tasks, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>ToDo App</title>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-pink">
                    <h1> ToDo App </h1>
                </header>
                
                <div class="w3-container">
                    <div class="w3-row">
                        <div class="w3-col m12 l12">
                            <form class="w3-container" method="POST" action="/">
                                <fieldset>
                                    <legend>Criar task</legend>
                                    <label>Responsável</label>
                                    <input class="w3-input w3-round" type="text" name="quem">
                                    <label>Data limite</label>
                                    <input class="w3-input w3-round" type="date" name="ateQuando">
                                    <label>Descrição</label>
                                    <input class="w3-input w3-round" type="text" name="oQue">
                                </fieldset>
                                <button class="w3-btn w3-purple w3-mb-2" type="submit">Criar</button>
                            </form>
                        </div>
                    </div>
                    <br>
                    <div class="w3-row">
                        <div class="w3-col m6 l6">
                            <h2> Tarefas por realizar </h2>
                                <ul class="w3-ul">
                            `

                        for (var task of tasks){
                            if (task.feito == false){
                                pagHTML += `
                                    <li>
                                    <div class="w3-row">
                                        <h3>Responsável: ${task.quem}</h3>
                                        <h4>Data limite:${task.ateQuando}</h4>
                                        <h5>Descrição: ${task.oQue}</h5>
                                        <div class="w3-row">
                                            <div class="w3-col m6 l6">
                                                <form method="POST" action="/update"> 
                                                    <input class="w3-check" type="checkbox" name="feito">
                                                    <input class="w3-check" type="hidden" name="id" value="${task.id}">
                                                    <input class="w3-input w3-round" type="hidden" name="quem" value=${task.quem}>
                                                    <input class="w3-input w3-round" type="hidden" name="ateQuando" value=${task.ateQuando}>
                                                    <input class="w3-input w3-round" type="hidden" name="oQue" value=${task.oQue}>
                                                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Atualizar</button>
                                                </form>
                                            </div>
                                            <div class="w3-col m6 l6">
                                                <form method="POST" action="/delete"> 
                                                    <input class="w3-check" type="hidden" name="id" value="${task.id}">
                                                    <button class="w3-btn w3-red w3-mb-2" type="submit">Remover</button>
                                                </form>
                                            </div>
                                        </div>
                                    </li> 
                                `
                            }
                        }

                        pagHTML += `
                            </ul>
                        </div>
                        <div class="w3-col m6 l6">
                            <h2> Tarefas realizadas </h2>
                            <ul class="w3-ul">
                            `

                        for (var task of tasks){
                            if (task.feito == true){
                                pagHTML += `
                                    <li>
                                        <h3>Responsável: ${task.quem}</h3>
                                        <h4>Data Limite: ${task.ateQuando}</h4>
                                        <h5>Descrição: ${task.oQue}</h5>   
                                        <div class="w3-row">
                                            <div class="w3-col m6 l6">
                                                <form method="POST" action="/update"> 
                                                    <input class="w3-check" type="checkbox" name="feito" checked>
                                                    <input class="w3-check" type="hidden" name="id" value="${task.id}">
                                                    <input class="w3-input w3-round" type="hidden" name="quem" value=${task.quem}>
                                                    <input class="w3-input w3-round" type="hidden" name="ateQuando" value=${task.ateQuando}>
                                                    <input class="w3-input w3-round" type="hidden" name="oQue" value=${task.oQue}>
                                                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Atualizar</button>
                                                </form>
                                            </div>
                                            <div class="w3-col m6 l6">
                                                <form method="POST" action="/delete"> 
                                                    <input class="w3-check" type="hidden" name="id" value="${task.id}">
                                                    <button class="w3-btn w3-red w3-mb-2" type="submit">Remover</button>
                                                </form>
                                            </div>
                                        </div>
                                    </li> 
                                `
                            }
                        }

                        pagHTML += `
                            </ul>
                        </div>
                    </div>
                </div>
                <footer class="w3-container w3-pink">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `    
    return pagHTML
}