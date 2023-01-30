# Introduction

This is a simple API that accepts an integer number as an input and returns a properly formatted JSON response based on the following conditions:

- If the integer is a multiple of 3, it should return "G".
- If the integer is a multiple of 5, it should return "N".
- If the integer is a multiple of both 3 and 5, then both "GN" should be displayed.
- Otherwise, the provided integer should be returned.

## Installation

```bash
npm install
```

## Running the app
```bash
npm start
```

## Testing
```bash
npm test
```

# Structure
The app is structured into different layers:

- Route: responsible for receiving HTTP requests and handling them by calling the appropriate Controller.
- Controller: responsible for handling incoming requests and returning the appropriate response.
- Service: responsible for the business logic of the API.
- Validator: responsible for validating incoming requests.
- Response Handler: responsible for handling HTTP response codes.

# Technology Stack
- NodeJS
- Jest

# Author
Oleksandr Rudnychenko