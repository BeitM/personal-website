import type { Metadata } from "next";
import { LearningEntry } from "@/components/LearningEntry";
import { learning } from "@/data/learning";
import { PageTOC } from "@/components/PageTOC";
export const metadata: Metadata = { title: "Learning Log" };
export default function LearningPage(){ return <><section className="page-hero"><div className="container"><p className="eyebrow">Learning in public</p><h1>Notes, questions, and ideas in progress.</h1><p className="lead">A lightweight record of topics I am studying—not polished conclusions, but evidence of continued curiosity and technical growth.</p></div></section><section className="section"><div className="container page-with-toc"><div className="learning-list">{learning.map((item,index)=><div id={`entry-${index+1}`} className="anchor-section" key={item.title}><LearningEntry item={item}/></div>)}</div><PageTOC items={learning.map((item,index)=>({label:item.title,href:`#entry-${index+1}`}))}/></div></section></>; }
