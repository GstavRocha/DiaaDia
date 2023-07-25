from locust import HttpUser, task, between
class StressTestUser(HttpUser):
    between(1,2)
    @task
    def login(self):
        url = "http://127.0.0.1:8000/login"
        password = "bolinha"
        user = "Lucky"
        payload = {

            "username": f"{user}",
            "password": f"{password}"
        }
        response = self.client.post(url, json=payload)
        assert response.status_code ==200
class StressTest(HttpUser):
    wait_time = between(1,2)
    tasks = [StressTestUser]


if __name__ == "__main__":
    import os
    os.system("locust -f StressLocust.py")