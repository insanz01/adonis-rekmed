# API Contract (Objective)

## Create Objective

Request :
- Method : POST
- Endpoint : `/api/v1/objective`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"nadi" : integer,
	"tekanan_darah" : integer,
	"suhu_tubuh" : integer,
	"respiration_rate" : integer,
	"berat_badan" : integer,
	"tinggi_badan" : integer,
	"hasil_pemeriksaan" : "text",
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
		"nadi" : integer,
		"tekanan_darah" : integer,
		"suhu_tubuh" : integer,
		"respiration_rate" : integer,
		"berat_badan" : integer,
		"tinggi_badan" : integer,
		"hasil_pemeriksaan" : "text",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Get Objective

Request :
- Method : GET
- Endpoint : `/api/v1/objective/{id_objective}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string",
	"data" : {
		"id" : integer,
		"nadi" : integer,
		"tekanan_darah" : integer,
		"suhu_tubuh" : integer,
		"respiration_rate" : integer,
		"berat_badan" : integer,
		"tinggi_badan" : integer,
		"hasil_pemeriksaan" : "text",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## Update Objective

Request :
- Method : PUT
- Endpoint : `/api/v1/objective/{id_objective}`
- Header :
	- Content-Type: application/json
	- Accept: application/json
- Body :

```
{
	"nadi" : integer,
	"tekanan_darah" : integer,
	"suhu_tubuh" : integer,
	"respiration_rate" : integer,
	"berat_badan" : integer,
	"tinggi_badan" : integer,
	"hasil_pemeriksaan" : "text",
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
		"nadi" : integer,
		"tekanan_darah" : integer,
		"suhu_tubuh" : integer,
		"respiration_rate" : integer,
		"berat_badan" : integer,
		"tinggi_badan" : integer,
		"hasil_pemeriksaan" : "text",
		"ID_pasien" : integer,
		"created_at" : "date",
		"update_at" : "date"
	}
}
```

## List Objective

Request :
- Method : GET
- Endpoint : `/api/v1/objective`
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
			"nadi" : integer,
			"tekanan_darah" : integer,
			"suhu_tubuh" : integer,
			"respiration_rate" : integer,
			"berat_badan" : integer,
			"tinggi_badan" : integer,
			"hasil_pemeriksaan" : "text",
			"ID_pasien" : integer,
			"created_at" : "date",
			"update_at" : "date"
		},
		{
			"id" : integer,
			"nadi" : integer,
			"tekanan_darah" : integer,
			"suhu_tubuh" : integer,
			"respiration_rate" : integer,
			"berat_badan" : integer,
			"tinggi_badan" : integer,
			"hasil_pemeriksaan" : "text",
			"ID_pasien" : integer,
			"created_at" : "date",
			"update_at" : "date"
		}
	]
}
```

## Delete Objective
Request :
- Method : DELETE
- Endpoint : `/api/v1/objective/{id_objective}`
- Header :
	- Accept: application/json

- Response :
```
{
	"code" : number,
	"status" : "string"
}
```