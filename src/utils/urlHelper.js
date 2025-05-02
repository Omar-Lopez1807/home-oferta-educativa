export const createFriendlyUrl = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Elimina acentos
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  };
  
  export const findOriginalTitle = (items, urlTitle) => {
    return items.find(item => 
      createFriendlyUrl(item.title) === urlTitle
    )?.title;
  };