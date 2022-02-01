const dbJSON = 
    {
    "usuarios": [
        {
            "userName": "marcos",
            "password": "MA60113",
            "Token": "22.6666742446834",
            "Date": "31/03/2021 15:41:10",
            "Profile": [
                {
                    "PCode": "2",
                    "PDesc": "pdcrmsupervisor",
                    "Functions": [
                        {
                            "FCode": 1,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 1,
                            "FDesc": "Menú de Administracion",
                            "FIcono": "settings",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 2,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 2,
                            "FDesc": "Menú de Supervision",
                            "FIcono": "supervisor_account",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 6,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 6,
                            "FDesc": "Menú de Operación",
                            "FIcono": "audiotrack",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 9,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 1,
                            "FDesc": "Gestión de Campañas",
                            "FRuta": "/app/campaña",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 35,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 3,
                            "FDesc": "Configuración de Segmentos",
                            "FRuta": "/app/segmentos",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 15,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 7,
                            "FDesc": "Gestión de Usuarios y Gestores",
                            "FRuta": "/app/gestores",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 17,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 2,
                            "FDesc": "Re-asignación de Agendas",
                            "FRuta": "/app/reasignar",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 19,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 4,
                            "FDesc": "Informes de Actividad de Gestores",
                            "FRuta": "/app/supervision",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 26,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 6,
                            "FDesc": "Consulta de Agendas Pendientes",
                            "FRuta": "/app/agendas",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 27,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 7,
                            "FDesc": "Consulta de Gestiones Realizadas",
                            "FRuta": "/app/gestiones",
                            "FIcono": "card_travel",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 22,
                            "FParentCode": 6,
                            "FLevel": 2,
                            "FOrder": 1,
                            "FDesc": "Integración de datos para agendas",
                            "FRuta": "/app/integracion",
                            "FTipo": "web"
                        }
                    ]
                }
            ],
            "Operator": {
                "OpCode": 2,
                "OpDesc": "Collection and Service International",
                "OpNameShort": "CSI",
                "ServiceURL": "https://app.crmetric.com/srv-crmetric-web-desa/rest/",
                "Logo": {
                    "LName": "https://app.crmetric.com/srv-crmetric/src/upload/cdc_logo.jpg"
                },
                "Time_out": "05:05:00"
            },
            "User": {
                "UserCode": 29,
                "UserDoc_tip": 2,
                "UserDoc_num": "8-732-1113",
                "UserNames": "Marcos",
                "UserFirstLastName": "Matos",
                "UserEmail": "gestorcinco@crmetric.com",
                "UserPhone": "3665301",
                "Username": "marcos",
                "UserPhoto": {
                    "LName": "https://app.crmetric.com/srv-crmetric-desa/src/upload/yiniva_foto_web.jpg"
                }
            }
        },
        {
            "userName": "gcortez",
            "password": "gc67693",
            "id": 2,
            "Token": "20.1782804098912",
            "Date": "31/03/2021 16:57:50",
            "Profile": [
                {
                    "PCode": "8",
                    "PDesc": "pdcrmagentehumano",
                    "Functions": [
                        {
                            "FCode": 29,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 0,
                            "FDesc": "Menú Agente Cognitivo",
                            "FIcono": "settings_cell",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 1,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 1,
                            "FDesc": "Menú de Administracion",
                            "FIcono": "settings",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 2,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 2,
                            "FDesc": "Menú de Supervision",
                            "FIcono": "supervisor_account",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 33,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Configuración de HSM",
                            "FRuta": "/app/configHSM",
                            "FIcono": "settings_remote",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 31,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 6,
                            "FDesc": "Reporte de Pagos",
                            "FRuta": "/app/pagos",
                            "FIcono": "payment",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 32,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 7,
                            "FDesc": "Dashboard de Actividad DORA",
                            "FRuta": "/app/dashboard",
                            "FIcono": "dashboard",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 34,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Envío de HSM",
                            "FRuta": "/app/envioHSM",
                            "FIcono": "send",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 30,
                            "FParentCode": 29,
                            "FLevel": 2,
                            "FOrder": 1,
                            "FDesc": "Chat Room DORA",
                            "FRuta": "/app/chat",
                            "FIcono": "chat",
                            "FTipo": "web"
                        }
                    ]
                }
            ],
            "Operator": {
                "OpCode": 2,
                "OpDesc": "Collection and Service International",
                "OpNameShort": "CSI",
                "ServiceURL": "https://app.crmetric.com/srv-crmetric-web-desa/rest/",
                "Logo": {
                    "LName": "https://app.crmetric.com/srv-crmetric/src/upload/cdc_logo.jpg"
                },
                "Time_out": "05:05:00"
            },
            "User": {
                "UserCode": 50,
                "UserDoc_tip": 1,
                "UserDoc_num": "10203040",
                "UserNames": "Gabriela",
                "UserFirstLastName": "Cortez",
                "UserLastName": "Yagual",
                "UserEmail": "gabriela_cortez@unicomer.com",
                "UserPhone": "65656232",
                "Username": "gcortez",
                "UserPhoto": {
                    "LName": "https://app.crmetric.com/srv-crmetric-desa/src/upload/yiniva_foto_web.jpg"
                }
            }
        },
        {
            "userName": "vlopez",
            "password": "vl12583",
            "id": 3,
            "Token": "16.255228035152",
            "Date": "31/03/2021 17:00:22",
            "Profile": [
                {
                    "PCode": "8",
                    "PDesc": "pdcrmagentehumano",
                    "Functions": [
                        {
                            "FCode": 29,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 0,
                            "FDesc": "Menú Agente Cognitivo",
                            "FIcono": "settings_cell",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 1,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 1,
                            "FDesc": "Menú de Administracion",
                            "FIcono": "settings",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 2,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 2,
                            "FDesc": "Menú de Supervision",
                            "FIcono": "supervisor_account",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 33,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Configuración de HSM",
                            "FRuta": "/app/configHSM",
                            "FIcono": "settings_remote",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 31,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 6,
                            "FDesc": "Reporte de Pagos",
                            "FRuta": "/app/pagos",
                            "FIcono": "payment",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 32,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 7,
                            "FDesc": "Dashboard de Actividad DORA",
                            "FRuta": "/app/dashboard",
                            "FIcono": "dashboard",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 34,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Envío de HSM",
                            "FRuta": "/app/envioHSM",
                            "FIcono": "send",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 30,
                            "FParentCode": 29,
                            "FLevel": 2,
                            "FOrder": 1,
                            "FDesc": "Chat Room DORA",
                            "FRuta": "/app/chat",
                            "FIcono": "chat",
                            "FTipo": "web"
                        }
                    ]
                }
            ],
            "Operator": {
                "OpCode": 2,
                "OpDesc": "Collection and Service International",
                "OpNameShort": "CSI",
                "ServiceURL": "https://app.crmetric.com/srv-crmetric-web-desa/rest/",
                "Logo": {
                    "LName": "https://app.crmetric.com/srv-crmetric/src/upload/cdc_logo.jpg"
                },
                "Time_out": "05:05:00"
            },
            "User": {
                "UserCode": 51,
                "UserDoc_tip": 1,
                "UserDoc_num": "0921644795",
                "UserNames": "Víctor Manuel",
                "UserFirstLastName": "López",
                "UserLastName": "Morán",
                "UserEmail": "mishell_oviedo@unicomer.com\n\n",
                "UserPhone": "998786026",
                "Username": "vlopez",
                "UserPhoto": {
                    "LName": "https://app.crmetric.com/srv-crmetric-desa/src/upload/yiniva_foto_web.jpg"
                }
            }
        },
        {
            "userName": "stacle",
            "password": "st65821",
            "id": 4,
            "Token": "12.166394398082",
            "Date": "31/03/2021 17:02:43",
            "Profile": [
                {
                    "PCode": "8",
                    "PDesc": "pdcrmagentehumano",
                    "Functions": [
                        {
                            "FCode": 29,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 0,
                            "FDesc": "Menú Agente Cognitivo",
                            "FIcono": "settings_cell",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 1,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 1,
                            "FDesc": "Menú de Administracion",
                            "FIcono": "settings",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 2,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 2,
                            "FDesc": "Menú de Supervision",
                            "FIcono": "supervisor_account",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 33,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Configuración de HSM",
                            "FRuta": "/app/configHSM",
                            "FIcono": "settings_remote",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 31,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 6,
                            "FDesc": "Reporte de Pagos",
                            "FRuta": "/app/pagos",
                            "FIcono": "payment",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 32,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 7,
                            "FDesc": "Dashboard de Actividad DORA",
                            "FRuta": "/app/dashboard",
                            "FIcono": "dashboard",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 34,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Envío de HSM",
                            "FRuta": "/app/envioHSM",
                            "FIcono": "send",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 30,
                            "FParentCode": 29,
                            "FLevel": 2,
                            "FOrder": 1,
                            "FDesc": "Chat Room DORA",
                            "FRuta": "/app/chat",
                            "FIcono": "chat",
                            "FTipo": "web"
                        }
                    ]
                }
            ],
            "Operator": {
                "OpCode": 2,
                "OpDesc": "Collection and Service International",
                "OpNameShort": "CSI",
                "ServiceURL": "https://app.crmetric.com/srv-crmetric-web-desa/rest/",
                "Logo": {
                    "LName": "https://app.crmetric.com/srv-crmetric/src/upload/cdc_logo.jpg"
                },
                "Time_out": "05:05:00"
            },
            "User": {
                "UserCode": 53,
                "UserDoc_tip": 2,
                "UserDoc_num": "0991569383",
                "UserNames": "Shesenya",
                "UserFirstLastName": "Tacle",
                "UserLastName": "Delgado",
                "UserEmail": "shesenya_tacle@unicomer.com",
                "UserPhone": "987654321",
                "Username": "stacle",
                "UserPhoto": {
                    "LName": "https://app.crmetric.com/srv-crmetric-desa/src/upload/yiniva_foto_web.jpg"
                }
            }
        },
        {
            "userName": "clay",
            "password": "cl558951",
            "id": 5,
            "Token": "18.1547046802007",
            "Date": "31/03/2021 17:04:20",
            "Profile": [
                {
                    "PCode": "8",
                    "PDesc": "pdcrmagentehumano",
                    "Functions": [
                        {
                            "FCode": 29,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 0,
                            "FDesc": "Menú Agente Cognitivo",
                            "FIcono": "settings_cell",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 1,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 1,
                            "FDesc": "Menú de Administracion",
                            "FIcono": "settings",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 2,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 2,
                            "FDesc": "Menú de Supervision",
                            "FIcono": "supervisor_account",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 33,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Configuración de HSM",
                            "FRuta": "/app/configHSM",
                            "FIcono": "settings_remote",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 31,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 6,
                            "FDesc": "Reporte de Pagos",
                            "FRuta": "/app/pagos",
                            "FIcono": "payment",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 32,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 7,
                            "FDesc": "Dashboard de Actividad DORA",
                            "FRuta": "/app/dashboard",
                            "FIcono": "dashboard",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 34,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Envío de HSM",
                            "FRuta": "/app/envioHSM",
                            "FIcono": "send",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 30,
                            "FParentCode": 29,
                            "FLevel": 2,
                            "FOrder": 1,
                            "FDesc": "Chat Room DORA",
                            "FRuta": "/app/chat",
                            "FIcono": "chat",
                            "FTipo": "web"
                        }
                    ]
                }
            ],
            "Operator": {
                "OpCode": 2,
                "OpDesc": "Collection and Service International",
                "OpNameShort": "CSI",
                "ServiceURL": "https://app.crmetric.com/srv-crmetric-web-desa/rest/",
                "Logo": {
                    "LName": "https://app.crmetric.com/srv-crmetric/src/upload/cdc_logo.jpg"
                },
                "Time_out": "05:05:00"
            },
            "User": {
                "UserCode": 54,
                "UserDoc_tip": 2,
                "UserDoc_num": "0988891356",
                "UserNames": "Christian",
                "UserFirstLastName": "Lay",
                "UserLastName": "Cabal",
                "UserEmail": "christian.lay@unicomer.com",
                "UserPhone": "987654321",
                "Username": "clay",
                "UserPhoto": {
                    "LName": "https://app.crmetric.com/srv-crmetric-desa/src/upload/yiniva_foto_web.jpg"
                }
            }
        },
        {
            "userName": "egallegos",
            "password": "eg75319",
            "id": 6,
            "Token": "15.9326261351816",
            "Date": "31/03/2021 17:05:40",
            "Profile": [
                {
                    "PCode": "8",
                    "PDesc": "pdcrmagentehumano",
                    "Functions": [
                        {
                            "FCode": 29,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 0,
                            "FDesc": "Menú Agente Cognitivo",
                            "FIcono": "settings_cell",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 1,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 1,
                            "FDesc": "Menú de Administracion",
                            "FIcono": "settings",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 2,
                            "FParentCode": 0,
                            "FLevel": 1,
                            "FOrder": 2,
                            "FDesc": "Menú de Supervision",
                            "FIcono": "supervisor_account",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 33,
                            "FParentCode": 1,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Configuración de HSM",
                            "FRuta": "/app/configHSM",
                            "FIcono": "settings_remote",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 31,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 6,
                            "FDesc": "Reporte de Pagos",
                            "FRuta": "/app/pagos",
                            "FIcono": "payment",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 32,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 7,
                            "FDesc": "Dashboard de Actividad DORA",
                            "FRuta": "/app/dashboard",
                            "FIcono": "dashboard",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 34,
                            "FParentCode": 2,
                            "FLevel": 2,
                            "FOrder": 8,
                            "FDesc": "Envío de HSM",
                            "FRuta": "/app/envioHSM",
                            "FIcono": "send",
                            "FTipo": "web"
                        },
                        {
                            "FCode": 30,
                            "FParentCode": 29,
                            "FLevel": 2,
                            "FOrder": 1,
                            "FDesc": "Chat Room DORA",
                            "FRuta": "/app/chat",
                            "FIcono": "chat",
                            "FTipo": "web"
                        }
                    ]
                }
            ],
            "Operator": {
                "OpCode": 2,
                "OpDesc": "Collection and Service International",
                "OpNameShort": "CSI",
                "ServiceURL": "https://app.crmetric.com/srv-crmetric-web-desa/rest/",
                "Logo": {
                    "LName": "https://app.crmetric.com/srv-crmetric/src/upload/cdc_logo.jpg"
                },
                "Time_out": "05:05:00"
            },
            "User": {
                "UserCode": 56,
                "UserDoc_tip": 2,
                "UserDoc_num": "0992599726",
                "UserNames": "Evelin",
                "UserFirstLastName": "Gallegos",
                "UserLastName": "Dionisio",
                "UserEmail": "evalyn_gallegos@unicomer.com",
                "UserPhone": "987654321",
                "Username": "egallegos",
                "UserPhoto": {
                    "LName": "https://app.crmetric.com/srv-crmetric-desa/src/upload/yiniva_foto_web.jpg"
                }
            }
        },
        {
            "Session": {
                "User": "marcos",
                "Pass": "bfbae549cf99f2bda2693acef5c37eab992106c1827a3b974a77638d8c42aad689779e216383338f6370971b9d624ed8db9b29074e3e33470c04c1d0f84c33e9",
                "Client": "WEB",
                "Origin": "359307050787205",
                "Timestamp": 1617229561617
            },
            "id": 7
        },
        {
            "Session": {
                "User": "marcos",
                "Pass": "44823f10940a82551231c10fc5ba90a8874251b6a50489f7e6e6c614c17c4395e055bc025f28a281b137e026f35b66b98889f71a9f88b232006320543e1de188",
                "Client": "WEB",
                "Origin": "359307050787205",
                "Timestamp": 1617229624577
            },
            "id": 8
        }
    ]
}
userName = dbJSON.usuarios.

const login = (userName, password) => {

}
console.log(dbJSON.usuarios);
