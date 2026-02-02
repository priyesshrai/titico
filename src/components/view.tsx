import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import { PageHeading, SubHeading } from "./ui/headings";
import Image from "next/image";

export default function View() {
    return (
        <Section className="bg-[#fafafa]">
            <Wrapper>
                <div className="w-full flex flex-col gap-4 items-center text-center mb-14">
                    <PageHeading>
                        Fabric is not made. It is inherited.
                    </PageHeading>
                    <SubHeading className="max-w-2xl">
                        For generations, our fabrics have been shaped by hands that learned
                        from those before them. Every weave carries time, patience, and a way
                        of working that refuses to hurry.
                    </SubHeading>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                    <div className="relative">
                        <Image
                            src="/images/banner/old.png"
                            alt="Traditional textile weaving"
                            width={1080}
                            height={1080}
                            className="w-full h-[28rem] object-cover rounded-2xl shadow-lg"
                        />
                        <span className="absolute -bottom-4 left-6 bg-white px-4 py-1 text-sm font-pop tracking-wide text-sub rounded-full shadow">
                            Then
                        </span>
                    </div>

                    <div className="relative flex flex-col items-center gap-12 px-4">
                        <div className="absolute top-0 bottom-0 w-px bg-dashed border-l border-zinc-300" />

                        <div className="relative bg-white rounded-xl p-6 shadow-md max-w-sm text-center">
                            <p className="font-pop text-xl leading-snug text-sub">
                                Born in an age where craft was a way of life,
                                our looms carried stories, not signatures.
                            </p>
                        </div>

                        <div className="relative bg-white rounded-xl p-6 shadow-md max-w-sm text-center">
                            <p className="font-pop text-xl leading-snug text-sub">
                                The same hands, the same discipline,
                                creating fabrics for the present without
                                leaving the past behind.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src="/images/banner/now.png"
                            alt="Modern textile production"
                            width={1080}
                            height={1080}
                            className="w-full h-[28rem] object-cover rounded-2xl shadow-lg"
                        />
                        <span className="absolute -bottom-4 right-6 bg-white px-4 py-1 text-sm font-pop tracking-wide text-sub rounded-full shadow">
                            Now
                        </span>
                    </div>
                </div>
            </Wrapper>
        </Section>
    );
}
