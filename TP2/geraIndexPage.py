pagWeb = """
<!DOCTYPE html>
<html>
    <header>
        <meta charset="iso-8859-1" />
    </header>
    <body>
    <h1>Registos</h1>
"""

from bs4 import BeautifulSoup as bs

content = []

with open("arq.xml", "r", encoding="iso-8859-1") as file:
    content = file.readlines()
content = "".join(content)

bs_content = bs(content, features="xml")

registos = bs_content.find_all("ARQELEM")

i = 0
for registo in registos:
    identiiText = registo.find("IDENTI").text
    pagWeb += f"""<a href="{i}"> {identiiText} </a><br>"""
    i = i + 1

pagWeb +=  """  
    </body>
</html>
"""

f = open("index.html", "w", encoding="iso-8859-1")
f.write(pagWeb)
f.close()