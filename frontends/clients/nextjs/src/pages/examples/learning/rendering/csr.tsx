// pages/csr.js



import { useState, useEffect } from 'react';
import { getList } from '@/apis/archive';


export default function CSRPage() {
    const [data, setData] = useState<any>(null);

    // Fetch data from an external API on the client-side
    const loadData = async () => {
        setData(await getList())
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
    <div>
        <h1>Client-Side Rendering (CSR)</h1>
        <ul>
        {data && data.entries.map((item: any, i: number) => (
            <li key={i}>{item.API}</li>
        ))}
        </ul>
    </div>
);
}
