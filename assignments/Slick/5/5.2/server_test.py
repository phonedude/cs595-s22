import requests
headers = {'X': 'passval'}
x = requests.get('http://127.0.0.1:9999',headers=headers)

print(x.headers)