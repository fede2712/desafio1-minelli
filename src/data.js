
const productos = [{
    
    "id": "1", "nombre": "ARGENTINA", "img": 'https://drive.google.com/uc?id=1LUZZoaxuo6whcYmv9WndE-0RkwJEaHyx', "descripcion": "ARGENTINA '11-13", "stock": "10", "precio" :"10000", "categoria": "sudamerica"}, 

{ "id": "2", "nombre": "CAMERÚN", "img": 'https://drive.google.com/uc?id=1bkY0JCjDZtQp9J7O8SHCyTb_vRpZp-cc',"descripcion": "CAMERÚN '08-09", "stock": "15", "precio" :"9000", "categoria": "africa"}, 

{ "id": "3", "nombre": "BRASIL", "img": 'https://drive.google.com/uc?id=1f-Zv-Y-8R8Vtr80J0NClgVGzatJ6qEaR', "descripcion": "BRASIL '91-93", "stock": "14", "precio" :"2500", "categoria": "sudamerica"}, 

{ "id": "4", "nombre": "CHILE", "img": 'https://drive.google.com/uc?id=1FexpvVoYhTX3WkY9NFcCiffBji7CuNnj', "descripcion": "CHILE '14-15", "stock": "12", "precio" :"3000", "categoria": "sudamerica"}, 

{ "id": "5",  "nombre": "COLOMBIA", "img": 'https://drive.google.com/uc?id=1yqJB9vTXH4vO23fBQRLDh_urrUlIrNr9', "descripcion": "COLOMBIA '05", "stock": "11", "precio" :"1300", "categoria": "sudamerica"},

{ "id": "6",  "nombre": "ECUADOR", "img": 'https://drive.google.com/uc?id=1Kfy7TxMzLN2DIBRDP9tzIzlTz-CkXypi', "descripcion": "ECUADOR '96-97", "stock": "10", "precio" :"4500", "categoria": "sudamerica"},

{ "id": "7",  "nombre": "PARAGUAY ", "img": 'https://drive.google.com/uc?id=1UdcSEYAFzgO7B-lWOmkQ4Pg3oxddQiQG', "descripcion": "PARAGUAY '15", "stock": "20", "precio" :"7000", "categoria": "sudamerica"},

{ "id": "8",  "nombre": "PERU", "img": 'https://drive.google.com/uc?id=1SjzTN1xR7Xuq5EOPGVJx3GAQAnYJVwTM', "descripcion": "PERÚ '06", "stock": "32", "precio" :"3500", "categoria": "sudamerica"},

{ "id": "9",  "nombre": "URUGUAY", "img": 'https://drive.google.com/uc?id=1fRLHLO1SS_rjhbxHQWEvPGRV_nG2JD7f', "descripcion": "URUGUAY '21", "stock": "32", "precio" :"3250", "categoria": "sudamerica"},

{ "id": "10",  "nombre": "VENEZUELA", "img": 'https://drive.google.com/uc?id=1_9xm0eskSyj9SOcQXxd3xZ0mLgkCXsZR', "descripcion": "VENEZUELA '17", "stock": "10", "precio" :"4000", "categoria": "sudamerica"},

{ "id": "11",  "nombre": "BELGICA", "img": 'https://drive.google.com/uc?id=16m6L3rf6Ux1O7B86j2xiqyrOYIggy8Vn', "descripcion": "BÉLGICA '17", "stock": "5", "precio" :"6530", "categoria": "europa"},

{ "id": "12",  "nombre": "ESPAÑA", "img": 'https://drive.google.com/uc?id=1-5pWs4y_2itbiF_8jHtGwYCVR-_sc-rh', "descripcion": "ESPAÑA '15", "stock": "42", "precio" :"4150", "categoria": "europa"},

{ "id": "13",  "nombre": "NORUEGA", "img": 'https://drive.google.com/uc?id=1jyni2mTzbpQDcgxwporxUmWHTyEbbU-Q', "descripcion": "NORUEGA '18", "stock": "55", "precio" :"8300", "categoria": "europa"},

{ "id": "14",  "nombre": "CROACIA", "img": 'https://drive.google.com/uc?id=1M3gecqwG5l7fK_Ou6i9RdtCEWROTMCG_', "descripcion": "CROACIA '16", "stock": "21", "precio" :"2300", "categoria": "europa"},

{ "id": "15",  "nombre": "SUDÁFRICA", "img": 'https://drive.google.com/uc?id=1zdcINpJhz2cEk-mfNQLf_vrSU1uufc7R', "descripcion": "SUDÁFRICA '02-04", "stock": "32", "precio" :"15000", "categoria": "africa"},

{ "id": "16",  "nombre": "JAPÓN", "img": 'https://drive.google.com/uc?id=1TdvdP4ojKciy-RWJfpElbrmY8DNHYmzG', "descripcion": "JAPÓN '03-04", "stock": "33", "precio" :"7500", "categoria": "asia"},

{ "id": "17",  "nombre": "ESTADOS UNIDOS", "img": 'https://drive.google.com/uc?id=1ZCC54-hngmzu5YuwMUafH-nqR4sRhi__', "descripcion": "ESTADOS UNIDOS '16-17", "stock": "13", "precio" :"3500", "categoria": "norteamerica"},

{ "id": "18",  "nombre": "JAMAICA", "img": 'https://drive.google.com/uc?id=1ori2n74e_JLPM7a_-7QYbzcD9H5BuD9V', "descripcion": "JAMAICA '18-19", "stock": "12", "precio" :"20000", "categoria": "centroamerica"},

{ "id": "19",  "nombre": "PAÍSES BAJOS", "img": 'https://drive.google.com/uc?id=132l1tGBlKiWMVg5rpQbcC47RucheSOZy', "descripcion": "PAISES BAJOS '90", "stock": "5", "precio" :"1500", "categoria": "europa"},

{ "id": "20",  "nombre": "VANUATÚ", "img": 'https://drive.google.com/uc?id=16OqeCqtP2J74YwTTzU9BBPSPSV6y1tSh', "descripcion": "VANUATU '13-15", "stock": "10", "precio" :"4500", "categoria": "oceania"},

{ "id": "21",  "nombre": "COREA DEL SUR", "img": 'https://drive.google.com/uc?id=1v4Pm8xa2B6bGC6z62kacnLk4l3CzySlQ', "descripcion": "COREA DEL SUR '98-01", "stock": "25", "precio" :"10000", "categoria": "asia"},

{ "id": "22",  "nombre": "QATAR", "img": 'https://drive.google.com/uc?id=12kC3zmclYjlp03P5iGbxSMPKwoEEYU9p', "descripcion": "QATAR '16-17", "stock": "3", "precio" :"10000", "categoria": "asia"},

{ "id": "23",  "nombre": "GABÓN", "img": 'https://drive.google.com/uc?id=1KNgc0pGey2codg_pmHdHDso3Qw_aVJe8', "descripcion": "GABÓN '21-22", "stock": "4", "precio" :"2500", "categoria": "africa"},

{ "id": "24",  "nombre": "MARRUECOS", "img": 'https://drive.google.com/uc?id=1WBnYJ6u_36sPgV7qkHUPaXsfRHAsXVOF', "descripcion": "MARRUECOS '06-07", "stock": "5", "precio" :"3000", "categoria": "africa"},

{ "id": "25",  "nombre": "ITALIA", "img": 'https://drive.google.com/uc?id=1moUn_Rq0h6Crg5Qbky1SFFFuIRFcnj2-', "descripcion": "ITALIA '07-08", "stock": "3", "precio" :"14500", "categoria": "europa"},

{ "id": "26",  "nombre": "EGIPTO", "img": 'https://drive.google.com/uc?id=1T9F3JN3HIz5L6LhP0XujFrN-7WGt_b8K', "descripcion": "EGIPTO '18-19", "stock": "10", "precio" :"4500", "categoria": "africa"},

{ "id": "27",  "nombre": "AUSTRALIA", "img": 'https://drive.google.com/uc?id=1mZu446YwHNqVaoayc5MwiLT_ftc_E4ZQ', "descripcion": "AUSTRALIA '96", "stock": "3", "precio" :"17000", "categoria": "oceania"},

{ "id": "28",  "nombre": "MÉXICO", "img": 'https://drive.google.com/uc?id=1D_Kdt5FGsNWdCm5uJzJVce1hVTCU-nIt', "descripcion": "MÉXICO '16-17", "stock": "30", "precio" :"2750", "categoria": "norteamerica"},

{ "id": "29",  "nombre": "CANADÁ", "img": 'https://drive.google.com/uc?id=12WxD_SxygYoTeoTpnBkwNXbxk_bG4_iK', "descripcion": "CANADÁ '16-18", "stock": "4", "precio" :"9500", "categoria": "norteamerica"},

{ "id": "30",  "nombre": "ESCOCIA", "img": 'https://drive.google.com/uc?id=1u58pSi8m5XhlPr5WdgGas0O3x_tFoL47', "descripcion": "ESCOCIA '88-91", "stock": "2", "precio" :"13000", "categoria": "europa"},
,

]


export const getFetch = (id) => {
return new Promise((resolve) => {
  setTimeout(()=> {
     const query = id ? productos.find(producto => producto.id === id) : productos; resolve (query)
  }, 1500)

})
} 
