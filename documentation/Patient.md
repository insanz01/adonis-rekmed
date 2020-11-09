# API Contract (Patient)

## Create Patient

Request :
- Method : POST
- Endpoint : `/api/v1/patient`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"NIK" : "string|unique",
	"nama" : "string",
	"jenis_kelamin" : "string",
	"tanggal_lahir" : "date",
	"no_telp" : "string",
	"alamat" : "text"
}
```

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"NIK" : "string|unique",
		"nama": "string",
		"jenis_kelamin" : "string",
		"tanggal_lahir" : "date",
		"no_telp" : "string",
		"alamat" : "text",
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Get Patient

Request :
- Method : GET
- Endpoint : `/api/v1/patient/{id_patient}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"NIK" : "string|unique",
		"nama" : "string",
		"jenis_kelamin" : "string",
		"tanggal_lahir" : "date",
		"no_telp" : "string",
		"alamat" : "text",
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Update Patient

Request :
- Method : PUT
- Endpoint : `/api/v1/patient/{id_patient}`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"NIK" : "string|unique",
	"nama" : "string",
	"jenis_kelamin" : "string",
	"tanggal_lahir" : "date",
	"no_telp" : "string",
	"alamat" : "text"
}
```

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"NIK" : "string|unique",
		"nama" : "string",
		"jenis_kelamin" : "string",
		"tanggal_lahir" : "date",
		"no_telp" : "string",
		"alamat" : "text",
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## List Patients

Request :
- Method : GET
- Endpoint : `/api/v1/patient`
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
			"NIK" : "string|unique",
			"nama" : "string",
			"jenis_kelamin" : "string",
			"tanggal_lahir" : "date",
			"no_telp" : "string",
			"alamat" : "text",
			"created_at" : "date",
			"update_at" : "date"
		},
		{
			"id" : integer,
			"NIK" : "string|unique",
			"nama" : "string",
			"jenis_kelamin" : "string",
			"tanggal_lahir" : "date",
			"no_telp" : "string",
			"alamat" : "text",
			"created_at" : "date",
			"update_at" : "date"
		}
	]
}
```

## Delete Patient
Request :
- Method : DELETE
- Endpoint : `/api/v1/patient/{id_patient}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string"
}
```