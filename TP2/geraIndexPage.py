pagWeb = """
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
    </head>
    <body>
        <div style="width:100%;display:flex;flex-direction:column;align-items:center;margin:auto">
            <div style="width:100%;background-color:#232323;display:flex;flex-direction:column;align-items:center;margin:auto">
                <h1 style="color:white">Registos</h1>
            </div>
            <div style="width:100%;box-sizing:border-box;background-color:#3D3D3D;display:flex;flex-direction:column;align-items:center;margin:auto;padding:50px;">
                <table>
                    <tr><th style="color:#A7A7A7">XML</th><th style="color:#A7A7A7">HTML</th><tr>

"""

from bs4 import BeautifulSoup as bs

content = []

with open("arq.xml", "r", encoding="utf-8") as file:
    content = file.readlines()
content = "".join(content)

bs_content = bs(content, features="xml")

registos = bs_content.find_all("ARQELEM")

def ordRegistos(registo):
    return registo.find("IDENTI").text

registos.sort(key=ordRegistos)

i = 0
for registo in registos:
    identiiText = registo.find("IDENTI").text
    pagWeb += f"""<tr><td><a style="text-decoration:none; color:#067BFF" href="xml/{i}"> {identiiText} </a> </td> <td> <a style="text-decoration:none;color:#067BFF" href="html/{i}"> {identiiText} </a> </td></tr>"""
    i = i + 1

pagWeb +=  """ </table>
            </div>  
        </div>
    </body>
</html>
"""

f = open("index.html", "w", encoding="utf-8")
f.write(pagWeb)
f.close()