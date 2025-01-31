// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const category = url.searchParams.get('name'); // Extract 'name' from the query params

//   if (!category) {
//     return new Response(
//       JSON.stringify({ error: 'Category is required' }),
//       {
//         status: 400,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   }

//   try {
//     // Fetch the news from the correct endpoint with 'antara' as the source
//     const response = await fetch(
//       `https://api-berita-indonesia.vercel.app/antara/${category}`
//     );

//     const data = await response.json();

//     if (response.ok) {
//       return new Response(JSON.stringify(data.data), {
//         headers: { 'Content-Type': 'application/json' },
//       });
//     } else {
//       throw new Error('Failed to fetch news');
//     }
//   } catch (error: unknown) {
//     // Ensure error is cast to 'Error' type before handling
//     if (error instanceof Error) {
//       return new Response(
//         JSON.stringify({ error: error.message }),
//         {
//           status: 500,
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );
//     }

//     // Handle unknown errors
//     return new Response(
//       JSON.stringify({ error: 'An unknown error occurred' }),
//       {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   }
// }
