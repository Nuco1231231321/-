import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Analyze Proxy Received Payload:", body);

        // 既支持旧的 image (base64)，也支持新的 image_url (R2 link)
        const image_url = body.image_url || body.image;

        if (!image_url) {
            return NextResponse.json({ error: 'No image data or URL provided' }, { status: 400 });
        }

        // 转发到生产后端
        const BACKEND_URL = 'https://ytdlp.vistaflyer.com/api/palm/analyze';

        console.log("Forwarding analysis to backend...");

        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image_url }), // 统一发送 image_url 给 Python
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({ error: `Analysis backend error: ${errorText}` }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error: any) {
        console.error('Error in analyze proxy:', error);
        return NextResponse.json({ error: error.message || 'Internal Analysis Proxy Error' }, { status: 500 });
    }
}
