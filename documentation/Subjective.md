# API Contract (Subjective)

## Create Subjective

Request :
- Method : POST
- Endpoint : `/api/v1/subjective`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"nama" : "string",
	"ID_pasien" : integer
}
```

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"nama" : "string",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Get Subjective

Request :
- Method : GET
- Endpoint : `/api/v1/subjective/{id_subjective}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"nama" : "string",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Update Subjective

Request :
- Method : PUT
- Endpoint : `/api/v1/subjective/{id_subjective}`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"nama" : "string",
	"ID_pasien" : integer
}
```

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"nama" : "string",
		"ID_pasien": integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## List Subjective

Request :
- Method : GET
- Endpoint : `/api/v1/subjective`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Query Param :
	- size : number
	- page : number

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : [
		{
			"id" : integer,
			"nama" : "string",
			"ID_pasien": integer,
			"created_at": "date",
			"update_at": "date"
		},
		{
			"id" : integer,
			"nama" : "string",
			"ID_pasien": integer,
			"created_at" : "date",
			"update_at" : "date"
		}
	]
}
```

## Delete Subjective
Request :
- Method : DELETE
- Endpoint : `/api/v1/subjective/{id_subjective}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string"
}
```