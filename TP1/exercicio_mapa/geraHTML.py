import json

def ordCidade(c):
    return c['nome']

f = open("mapa.json","r", encoding="utf-8")
data = json.load(f)
cidades = data['cidades']
cidades.sort(key=ordCidade)

pagWeb = """
<!DOCTYPE html>
<html>
    <head>
        <title>Mapa Virtual</title>
        <meta charset="utf-8">
    </head>
    <body>
       <h1>Mapa Virtual</h1>
       <table>
            <tr>
                <td width="30%" valign="top">
                    <h3>Índice</h3>
                    <a name="indice"></a>
                    <!-- Lista com o Índice -->
                    <ul>
"""

for c in cidades:
    pagWeb += f"""
        <li>
            <a href="#{c['id']}">{c['nome']}</a>
        </li>
    """

pagWeb += """
</ul>  
                </td>
                <td width="70%">
"""

for c in cidades:
    pagWeb += f"""
                    <a name="{c['id']}"></a>
                    <h3>{c['nome']}</h3>
                    <p><b>população:</b>{c['população']}</p>
                    <p><b>descrição:</b>{c['descrição']}</p>
                    <p><b>distrito:</b>{c['distrito']}</p>
    """
    for l in data['ligações']:
        # procurar referência da cidade nas entradas das ligações que tenham tal cidade como origem
        if c['id'] == l['origem']:
            # procurar o nome da cidade que a ligação encontrada tem como destino
            for destino in cidades:
                if destino['id'] == l['destino']: 
                    # print("destino encontrado", destino['id'],l['distância'])
                    pagWeb += f"""
                        <a href="#{destino['id']}" style="text-decoration:none">{destino['nome']}: {l['distância']}</a>
                        <br>
                    """
    pagWeb += """
        <br>
        <address>[<a href="#indice">Voltar ao índice<a>] </address>
        <center><hr width="80%"></center>
    """
    
pagWeb += """           
                 </td>
            </tr>
       </table> 
    </body>
</html>                       
"""

f = open("mapa.html", "w")
f.write(pagWeb)
f.close()