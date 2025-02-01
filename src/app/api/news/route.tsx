import { NextResponse } from 'next/server';
import { fetchAntaraNews } from '../../utils/api';


export async function GET() {
  try {
    const { popularNews, recommendedNews } = await fetchAntaraNews();

    return NextResponse.json({
      popularNews,
      recommendedNews,
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
