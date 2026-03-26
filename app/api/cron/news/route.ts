import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import OpenAI from 'openai';

const parser = new Parser();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const feed = await parser.parseURL('https://vnexpress.net/rss/tin-moi-nhat.rss');
    const topNews = feed.items.slice(0, 3).map(item => ({
      title: item.title,
      description: item.contentSnippet,
      link: item.link
    }));

    const rawNewsText = topNews.map((news, index) => 
      `Tin ${index + 1}: ${news.title}\nChi tiết: ${news.description}`
    ).join('\n\n');

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Bạn là một MC Podcast chuyển tổng hợp tin tức cực kỳ năng động và cuốn hút. Hãy viết một đoạn thoại ngắn gọn khoảng 200 chữ để đọc bản tin. Bắt đầu bằng 'Chào các bạn, đây là bản tin nhanh...', văn phong tự nhiên, tóm tắt ý chính nhất."
        },
        {
          role: "user",
          content: `Đây là các tin nóng:\n${rawNewsText}`
        }
      ],
      temperature: 0.7,
    });

    return NextResponse.json({ 
      success: true, 
      script: completion.choices[0].message.content
    });
  } catch (error) {
    return NextResponse.json({ error: 'Lỗi khi chạy Cron Job' }, { status: 500 });
  }
}
