import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface Sag {
  id: number;
  statusid: number;
  title: string;
  titleCard: string;
  resume: string;
  createdAt: string;
  updatedAt: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/sags');
  const sags: Sag[] = await res.json();

  return {
    props: {
      sags,
    },
  };
};

export default function Home({ sags }: { sags: Sag[] }) {
  const grouped: Record<number, Sag[]> = sags.reduce((acc: Record<number, Sag[]>, sag) => {
    acc[sag.statusid] = acc[sag.statusid] || [];
    acc[sag.statusid].push(sag);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <h1 className="text-4xl font-bold text-orange-600">Aditya's Kanban Board</h1>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Scrollable Swimlanes */}
        <div className="flex gap-6 p-6 overflow-x-auto">
          {Object.entries(grouped).map(([statusid, items]) => (
            <div
              key={statusid}
              className="flex-shrink-0 w-64 bg-orange-500 text-white p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4">Status {statusid}</h2>
              <div className="flex flex-col gap-4">
                {items.map((sag) => (
                  <MinimizableCard key={sag.id} sag={sag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MinimizableCard({ sag }: { sag: Sag }) {
  console.log(sag);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md">
      {/* Always Visible Title Card */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{sag.titelkort}</h3>
        <button
          className="text-gray-500"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {/* Expandable Details */}
      {isExpanded && (
        <div className="mt-4 space-y-2">
          <div>
            <h4 className="font-semibold">Title</h4>
            <p>{sag.titel}</p>
          </div>
          <div>
            <h4 className="font-semibold">Resume</h4>
            <p>{sag.resume}</p>
          </div>
          <div>
            <h4 className="font-semibold">Created At</h4>
            <p>{new Date(sag.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <h4 className="font-semibold">Updated At</h4>
            <p>{new Date(sag.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
