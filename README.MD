# GameBackend

A project made with, NodeJS, Express, MySQL, Chai and Mocha. By Daniel Antonio Tala de Dompierre de Chaufepie (Talaman.info).
The project is supposed to be an API for a game, to save its players, states and friends highscore. 

### Prerequisites

To run and try the project, you should have the following requirements:
* NodeJS and npm.
* A web browser.
* Postman, to try the API directly.
* A MySQL provider.

### Installing

To have the project installed and running on your computer, you should do the next steps: 
1. clone or download the repository, extract/save it in your preferred folder for NodeJS projects.   
2. Locate the folder of the project on the terminal, and run npm install to download dependencies.
```
npm install
```
3. Configure your preferred MySQL engine and database in the file "./dbconnection.js". You can find a script with the tables in "./models/dbscript.sql". Please, check the connection to the database is working correctly, and the configuration set in dbconnection.js as well.
4. Test the application with Mocha to assert the integration is correct.
```
npm test
```
5. Run the application, if the connection to the database is ok, the API should start with the following command.
```
npm start
```

If all goes well, the API should be listening on port 8000.


## Running the tests

To run BDD automation tests, use the following command when you are located in the project's folder:
```
npm test
```

If all is correctly integrated, it should show a message like this:
```
  Tests
POST /user 200 39.862 ms - 66
POST /user 200 4.324 ms - 66
GET /user 200 3.486 ms - 1217
    √ should list ALL users on /user GET
GET /user/e7c1e6fc-149c-45d3-94f0-2b5d4ce223e6 200 1.943 ms - 78
    √ should list a SINGLE user on /user/<id> GET
PUT /user/e7c1e6fc-149c-45d3-94f0-2b5d4ce223e6/state 200 3.357 ms - 32
    √ should add a SINGLE state on /user/<userid>/state PUT
GET /user/e7c1e6fc-149c-45d3-94f0-2b5d4ce223e6/state 200 1.369 ms - 32
    √ should get a SINGLE and LAST state on /user/<userid>/state GET
PUT /user/e7c1e6fc-149c-45d3-94f0-2b5d4ce223e6/friends 200 1.916 ms - 14
    √ should add a SINGLE friend on /user/<userid>/friends PUT
GET /user/e7c1e6fc-149c-45d3-94f0-2b5d4ce223e6/friends 200 1.681 ms - 97
    √ should get all user friends on /user/<userid>/friends GET
POST /user/clean 200 2.333 ms - 4


  6 passing (145ms)
```



## API

POST /user
```
REQUEST EXAMPLE:
{
    "name": "TalamanX"
}
RESPONSE EXAMPLE:
{
    "id": "08036f04-9fda-429a-a00d-b41d109c6ccc",
    "name": "TalamanX"
}
```

GET /user
```
RESPONSE EXAMPLE:
{
    "users": [
        {
            "id": "c3901c85-f94e-4d34-80f3-767a07fb331a",
            "name": "TestTalaman"
        },
        {
            "id": "10a38fb9-560d-4a3e-9ca6-4c16f369d4e5",
            "name": "OtherTest"
        }
    ]
}
```

GET /user/<id>
```
RESPONSE EXAMPLE:
{
    "id": "c3901c85-f94e-4d34-80f3-767a07fb331a",
    "name": "TestTalaman"
}
```

PUT /user/<id>/state
```
REQUEST EXAMPLE:
{
	"gamesPlayed": 654,
    "score": 3422332
}
```

GET /user/<id>/state
```
RESPONSE EXAMPLE:
{
    "gamesPlayed": 654,
    "score": 3422332
}
```

PUT /user/<id>/friends
```
REQUEST EXAMPLE:
{
    "friends": [ "c3901c85-f94e-4d34-80f3-767a07fb331a",
			"10a38fb9-560d-4a3e-9ca6-4c16f369d4e5"]
}
RESPONSE EXAMPLE:
{
    "friends": [
        {
            "id": "10a38fb9-560d-4a3e-9ca6-4c16f369d4e5",
            "name": "Testab6eyKP",
            "highscore": 950
        },
        {
            "id": "c3901c85-f94e-4d34-80f3-767a07fb331a",
            "name": "TestTalaman",
            "highscore": 3422332
        }
    ]
}
```

GET /user/<id>/friends
```
RESPONSE EXAMPLE:
{
    "friends": [
        {
            "id": "10a38fb9-560d-4a3e-9ca6-4c16f369d4e5",
            "name": "Testab6eyKP",
            "highscore": 950
        },
        {
            "id": "c3901c85-f94e-4d34-80f3-767a07fb331a",
            "name": "TestTalaman",
            "highscore": 3422332
        }
    ]
}
```

POST /user/clean
```
REQUEST EXAMPLE:
[
 "10a38fb9-560d-4a3e-9ca6-4c16f369d4e5",
 "d27792de-fc62-464b-b315-4fdcb36a3dc8"
]
RESPONSE EXAMPLE:
"Ok"
```

## Built With
* NodeJS
* Express
* MySQL
* Chai and Mocha

## Author

* **Daniel Antonio Tala de Dompierre de Chaufepie** 
Talaman.info

