var debug = true;
var escenaActual;
var info = {
    "escenas": [
        {
            "id": 1,
            "imagen": null,
            "inicio": 0,
            "fin": 49.5,
            "pregunta": {
                "pregunta": "¿Que dia es hoy?",
                "respuestas": [
                    {
                        "enunciado": "Dia de trabajo",
                        "id_escena": 2
                    },
                    {
                        "enunciado": "Dia festivo",
                        "id_escena": 18
                    }
                ]
            }
        },
        {
            "id": 2,
            "imagen": "Imagenes/escena2.png",
            "inicio": 51.20,
            "fin": 58.00,
            "pregunta": {
                "pregunta": "¿Quieres ir a trabajar, o tomar un café antes?",
                "respuestas": [
                    {
                        "enunciado": "Ir a trabajar",
                        "id_escena": 3
                    },
                    {
                        "enunciado": "tomar café",
                        "id_escena": 12
                    }
                ]
            }
        },
        {
            "id": 3,
            "imagen": "Imagenes/escena3.png",
            "inicio": 60.22,
            "fin": 69.8,
            "pregunta": {
                "pregunta": "¿Quieres dimitir, o trabajar seriamente?",
                "respuestas": [
                    {
                        "enunciado": "Trabajar seriamente",
                        "id_escena": 4
                    },
                    {
                        "enunciado": "Dimitir",
                        "id_escena": 9
                    }
                ]
            }
        },
        {
            "id": 4,
            "imagen": "Imagenes/escena4.png",
            "inicio": 72.19,
            "fin": 84.6,
            "pregunta": {
                "pregunta": "¿Como quieres volver a casa?",
                "respuestas": [
                    {
                        "enunciado": "Ir a casa en coche",
                        "id_escena": 5
                    },
                    {
                        "enunciado": "Ir a casa andando",
                        "id_escena": 6
                    }
                ]
            }
        },
        {
            "id": 5,
            "imagen": "Imagenes/escena5.png",
            "inicio": 86.31,
            "fin": 98.82,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 6,
            "imagen": "Imagenes/escena6.png",
            "inicio": 100.29,
            "fin": 108.0,
            "pregunta": {
                "pregunta": "¿Quieres enfrentarte al NiGgAh ReSHuLon?",
                "respuestas": [
                    {
                        "enunciado": "Si",
                        "id_escena": 7
                    },
                    {
                        "enunciado": "No",
                        "id_escena": 8
                    }
                ]
            }
        },
        {
            "id": 7,
            "imagen": "Imagenes/escena7.png",
            "inicio": 110.8,
            "fin": 117.3,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 8,
            "imagen": "Imagenes/escena8.png",
            "inicio": 118.6,
            "fin": 136.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 9,
            "imagen": "Imagenes/escena9.png",
            "inicio": 137.5,
            "fin": 155.6,
            "pregunta": {
                "pregunta": "¿Quieres ir a ahogar las penas, o enfrentarte al jefe?",
                "respuestas": [
                    {
                        "enunciado": "Ahogar las penas",
                        "id_escena": 10
                    },
                    {
                        "enunciado": "Enfrentarse al jefe",
                        "id_escena": 11
                    }
                ]
            }
        },
        {
            "id": 10,
            "imagen": "Imagenes/escena10.png",
            "inicio": 158.4,
            "fin": 180.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 11,
            "imagen": "Imagenes/escena11.png",
            "inicio": 181.7,
            "fin": 191.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 12,
            "imagen": "Imagenes/escena12.png",
            "inicio": 192.3,
            "fin": 203.5,
            "pregunta": {
                "pregunta": "¿Quieres ir al trabajo a atender al cliente, o quedarte con la novia?",
                "respuestas": [
                    {
                        "enunciado": "Ir al trabajo",
                        "id_escena": 13
                    },
                    {
                        "enunciado": "Quedarse con la novia",
                        "id_escena": 14
                    }
                ]
            }
        },
        {
            "id": 13,
            "imagen": "Imagenes/escena13.png",
            "inicio": 205.8,
            "fin": 240.3,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 14,
            "imagen": "Imagenes/escena14.png",
            "inicio": 241.8,
            "fin": 250.5,
            "pregunta": {
                "pregunta": "¿Quieres un pinchito en casa o cena romántica con la novia?",
                "respuestas": [
                    {
                        "enunciado": "Pinchito en casa",
                        "id_escena": 15
                    },
                    {
                        "enunciado": "Cena romántica",
                        "id_escena": 16
                    }
                ]
            }
        },
        {
            "id": 15,
            "imagen": "Imagenes/escena15.png",
            "inicio": 252.8,
            "fin": 270.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 18,
            "imagen": "Imagenes/escena18.png",
            "inicio": 272.0,
            "fin": 280.5,
            "pregunta": {
                "pregunta": "¿Quieres quedar con ÉL o con ELLA?",
                "respuestas": [
                    {
                        "enunciado": "Quedar con ÉL",
                        "id_escena": 17
                    },
                    {
                        "enunciado": "Quedar con ELLA",
                        "id_escena": 19
                    }
                ]
            }
        },
        {
            "id": 17,
            "imagen": "Imagenes/escena17.png",
            "inicio": 311.0,
            "fin": 324.8,
            "pregunta": {
                "pregunta": "¿Quieres ir a la playa, o a jugar a basket?",
                "respuestas": [
                    {
                        "enunciado": "Ir a la playa",
                        "id_escena": 20
                    },
                    {
                        "enunciado": "Ir a jugar basket",
                        "id_escena": 21
                    }
                ]
            }
        },
        {
            "id": 16,
            "imagen": "Imagenes/escena16.png",
            "inicio": 294.5,
            "fin": 309.6,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 19,
            "imagen": "Imagenes/escena19.png",
            "inicio":282.9,
            "fin": 291.3,
            "pregunta": {
                "pregunta": "¿Quieres un pinchito en casa o cena romántica con la novia?",
                "respuestas": [
                    {
                        "enunciado": "Pinchito en casa",
                        "id_escena": 15
                    },
                    {
                        "enunciado": "Cena romántica",
                        "id_escena": 16
                    }
                ]
            }
        },
        {
            "id": 20,
            "imagen": "Imagenes/escena20.png",
            "inicio": 327.1,
            "fin": 348.8,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 21,
            "imagen": "Imagenes/escena21.png",
            "inicio": 350.2,
            "fin": 368.3,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 22,
            "imagen": "Imagenes/escena22.png",
            "inicio": 368.9,
            "fin": 391.6,
           "pregunta": {
                "pregunta": null,
                "respuestas": null
            }
        }
    ]
}