## Requirement

Please make sure your machine has met the following requirements before you start:

| Dependency |   Version   |
| ---------- | :---------: |
| Node       | v18.14.0 |
| NPM        | 9.6.7  |

## Getting Started

In the root directory of the project...

1. Install node modules  
    `npm install`.
    `cd client` 
	`npm install --legacy-peer-deps`
	`cd ../`
    `cd server`
	`npm install --legacy-peer-deps`
	
2. Start development 
	`npm start`.

## Next Steps

### Sample Data

Sample data stored in /server/data/sampleData.js.

### Deployment

1. To build the docker file
    `docker build -t my-app .`

2. Run the container
    `docker run -p 3000:3000 my-app`


## File Structure

The front-end is based on [create-react-app](https://github.com/facebook/create-react-app).

The back-end is based on [Express Generator](https://expressjs.com/en/starter/generator.html).

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:5000/.

```
.
├── server/ - Express server that provides API routes and serves front-end
│ ├── data/ - Sample JSON data
│ ├── index.tsx - Adds middleware to the express server  and configures API
│ 
├── client/
| ├── src - React front-end
│ ├── components - React components for each page
│ ├── App.tsx - React routing
│ └── index.jsx - React root component
└── README.md
```

## Additional Documentation

- React - https://reactjs.org/

- Express - https://expressjs.com/
