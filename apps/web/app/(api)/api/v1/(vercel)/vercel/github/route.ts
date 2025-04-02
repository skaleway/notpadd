import { NextResponse } from 'next/server';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/repos/skaleway/notpadd'; 
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;  


export default async function POST(req:Request) {
  
    const { title, body } = await req.json();

  if (!title || !body) {
    return new NextResponse("Title and body are required", { status: 400 });
  }

  try {
    
    const filePath = 'credentials/do_not_touch.md';

    const content = Buffer.from(body).toString('base64');

    const { data: currentFileData } = await axios.get(`${GITHUB_API_URL}/${filePath}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const commitMessage = `Automated commit: ${title || 'New Content Published'}`;
    const commitPayload = {
      message: commitMessage,
      content,
      sha: currentFileData.sha,  
      branch: 'main',
    };

    await axios.put(`${GITHUB_API_URL}/${filePath}`, commitPayload, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    return new NextResponse("File updated and pushed to GitHub successfully", { status: 200 });
  } catch (error:any) {
    console.error('Error committing and pushing to GitHub:', error.message);
    return new NextResponse("Internal server error", { status: 500 });
}

}
