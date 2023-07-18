import secrets
import string

def genereateKey(length=36):
    alphakey = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphakey) for _ in range(length))

APIKEY = genereateKey()