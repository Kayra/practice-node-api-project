# Node/Typescript API Tutorial

This is the code written while following a tutorial for using Node (Express) with Typescript. Thank you to [Dale Nguyen](https://itnext.io/@dalenguyen) for provding the [tutorial](https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf).

This project requires MongoDB and Node, which can be installed with Homebrew on a Mac, and Typescript and Typescript Node, which can be installed with NPM.

### Mac instructions

```bash
# Install homebrew 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update

brew install node
brew install mongodb

brew services start mongodb

npm install -g typescript ts-node
```

## Run the server

To run the server for local development:

```bash
npm run dev
```

The local development server will then be available to use at `http://localhost:3030`

To run the server for production:

```bash
npm run prod
```

## Example requests

### Create contact

```bash
curl --request GET \
  --url http://localhost:3030/contact \
  --header 'content-type: application/json' \
  --data '{
	"firstName": "kayra",
	"lastName": "alat",
	"email": "kayra@test.com",
	"company": "test",
	"phone": 8579560
}'
```

### Get all contacts

```bash
curl --request GET \
  --url http://localhost:3030/contact
```

### Get contact by Id

```bash
curl --request GET \
  --url http://localhost:3030/contact/5bb4d859fe59527afa49b80d
```

### Update contact

```bash
curl --request PUT \
  --url http://localhost:3030/contact/5bb4da84f9d49b7b972e8a05 \
  --header 'content-type: application/json' \
  --data '{
	"phone": 84038947
}'
```

### Delete contact

```bash
curl --request DELETE \
  --url http://localhost:3030/contact/5bb4db375301e57bdae428d9 \
  --header 'content-type: application/json'
```