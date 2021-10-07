import keys from '../project_files/keys.json';

export async function getGuardianContent() {
  const url = `https://content.guardianapis.com/search?api-key=${keys.G_API_KEY}`;
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
