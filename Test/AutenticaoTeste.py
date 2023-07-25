from locust import HttpUser, task, between
class AutenticacaoUser(HttpUser):
    between(1,2)
    @task
    def on_start(self):
        url = "http://127.0.0.1:8000/login"
        password = "bolinha"
        user = "Lucky"
        payload = {

            "username": f"{user}",
            "password": f"{password}"
        }
        response = self.client.post(url, json=payload)
        if response.status_code != 200:
            print("Erro Autenticacao")
            self.environment.runner.quit()
        self.token = response.json()["session_token"]


if __name__ == "__main__":
    import os
    os.system("locust -f AutenticaoTeste.py")