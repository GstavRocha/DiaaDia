import  threading
import unittest
import requests

class TesteStress(unittest.TestCase):
    def test_stress(self):
        users = 10

        def Login_Stress():
            urlSimples = 'http://127.0.0.1:8000/'
            urlLogin = 'http://127.0.0.1:8000/login'
            payload = {
                "username": "Lucky",
                "password": "bolinha"
            }
            respondeSimles = requests.api.get(urlSimples)
            responseLogin = requests.post(urlLogin, json=payload)
            self.assertEqual(responseLogin.status_code, 200)
            self.assertEqual(respondeSimles.status_code, 200)

        threads = []
        for _ in range(users):
            thread = threading.Thread(target=Login_Stress)
            threads.append(thread)
        for thread in threads:
            thread.start()
        for thread in threads:
            thread.join()

if __name__ == "__main__":
    unittest.main()