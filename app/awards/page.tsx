import type { Metadata } from "next";
import { AwardCard } from "@/components/AwardCard";
import { awards, awardCategories } from "@/data/awards";
import { PageTOC } from "@/components/PageTOC";
export const metadata: Metadata = { title: "Awards & Honors" };
const slug=(value:string)=>value.toLowerCase().replaceAll(" / ","-").replaceAll(" ","-");
export default function AwardsPage(){ return <><section className="page-hero"><div className="container"><p className="eyebrow">Recognition</p><h1>Awards &amp; honors.</h1><p className="lead">A concise record of selected recognition across robotics, STEM innovation, science, academics, programs, and activities. Placeholder entries are ready to replace with final details.</p></div></section><section className="section"><div className="container page-with-toc"><div className="content-stack">{awardCategories.map(category=><section className="anchor-section" key={category} id={slug(category)}><div className="subsection-title"><h2>{category}</h2></div><div className="grid-2">{awards.filter(award=>award.category===category).map(award=><AwardCard key={award.name} award={award}/>)}</div></section>)}</div><PageTOC items={awardCategories.map(category=>({label:category,href:`#${slug(category)}`}))}/></div></section></>; }
