function cachingDecoratorNew(func) {
  let cache = [];   
  const maxCacheLength = 5;  
  return (...args) => {     
    const hash = args.join(",");    
    const objectCache = cache.find(object => object.hash === hash); 
    if(objectCache) {
      console.log("Из кэша: ", objectCache.value);
      return "Из кэша: " + objectCache.value;
    }

    const result = func(...args);
    cache.push({hash, value: result});
    if (cache.length > maxCacheLength) {
      cache.shift();
    }
    console.log("Вычисляем: ", result);
    return "Вычисляем: " + result;
  }
}


function debounceDecoratorNew(func, delay) {
  let timerId= null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper (...args) {
    wrapper.allCount++;

    if (timerId === null) {
      func(...args);
      wrapper.count++;
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay)
  }
  return wrapper;
}