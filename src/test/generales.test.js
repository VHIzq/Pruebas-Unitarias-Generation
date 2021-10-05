describe("Probando Jest", () => {
  test("Prueba de objetos iguales", () => {
    const datos1 = {
      nombre: "Victor Hugo",
      edad: 27
    };
    const datos2 = {
      nombre: "Victor Hugo",
      edad: 27
    };

    expect(datos1).toEqual(datos2);

  })

});

