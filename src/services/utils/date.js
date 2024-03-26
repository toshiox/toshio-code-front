export function FormatDate(dataString) {
    const data = new Date(dataString);
  
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
  
    const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
  
    return dataFormatada;
}

export function SortByKeyDesc(list, key) {
    return list.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA > valueB) {
        return -1;
      } else if (valueA < valueB) {
        return 1;
      }
      return 0;
    });
  }

export const DateFunctions = {
    FormatDate,
    SortByKeyDesc
}