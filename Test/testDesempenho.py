import threading
import unittest
import requests


class LoadTest(unittest.TestCase):
    def testLogin(self):
        users = 200

        def loginRequest():
            url = 'http://127.0.0.1:8000/login'
            payload = {
                'username': 'Lucky',
                'password': 'bolinha'
            }
            response = requests.post(url, json=payload)
            self.assertEqual(response.status_code, 200)
        threads = []
        for _ in range(users):
            thread = threading.Thread(target=loginRequest)
            threads.append(thread)
        for thread in threads:
            thread.start()
        for thread in threads:
            thread.join()
if __name__ == "__main__":
    unittest.main()
