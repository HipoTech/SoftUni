export default (cookieName) => {
  if (document.cookie) {
    const allCookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, cookie) => {
        acc[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(cookie[1].trim());
        return acc;
      }, {});
    return JSON.parse(allCookies[cookieName])
  } else {
    return null
  }
}