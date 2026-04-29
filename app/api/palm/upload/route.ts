import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const image = body.image || body.image_data; // 增加容错

        if (!image) {
            console.error("PROXY_UPLOAD_FAIL: No image field in body", body);
            return NextResponse.json({ error: 'No image data provided in payload' }, { status: 400 });
        }

        // 这里使用您的生产后端
        const BACKEND_URL = 'https://ytdlp.vistaflyer.com/api/palm/upload';

        console.log("Forwarding to backend:", BACKEND_URL, "Payload size:", image.length);

        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data.error || 'Backend upload failed' }, { status: response.status });
        }

        return NextResponse.json(data);

    } catch (error: any) {
        console.error('CRITICAL PROXY ERROR:', error);
        return NextResponse.json({ error: `Internal Proxy Error: ${error.message}` }, { status: 500 });
    }
}
