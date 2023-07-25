import json

import requests

resposta = requests.get("http://127.0.0.1:8000/login")
url= "http://127.0.0.1:8000/login"
password = "bolinha"
user = "Lucky"
payload = {

    "username": f"{user}",
    "password": f"{password}"
}
login = requests.post(url, json=payload)
print(login)
