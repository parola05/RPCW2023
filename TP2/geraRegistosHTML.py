from bs4 import BeautifulSoup as bs

content = []

with open("arq.xml", "r", encoding="utf-8") as file:
    content = file.readlines()

content = "".join(content)

bs_content = bs(content, features="xml")

registos = bs_content.find_all("ARQELEM")

i = 0
# Para cada registo, criar a string HTML
for registo in registos:

    pagWeb = """<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
    </head>
    <body>
        <div style="width:100%;display:flex;flex-direction:column;align-items:center;margin:auto">
            <div style="width:100%;background-color:#232323;display:flex;flex-direction:column;align-items:center;margin:auto">
"""

    # IDENTI
    identii = registo.find("IDENTI")
    if identii:
        pagWeb += f"""
        <h1 style="color:white">{identii.text}</h1>\n
"""

    # DESCRI
    descri = registo.find("DESCRI")
    if identii:
        pagWeb += f"""
        <h2 style="color:white">{descri.text}</h2>
    </div>
    <div style="background-color:#3D3D3D;display:flex;flex-direction:column;align-items:center;margin:auto;padding:50px;">
"""

    # CRONO
    crono = registo.find("CRONO")
    if crono:
        pagWeb += f"""
        <h4 style="color:white">Cronologia: {crono.text}</h4>\n
"""

    pagWeb += f"""<h3 style="color:#067BFF">Dados Geográficos</h3><br>
<table border='1'>
    <tr><th style="color:#A7A7A7">Lugar</th><th style="color:#A7A7A7">Freguesia</th><th style="color:#A7A7A7">Concelho</th><th style="color:#A7A7A7">Código de Administração</th><th style="color:#A7A7A7">Latitude</th><th style="color:#A7A7A7">Logitude</th><th style="color:#A7A7A7">Altitude</th></tr>
    <tr><td style="color:white"> 
"""

    # LUGAR
    lugar = registo.find("LUGAR")
    if lugar:
        pagWeb += f"""{lugar.text}</td>\n"""
    else:
        pagWeb += f"""SEM INFORMAÇÂO</td>\n"""

    # FREGUE
    fregue = registo.find("FREGUE")
    if fregue:
        pagWeb += f"""<td style="color:white">{fregue.text}</td>\n"""
    else:
        pagWeb += f"""<td style="color:white">SEM INFORMAÇÂO</td>\n"""

    # CONCEL
    concel = registo.find("CONCEL")
    if concel:
        pagWeb += f"""<td style="color:white">{concel.text}</td>\n"""
    else:
        pagWeb += f"""<td style="color:white">SEM INFORMAÇÃO</td>\n"""

    # CODADM
    codadm = registo.find("CODADM")
    if codadm:
        pagWeb += f"""<td style="color:white">{codadm.text}</td>\n"""
    else:
        pagWeb += f"""<td style="color:white">SEM INFORMAÇÂO</td>\n"""

    # LATITU
    latitu = registo.find("LATITU")
    if latitu:
        pagWeb += f"""<td style="color:white">{latitu.text}</td>\n"""
    else:
        pagWeb += f"""<td style="color:white">SEM INFORMAÇÂO</td>\n"""

    # LONGIT
    longit = registo.find("LONGIT")
    if longit:
        pagWeb += f"""<td style="color:white">{longit.text}</td>\n"""
    else:
        pagWeb += f"""<td style="color:white">SEM INFORMAÇÂO</td>\n"""

    # ALTITU
    altitu = registo.find("ALTITU")
    if altitu:
        pagWeb += f"""<td style="color:white">{altitu.text}</td></table>\n"""
    else:
        pagWeb += f"""<td style="color:white">SEM INFORMAÇÂO</td></tr></table>\n"""

    # QUADRO
    quadro = registo.find("QUADRO")
    if quadro:
        pagWeb += f"""<p style="color:white">{quadro.text}</p>\n"""

    pagWeb += f"""<h3 style="color:#067BFF">Acesso</h3>"""

    # ACESSO
    acesso = registo.find("ACESSO")
    if acesso:
        pagWeb += f"""<p style="color:white">{acesso.text}</p>\n"""
    else:
        pagWeb += f"""<p style="color:white">SEM INFORMAÇÂO</p>\n"""

    pagWeb += f"""<h3 style="color:#067BFF">Resultados de pesquisas e escavações arqueológicas realizadas no sítio</h3>"""

    # DESARQ
    desarq = registo.find("DESARQ")
    if desarq:
        pagWeb += f"""<p style="color:white">{desarq.text}</p>\n"""
    else:
        pagWeb += f"""<p style="color:white">SEM INFORMAÇÂO</p>\n"""

    pagWeb += f"""<h3 style="color:#067BFF">Local onde o material arqueológico recolhido foi depositado</h3>"""

    # DEPOSI
    deposi = registo.find("DEPOSI")
    if deposi:
        pagWeb += f"""<p style="color:white">{deposi.text}</p>\n"""

    pagWeb += f"""<h3 style="color:#067BFF">Interpretação do sítio arqueológico</h3>"""

    # INTERP
    interp = registo.find("INTERP")
    if interp:
        pagWeb += f"""<p style="color:white">{interp.text}</p>\n"""

    pagWeb += f"""<h3 style="color:#067BFF">Referências bibliográficas</h3>
    <ul>
    """

    # BIBLIOGRAFIAS
    biblios = registo.find_all("BIBLIO")

    for biblio in biblios:
        pagWeb += f"""<li style="color:white">{biblio.text}</li>\n"""

    pagWeb += """</ol>
            </div>
        </div>
    </body>
</html>
"""

    f = open("registosHTML/arq" + str(i) + ".html", "w",encoding="utf-8")
    f.write(pagWeb)
    f.close()
    i = i + 1