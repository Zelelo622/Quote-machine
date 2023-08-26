const fetchQuote = () => {
  return new Promise((resolve, reject) => {
    const callbackName = `jsonpCallback_${Date.now()}`;

    window[callbackName] = function (data) {
      delete window[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

    const script = document.createElement("script");
    script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=${callbackName}`;
    script.async = true;

    document.body.appendChild(script);
  });
};

export default fetchQuote;