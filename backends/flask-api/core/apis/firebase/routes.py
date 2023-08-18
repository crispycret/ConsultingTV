import requests
import json

from ..firebase import firebase
from core import Configuration




def update_file(): pass
























@firebase.route('/test', methods=['POST'])
def test_post():

    # Your Firebase Realtime Database URL
    database_url = Configuration.FIREBASE_ENDPOINT


    # Data you want to push
    data = {
        "key1": "value1",
        "key2": "value2"
    }

    # Convert data to JSON
    json_data = json.dumps(data)

    # URL to push data to a specific location in the database
    url = f"{database_url}/test.json"

    # Send a POST request with the JSON data
    response = requests.post(url, data=json_data)

    # Check the response
    if response.status_code == 200:
        print("Data pushed successfully.")
    else:
        print("Error:", response.text)

    print (response.text)    
    return response.status_code



@firebase.route('/test', methods=['GET'])
def test_get():

    # Your Firebase Realtime Database URL
    database_url = Configuration.FIREBASE_ENDPOINT

    # URL to push data to a specific location in the database
    url = f"{database_url}/test1.json"

    # Send a POST request with the JSON data
    response = requests.get(url)

    # Check the response
    if response.status_code == 200:
        print("Data retrieved successfully.")
    else:
        print("Error:", response.text)
        
    print (response.__dict__.keys())
    print (response.text)
    return response.text



@firebase.route('/test', methods=['PUT'])
def test_put():

    # Your Firebase Realtime Database URL
    database_url = Configuration.FIREBASE_ENDPOINT


    # Data you want to push
    data = {
        "key3": "value4",
        "key4": "value3"
    }

    # Convert data to JSON
    json_data = json.dumps(data)

    # URL to push data to a specific location in the database
    url = f"{database_url}/test.json"

    # Send a POST request with the JSON data
    response = requests.put(url, data=json_data)

    # Check the response
    if response.status_code == 200:
        print("Data pushed successfully.")
    else:
        print("Error:", response.text)

    print (response.text)    
    return response.status_code




@firebase.route('/test', methods=['PATCH'])
def test_patch():

    # Your Firebase Realtime Database URL
    database_url = Configuration.FIREBASE_ENDPOINT


    # Data you want to push
    data = {
        "key5": "working",
        "key6": "working"
    }

    # Convert data to JSON
    json_data = json.dumps(data)

    # URL to push data to a specific location in the database
    url = f"{database_url}/test1.json"

    # Send a POST request with the JSON data
    response = requests.patch(url, data=json_data)

    # Check the response
    if response.status_code == 200:
        print("Data pushed successfully.")
    else:
        print("Error:", response.text)

    print (response.text)    
    return response.status_code
