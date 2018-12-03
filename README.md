# TechWhen

TechWhen is a thing, what is it? We don't know yet, but it is a thing and this is the front end of that thing.


## Requires
* Docker

## Usage

### Setting the conferencess API URL
Set the conferences URL as an environment variable

```
export CONFERENCES_URL=<CONFERENCES_URL>
```

### Building the application
```
./batect build
```

### Running the tests
```
./batect test
```

### Opening bash in docker container
```
./batect bash
```

### Running the application
```
./batect run
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Deploying the application
Set the AWS credentials as environment variables

```
export aws_access_key_id=<aws_access_key_id>
export aws_secret_access_key=<aws_secret_access_key>
```

```
./batect deploy
```
