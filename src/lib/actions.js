"use server";

export async function emailServer(formData) {
  formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });
  const data = await response.json();

  return data;
}
