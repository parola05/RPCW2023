from bs4 import BeautifulSoup as bs

content = []

with open("arq.xml", "r", encoding="iso-8859-1") as file:
    content = file.readlines()

content = "".join(content)

bs_content = bs(content, features="xml")

registos = bs_content.find_all("ARQELEM")

i = 0
for registo in registos:
    f = open("registosXML/arq" + str(i) + ".xml", "w",encoding="iso-8859-1")
    f.write('<?xml version="1.0" encoding="iso-8859-1"?>\n')
    f.write(registo.prettify())
    f.close()
    i = i + 1