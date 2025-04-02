import { NextResponse } from 'next/server';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/repos/skaleway/notpadd/contents/notpadd_credentials/do_not_edit_this_file.md';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;  


export  async function POST(req:Request) {
  
    const { title, body } = await req.json();

    // const title = "Hi, from localhost"
    // const body = "Testing push to notpadd"

  if (!title || !body) {
    return new NextResponse("Title and body are required", { status: 400 });
  }

  try {
    
    const filePath = 'notpadd_credentials/do_not_edit_this_file.md';

    const content = Buffer.from(body).toString('base64');

    const { data: currentFileData } = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    console.log("data here:", currentFileData)

    const commitMessage = `Automated commit: ${title || 'New Content Published'}`;
    const commitPayload = {
      message: commitMessage,
      content,
      sha: currentFileData.sha,  
      branch: 'main',
    };

    const res = await axios.put(GITHUB_API_URL, commitPayload, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    // console.log("res here:", res)

    return new NextResponse("File updated and pushed to GitHub successfully", { status: 200 });
  } catch (error:any) {
    console.error('Error committing and pushing to GitHub:',error);
    return new NextResponse("internal server error", { status: 500 });
}

}
