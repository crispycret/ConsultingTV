// pages/ssr.js

import { getList } from '@/apis/archive';

export async function getServerSideProps() {
    
    const data = await getList(); // Fetch data from an external API

    return {
        props: {
        data,
        },
    };
}



export default function SSRPage({ data }: any) {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <h4>There are {data.count} APIs in this list.</h4>
      <ul>
        {data.entries.map((item: any, i: number) => (
          <li key={i}>{item.API}</li>
        ))}
      </ul>
    </div>
  );
}
