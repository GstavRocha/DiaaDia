from locust import HttpUser, task,between


class MyUser(HttpUser):
    wait_time = between(1,2)

    @task
    def acessPage(self):
        self.client.get('http://127.0.0.1:8000/')
# locust -f loadTest.py --host=//localhost:8000 para rodar o teste
