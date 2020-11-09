# API Contract (Assessment)

## Create Assessment

Request :
- Method : POST
- Endpoint : `/api/v1/assessment`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"nama_diagnosis" : "string",
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
		"nama_diagnosis" : "string",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Get Assessment

Request :
- Method : GET
- Endpoint : `/api/v1/assessment/{id_assessment}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"nama_diagnosis" : "string",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Update Assessment

Request :
- Method : PUT
- Endpoint : `/api/v1/assessment/{id_assessment}`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"nama_diagnosis" : "string",
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
		"nama_diagnosis" : "string",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## List Assessment

Request :
- Method : GET
- Endpoint : `/api/v1/assessment`
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
			"nama_diagnosis" : "string",
			"ID_pasien" : integer,
			"created_at" : "date",
			"update_at" : "date"
		},
		{
			"id" : integer,
			"nama_diagnosis" : "string",
			"ID_pasien" : integer,
			"created_at" : "date",
			"update_at" : "date"
		}
	]
}
```

## Delete Assessment
Request :
- Method : DELETE
- Endpoint : `/api/v1/assessment/{id_assessment}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string"
}
```