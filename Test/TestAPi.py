from locust import HttpUser, task, between

class ApiDesempenho(HttpUser):
    wait_time = between(1,2)

    @task
    def api_end_point(self):
        endpoints = [
            "http://127.0.0.1:8000/"
                    ]
        for endpoint in endpoints:
            resposta = self.client.get(endpoint)
            assert resposta.status_code == 200, f"Erro na solicitação {endpoint}"

if __name__ =="__main__":
    import os
    os.system("locust -f TestApi.py")

#  para testar  linha de comando: locust -f TestAPi.py --host=//localhost:8089
