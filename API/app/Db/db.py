import mysql.connector
from dotenv import load_dotenv
from mysql.connector import  errorcode
import os

load_dotenv()

user = os.getenv('DB_USER')
password = os.getenv('DB_PASSWORD')
host = os.getenv('DB_HOST')
database = os.getenv('db_data')
port = os.getenv('BD_PORT')

try:
    conn = mysql.connector.connect(user=user,
                                   password=password,
                                   host=host,
                                   database=database,
                                   port=port)
    print("Conectado com o DB")
    cursor = conn.cursor()
    conn.close()
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Erro: Acesso negado -> verifique crendenciais de acesso")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Erro: banco de dados não existe")
    else:
        print("Erro ao conectar o bando de dados", err)