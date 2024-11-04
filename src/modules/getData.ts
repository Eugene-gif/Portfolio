const getData = async function <T>(url: string) {
  try {
    const res = await fetch(url);
    const json = await res.json() as T;
    return json;
  } catch (err) {
    console.log(err);
  }
}

export default getData;