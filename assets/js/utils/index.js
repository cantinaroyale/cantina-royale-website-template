
export const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  

const isMobile = () => {
    return  window.innerWidth <= 1000
}

const getRootPath = () =>  {
  return document.body.getAttribute('data-root')
}


  export {isMobile, getRootPath}