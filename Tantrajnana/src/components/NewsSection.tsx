import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Newspaper, ArrowUpRight, Loader2 } from "lucide-react";

interface NewsItem {
  date: string;
  category: string;
  headline: string;
  summary: string;
  link: string;
}

const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // YOUR SPECIFIC GOOGLE SHEET LINK
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/1xiZC3Ag1RCXwDpgTvsOq7VrsJq4HpbkUh_Oq-Ggaw3k/export?format=csv&gid=0";

  useEffect(() => {
    const fetchNews = () => {
      Papa.parse(SHEET_URL, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const rawData = results.data as NewsItem[];
          
          // Filter out rows missing headlines and sort by date
          const processedData = rawData
            .filter(item => item.headline && item.date)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

          setNews(processedData);
          setLoading(false);
        },
        error: (error) => {
          console.error("Sheet Fetch Error:", error);
          setLoading(false);
        }
      });
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
        <Loader2 className="animate-spin mb-4 text-blue-600" size={24} />
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Syncing Intelligence Feed...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <Newspaper className="text-blue-600" size={20} /> Latest News
        </h3>
        <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Live Updates</span>
        </span>
      </div>

      <div className="space-y-8 relative">
        {news.length > 0 ? (
          news.map((item, index) => (
            <div key={index} className="group relative text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] bg-blue-100/50 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                  {item.date}
                </span>
              </div>
              <h4 className="text-md font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                {item.headline}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                {item.summary}
              </p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[9px] font-black text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-all"
              >
                Read Source <ArrowUpRight size={12} className="text-blue-600" />
              </a>
              {index !== news.length - 1 && <div className="mt-8 border-b border-slate-200/60" />}
            </div>
          ))
        ) : (
          <p className="text-xs text-slate-400 italic">No news updates available at this moment.</p>
        )}
      </div>
    </div>
  );
};

export default NewsSection;