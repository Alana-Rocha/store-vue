export const limitarCaracteres = (texto, limite = 25) => {
  if (texto.length > limite) {
    return texto.substring(0, limite) + "...";
  }
  return texto;
};
