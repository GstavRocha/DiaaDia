from threading import Thread
import requests

url = 'http://127.0.0.1:8000/login'
password = 'password10'
username = 'sophia.hill'
login = {
    'username': username,
    'password': password
}
response = requests.post(url, json=login)
if response.status_code == 200:
    token = response.json()['token']
    headers = {
        'Authorization': f'Bearer {token}'
    }
    print('Login acesso',response.status_code,response.headers)
else:
    print(f'Error o response{response} e o Header{response.headers}')
print(response)
# def apiTest(url):
#     response = requests.get(url)
#     print(response.status_code)
#     threads = []
#     for i in range(10):
#         thread = Thread(target=apiTest, args=[url])
#         threads.append(thread)
#     for thread in threads:
#         thread.start()
#     for thread in threads:
#         thread.join()
#     print('teste Finalizando')
    # esse teste não está funcionando

# 4. Teste de desempenho de API:
# - Configure um grupo de threads para simular um número específico de chamadas simultâneas
# à API.
# - Adicione um Sampler HTTP para fazer solicitações aos endpoints da API.
# - Use o Asserção de Resposta para verificar se os resultados estão corretos.
# - Execute o teste e analise o desempenho, incluindo tempo de resposta, taxa de erro e latência.
